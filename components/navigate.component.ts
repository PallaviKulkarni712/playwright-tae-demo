import {Page,Locator} from '@playwright/test'

// eslint-disable-next-line @typescript-eslint/no-unused-vars


class Navigate{
    page:Page;
    loginButton: Locator;
    aboutMenuButton: Locator;
    shopMenuButton: Locator;
    contactMenuButton: Locator;
    cartMenuButton: Locator;
    profileMenuButton: Locator;

    
    

    constructor(page:Page){
        this.page = page;
        this.loginButton = page.locator('//a[text()="Login"]')
        this.aboutMenuButton = page.locator('//a[text()="About"]');
        this.shopMenuButton = page.locator('//a[text()="Shop"]');
        this.contactMenuButton = page.locator('//a[text()="Contact"]');
        this.cartMenuButton = page.locator('#cart');
        this.profileMenuButton = page.locator('//a[@href="userprofile.php"]');

    }
    navigate(){
        return new Navigate(this.page);
    }


    async navigateToStartPage() {

        // rerd 2025-07-16
        // This SUT is used for Local Testing
        //await this.page.goto('http://10.40.226.38/Praxis_FFM_2024-12/index.php'); // URL only accessible via VPN
        // rerd 2025-07-16
        // We are using this SUIT for testing with pipeline
        await this.page.goto('https://marina-abr.github.io/StaticCoffee/index.html');  // URL puplic available
      
      }

   async navigateToAbout() {
         
      await this.navigateToStartPage();
      await this.aboutMenuButton.click();
       }

    async navigateToShop() {
      await this.navigateToStartPage();
      await this.shopMenuButton.click();
       }
    
    async navigateToContact() {
      await this.navigateToStartPage();
      await this.contactMenuButton.click();
     }

     async navigateToCart() {
      await this.navigateToStartPage();
      await this.cartMenuButton.click();
     }

    async navigateToLogin() {  
      await this.navigateToStartPage();
      await this.loginButton.click();
      }

    async navigateToProfile() {  
      await this.navigateToStartPage();
     
      //click Profile Btn
      await this.profileMenuButton.click();
      }

}

export default Navigate
 