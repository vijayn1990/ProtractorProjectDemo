import {Page,Locator} from '@playwright/test';
import BasePage  from './basepage';

export class AddNewCustomerPage extends BasePage
{
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postCodeInput: Locator;
    private readonly addCustomerBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postCodeInput = page.getByPlaceholder('Post Code');
        //this.addCustomerBtn = page.getByRole('button', {name: 'Add Customer'});
        this.addCustomerBtn = page.locator('//button[.="Add Customer"]');
    }

    async fillCustomerDetails(firstName: string, lastName: string, postCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postCodeInput.fill(postCode);
    }

    /*
    async submitCustomerForm(page: Page) {
        page.on("dialog", async (dialog) => {

        console.log(dialog.message());
         console.log(dialog.type());
         console.log(dialog.defaultValue());
         dialog.accept();
    });
        await this.b_clickElement(this.addCustomerBtn);

    }
    */

    async submitCustomerForm() {
        
        await this.b_clickElement(this.addCustomerBtn);

    }
}