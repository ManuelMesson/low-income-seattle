import { test, expect } from '@playwright/test';

test('dark mode persists across reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Toggle theme/i }).click();
  await page.getByRole('menuitem', { name: /^Dark$/ }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('language toggle changes nav labels and html lang', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Change language/i }).click();
  await page.getByRole('menuitem', { name: /Español/i }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('link', { name: /Bancos de Alimentos/i }).first()).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});
