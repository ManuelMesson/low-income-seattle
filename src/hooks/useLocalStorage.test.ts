import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('returns the initial value when nothing is stored', () => {
    const { result } = renderHook(() => useLocalStorage('k', 'init'));
    expect(result.current[0]).toBe('init');
  });

  it('returns the stored value when present', () => {
    localStorage.setItem('k', JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage<string>('k', 'init'));
    expect(result.current[0]).toBe('stored');
  });

  it('writes through to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage<number>('n', 0));
    act(() => result.current[1](42));
    expect(result.current[0]).toBe(42);
    expect(localStorage.getItem('n')).toBe('42');
  });

  it('falls back to initial when JSON is corrupt', () => {
    localStorage.setItem('bad', '{not json');
    const { result } = renderHook(() => useLocalStorage<string>('bad', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });
});
