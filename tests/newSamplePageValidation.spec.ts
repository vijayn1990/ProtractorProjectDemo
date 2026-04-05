import {test, expect} from '@playwright/test';

test("registration form validation", async ({page})=>{

    await page.goto("https://www.way2automation.com/angularjs-protractor/banking/registrationform.html");

    await page.locator('#firstName').fill("Robert");

    await page.fill('#lastName',"Downey Jr");

    await page.fill('#email',"abc@gmail.com");

    await page.locator('#password').pressSequentially('pwd12032!',{timeout: 1000});

    await page.getByText("Reading").check();
    //const allCheckBoxes= page.$('//input[@type="checkbox"]');

    await page.getByText("Traveling").check();

    await page.waitForTimeout(5000);

});