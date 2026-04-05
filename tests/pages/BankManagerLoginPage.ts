import {Page, Locator} from '@playwright/test';
import BasePage  from './basepage';

class BankManagerLoginPage extends BasePage {
    private readonly addCustomerBtn: Locator;
    private readonly openAccountBtn: Locator;
    private readonly listCustomersTab: Locator;

    constructor(page: Page) {
        super(page);
        this.addCustomerBtn = page.locator('//button[.="Add Customer"]');
        this.openAccountBtn = page.locator('//button[.="Open Account"]');
        this.listCustomersTab = page.locator('//button[.="Customers"]');
    }
}
