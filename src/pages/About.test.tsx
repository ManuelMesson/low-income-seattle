import { describe, expect, it } from 'vitest';
import { act } from '@testing-library/react';
import { renderWithProviders, screen } from '@/test/utils';
import { AboutPage } from './About';
import i18n from '@/i18n';

describe('AboutPage', () => {
  it('renders the English title by default', async () => {
    await act(async () => {
      await i18n.changeLanguage('en');
    });
    renderWithProviders(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/About/i);
  });

  it('switches to Spanish when the locale changes', async () => {
    renderWithProviders(<AboutPage />);
    await act(async () => {
      await i18n.changeLanguage('es');
    });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Acerca de/i);
    await act(async () => {
      await i18n.changeLanguage('en');
    });
  });
});
