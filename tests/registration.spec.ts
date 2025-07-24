import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/registration.page';
import { faker } from '@faker-js/faker';


test.describe('Registrierungsprozess', () => {
  let registerPage: RegisterPage;

  // Setup für jeden Test
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.context().clearCookies();
  });

test('Open Cooffeeshop page and verify title is same --todays test', async ({ page }) => {
    //Open URL
    await page.goto('https://marina-abr.github.io/StaticCoffee/index.html');
   //verify the title of the page  
    await expect(page).toHaveTitle('coffeeshop');
})
});