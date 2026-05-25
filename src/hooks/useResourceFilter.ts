import { useMemo } from 'react';

export interface FilterOptions<T> {
  query?: string;
  searchKeys: Array<keyof T>;
  predicate?: (item: T) => boolean;
}

export function useResourceFilter<T>(items: T[], options: FilterOptions<T>): T[] {
  const { query = '', searchKeys, predicate } = options;
  const normalizedQuery = query.trim().toLowerCase();

  return useMemo(() => {
    return items.filter((item) => {
      if (normalizedQuery) {
        const matches = searchKeys.some((key) => {
          const value = item[key];
          if (typeof value !== 'string') return false;
          return value.toLowerCase().includes(normalizedQuery);
        });
        if (!matches) return false;
      }
      if (predicate && !predicate(item)) return false;
      return true;
    });
  }, [items, normalizedQuery, searchKeys, predicate]);
}
