import { lazy, Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShowerCard } from '@/components/cards/ShowerCard';
import { ResourceSearch } from '@/components/resource/ResourceSearch';
import { ResourceViewToggle } from '@/components/resource/ResourceViewToggle';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/resource/EmptyState';

const ResourceMap = lazy(() =>
  import('@/components/resource/ResourceMap').then((m) => ({ default: m.ResourceMap })),
);
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { publicShowers } from '@/data/loaders';
import type { PeopleServed } from '@/types/resources';
import { useResourceFilter } from '@/hooks/useResourceFilter';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

const FILTER_OPTIONS: Array<PeopleServed | 'all'> = ['all', 'woman', 'men', 'youth', 'senior'];

export function PublicShowersPage() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const debouncedQuery = useDebouncedValue(query, 150);
  const peopleFilter = (params.get('served') ?? 'all') as PeopleServed | 'all';
  const [view, setView] = useState<'list' | 'map'>('list');

  const setQuery = (next: string) => {
    const updated = new URLSearchParams(params);
    if (next) updated.set('q', next);
    else updated.delete('q');
    setParams(updated, { replace: true });
  };

  const setPeopleFilter = (next: string) => {
    const updated = new URLSearchParams(params);
    const value = (next || 'all') as PeopleServed | 'all';
    if (value === 'all') updated.delete('served');
    else updated.set('served', value);
    setParams(updated, { replace: true });
  };

  const filtered = useResourceFilter(publicShowers, {
    query: debouncedQuery,
    searchKeys: ['name', 'address', 'info'],
    predicate: peopleFilter === 'all' ? undefined : (s) => s.peopleServed === peopleFilter,
  });

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('pages.showers.title')}
        </h1>
        <p className="text-[color:var(--color-muted-foreground)]">
          {t('pages.showers.description')}
        </p>
      </header>

      <div className="space-y-3">
        <ResourceSearch value={query} onChange={setQuery} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ToggleGroup
            type="single"
            value={peopleFilter}
            onValueChange={setPeopleFilter}
            aria-label={t('filters.peopleServed.label')}
            variant="outline"
          >
            {FILTER_OPTIONS.map((option) => (
              <ToggleGroupItem key={option} value={option}>
                {t(`filters.peopleServed.${option}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <ResourceViewToggle value={view} onChange={setView} />
        </div>
        <p className="text-sm text-[color:var(--color-muted-foreground)]" aria-live="polite">
          {t('resources.showing', { count: filtered.length, total: publicShowers.length })}
        </p>
      </div>

      {view === 'map' ? (
        <Suspense fallback={<Skeleton className="h-[560px] w-full" />}>
          <ResourceMap
            markers={filtered
              .filter((s) => s.coords)
              .map((s) => ({
                id: s.id,
                name: s.name,
                address: s.address,
                phone: s.phone,
                coords: s.coords!,
              }))}
          />
        </Suspense>
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((shower) => (
            <ShowerCard key={shower.id} shower={shower} />
          ))}
        </div>
      )}
    </div>
  );
}
