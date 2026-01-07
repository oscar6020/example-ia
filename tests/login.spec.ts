import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test('login with standard_user and check inventory title is visible', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // Wait for navigation to inventory page
  await expect(page).toHaveURL(/inventory.html/);

  // Check title is visible and has the expected text (Products or Inventory)
  await expect(inventory.title).toBeVisible();
  await expect(inventory.title).toHaveText(/Products|Inventory/i);
});
