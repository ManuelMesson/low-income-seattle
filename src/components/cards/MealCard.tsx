import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Soup, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { FreeMeal } from '@/types/resources';
import { mapsLink } from '@/lib/url';

interface Props {
  meal: FreeMeal;
}

export function MealCard({ meal }: Props) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{meal.name}</CardTitle>
          {meal.mealServed ? <Badge variant="secondary">{meal.mealServed}</Badge> : null}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {meal.location ? (
          <address className="not-italic">
            <a
              href={mapsLink(meal.location)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 hover:underline"
              aria-label={t('resources.openInMaps')}
            >
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
                aria-hidden="true"
              />
              <span>{meal.location}</span>
            </a>
          </address>
        ) : null}
        {meal.dayTime ? (
          <p className="inline-flex items-start gap-2">
            <Clock
              className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <span>{meal.dayTime}</span>
          </p>
        ) : null}
        {meal.mealServed ? (
          <p className="inline-flex items-start gap-2">
            <Soup
              className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <span>{meal.mealServed}</span>
          </p>
        ) : null}
        {meal.peopleServed ? (
          <p className="inline-flex items-start gap-2">
            <Users
              className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <span>{meal.peopleServed}</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
