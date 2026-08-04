/**
 * Remote path normalization and FTP command-argument safety helpers.
 *
 * The functions in this module avoid platform-specific local path behavior and reject
 * CR/LF and NUL characters before values can be interpolated into FTP commands or
 * handed to filesystem APIs.
 *
 * @module utils/path
 */
import { ConfigurationError } from "../errors/ZeroTransferError";

const UNSAFE_FTP_ARGUMENT_PATTERN = /[\r\n\0]/;
const SLASH_CHAR_CODE = 0x2f;

/**
 * Validates that an FTP command argument cannot inject additional command lines.
 *
 * NUL bytes are rejected alongside CR/LF: C-string-based servers and filesystem
 * APIs truncate at the first NUL, which lets a crafted path smuggle a different
 * effective target past validation.
 *
 * @param value - Argument value to validate.
 * @param label - Human-readable argument label used in error messages.
 * @returns The original value when it is safe.
 * @throws {@link ConfigurationError} When the value contains CR, LF, or NUL characters.
 */
export function assertSafeFtpArgument(value: string, label = "path"): string {
  if (UNSAFE_FTP_ARGUMENT_PATTERN.test(value)) {
    throw new ConfigurationError({
      message: `Unsafe FTP ${label}: CR, LF, and NUL characters are not allowed`,
      retryable: false,
      details: {
        label,
      },
    });
  }

  return value;
}

/**
 * Removes any trailing `/` characters from a value.
 *
 * @remarks
 * This exists instead of `replace(/\/+$/, "")` because that regex has no start
 * anchor: the engine retries the match from every offset, and each retry walks
 * the whole slash run, so a value ending in many slashes costs quadratic time
 * (polynomial ReDoS). Scanning backwards from the end is linear.
 *
 * @param value - Value whose trailing separators should be dropped.
 * @returns The value without trailing `/` characters, or `""` when it is all separators.
 *
 * @example
 * ```ts
 * stripTrailingSlashes("https://example.com/base///"); // "https://example.com/base"
 * stripTrailingSlashes("///"); // ""
 * ```
 */
export function stripTrailingSlashes(value: string): string {
  let end = value.length;

  while (end > 0 && value.charCodeAt(end - 1) === SLASH_CHAR_CODE) {
    end -= 1;
  }

  return end === value.length ? value : value.slice(0, end);
}

/**
 * Normalizes a remote path using POSIX-style separators without escaping absolute roots.
 *
 * @param input - Remote path that may contain duplicate separators or dot segments.
 * @returns A normalized remote path, `/` for absolute root, or `.` for an empty relative path.
 * @throws {@link ConfigurationError} When the input contains unsafe CR, LF, or NUL characters.
 */
export function normalizeRemotePath(input: string): string {
  assertSafeFtpArgument(input);

  if (input.length === 0) {
    return ".";
  }

  const isAbsolute = input.startsWith("/");
  const segments: string[] = [];

  for (const segment of input.split(/[\\/]+/)) {
    if (segment.length === 0 || segment === ".") {
      continue;
    }

    if (segment === "..") {
      if (segments.length > 0 && segments[segments.length - 1] !== "..") {
        segments.pop();
      } else if (!isAbsolute) {
        segments.push(segment);
      }
      continue;
    }

    segments.push(segment);
  }

  const normalized = segments.join("/");

  if (isAbsolute) {
    return normalized.length > 0 ? `/${normalized}` : "/";
  }

  return normalized.length > 0 ? normalized : ".";
}

/**
 * Joins remote path segments and normalizes the result.
 *
 * @param segments - Remote path segments to concatenate.
 * @returns A normalized remote path.
 * @throws {@link ConfigurationError} When any joined segment contains unsafe characters.
 */
export function joinRemotePath(...segments: string[]): string {
  if (segments.length === 0) {
    return ".";
  }

  return normalizeRemotePath(segments.join("/"));
}

/**
 * Extracts the final name segment from a normalized remote path.
 *
 * @param input - Remote path to inspect.
 * @returns The final path segment, or `/` when the input is the absolute root.
 * @throws {@link ConfigurationError} When the input contains unsafe characters.
 */
export function basenameRemotePath(input: string): string {
  const normalized = normalizeRemotePath(input);
  const parts = normalized.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? normalized;
}
