import {Page, Locator} from '@playwright/test';
import BasePage  from './basepage';

export class BankManagerLoginPage extends BasePage {
    private readonly addCustomerBtn: Locator;
    private readonly openAccountBtn: Locator;
    private readonly listCustomersTab: Locator;

    constructor(page: Page) {
        super(page);
        this.addCustomerBtn = page.getByRole('button', {name: 'Add Customer'});
        this.openAccountBtn = page.getByRole('button', {name: 'Open Account'});
        this.listCustomersTab = page.getByRole('button', {name: 'Customers'});
    }

    async launchAddCustomerPage() {
        await this.b_clickElement(this.addCustomerBtn,true,4000);
    }

    async launchOpenAccountPage() {
        await this.b_clickElement(this.openAccountBtn);
    }

    async launchListCustomersPage() {
        await this.b_clickElement(this.listCustomersTab);
    }
}
