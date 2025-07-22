import {test,expect} from '@playwright/test';

test.describe('Home', () => {
   test('open HomePage and verify title', async ({ page }) => {
    //open URL
    await page.goto('https://practice.sdetunicorns.com/');
    //verify the title of the page      
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
   });

   test('open About HomePage and verify title', async ({ page }) => {
    //open URL
    await page.goto('https://practice.sdetunicorns.com/about/');
    //verify the title of the page      
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
   });

   
   test('click to get started button using css selector', async ({ page }) => {
    //open URL
    await page.goto('https://practice.sdetunicorns.com');
    //click the button
    page.locator('#get-started').click();

    //verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);

   });
});

