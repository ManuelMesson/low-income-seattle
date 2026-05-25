import { Heart, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer role="contentinfo" className="mt-16 border-t bg-[color:var(--color-background)] py-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center text-sm text-[color:var(--color-muted-foreground)] sm:flex-row sm:justify-between sm:text-left">
        <p className="flex items-center gap-1.5">
          <Heart className="size-4 text-[color:var(--color-primary)]" aria-hidden="true" />
          {t('footer.tagline')}
        </p>
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <a
            href="https://data.seattle.gov/resource/hmzu-x5ed"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t('footer.openData')}
          </a>
          <a
            href="https://github.com/manuelmesson/low-income-seattle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <Github className="size-4" aria-hidden="true" />
            {t('footer.github')}
          </a>
        </div>
      </div>
    </footer>
  );
}
