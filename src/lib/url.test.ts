import { describe, expect, it } from 'vitest';
import { ensureHttp, mapsLink, telLink } from './url';

describe('telLink', () => {
  it('strips dashes and spaces', () => {
    expect(telLink('206-436-8650')).toBe('tel:2064368650');
  });
  it('preserves leading +', () => {
    expect(telLink('+1 (206) 436-8650')).toBe('tel:+12064368650');
  });
  it('keeps digits inside extension marker', () => {
    expect(telLink('206-524-7301, ext. 116')).toBe('tel:2065247301116');
  });
});

describe('mapsLink', () => {
  it('url-encodes the address', () => {
    const url = mapsLink('1604 NE 50th, Seattle, WA');
    expect(url).toBe(
      'https://www.google.com/maps/search/?api=1&query=1604%20NE%2050th%2C%20Seattle%2C%20WA',
    );
  });
  it('handles ampersands safely', () => {
    expect(mapsLink('A & B St')).toContain('A%20%26%20B%20St');
  });
});

describe('ensureHttp', () => {
  it('returns empty for empty input', () => {
    expect(ensureHttp('')).toBe('');
  });
  it('passes through https', () => {
    expect(ensureHttp('https://example.com')).toBe('https://example.com');
  });
  it('passes through http', () => {
    expect(ensureHttp('http://example.com')).toBe('http://example.com');
  });
  it('prepends https for bare hosts', () => {
    expect(ensureHttp('example.com')).toBe('https://example.com');
  });
});
