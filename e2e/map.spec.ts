import { test, expect } from '@playwright/test';

test('map tab renders Leaflet markers on Public Showers', async ({ page }) => {
  await page.goto('/public-showers');
  await page.getByRole('tab', { name: 'Map' }).click();
  await expect(page.locator('.leaflet-container')).toBeVisible();
  await expect(page.locator('.leaflet-marker-icon').first()).toBeVisible();
});

test('map tab renders on Food Banks', async ({ page }) => {
  await page.goto('/food-banks');
  await page.getByRole('tab', { name: 'Map' }).click();
  await expect(page.locator('.leaflet-container')).toBeVisible();
});
