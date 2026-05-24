import { lazy, Suspense, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FoodBankCard } from '@/components/cards/FoodBankCard';
import { ResourceSearch } from '@/components/resource/ResourceSearch';
import { ResourceViewToggle } from '@/components/resource/ResourceViewToggle';
import { Skeleton } from '@/components/ui/skeleton';
import { EmptyState } from '@/components/resource/EmptyState';

const ResourceMap = lazy(() =>
  import('@/components/resource/ResourceMap').then((m) => ({ default: m.ResourceMap })),
);
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { foodBanks } from '@/data/loaders';
import { useResourceFilter } from '@/hooks/useResourceFilter';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import type { FoodBank } from '@/types/resources';

type Filter = 'all' | 'commodity' | 'homeDelivery';
const FILTERS: Filter[] = ['all', 'commodity', 'homeDelivery'];

function applyFilter(filter: Filter): ((b: FoodBank) => boolean) | undefined {
  if (filter === 'commodity') return (b) => b.commodity === true;
  if (filter === 'homeDelivery') return (b) => Boolean(b.homeDelivery);
  return undefined;
}

export function FoodBanksPage() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const debouncedQuery = useDebouncedValue(query, 150);
  const filter = (params.get('f') ?? 'all') as Filter;
  const [view, setView] = useState<'list' | 'map'>('list');

  const setQuery = (next: string) => {
    const updated = new URLSearchParams(params);
    if (next) updated.set('q', next);
    else updated.delete('q');
    setParams(updated, { replace: true });
  };
  const setFilter = (next: string) => {
    const updated = new URLSearchParams(params);
    const value = (next || 'all') as Filter;
    if (value === 'all') updated.delete('f');
    else updated.set('f', value);
    setParams(updated, { replace: true });
  };

  const predicate = applyFilter(filter);
  const filtered = useResourceFilter(foodBanks, {
    query: debouncedQuery,
    searchKeys: ['name', 'address'],
    ...(predicate ? { predicate } : {}),
  });

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t('pages.foodBanks.title')}
        </h1>
        <p className="text-[color:var(--color-muted-foreground)]">
          {t('pages.foodBanks.description')}
        </p>
      </header>

      <div className="space-y-3">
        <ResourceSearch value={query} onChange={setQuery} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={setFilter}
            aria-label={t('filters.foodBank.label')}
            variant="outline"
          >
            {FILTERS.map((f) => (
              <ToggleGroupItem key={f} value={f}>
                {t(`filters.foodBank.${f}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <ResourceViewToggle value={view} onChange={setView} />
        </div>
        <p className="text-sm text-[color:var(--color-muted-foreground)]" aria-live="polite">
          {t('resources.showing', { count: filtered.length, total: foodBanks.length })}
        </p>
      </div>

      {view === 'map' ? (
        <Suspense fallback={<Skeleton className="h-[560px] w-full" />}>
          <ResourceMap
            markers={filtered
              .filter((b) => b.coords)
              .map((b) => ({
                id: b.id,
                name: b.name,
                address: b.address,
                phone: b.phone,
                coords: b.coords!,
              }))}
          />
        </Suspense>
      ) : filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((bank) => (
            <FoodBankCard key={bank.id} foodBank={bank} />
          ))}
        </div>
      )}
    </div>
  );
}
