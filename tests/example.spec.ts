import { test, expect } from '@playwright/test';
import Navigate from '../components/navigate.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let navigate: Navigate;


test.describe ('Example Test with Navigate', ()=> {
test('navigate To Home', async ({ page }) => {
  navigate = new Navigate(page);
  await navigate.navigateToStartPage()
  await expect(page).toHaveTitle('coffeeshop');

});
test('navigate To About', async ({ page }) => {
  navigate = new Navigate(page);
  await navigate.navigateToAbout()

});
test('navigate To Shop', async ({ page }) => {
  navigate = new Navigate(page);
  await navigate.navigateToShop()

});
});