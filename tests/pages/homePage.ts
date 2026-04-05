import { Page, Locator} from '@playwright/test';
import BasePage  from './basepage';

export class HomePage extends BasePage
{
    private readonly sampleFormBtn: Locator;
    private readonly customerLoginBtn: Locator;
    private readonly bankManagerLoginBtn: Locator;
    private readonly lifetimeMembershipBtn: Locator;
    private readonly homePageBtn: Locator;

    constructor(page: Page)
    {
        super(page);
        this.sampleFormBtn= page.locator('//a[.="Sample Form"]');
        this.customerLoginBtn=page.locator('//button[.="Customer Login"]');
        this.bankManagerLoginBtn=page.locator('//button[.="Bank Manager Login"]');
        this.lifetimeMembershipBtn=page.locator('//a[.="Lifetime Membership"]');
        this.homePageBtn= page.locator('//button[.="Home"]');

    }

    async launchSampleForm()
    {
        await this.b_clickElement(this.sampleFormBtn,false,1000);
    }

    async loginAsCustomer()
    {
        await this.b_clickElement(this.customerLoginBtn);
    }

    async loginAsBankManager()
    {
        await this.b_clickElement(this.bankManagerLoginBtn);
    }

    async launchLifetimeMembershipPage()
    {
        await this.b_clickElement(this.lifetimeMembershipBtn);
    }

    async goToHomePage()
    {
        await this.b_clickElement(this.homePageBtn);
    }
}
