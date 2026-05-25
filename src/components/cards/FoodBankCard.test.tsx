import { describe, expect, it } from 'vitest';
import { axe } from 'vitest-axe';
import { renderWithProviders, screen } from '@/test/utils';
import { FoodBankCard } from './FoodBankCard';
import type { FoodBank } from '@/types/resources';

const SAMPLE: FoodBank = {
  id: 1,
  name: 'Ballard Food Bank',
  address: '5130 Leary Ave NW, Seattle, WA 98107',
  phone: '206-789-7800',
  website: 'http://www.ballardfoodbank.org',
  distributionHours: ['Mondays: 2:00pm - 7:00pm', 'Tuesdays: 11:00am - 4:00pm'],
  areaServed: 'Zip codes 98107',
  requirements: 'Photo ID',
  commodity: true,
  commodityDistribution: 'Call for info',
  homeDelivery: 'Limited availability',
  additionalInformation: ['Home delivery', 'Mail pick-up'],
  lastUpdate: 'February 14, 2019',
  coords: { lat: 47.6663, lng: -122.3801 },
};

describe('FoodBankCard', () => {
  it('renders the name and address', () => {
    renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    expect(screen.getByText('Ballard Food Bank')).toBeInTheDocument();
    expect(screen.getByText(/5130 Leary Ave NW/)).toBeInTheDocument();
  });

  it('renders a normalized tel: link', () => {
    renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    const phoneLink = screen.getByRole('link', { name: /Call Ballard Food Bank/i });
    expect(phoneLink).toHaveAttribute('href', 'tel:2067897800');
  });

  it('renders the website link with safe rel attributes', () => {
    renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    const websiteLink = screen.getByRole('link', { name: /Visit website/i });
    expect(websiteLink).toHaveAttribute('target', '_blank');
    expect(websiteLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders distribution hours with stable, non-random keys', () => {
    renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    const hoursList = screen.getByText('Mondays: 2:00pm - 7:00pm').closest('ul');
    expect(hoursList).not.toBeNull();
    expect(hoursList!.children).toHaveLength(2);
  });

  it('shows Commodity and Home Delivery badges when applicable', () => {
    renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    expect(screen.getByText('Commodity')).toBeInTheDocument();
    expect(screen.getByText('Home Delivery')).toBeInTheDocument();
  });

  it('omits Home Delivery badge when not provided', () => {
    const minimal = { ...SAMPLE };
    delete (minimal as Partial<FoodBank>).homeDelivery;
    renderWithProviders(<FoodBankCard foodBank={minimal as FoodBank} />);
    expect(screen.queryByText('Home Delivery')).not.toBeInTheDocument();
  });

  it('has no axe violations', async () => {
    const { container } = renderWithProviders(<FoodBankCard foodBank={SAMPLE} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
