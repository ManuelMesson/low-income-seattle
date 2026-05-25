import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen, waitFor } from '@/test/utils';
import { FreeMealsPage } from './FreeMeals';

const SAMPLE = [
  {
    name_of_program: 'Sample Breakfast',
    meal_served: 'Breakfast',
    day_time: 'Daily 7am',
    location: '111 First Ave',
    people_served: 'all',
    location_1: { latitude: '47.6062', longitude: '-122.3321' },
  },
  {
    name_of_program: 'Sample Lunch',
    meal_served: 'Lunch',
    day_time: 'Daily 12pm',
    location: '222 Second Ave',
    people_served: 'all',
  },
];

describe('FreeMealsPage', () => {
  beforeEach(() => vi.restoreAllMocks());
  afterEach(() => vi.restoreAllMocks());

  it('shows loading skeleton then success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(SAMPLE), { status: 200 }),
    );
    renderWithProviders(<FreeMealsPage />);
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: 'Sample Breakfast' })).toBeInTheDocument(),
    );
    expect(screen.getByRole('heading', { name: 'Sample Lunch' })).toBeInTheDocument();
  });

  it('shows error state with retry on HTTP 500', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('boom', { status: 500 }))
      .mockResolvedValueOnce(new Response(JSON.stringify(SAMPLE), { status: 200 }));
    renderWithProviders(<FreeMealsPage />);
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument());
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Try again/i }));
    await waitFor(() =>
      expect(screen.getByRole('heading', { name: 'Sample Breakfast' })).toBeInTheDocument(),
    );
  });
});
