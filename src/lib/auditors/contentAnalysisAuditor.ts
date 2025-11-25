import * as cheerio from 'cheerio';
import { Issue, AuditResult } from '../types';

export const contentAnalysisAuditor = {
  analyze: async (html: string, url: string): Promise<AuditResult> => {
    const $ = cheerio.load(html);
    const issues: Issue[] = [];
    let score = 100;

    // ========== EXTRACT TEXT CONTENT ==========
    // Remove script, style, and non-content elements
    $('script, style, nav, header, footer, iframe, noscript').remove();
    const bodyText = $('body').text();
    const cleanText = bodyText.replace(/\s+/g, ' ').trim();

    // ========== WORD COUNT ANALYSIS ==========
    const words = cleanText.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;

    if (wordCount < 300) {
      issues.push({
        severity: 'high',
        category: 'Content Quality',
        issue: `Low word count (${wordCount} words)`,
        recommendation: 'Add more content (aim for 300+ words minimum, 1000+ for detailed pages)',
      });
      score -= 15;
    } else if (wordCount < 600) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: `Moderate word count (${wordCount} words)`,
        recommendation: 'Consider expanding content to 600+ words for better SEO performance',
      });
      score -= 8;
    }

    // ========== CONTENT-TO-HTML RATIO ==========
    const htmlLength = html.length;
    const textLength = cleanText.length;
    const contentRatio = (textLength / htmlLength) * 100;

    if (contentRatio < 10) {
      issues.push({
        severity: 'high',
        category: 'Content Quality',
        issue: `Low content-to-HTML ratio (${contentRatio.toFixed(1)}%)`,
        recommendation: 'Reduce HTML code bloat and increase text content. Aim for 15-25% ratio.',
      });
      score -= 12;
    } else if (contentRatio < 15) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: `Content-to-HTML ratio could be improved (${contentRatio.toFixed(1)}%)`,
        recommendation: 'Optimize HTML structure and increase valuable text content',
      });
      score -= 6;
    }

    // ========== READABILITY SCORE (Flesch Reading Ease) ==========
    const { fleschScore, fleschLevel, avgSentenceLength, avgSyllablesPerWord } =
      calculateFleschScore(cleanText);

    if (fleschScore < 30) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: `Content is very difficult to read (Flesch score: ${fleschScore})`,
        recommendation: 'Simplify language, use shorter sentences, and reduce complex words',
      });
      score -= 8;
    } else if (fleschScore < 50) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: `Content is fairly difficult to read (Flesch score: ${fleschScore})`,
        recommendation: 'Consider simplifying some sentences for better readability',
      });
      score -= 4;
    }

    // ========== SENTENCE LENGTH ANALYSIS ==========
    if (avgSentenceLength > 25) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: `Average sentence length is high (${avgSentenceLength.toFixed(1)} words)`,
        recommendation: 'Break up long sentences. Aim for average of 15-20 words per sentence',
      });
      score -= 3;
    }

    // ========== PARAGRAPH LENGTH ANALYSIS ==========
    const paragraphs = $('p');
    let longParagraphs = 0;
    const avgParagraphLength: number[] = [];

    paragraphs.each((i, el) => {
      const pText = $(el).text().trim();
      const pWords = pText.split(/\s+/).filter(w => w.length > 0).length;
      avgParagraphLength.push(pWords);

      if (pWords > 150) {
        longParagraphs++;
      }
    });

    if (longParagraphs > 0) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: `${longParagraphs} paragraphs are too long`,
        recommendation: 'Break up long paragraphs (150+ words) into smaller chunks for better readability',
      });
      score -= Math.min(longParagraphs * 2, 6);
    }

    // ========== KEYWORD ANALYSIS ==========
    const wordsLower = words.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, ''));
    const filteredWords = wordsLower.filter(w => w.length > 3);

    // Count word frequency
    const wordFrequency: { [key: string]: number } = {};
    filteredWords.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Get top keywords
    const topKeywords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / filteredWords.length) * 100).toFixed(2) + '%'
      }));

    // Check for keyword stuffing (any word appearing more than 3% of the time)
    const keywordStuffing = topKeywords.filter(kw => parseFloat(kw.density) > 3);

    if (keywordStuffing.length > 0) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: `Potential keyword stuffing detected`,
        recommendation: `Words like "${keywordStuffing.map(k => k.word).join(', ')}" appear too frequently. Use more natural variations.`,
      });
      score -= 8;
    }

    // ========== INTERNAL VS EXTERNAL LINKS RATIO ==========
    const allLinks = $('a[href]');
    let internalLinks = 0;
    let externalLinks = 0;

    allLinks.each((i, el) => {
      const href = $(el).attr('href');
      if (href) {
        if (href.startsWith('/') || href.includes(new URL(url).hostname)) {
          internalLinks++;
        } else if (href.startsWith('http')) {
          externalLinks++;
        }
      }
    });

    const totalLinks = internalLinks + externalLinks;
    const internalLinkRatio = totalLinks > 0 ? (internalLinks / totalLinks) * 100 : 0;

    if (totalLinks > 0 && internalLinkRatio < 60) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: `Low internal link ratio (${internalLinkRatio.toFixed(1)}%)`,
        recommendation: 'Add more internal links to improve site structure. Aim for 60-80% internal links.',
      });
      score -= 4;
    }

    // ========== CONTENT FRESHNESS ==========
    // Check for dates in content
    const datePatterns = [
      /\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2},?\s+\d{4}\b/gi,
      /\b\d{1,2}[-/]\d{1,2}[-/]\d{4}\b/g,
      /\b\d{4}[-/]\d{1,2}[-/]\d{1,2}\b/g,
    ];

    let latestDate: Date | null = null;
    const currentYear = new Date().getFullYear();

    datePatterns.forEach(pattern => {
      const matches = cleanText.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const date = new Date(match);
          if (!isNaN(date.getTime()) && (!latestDate || date > latestDate)) {
            latestDate = date;
          }
        });
      }
    });

    // Check for copyright year
    const copyrightMatch = cleanText.match(/copyright\s+(?:©|\(c\))?\s*(\d{4})/i);
    if (copyrightMatch) {
      const copyrightYear = parseInt(copyrightMatch[1]);
      if (copyrightYear < currentYear) {
        issues.push({
          severity: 'low',
          category: 'Content Quality',
          issue: `Copyright year is outdated (${copyrightYear})`,
          recommendation: `Update copyright year to ${currentYear}`,
        });
        score -= 2;
      }
    }

    // ========== CALL TO ACTION ANALYSIS ==========
    const ctaWords = [
      'buy', 'shop', 'order', 'purchase', 'add to cart', 'checkout',
      'subscribe', 'sign up', 'register', 'join', 'download', 'get started',
      'learn more', 'contact', 'call', 'email', 'book', 'reserve'
    ];

    const textLower = cleanText.toLowerCase();
    const ctaMatches = ctaWords.filter(cta => textLower.includes(cta));

    if (ctaMatches.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: 'No clear call-to-action found',
        recommendation: 'Add clear CTAs (buy, subscribe, contact, etc.) to guide user actions',
      });
      score -= 8;
    }

    // ========== MEDIA CONTENT ANALYSIS ==========
    const images = $('img');
    const videos = $('video, iframe[src*="youtube"], iframe[src*="vimeo"]');

    const wordsPerImage = images.length > 0 ? wordCount / images.length : wordCount;
    const wordsPerVideo = videos.length > 0 ? wordCount / videos.length : wordCount;

    if (wordCount > 500 && images.length === 0) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: 'No images in long content',
        recommendation: 'Add relevant images to break up text and improve engagement (1 image per 200-300 words)',
      });
      score -= 7;
    } else if (wordsPerImage > 500) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: 'Insufficient images for content length',
        recommendation: `Add more images. Current ratio: 1 image per ${Math.round(wordsPerImage)} words. Aim for 1 per 200-300 words.`,
      });
      score -= 4;
    }

    // ========== DUPLICATE CONTENT CHECK (WITHIN PAGE) ==========
    // Check for repeated sentences
    const sentences = cleanText.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 20);
    const sentenceFrequency: { [key: string]: number } = {};

    sentences.forEach(sentence => {
      const normalized = sentence.toLowerCase();
      sentenceFrequency[normalized] = (sentenceFrequency[normalized] || 0) + 1;
    });

    const duplicateSentences = Object.values(sentenceFrequency).filter(count => count > 1).length;

    if (duplicateSentences > 3) {
      issues.push({
        severity: 'medium',
        category: 'Content Quality',
        issue: `${duplicateSentences} sentences repeated on page`,
        recommendation: 'Remove or rephrase duplicate content to improve quality',
      });
      score -= Math.min(duplicateSentences * 2, 10);
    }

    // ========== LISTS AND BULLET POINTS ==========
    const lists = $('ul, ol');
    const hasLists = lists.length > 0;

    if (wordCount > 500 && !hasLists) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: 'No lists or bullet points found',
        recommendation: 'Use lists to make content more scannable and improve readability',
      });
      score -= 3;
    }

    // ========== HEADING USAGE ==========
    const headings = $('h1, h2, h3, h4, h5, h6');
    const wordsPerHeading = headings.length > 0 ? wordCount / headings.length : wordCount;

    if (wordCount > 500 && wordsPerHeading > 300) {
      issues.push({
        severity: 'low',
        category: 'Content Quality',
        issue: 'Insufficient heading structure',
        recommendation: 'Add more headings to break up content (aim for 1 heading per 200-300 words)',
      });
      score -= 4;
    }

    return {
      score: Math.max(score, 0),
      issues,
      metrics: {
        wordCount,
        characterCount: cleanText.length,
        contentToHtmlRatio: contentRatio.toFixed(2) + '%',
        readability: {
          fleschScore,
          fleschLevel,
          avgSentenceLength: avgSentenceLength.toFixed(1),
          avgSyllablesPerWord: avgSyllablesPerWord.toFixed(2),
        },
        paragraphCount: paragraphs.length,
        avgParagraphLength: avgParagraphLength.length > 0
          ? (avgParagraphLength.reduce((a, b) => a + b, 0) / avgParagraphLength.length).toFixed(1)
          : '0',
        longParagraphs,
        topKeywords,
        links: {
          internal: internalLinks,
          external: externalLinks,
          total: totalLinks,
          internalRatio: internalLinkRatio.toFixed(1) + '%',
        },
        media: {
          images: images.length,
          videos: videos.length,
          wordsPerImage: Math.round(wordsPerImage),
        },
        contentFreshness: {
          latestDateFound: latestDate ? latestDate.toISOString().split('T')[0] : null,
          copyrightYear: copyrightMatch ? copyrightMatch[1] : null,
        },
        hasCTA: ctaMatches.length > 0,
        ctaCount: ctaMatches.length,
        hasLists,
        listCount: lists.length,
        headingCount: headings.length,
        wordsPerHeading: Math.round(wordsPerHeading),
        duplicateSentences,
      },
    };
  },
};

// ========== HELPER FUNCTIONS ==========

function calculateFleschScore(text: string): {
  fleschScore: number;
  fleschLevel: string;
  avgSentenceLength: number;
  avgSyllablesPerWord: number;
} {
  // Split into sentences
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = sentences.length || 1;

  // Split into words
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length || 1;

  // Count syllables
  let totalSyllables = 0;
  words.forEach(word => {
    totalSyllables += countSyllables(word);
  });

  // Calculate averages
  const avgSentenceLength = wordCount / sentenceCount;
  const avgSyllablesPerWord = totalSyllables / wordCount;

  // Flesch Reading Ease formula
  const fleschScore = Math.round(
    206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord
  );

  // Determine reading level
  let fleschLevel: string;
  if (fleschScore >= 90) fleschLevel = 'Very Easy (5th grade)';
  else if (fleschScore >= 80) fleschLevel = 'Easy (6th grade)';
  else if (fleschScore >= 70) fleschLevel = 'Fairly Easy (7th grade)';
  else if (fleschScore >= 60) fleschLevel = 'Standard (8th-9th grade)';
  else if (fleschScore >= 50) fleschLevel = 'Fairly Difficult (10th-12th grade)';
  else if (fleschScore >= 30) fleschLevel = 'Difficult (College)';
  else fleschLevel = 'Very Difficult (College graduate)';

  return {
    fleschScore: Math.max(0, Math.min(100, fleschScore)),
    fleschLevel,
    avgSentenceLength,
    avgSyllablesPerWord,
  };
}

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;

  // Count vowel groups
  const vowels = word.match(/[aeiouy]+/g);
  let syllableCount = vowels ? vowels.length : 1;

  // Adjust for silent 'e'
  if (word.endsWith('e')) syllableCount--;

  // Ensure at least 1 syllable
  return Math.max(1, syllableCount);
}
