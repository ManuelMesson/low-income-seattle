import { Link, useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Utensils, Soup, ShowerHead, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RESOURCE_CARDS = [
  {
    to: '/food-banks',
    icon: Utensils,
    titleKey: 'home.cards.foodBanks.title',
    descKey: 'home.cards.foodBanks.description',
  },
  {
    to: '/free-meals',
    icon: Soup,
    titleKey: 'home.cards.freeMeals.title',
    descKey: 'home.cards.freeMeals.description',
  },
  {
    to: '/public-showers',
    icon: ShowerHead,
    titleKey: 'home.cards.showers.title',
    descKey: 'home.cards.showers.description',
  },
] as const;

export function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      navigate('/food-banks');
    } else {
      navigate(`/food-banks?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="space-y-12">
      <section className="space-y-6 py-8 text-center sm:py-12">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {t('home.title')}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-balance text-[color:var(--color-muted-foreground)]">
          {t('home.tagline')}
        </p>
        <form
          onSubmit={onSubmit}
          role="search"
          className="mx-auto flex max-w-xl flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="home-search" className="sr-only">
            {t('resources.search')}
          </label>
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <Input
              id="home-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('home.searchPlaceholder')}
              className="pl-9"
            />
          </div>
          <Button type="submit" size="lg">
            {t('home.searchButton')}
          </Button>
        </form>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Resources">
        {RESOURCE_CARDS.map(({ to, icon: Icon, titleKey, descKey }) => (
          <Link
            key={to}
            to={to}
            className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-ring)]"
          >
            <Card className="h-full">
              <CardHeader>
                <Icon
                  className="mb-2 size-8 text-[color:var(--color-primary)]"
                  aria-hidden="true"
                />
                <CardTitle className="flex items-center gap-2">
                  {t(titleKey)}
                  <ArrowRight
                    className="size-4 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </CardTitle>
                <CardDescription>{t(descKey)}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 text-sm font-medium text-[color:var(--color-primary)]">
                {t('resources.viewDetails')}{' '}
                <ArrowRight className="inline size-3.5" aria-hidden="true" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
