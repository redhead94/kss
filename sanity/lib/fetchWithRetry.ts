// lib/fetchWithRetry.ts
export async function fetchWithRetry<T>(
  fn: () => Promise<T>,
  { retries = 2, timeoutMs = 8000 } = {}
): Promise<T> {
  let lastErr: unknown;

  for (let i = 0; i <= retries; i++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);

    try {
      // @ts-ignore pass signal to next-sanity (it forwards to fetch)
      const res = await fn.call(null, { signal: ctrl.signal });
      clearTimeout(t);
      return res;
    } catch (err: any) {
      clearTimeout(t);
      lastErr = err;
      // retry only on transient network errors/timeouts
      const isTransient =
        err?.name === "AbortError" ||
        err?.code === "ECONNRESET" ||
        err?.message?.includes("fetch failed");
      if (!isTransient || i === retries) throw err;
      await new Promise(r => setTimeout(r, 300 * (i + 1)));
    }
  }

  throw lastErr;
}
