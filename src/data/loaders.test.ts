import { describe, expect, it } from 'vitest';
import { foodBanks, publicShowers } from './loaders';

describe('publicShowers data', () => {
  it('has at least one entry', () => {
    expect(publicShowers.length).toBeGreaterThan(0);
  });

  it('has unique ids', () => {
    const ids = publicShowers.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every entry has the required fields', () => {
    for (const s of publicShowers) {
      expect(s.id).toBeTypeOf('number');
      expect(s.name).toBeTruthy();
      expect(s.phone).toBeTruthy();
      expect(s.address).toBeTruthy();
      expect(s.open).toBeTruthy();
      expect(s.info).toBeTruthy();
      expect(['all', 'woman', 'men', 'youth', 'senior', 'family']).toContain(s.peopleServed);
    }
  });

  it('coords (when present) are inside Seattle bounding box', () => {
    for (const s of publicShowers) {
      if (!s.coords) continue;
      expect(s.coords.lat).toBeGreaterThan(47.4);
      expect(s.coords.lat).toBeLessThan(47.8);
      expect(s.coords.lng).toBeLessThan(-122.2);
      expect(s.coords.lng).toBeGreaterThan(-122.5);
    }
  });
});

describe('foodBanks data', () => {
  it('has at least one entry', () => {
    expect(foodBanks.length).toBeGreaterThan(0);
  });

  it('has unique ids', () => {
    const ids = foodBanks.map((b) => b.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every entry has the required fields', () => {
    for (const b of foodBanks) {
      expect(b.id).toBeTypeOf('number');
      expect(b.name).toBeTruthy();
      expect(b.address).toBeTruthy();
      expect(b.phone).toBeTruthy();
      expect(Array.isArray(b.distributionHours)).toBe(true);
      expect(b.distributionHours.length).toBeGreaterThan(0);
      expect(b.areaServed).toBeTruthy();
      expect(b.commodity).toBeTypeOf('boolean');
      expect(b.lastUpdate).toBeTruthy();
    }
  });

  it('coords (when present) are inside Seattle bounding box', () => {
    for (const b of foodBanks) {
      if (!b.coords) continue;
      expect(b.coords.lat).toBeGreaterThan(47.4);
      expect(b.coords.lat).toBeLessThan(47.8);
      expect(b.coords.lng).toBeLessThan(-122.2);
      expect(b.coords.lng).toBeGreaterThan(-122.5);
    }
  });
});
