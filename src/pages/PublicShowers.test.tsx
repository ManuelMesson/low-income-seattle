import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, waitFor } from '@/test/utils';
import { PublicShowersPage } from './PublicShowers';
import { publicShowers } from '@/data/loaders';

describe('PublicShowersPage', () => {
  it('renders the page heading', () => {
    renderWithProviders(<PublicShowersPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Public Showers/i })).toBeInTheDocument();
  });

  it('filters by Women chip', async () => {
    const user = userEvent.setup();
    renderWithProviders(<PublicShowersPage />);
    await user.click(screen.getByRole('radio', { name: 'Women' }));
    const womenCount = publicShowers.filter((s) => s.peopleServed === 'woman').length;
    await waitFor(() =>
      expect(
        screen.getByText(new RegExp(`Showing ${womenCount} of ${publicShowers.length}`)),
      ).toBeInTheDocument(),
    );
  });

  it('search and chip combine', async () => {
    const user = userEvent.setup();
    renderWithProviders(<PublicShowersPage />);
    await user.click(screen.getByRole('radio', { name: 'Youth' }));
    await user.type(screen.getByLabelText(/Search resources/i), 'orion');
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: /Orion Center/i })).toBeInTheDocument(),
    );
  });
});
