import { Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
}

export function ResourceSearch({ value, onChange, placeholder }: Props) {
  const { t } = useTranslation();
  const label = t('resources.search');
  return (
    <div className="relative">
      <label htmlFor="resource-search" className="sr-only">
        {label}
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[color:var(--color-muted-foreground)]"
        aria-hidden="true"
      />
      <Input
        id="resource-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onChange('');
        }}
        placeholder={placeholder ?? label}
        className="pl-9"
        autoComplete="off"
      />
      {value ? (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-1 size-8 -translate-y-1/2"
          aria-label="Clear search"
          onClick={() => onChange('')}
        >
          <X aria-hidden="true" />
        </Button>
      ) : null}
    </div>
  );
}
