import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface Props {
  onRetry: () => void;
  message?: string;
}

export function ErrorState({ onRetry, message }: Props) {
  const { t } = useTranslation();
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed py-16 text-center"
    >
      <AlertTriangle className="size-10 text-[color:var(--color-destructive)]" aria-hidden="true" />
      <p className="text-[color:var(--color-foreground)]">{message ?? t('resources.error')}</p>
      <Button variant="outline" onClick={onRetry}>
        {t('resources.retry')}
      </Button>
    </div>
  );
}
