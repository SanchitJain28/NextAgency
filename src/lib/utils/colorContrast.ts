/**
 * Color contrast utilities for WCAG compliance checking
 */

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Convert RGB string to RGB object
 */
function rgbStringToRgb(rgb: string): { r: number; g: number; b: number } | null {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;

  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
  };
}

/**
 * Parse color string (hex or rgb) to RGB object
 */
export function parseColor(color: string): { r: number; g: number; b: number } | null {
  if (!color) return null;

  const trimmed = color.trim().toLowerCase();

  // Handle hex colors
  if (trimmed.startsWith('#')) {
    return hexToRgb(trimmed);
  }

  // Handle rgb colors
  if (trimmed.startsWith('rgb')) {
    return rgbStringToRgb(trimmed);
  }

  // Handle named colors (basic set)
  const namedColors: Record<string, string> = {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
    yellow: '#ffff00',
    gray: '#808080',
    grey: '#808080',
  };

  if (namedColors[trimmed]) {
    return hexToRgb(namedColors[trimmed]);
  }

  return null;
}

/**
 * Calculate relative luminance
 */
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number }
): number {
  const lum1 = getLuminance(color1.r, color1.g, color1.b);
  const lum2 = getLuminance(color2.r, color2.g, color2.b);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG AA standard
 */
export function meetsWCAGAA(ratio: number, isLargeText: boolean = false): boolean {
  return isLargeText ? ratio >= 3.0 : ratio >= 4.5;
}

/**
 * Check if contrast ratio meets WCAG AAA standard
 */
export function meetsWCAGAAA(ratio: number, isLargeText: boolean = false): boolean {
  return isLargeText ? ratio >= 4.5 : ratio >= 7.0;
}

/**
 * Get contrast level (AAA, AA, or Fail)
 */
export function getContrastLevel(
  ratio: number,
  isLargeText: boolean = false
): 'AAA' | 'AA' | 'Fail' {
  if (meetsWCAGAAA(ratio, isLargeText)) return 'AAA';
  if (meetsWCAGAA(ratio, isLargeText)) return 'AA';
  return 'Fail';
}

/**
 * Extract colors from style attribute
 */
export function extractColorsFromStyle(style: string): {
  color?: string;
  backgroundColor?: string;
} {
  const result: { color?: string; backgroundColor?: string } = {};

  // Match color property
  const colorMatch = style.match(/(?:^|;)\s*color\s*:\s*([^;]+)/i);
  if (colorMatch) {
    result.color = colorMatch[1].trim();
  }

  // Match background-color property
  const bgColorMatch = style.match(/(?:^|;)\s*background-color\s*:\s*([^;]+)/i);
  if (bgColorMatch) {
    result.backgroundColor = bgColorMatch[1].trim();
  }

  return result;
}

/**
 * Check if text size is considered "large" by WCAG standards
 * Large text is 18pt (24px) or 14pt (18.66px) bold
 */
export function isLargeText(fontSize?: string, fontWeight?: string): boolean {
  if (!fontSize) return false;

  const sizeMatch = fontSize.match(/(\d+(?:\.\d+)?)(px|pt|em|rem)?/);
  if (!sizeMatch) return false;

  const size = parseFloat(sizeMatch[1]);
  const unit = sizeMatch[2] || 'px';

  let sizeInPx = size;
  if (unit === 'pt') {
    sizeInPx = size * (4 / 3); // Convert pt to px
  } else if (unit === 'em' || unit === 'rem') {
    sizeInPx = size * 16; // Assume 16px base
  }

  const isBold =
    fontWeight === 'bold' ||
    fontWeight === 'bolder' ||
    parseInt(fontWeight || '400') >= 700;

  return (isBold && sizeInPx >= 18.66) || sizeInPx >= 24;
}
