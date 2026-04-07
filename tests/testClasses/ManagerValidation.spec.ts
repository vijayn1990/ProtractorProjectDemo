import {test,expect} from'@playwright/test';
import { HomePage } from '../pages/homePage';
import { BankManagerLoginPage } from '../pages/BankManagerLoginPage';
import { AddNewCustomerPage } from '../pages/AddNewCustomerPage';
import { AccountCreationPage } from '../pages/AccountCreationPage'

test("Manager login validation", async ({page})=>{

    const homePage= new HomePage(page);
    
    const bankManagerLoginPage= new BankManagerLoginPage(page);

    await homePage.b_navigate_to("https://www.way2automation.com/angularjs-protractor/banking/#/login");

    //await page.waitForTimeout(2000);

    await homePage.loginAsBankManager();
    
    //await page.waitForTimeout(2000);

    await bankManagerLoginPage.launchAddCustomerPage();

    //await page.waitForTimeout(2000);

    await bankManagerLoginPage.launchOpenAccountPage();

    //await page.waitForTimeout(2000);

    await bankManagerLoginPage.launchListCustomersPage();

    //await page.waitForTimeout(2000);

    bankManagerLoginPage.launchAddCustomerPage();

    //await page.waitForTimeout(2000);

    const addNewCustomerPage= new AddNewCustomerPage(page);

    await addNewCustomerPage.fillCustomerDetails("Tony","Stark","560037");

    await page.waitForTimeout(2000);

    
    page.on("dialog", async (dialog) => {

         console.log(dialog.message());
         console.log(dialog.type());
         console.log(dialog.defaultValue());
         dialog.accept();
    });

    await addNewCustomerPage.submitCustomerForm();

    await page.waitForTimeout(2000);

    /*
    await addNewCustomerPage.fillCustomerDetails("Diamond","hill","123456");

    await addNewCustomerPage.submitCustomerForm();

    */

    await bankManagerLoginPage.launchOpenAccountPage();
    
    await page.waitForTimeout(2000);

    const accountCreationPage= new AccountCreationPage(page);

    await accountCreationPage.fillCustomerDetails("Tony Stark","Dollar");

    await accountCreationPage.submitAccountCreationForm();
    
    await page.waitForTimeout(2000);



    await page.close();

    
});