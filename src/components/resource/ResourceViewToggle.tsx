import { List, Map as MapIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Props {
  value: 'list' | 'map';
  onChange: (next: 'list' | 'map') => void;
  mapDisabled?: boolean;
}

export function ResourceViewToggle({ value, onChange, mapDisabled }: Props) {
  const { t } = useTranslation();
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as 'list' | 'map')}>
      <TabsList>
        <TabsTrigger value="list">
          <List className="size-4" aria-hidden="true" />
          {t('resources.viewList')}
        </TabsTrigger>
        <TabsTrigger
          value="map"
          disabled={mapDisabled}
          title={mapDisabled ? t('resources.mapUnavailable') : undefined}
        >
          <MapIcon className="size-4" aria-hidden="true" />
          {t('resources.viewMap')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
