import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', heading: /Find help in Seattle/i },
  { path: '/about', heading: /About Low Income Seattle/i },
  { path: '/food-banks', heading: /Food Banks/i },
  { path: '/public-showers', heading: /Public Showers/i },
];

for (const route of ROUTES) {
  test(`renders ${route.path}`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('pageerror', (e) => consoleErrors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    await page.goto(route.path);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(route.heading);
    expect(consoleErrors).toEqual([]);
  });
}

test('renders /free-meals (network-dependent)', async ({ page }) => {
  await page.goto('/free-meals');
  await expect(page.getByRole('heading', { level: 1, name: /Free Meals/i })).toBeVisible();
});

test('404 page on unknown route', async ({ page }) => {
  await page.goto('/garbage-route');
  await expect(page.getByRole('heading', { name: /Page not found/i })).toBeVisible();
});
