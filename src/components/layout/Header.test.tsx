import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, waitFor } from '@/test/utils';
import { Header } from './Header';

describe('Header', () => {
  it('marks the active route with aria-current', () => {
    renderWithProviders(<Header />, { initialEntries: ['/food-banks'] });
    const active = screen
      .getAllByText(/Food Banks/i)
      .find((el) => el.getAttribute('aria-current') === 'page');
    expect(active).toBeDefined();
  });

  it('toggles theme via the dropdown', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header />);
    await user.click(screen.getByRole('button', { name: /Toggle theme/i }));
    await user.click(await screen.findByRole('menuitem', { name: /Dark/i }));
    await waitFor(() => expect(document.documentElement.classList.contains('dark')).toBe(true));
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header />);
    const openButton = screen.getByRole('button', { name: /Open menu/i });
    await user.click(openButton);
    expect(screen.getByRole('navigation', { name: /Mobile/i })).toBeInTheDocument();
    await user.click(openButton);
    await waitFor(() =>
      expect(screen.queryByRole('navigation', { name: /Mobile/i })).not.toBeInTheDocument(),
    );
  });
});
