import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('hamburger reveals mobile nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: /Open menu/i })).toBeVisible();
  await page.getByRole('button', { name: /Open menu/i }).click();
  await expect(page.getByRole('navigation', { name: /Mobile/i })).toBeVisible();
});

test('mobile nav navigates and closes', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Open menu/i }).click();
  await page
    .getByRole('navigation', { name: /Mobile/i })
    .getByRole('link', { name: /Food Banks/i })
    .click();
  await expect(page).toHaveURL(/\/food-banks/);
});
