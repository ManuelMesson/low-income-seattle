import { act, renderHook, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useFreeMeals } from './useFreeMeals';

const SAMPLE_ROW = {
  name_of_program: 'Test Program',
  meal_served: 'Lunch',
  day_time: 'Monday 12pm',
  location: '123 Test St',
  people_served: 'all',
  location_1: { latitude: '47.6062', longitude: '-122.3321' },
};

describe('useFreeMeals', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns success with mapped data', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify([SAMPLE_ROW]), { status: 200 }),
    );
    const { result } = renderHook(() => useFreeMeals());
    await waitFor(() => expect(result.current.status).toBe('success'));
    if (result.current.status !== 'success') throw new Error('unreachable');
    expect(result.current.data).toHaveLength(1);
    expect(result.current.data[0]?.name).toBe('Test Program');
    expect(result.current.data[0]?.coords).toEqual({ lat: 47.6062, lng: -122.3321 });
  });

  it('returns empty when API returns []', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify([]), { status: 200 }),
    );
    const { result } = renderHook(() => useFreeMeals());
    await waitFor(() => expect(result.current.status).toBe('empty'));
  });

  it('returns error on HTTP 500', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(new Response('boom', { status: 500 }));
    const { result } = renderHook(() => useFreeMeals());
    await waitFor(() => expect(result.current.status).toBe('error'));
    if (result.current.status !== 'error') throw new Error('unreachable');
    expect(result.current.error.message).toContain('500');
  });

  it('returns error on network failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new TypeError('network'));
    const { result } = renderHook(() => useFreeMeals());
    await waitFor(() => expect(result.current.status).toBe('error'));
  });

  it('refetch retries the request', async () => {
    const spy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response('boom', { status: 500 }))
      .mockResolvedValueOnce(new Response(JSON.stringify([SAMPLE_ROW]), { status: 200 }));
    const { result } = renderHook(() => useFreeMeals());
    await waitFor(() => expect(result.current.status).toBe('error'));
    act(() => result.current.refetch());
    await waitFor(() => expect(result.current.status).toBe('success'));
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('aborts in-flight request on unmount', async () => {
    const aborted = vi.fn();
    vi.spyOn(globalThis, 'fetch').mockImplementation((_url, init) => {
      return new Promise((_resolve, reject) => {
        const signal = (init as RequestInit | undefined)?.signal;
        signal?.addEventListener('abort', () => {
          aborted();
          const err = new Error('aborted');
          err.name = 'AbortError';
          reject(err);
        });
      });
    });
    const { unmount } = renderHook(() => useFreeMeals());
    unmount();
    await waitFor(() => expect(aborted).toHaveBeenCalled());
  });
});
