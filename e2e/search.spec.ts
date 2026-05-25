import { test, expect } from '@playwright/test';

test('search filters food banks and persists in URL', async ({ page }) => {
  await page.goto('/food-banks');
  await page.getByLabel(/Search resources/i).fill('ballard');
  await expect(page.getByRole('heading', { name: 'Ballard Food Bank' })).toBeVisible();
  await expect(page).toHaveURL(/q=ballard/);
});

test('?q= survives a reload', async ({ page }) => {
  await page.goto('/food-banks?q=ballard');
  await expect(page.getByRole('heading', { name: 'Ballard Food Bank' })).toBeVisible();
  await expect(page.getByLabel(/Search resources/i)).toHaveValue('ballard');
});

test('clear button resets the search', async ({ page }) => {
  await page.goto('/food-banks?q=ballard');
  await page.getByRole('button', { name: /Clear search/i }).click();
  await expect(page.getByLabel(/Search resources/i)).toHaveValue('');
});

test('chip filter on Showers narrows results', async ({ page }) => {
  await page.goto('/public-showers');
  await page.getByRole('radio', { name: 'Youth' }).click();
  await expect(page.getByText(/Showing \d+ of \d+/)).toBeVisible();
});
