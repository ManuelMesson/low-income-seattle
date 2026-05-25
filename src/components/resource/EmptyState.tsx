import { SearchX } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EmptyState() {
  const { t } = useTranslation();
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-16 text-center"
    >
      <SearchX className="size-10 text-[color:var(--color-muted-foreground)]" aria-hidden="true" />
      <p className="text-[color:var(--color-muted-foreground)]">{t('resources.empty')}</p>
    </div>
  );
}
