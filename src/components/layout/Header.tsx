import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Utensils, Soup, ShowerHead, Info, Menu, X, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { cn } from '@/lib/utils';

interface NavItem {
  to: string;
  labelKey: string;
  Icon: typeof Home;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', labelKey: 'nav.home', Icon: Home },
  { to: '/food-banks', labelKey: 'nav.foodBanks', Icon: Utensils },
  { to: '/free-meals', labelKey: 'nav.freeMeals', Icon: Soup },
  { to: '/public-showers', labelKey: 'nav.showers', Icon: ShowerHead },
  { to: '/about', labelKey: 'nav.about', Icon: Info },
];

export function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[color:var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-background)]/80">
      <a href="#main" className="skip-link">
        {t('nav.skipToContent')}
      </a>
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-[color:var(--color-foreground)]"
          aria-label="Low Income Seattle"
        >
          <HeartHandshake className="size-6 text-[color:var(--color-primary)]" aria-hidden="true" />
          <span className="hidden text-base sm:inline">Low Income Seattle</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map(({ to, labelKey, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                cn(
                  'inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[color:var(--color-secondary)] text-[color:var(--color-foreground)]'
                    : 'text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className="size-4" aria-hidden="true" />
                  <span aria-current={isActive ? 'page' : undefined}>{t(labelKey)}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={t('nav.openMenu')}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t bg-[color:var(--color-background)] lg:hidden"
        >
          <ul className="container mx-auto flex max-w-6xl flex-col p-2">
            {NAV_ITEMS.map(({ to, labelKey, Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex h-12 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[color:var(--color-secondary)] text-[color:var(--color-foreground)]'
                        : 'text-[color:var(--color-muted-foreground)] hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-accent-foreground)]',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className="size-5" aria-hidden="true" />
                      <span aria-current={isActive ? 'page' : undefined}>{t(labelKey)}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
