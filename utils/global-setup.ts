import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // rerd 2025-07-16
  // This SUT is used for Local Testing
  //await page.goto('http://10.40.226.38/Praxis_FFM_2024-12/index.php');
  // This SUT is used for testing with pipeline
  await page.goto('https://marina-abr.github.io/StaticCoffee/index.html'); // URL publicly available

  console.log('global-setup.ts is being executed');

  // Wait until the login form is visible before saving the state
  const loginLink = page.locator('//a[text()="Login"]');
  await loginLink.waitFor({ timeout: 10000 });

  // Save the state when the user is not logged in
  await page.context().storageState({ path: 'notLoggedInState.json' });

  // rerd 2025-07-16
  // Perform login : http://10.40.226.38/Praxis_FFM_2024-12/index.php
  //await loginLink.click();
  //await page.locator('//*[@id="login-username"]').fill('tester');
  //await page.locator('//*[@id="login-password"]').fill('passwort');
  //await page.locator('//*[@id="login-submit"]').click();

  // rerd 2025-07-16
  // Perform login : https://marina-abr.github.io/StaticCoffee/index.htm
  await loginLink.click();
  await page.locator("//input[@id='login-username']").fill('Test01');
  await page.locator("//input[@id='login-password']").fill('password1234');
  await page.locator("//input[@id='login-submit']").click();


  // rerd 2025-07-16
  // Wait for an element that should be visible after logging in
  // This locator is not available on  http://10.40.226.38/Praxis_FFM_2024-12/index.php  - rerd 2025-07-16
  //await page.locator('//*[@id="accountbar"]/table/tbody/tr[2]/td/a[2]').waitFor({ timeout: 10000 });
  

  // Save the state after a successful login
  await page.context().storageState({ path: 'loggedInState.json' });


  await browser.close();


}

export default globalSetup;
