import { expect, Locator, Page } from '@playwright/test';

export class MyInfoPage {

    // Locators
    private readonly personalDetailsHeading: Locator;
    private readonly firstNameTextbox: Locator;
    private readonly middleNameTextbox: Locator;
    private readonly lastNameTextbox: Locator;
    private readonly nicknameTextbox: Locator;
    private readonly employeeIdTextbox: Locator;
    private readonly saveButton: Locator;
    private readonly successToast: Locator;

    constructor(private readonly page: Page) {

        this.personalDetailsHeading = page.getByRole('heading', {
            name: 'Personal Details'
        });

        this.firstNameTextbox = page.locator('input[name="firstName"]');

        this.middleNameTextbox = page.locator('input[name="middleName"]');

        this.lastNameTextbox = page.locator('input[name="lastName"]');

        this.nicknameTextbox = page.locator(
            'form input').nth(3);

        this.employeeIdTextbox = page.locator(
            'form input').nth(4);

        this.saveButton = page.locator(
            'button[type="submit"]').first();

        this.successToast = page.locator('.oxd-toast');
    }

    // Verifies that the My Info page is loaded.
    async verifyMyInfoLoaded(): Promise<void> {

        await expect(this.page)
            .toHaveURL(/viewPersonalDetails/);

        await expect(this.personalDetailsHeading)
            .toBeVisible();

    }

    // Updates the first name.
    async updateFirstName(firstName: string): Promise<void> {

        await this.firstNameTextbox.clear();

        await this.firstNameTextbox.fill(firstName);

    }

    // Updates the middle name.
    async updateMiddleName(middleName: string): Promise<void> {

        await this.middleNameTextbox.clear();

        await this.middleNameTextbox.fill(middleName);

    }

    // Updates the last name.
    async updateLastName(lastName: string): Promise<void> {

        await this.lastNameTextbox.clear();

        await this.lastNameTextbox.fill(lastName);

    }

    // Updates the nickname.
    async updateNickname(nickname: string): Promise<void> {

        await this.nicknameTextbox.clear();

        await this.nicknameTextbox.fill(nickname);

    }

    // Updates the employee ID.
    async updateEmployeeId(employeeId: string): Promise<void> {

        await this.employeeIdTextbox.clear();

        await this.employeeIdTextbox.fill(employeeId);

    }

    // Updates all personal information.
    async updatePersonalDetails(
        firstName: string,
        middleName: string,
        lastName: string,
        nickname: string,
        employeeId: string
    ): Promise<void> {

        await this.updateFirstName(firstName);

        await this.updateMiddleName(middleName);

        await this.updateLastName(lastName);

        await this.updateNickname(nickname);

        await this.updateEmployeeId(employeeId);

    }

    // Saves the personal details.
    async savePersonalDetails(): Promise<void> {

        await this.saveButton.click();

    }

    // Verifies that the success message is displayed.
    async verifySuccessMessage(): Promise<void> {

        await expect(this.successToast)
            .toContainText('Successfully Updated');

    }

    // Returns the first name.
    async getFirstName(): Promise<string> {

        return await this.firstNameTextbox.inputValue();

    }

    // Returns the middle name.
    async getMiddleName(): Promise<string> {

        return await this.middleNameTextbox.inputValue();

    }

    // Returns the last name.
    async getLastName(): Promise<string> {

        return await this.lastNameTextbox.inputValue();

    }

    // Returns the nickname.
    async getNickname(): Promise<string> {

        return await this.nicknameTextbox.inputValue();

    }

    // Returns the employee ID.
    async getEmployeeId(): Promise<string> {

        return await this.employeeIdTextbox.inputValue();

    }

}