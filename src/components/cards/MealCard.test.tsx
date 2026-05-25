import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { renderWithProviders, screen } from '@/test/utils';
import { MealCard } from './MealCard';

const SAMPLE = {
  id: 'a::b::0',
  name: 'Test Program',
  mealServed: 'Lunch',
  dayTime: 'Monday 12pm',
  location: '123 Test St',
  peopleServed: 'all',
};

describe('MealCard', () => {
  it('renders program details', () => {
    renderWithProviders(<MealCard meal={SAMPLE} />);
    expect(screen.getByText('Test Program')).toBeInTheDocument();
    expect(screen.getAllByText('Lunch').length).toBeGreaterThan(0);
    expect(screen.getByText('Monday 12pm')).toBeInTheDocument();
    expect(screen.getByText(/123 Test St/)).toBeInTheDocument();
  });

  it('omits optional fields when missing', () => {
    renderWithProviders(<MealCard meal={{ id: 'x', name: 'X' }} />);
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  it('has no axe violations', async () => {
    const { container } = renderWithProviders(<MealCard meal={SAMPLE} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
