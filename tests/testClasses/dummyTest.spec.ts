import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/homePage';

test("Dummy login validation", async ({page})=> {
    const homePage= new HomePage(page);

    await homePage.b_navigate_to("https://www.way2automation.com/angularjs-protractor/banking/#/login");

    await page.waitForTimeout(2000);

    homePage.launchSampleForm();

    await page.waitForTimeout(2000);

    await page.goBack();

    await page.waitForTimeout(2000);

    homePage.goToHomePage();

    await page.waitForTimeout(2000);

    homePage.loginAsCustomer();

    await page.waitForTimeout(2000);

    homePage.goToHomePage();

    await page.waitForTimeout(2000);

    homePage.loginAsBankManager();

    await page.waitForTimeout(2000);

    homePage.goToHomePage();

    await page.waitForTimeout(2000);

    homePage.launchLifetimeMembershipPage();

    await page.waitForTimeout(2000);

})