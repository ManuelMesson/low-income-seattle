import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock, ExternalLink, Truck, Boxes } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { FoodBank } from '@/types/resources';
import { ensureHttp, mapsLink, telLink } from '@/lib/url';

interface Props {
  foodBank: FoodBank;
}

function toLines(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value.filter(Boolean) : [value];
}

export function FoodBankCard({ foodBank }: Props) {
  const { t } = useTranslation();
  const website = foodBank.website ? ensureHttp(foodBank.website) : '';
  const additional = toLines(foodBank.additionalInformation);
  const commodity = toLines(foodBank.commodityDistribution);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <CardTitle>{foodBank.name}</CardTitle>
          <div className="flex flex-wrap gap-1">
            {foodBank.commodity ? (
              <Badge variant="secondary">
                <Boxes className="mr-1 size-3" aria-hidden="true" />
                {t('filters.foodBank.commodity')}
              </Badge>
            ) : null}
            {foodBank.homeDelivery ? (
              <Badge variant="default">
                <Truck className="mr-1 size-3" aria-hidden="true" />
                {t('filters.foodBank.homeDelivery')}
              </Badge>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <address className="not-italic">
          <a
            href={mapsLink(foodBank.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 hover:underline"
            aria-label={t('resources.openInMaps')}
          >
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
              aria-hidden="true"
            />
            <span>{foodBank.address}</span>
          </a>
        </address>

        <p className="inline-flex items-start gap-2">
          <Phone
            className="mt-0.5 size-4 shrink-0 text-[color:var(--color-muted-foreground)]"
            aria-hidden="true"
          />
          <a
            href={telLink(foodBank.phone)}
            className="hover:underline"
            aria-label={t('resources.callPhone', { name: foodBank.name })}
          >
            {foodBank.phone}
          </a>
        </p>

        {website ? (
          <p>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[color:var(--color-primary)] hover:underline"
              aria-label={`${t('resources.visitWebsite')} - ${foodBank.name}`}
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="truncate">{t('resources.visitWebsite')}</span>
            </a>
          </p>
        ) : null}

        <div>
          <h4 className="mb-1 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
            <Clock className="size-3.5" aria-hidden="true" />
            {t('resources.hours')}
          </h4>
          <ul className="list-disc space-y-0.5 pl-5">
            {foodBank.distributionHours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
            {t('resources.zipCodes')}:{' '}
          </span>
          <span>{foodBank.areaServed}</span>
        </div>

        {foodBank.requirements ? (
          <div>
            <span className="text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
              {t('resources.requirements')}:{' '}
            </span>
            <span>{foodBank.requirements}</span>
          </div>
        ) : null}

        {commodity.length > 0 ? (
          <div>
            <span className="text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
              {t('resources.commodityProgram')}:{' '}
            </span>
            {commodity.length === 1 ? (
              <span>{commodity[0]}</span>
            ) : (
              <ul className="mt-1 list-disc space-y-0.5 pl-5">
                {commodity.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        {foodBank.homeDelivery ? (
          <div>
            <span className="text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
              {t('resources.homeDelivery')}:{' '}
            </span>
            <span>{foodBank.homeDelivery}</span>
          </div>
        ) : null}

        {additional.length > 0 ? (
          <div>
            <span className="text-xs font-semibold text-[color:var(--color-muted-foreground)] uppercase">
              {t('resources.additionalInfo')}
            </span>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              {additional.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <p className="pt-2 text-xs text-[color:var(--color-muted-foreground)] italic">
          {t('resources.lastUpdate', { date: foodBank.lastUpdate })}
        </p>
      </CardContent>
    </Card>
  );
}
