import {test,expect} from '@playwright/test';

test.describe('Home', () => {
   test('open HomePage and verify title', async ({ page }) => {
    //open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //verify the title of the page      
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
   });
    
});
