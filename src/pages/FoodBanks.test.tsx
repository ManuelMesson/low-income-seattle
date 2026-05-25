import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, waitFor } from '@/test/utils';
import { FoodBanksPage } from './FoodBanks';
import { foodBanks } from '@/data/loaders';

describe('FoodBanksPage', () => {
  it('renders the page heading', () => {
    renderWithProviders(<FoodBanksPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Food Banks/i })).toBeInTheDocument();
  });

  it('renders all food banks by default', () => {
    renderWithProviders(<FoodBanksPage />);
    expect(
      screen.getByText(new RegExp(`Showing ${foodBanks.length} of ${foodBanks.length}`)),
    ).toBeInTheDocument();
  });

  it('filters by search query', async () => {
    const user = userEvent.setup();
    renderWithProviders(<FoodBanksPage />);
    await user.type(screen.getByLabelText(/Search resources/i), 'ballard');
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: 'Ballard Food Bank' })).toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(screen.queryByText('Pike Market Food Bank')).not.toBeInTheDocument(),
    );
  });

  it('respects the ?q= search param on initial render', async () => {
    renderWithProviders(<FoodBanksPage />, { initialEntries: ['/food-banks?q=ballard'] });
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: 'Ballard Food Bank' })).toBeInTheDocument(),
    );
  });

  it('shows the empty state for an unmatched query', async () => {
    const user = userEvent.setup();
    renderWithProviders(<FoodBanksPage />);
    await user.type(screen.getByLabelText(/Search resources/i), 'xyz-nothing');
    await waitFor(() => expect(screen.getByText(/No results match/i)).toBeInTheDocument());
  });

  it('filters by commodity chip', async () => {
    const user = userEvent.setup();
    renderWithProviders(<FoodBanksPage />);
    await user.click(screen.getByRole('radio', { name: /^Commodity$/i }));
    const commodityCount = foodBanks.filter((b) => b.commodity).length;
    await waitFor(() =>
      expect(
        screen.getByText(new RegExp(`Showing ${commodityCount} of ${foodBanks.length}`)),
      ).toBeInTheDocument(),
    );
  });
});
