import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, screen } from '@/test/utils';
import { ResourceSearch } from './ResourceSearch';

describe('ResourceSearch', () => {
  it('renders a labeled search input', () => {
    renderWithProviders(<ResourceSearch value="" onChange={() => {}} />);
    expect(screen.getByLabelText(/Search resources/i)).toBeInTheDocument();
  });

  it('calls onChange on typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<ResourceSearch value="" onChange={onChange} />);
    await user.type(screen.getByLabelText(/Search resources/i), 'a');
    expect(onChange).toHaveBeenLastCalledWith('a');
  });

  it('clears on Escape', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<ResourceSearch value="abc" onChange={onChange} />);
    const input = screen.getByLabelText(/Search resources/i);
    input.focus();
    await user.keyboard('{Escape}');
    expect(onChange).toHaveBeenCalledWith('');
  });

  it('shows a clear button when value is non-empty', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<ResourceSearch value="abc" onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: /Clear search/i }));
    expect(onChange).toHaveBeenCalledWith('');
  });
});
