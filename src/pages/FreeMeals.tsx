import { lazy, Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MealCard } from '@/components/cards/MealCard';
import { ResourceSearch } from '@/components/resource/ResourceSearch';
import { ResourceViewToggle } from '@/components/resource/ResourceViewToggle';
import { EmptyState } from '@/components/resource/EmptyState';
import { ErrorState } from '@/components/resource/ErrorState';
import { Skeleton } from '@/components/ui/skeleton';

const ResourceMap = lazy(() =>
  import('@/components/resource/ResourceMap').then((m) => ({ default: m.ResourceMap })),
);
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useFreeMeals } from '@/hooks/useFreeMeals';
import { useResourceFilter } from '@/hooks/useResourceFilter';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import type { FreeMeal } from '@/types/resources';

type MealFilter = 'all' | 'breakfast' | 'lunch' | 'dinner';
const MEAL_FILTERS: MealFilter[] = ['all', 'breakfast', 'lunch', 'dinner'];

function buildPredicate(filter: MealFilter): ((m: FreeMeal) => boolean) | undefined {
  if (filter === 'all') return undefined;
  const needle = filter;
  return (meal) => meal.mealServed?.toLowerCase().includes(needle) ?? false;
}

export function FreeMealsPage() {
  const { t } = useTranslation();
  const state = useFreeMeals();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const debouncedQuery = useDebouncedValue(query, 150);
  const filter = (params.get('meal') ?? 'all') as MealFilter;
  const [view, setView] = useState<'list' | 'map'>('list');

  const setQuery = (next: string) => {
    const updated = new URLSearchParams(params);
    if (next) updated.set('q', next);
    else updated.delete('q');
    setParams(updated, { replace: true });
  };
  const setFilter = (next: string) => {
    const updated = new URLSearchParams(params);
    const value = (next || 'all') as MealFilter;
    if (value === 'all') updated.delete('meal');
    else updated.set('meal', value);
    setParams(updated, { replace: true });
  };

  const meals = useMemo(() => (state.status === 'success' ? state.data : []), [state]);
  const predicate = buildPredicate(filter);
  const filtered = useResourceFilter(meals, {
    query: debouncedQuery,
    searchKeys: ['name', 'location'],
    ...(predicate ? { predicate } : {}),
  });

  const mapDisabled = filtered.every((m) => !m.coords);

  const totalKnown = state.status === 'success' ? state.data.length : 0;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('pages.freeMeals.title')}
        </h1>
        <p className="text-[color:var(--color-muted-foreground)]">
          {t('pages.freeMeals.description')}
        </p>
      </header>

      <div className="space-y-3">
        <ResourceSearch value={query} onChange={setQuery} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={setFilter}
            aria-label={t('filters.mealType.label')}
            variant="outline"
          >
            {MEAL_FILTERS.map((f) => (
              <ToggleGroupItem key={f} value={f}>
                {t(`filters.mealType.${f}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <ResourceViewToggle value={view} onChange={setView} mapDisabled={mapDisabled} />
        </div>
        {state.status === 'success' ? (
          <p className="text-sm text-[color:var(--color-muted-foreground)]" aria-live="polite">
            {t('resources.showing', { count: filtered.length, total: totalKnown })}
          </p>
        ) : null}
      </div>

      {state.status === 'loading' || state.status === 'idle' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      ) : state.status === 'error' ? (
        <ErrorState onRetry={state.refetch} message={state.error.message} />
      ) : state.status === 'empty' ? (
        <EmptyState />
      ) : view === 'map' ? (
        <Suspense fallback={<Skeleton className="h-[560px] w-full" />}>
          <ResourceMap
            markers={filtered
              .filter((m) => m.coords)
              .map((m) => ({
                id: m.id,
                name: m.name,
                address: m.location,
                coords: m.coords!,
              }))}
          />
        </Suspense>
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
