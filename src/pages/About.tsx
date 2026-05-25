import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPage() {
  const { t } = useTranslation();
  return (
    <article className="mx-auto max-w-2xl space-y-6">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{t('about.title')}</h1>
        <p className="mt-4 text-lg text-[color:var(--color-muted-foreground)]">
          {t('about.intro')}
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">{t('about.what')}</h2>
        <p>{t('about.whatBody')}</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">{t('about.data')}</h2>
        <p>{t('about.dataBody')}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">{t('about.contribute')}</h2>
        <p>{t('about.contributeBody')}</p>
        <Button asChild variant="outline">
          <a
            href="https://github.com/manuelmesson/low-income-seattle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github aria-hidden="true" />
            {t('about.github')}
          </a>
        </Button>
      </section>
    </article>
  );
}
