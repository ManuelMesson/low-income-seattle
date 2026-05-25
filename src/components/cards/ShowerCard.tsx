import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Shower } from '@/types/resources';
import { mapsLink, telLink } from '@/lib/url';

interface Props {
  shower: Shower;
}

export function ShowerCard({ shower }: Props) {
  const { t } = useTranslation();
  const peopleServedLabel = t(`filters.peopleServed.${shower.peopleServed}`, {
    defaultValue: shower.peopleServed,
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{shower.name}</CardTitle>
          <Badge variant="secondary">{peopleServedLabel}</Badge>
        </div>
        <CardDescription>{shower.info}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <address className="not-italic">
          <a
            href={mapsLink(shower.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 text-[color:var(--color-foreground)] hover:underline"
            aria-label={t('resources.openInMaps')}
          >
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <span>{shower.address}</span>
          </a>
        </address>
        <p className="inline-flex items-start gap-2">
          <Phone
            className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
            aria-hidden="true"
          />
          <a
            href={telLink(shower.phone)}
            className="hover:underline"
            aria-label={t('resources.callPhone', { name: shower.name })}
          >
            {shower.phone}
          </a>
        </p>
        <p className="inline-flex items-start gap-2">
          <Clock
            className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
            aria-hidden="true"
          />
          <span>{shower.open}</span>
        </p>
      </CardContent>
    </Card>
  );
}
