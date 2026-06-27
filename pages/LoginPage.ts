import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {

    // Locators
    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;
    private readonly requiredFieldMessages: Locator;

    constructor(private readonly page: Page) {

        this.usernameTextbox = page.locator('input[name="username"]');
        this.passwordTextbox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text');
        this.requiredFieldMessages = page.locator('.oxd-input-field-error-message');

    }

    // Opens the OrangeHRM login page.
    async navigate(): Promise<void> {

        await this.page.goto('/', {
            waitUntil: 'domcontentloaded'
        });

    }

    // Enters the username.
    async enterUsername(username: string): Promise<void> {

        await this.usernameTextbox.fill(username);

    }

    // Enters the password.
    async enterPassword(password: string): Promise<void> {

        await this.passwordTextbox.fill(password);

    }

    // Clears the username field.
    async clearUsername(): Promise<void> {

        await this.usernameTextbox.clear();

    }

    // Clears the password field.
    async clearPassword(): Promise<void> {

        await this.passwordTextbox.clear();

    }

    // Clicks the Login button.
    async clickLoginButton(): Promise<void> {

        await this.loginButton.click();

    }

    // Submits the login form without entering credentials.
    async submitLogin(): Promise<void> {

        await this.clickLoginButton();

    }

    // Performs login using the provided credentials.
    async login(username: string, password: string): Promise<void> {

        await this.enterUsername(username);
        await this.enterPassword(password);

        await this.clickLoginButton();

    }

    // Returns the displayed error message.
    async getErrorMessage(): Promise<string> {

        return (await this.errorMessage.textContent())?.trim() ?? '';

    }

    // Verifies that the invalid credentials message is displayed.
    async verifyErrorMessageVisible(): Promise<void> {

        await expect(this.errorMessage).toBeVisible();

    }

    // Returns the number of required field validation messages.
    async getRequiredFieldMessageCount(): Promise<number> {

        return await this.requiredFieldMessages.count();

    }

    // Verifies the number of required field validation messages.
    async verifyRequiredFieldValidation(expectedCount: number): Promise<void> {

        await expect(this.requiredFieldMessages)
            .toHaveCount(expectedCount);

    }

    // Verifies that the Login page is displayed.
    async verifyLoginPageLoaded(): Promise<void> {

        await expect(this.page).toHaveURL(/login/);

        await expect(this.loginButton).toBeVisible();

    }

}