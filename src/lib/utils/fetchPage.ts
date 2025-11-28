export async function fetchPage(url: string) {
  const startTime = Date.now();

  try {
    // Add timeout and better headers
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
      signal: controller.signal,
      // Follow redirects
      redirect: 'follow',
      // Important for avoiding CORS issues in production
      cache: 'no-store',
    });

    clearTimeout(timeoutId);

    const responseTime = Date.now() - startTime;

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();

    // Check if we actually got HTML content
    if (!html || html.length < 100) {
      throw new Error('Received empty or invalid response');
    }

    return {
      html,
      headers: response.headers,
      responseTime,
      url: response.url, // Final URL after redirects
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out after 30 seconds. The website may be slow or unavailable.');
      }
      throw new Error(`Failed to fetch page: ${error.message}`);
    }
    throw new Error('Failed to fetch page: Unknown error');
  }
}

export function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}
