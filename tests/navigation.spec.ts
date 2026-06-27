import { test, expect } from '@playwright/test';

test('Navigation Test', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

});