import {Page, Locator} from '@playwright/test';

export default class BasePage
{
    readonly page: Page;

    constructor(page: Page)
    {
        this.page= page;
    }

    async b_navigate_to(url: string, maxTimeout?: number)
    {
        //await this.page.goto(url, {timeout: maxTimeout, waitUntil: 'networkidle'});
        await this.page.goto(url, {timeout: maxTimeout, waitUntil: 'networkidle'});
    }

    async b_clickElement(element: Locator, isForceClick?: boolean, maxTimeout?: number)
    {
        await this.b_waitForElementVisible(element, maxTimeout);
        await element.click({force: isForceClick});
    }

    async b_waitForElementVisible(element: Locator, maxTimeout?: number)
    {
        if(typeof element=== "string")
        {
            await this.page.waitForSelector(element, {state: 'visible', timeout: maxTimeout});
        }
        else
        {
            await element.waitFor({state: 'visible', timeout: maxTimeout});
        }
    }

    async b_waitForElementHidden(element: Locator, maxTimeout?: number)
    {
        await element.waitFor({state: 'visible', timeout: maxTimeout});
    }

    async b_getElementText(element: Locator, maxTimeout?: number): Promise<string>
    {
        await this.b_waitForElementVisible(element, maxTimeout);
        return await element.innerText({timeout: maxTimeout});
    }

    async b_isElementVisible(element: Locator, maxTimeout?: number): Promise<boolean>
    {
        await this.b_waitForElementVisible(element, maxTimeout);
        return await element.isVisible({timeout: maxTimeout});
    }
    
    async b_getElementCount(element: Locator,maxTimeout?: number): Promise<number>
    {
        await this.b_isElementVisible(element,maxTimeout);
        return element.count();
    }

    async b_waitForPageLoad(): Promise<void>
    {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(30000);
    }

    async b_selectStaticDropDown(element: Locator, dropDownText: string): Promise<void>
    {
        await element.selectOption({label: dropDownText});
    }
    async b_selectDynamicDropDown(dropDownLocator: Locator, dropDownsValueLocator: Locator, dropDownText: string): Promise<void>
    {
        await dropDownLocator.click();
        const optionLocator= dropDownsValueLocator.locator(`text=${dropDownText}`);

        await optionLocator.waitFor({state:'visible'});
        await optionLocator.click();

    }


}
