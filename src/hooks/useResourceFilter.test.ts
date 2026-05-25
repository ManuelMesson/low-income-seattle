import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useResourceFilter } from './useResourceFilter';

interface Row {
  id: number;
  name: string;
  address: string;
  flag: boolean;
}

const ROWS: Row[] = [
  { id: 1, name: 'Ballard Food Bank', address: '5130 Leary Ave NW', flag: true },
  { id: 2, name: 'Pike Market Food Bank', address: '1531 Western Ave', flag: false },
  { id: 3, name: 'White Center Food Bank', address: '10829 8th Ave SW', flag: true },
];

describe('useResourceFilter', () => {
  it('returns all items when query is empty', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, { query: '', searchKeys: ['name', 'address'] }),
    );
    expect(result.current).toHaveLength(3);
  });

  it('returns all items for whitespace-only query', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, { query: '   ', searchKeys: ['name', 'address'] }),
    );
    expect(result.current).toHaveLength(3);
  });

  it('matches case-insensitively on name', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, { query: 'BALLARD', searchKeys: ['name', 'address'] }),
    );
    expect(result.current).toEqual([ROWS[0]]);
  });

  it('matches against address fields', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, { query: 'leary', searchKeys: ['name', 'address'] }),
    );
    expect(result.current).toEqual([ROWS[0]]);
  });

  it('applies predicate independently', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, {
        query: '',
        searchKeys: ['name'],
        predicate: (r) => r.flag,
      }),
    );
    expect(result.current).toHaveLength(2);
    expect(result.current.every((r) => r.flag)).toBe(true);
  });

  it('combines query and predicate', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, {
        query: 'food bank',
        searchKeys: ['name'],
        predicate: (r) => r.flag,
      }),
    );
    expect(result.current.map((r) => r.id).sort()).toEqual([1, 3]);
  });

  it('returns empty array when no item matches', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, { query: 'nonsense-xyz', searchKeys: ['name', 'address'] }),
    );
    expect(result.current).toEqual([]);
  });

  it('ignores non-string search keys silently', () => {
    const { result } = renderHook(() =>
      useResourceFilter(ROWS, {
        query: 'true',
        searchKeys: ['flag' as keyof Row],
      }),
    );
    expect(result.current).toEqual([]);
  });
});
