import { expect, Locator, Page } from '@playwright/test';

export class PIMPage {

    // Locators
    private readonly pimMenu: Locator;
    private readonly employeeListHeading: Locator;
    private readonly employeeNameTextbox: Locator;
    private readonly employeeIdTextbox: Locator;
    private readonly searchButton: Locator;
    private readonly resetButton: Locator;
    private readonly resultTable: Locator;

    constructor(private readonly page: Page) {

        this.pimMenu = page.getByRole('link', {
            name: 'PIM'
        });

        this.employeeListHeading = page.getByRole('heading', {
            name: 'Employee Information'
        });

        this.employeeNameTextbox = page
            .locator('.oxd-input')
            .nth(1);

        this.employeeIdTextbox = page
            .locator('label:has-text("Employee Id")')
            .locator('..')
            .locator('..')
            .locator('input');
            
        this.searchButton = page.getByRole('button', {
            name: 'Search'
        });

        this.resetButton = page.getByRole('button', {
            name: 'Reset'
        });

        this.resultTable = page.locator('.oxd-table');

    }

    // Navigates to the PIM module.
    async navigateToPIM(): Promise<void> {

        await this.pimMenu.click();

    }

    // Verifies that the Employee List page is displayed.
    async verifyEmployeeListLoaded(): Promise<void> {

        await expect(this.page).toHaveURL(/pim/);

        await expect(this.employeeListHeading)
            .toBeVisible();

    }

    // Enters the employee name.
    async enterEmployeeName(employeeName: string): Promise<void> {

        await this.employeeNameTextbox.fill(employeeName);

    }

    // Enters the employee ID.
    async enterEmployeeId(employeeId: string): Promise<void> {

        await this.employeeIdTextbox.fill(employeeId);

    }

    // Clicks the Search button.
    async searchEmployee(): Promise<void> {

        await this.searchButton.click();

    }

    // Searches using the employee name.
    async searchByEmployeeName(employeeName: string): Promise<void> {

        await this.enterEmployeeName(employeeName);

        await this.searchEmployee();

    }

    // Searches using the employee ID.
    async searchByEmployeeId(employeeId: string): Promise<void> {

        await this.enterEmployeeId(employeeId);

        await this.searchEmployee();

    }

    // Resets all search filters.
    async resetSearch(): Promise<void> {

        await this.resetButton.click();

    }

    // Verifies that the employee table is displayed.
    async verifySearchResultsDisplayed(): Promise<void> {

        await expect(this.resultTable)
            .toBeVisible();

    }

}