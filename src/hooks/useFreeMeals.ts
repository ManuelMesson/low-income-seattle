import { useCallback, useEffect, useState } from 'react';
import type { FetchState, FreeMeal, FreeMealApiRow } from '@/types/resources';

const ENDPOINT = 'https://data.seattle.gov/resource/hmzu-x5ed.json';

function rowToMeal(row: FreeMealApiRow, index: number): FreeMeal {
  const name = row.name_of_program ?? 'Unknown program';
  const lat = row.location_1?.latitude ? parseFloat(row.location_1.latitude) : NaN;
  const lng = row.location_1?.longitude ? parseFloat(row.location_1.longitude) : NaN;
  const coords = Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : undefined;

  const meal: FreeMeal = {
    id: `${name}::${row.location ?? ''}::${index}`,
    name,
  };
  if (row.meal_served !== undefined) meal.mealServed = row.meal_served;
  if (row.day_time !== undefined) meal.dayTime = row.day_time;
  if (row.location !== undefined) meal.location = row.location;
  if (row.people_served !== undefined) meal.peopleServed = row.people_served;
  if (coords !== undefined) meal.coords = coords;
  return meal;
}

export function useFreeMeals(): FetchState<FreeMeal[]> & { refetch: () => void } {
  const [state, setState] = useState<FetchState<FreeMeal[]>>({ status: 'idle' });
  const [tick, setTick] = useState(0);

  const refetch = useCallback(() => setTick((t) => t + 1), []);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: 'loading' });

    (async () => {
      try {
        const res = await fetch(ENDPOINT, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const rows = (await res.json()) as FreeMealApiRow[];
        const mapped = rows.map(rowToMeal);
        if (mapped.length === 0) {
          setState({ status: 'empty' });
        } else {
          setState({ status: 'success', data: mapped });
        }
      } catch (err) {
        if ((err as { name?: string }).name === 'AbortError') return;
        setState({ status: 'error', error: err instanceof Error ? err : new Error(String(err)) });
      }
    })();

    return () => controller.abort();
  }, [tick]);

  return { ...state, refetch };
}
