import {Page, Locator} from '@playwright/test';
import BasePage  from './basepage';

export class AccountCreationPage extends BasePage
{
    private readonly customerNameDropDown: Locator;
    private readonly currencyDropDown: Locator;
    private readonly processBtn: Locator;

    constructor(page: Page){
        super(page);
        this.customerNameDropDown = page.locator('#userSelect');
        this.currencyDropDown = page.locator('#currency');
        this.processBtn = page.getByRole('button', {name: 'Process'});
    }

    async fillCustomerDetails(customerName: string, currency: string) {
        await this.customerNameDropDown.selectOption({label: customerName});
        await this.currencyDropDown.selectOption({label: currency});
    }

    async submitAccountCreationForm() {
        
        await this.processBtn.click();
    }

}