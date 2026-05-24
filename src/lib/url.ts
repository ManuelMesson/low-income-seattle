export function telLink(phone: string): string {
  // Strip everything that isn't a digit, +, or extension marker.
  const digits = phone.replace(/[^\d+]/g, '');
  return `tel:${digits}`;
}

export function mapsLink(address: string): string {
  const q = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function ensureHttp(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}
