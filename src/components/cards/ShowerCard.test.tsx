import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { renderWithProviders, screen } from '@/test/utils';
import { ShowerCard } from './ShowerCard';
import type { Shower } from '@/types/resources';

const SAMPLE: Shower = {
  id: 1,
  name: 'Compass Hygiene Center',
  phone: '206-474-1600',
  address: '77 S. Washington St, Seattle, WA',
  open: 'Mon-Fri 7am-2:30pm',
  info: 'Offers nursing care and hygiene packets.',
  peopleServed: 'all',
};

describe('ShowerCard', () => {
  it('renders name, address, phone, and hours', () => {
    renderWithProviders(<ShowerCard shower={SAMPLE} />);
    expect(screen.getByText('Compass Hygiene Center')).toBeInTheDocument();
    expect(screen.getByText(/77 S. Washington St/)).toBeInTheDocument();
    expect(screen.getByText('206-474-1600')).toBeInTheDocument();
    expect(screen.getByText(/Mon-Fri/)).toBeInTheDocument();
  });

  it('renders an accessible "All" badge for peopleServed', () => {
    renderWithProviders(<ShowerCard shower={SAMPLE} />);
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('phone is a tel: link', () => {
    renderWithProviders(<ShowerCard shower={SAMPLE} />);
    const link = screen.getByRole('link', { name: /Call Compass Hygiene Center/i });
    expect(link).toHaveAttribute('href', 'tel:2064741600');
  });

  it('has no axe violations', async () => {
    const { container } = renderWithProviders(<ShowerCard shower={SAMPLE} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
