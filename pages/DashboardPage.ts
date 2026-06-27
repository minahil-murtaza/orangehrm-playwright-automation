import { expect, Locator, Page } from '@playwright/test';

export class DashboardPage {

    // Locators
    private readonly dashboardHeading: Locator;
    private readonly sideMenu: Locator;
    private readonly userDropdown: Locator;
    private readonly quickLaunchSection: Locator;
    private readonly myInfoMenu: Locator;
    private readonly logoutLink: Locator;

    constructor(private readonly page: Page) {

        this.dashboardHeading = page.getByRole('heading', {
            name: 'Dashboard'
        });

        this.sideMenu = page.locator('.oxd-sidepanel');

        this.userDropdown = page.locator('.oxd-userdropdown-tab');

        this.quickLaunchSection = page.locator('.orangehrm-quick-launch');

        this.myInfoMenu = page.getByRole('link', {
            name: 'My Info'
        });

        this.logoutLink = page.getByRole('menuitem', {
            name: 'Logout'
        });

    }

    // Verifies that the Dashboard page is loaded.
    async verifyDashboardLoaded(): Promise<void> {

        await expect(this.page).toHaveURL(/dashboard/);

        await expect(this.dashboardHeading).toBeVisible();

    }

    // Verifies the Dashboard heading.
    async verifyDashboardHeading(): Promise<void> {

        await expect(this.dashboardHeading).toHaveText('Dashboard');

    }

    // Verifies the left navigation panel.
    async verifySideMenuVisible(): Promise<void> {

        await expect(this.sideMenu).toBeVisible();

    }

    // Verifies the user profile menu.
    async verifyUserMenuVisible(): Promise<void> {

        await expect(this.userDropdown).toBeVisible();

    }

    // Verifies the Quick Launch section.
    async verifyQuickLaunchVisible(): Promise<void> {

        await expect(this.quickLaunchSection).toBeVisible();

    }

    // Opens the user profile menu.
    async openUserMenu(): Promise<void> {

        await this.userDropdown.click();

    }

    // Verifies the Logout option is displayed.
    async verifyLogoutOptionVisible(): Promise<void> {

        await expect(this.logoutLink).toBeVisible();

    }

    // Navigates to the My Info page.
    async navigateToMyInfo(): Promise<void> {

        await this.myInfoMenu.click();

    }

    // Logs out the current user.
    async logout(): Promise<void> {

        await this.openUserMenu();

        await this.verifyLogoutOptionVisible();

        await this.logoutLink.click();

    }

}