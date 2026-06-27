import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import { credentials } from '../test-data/credentials';
import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('Dashboard Module', () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);

        // Login before every dashboard test.
        await loginPage.navigate();

        await loginPage.login(
            credentials.validUsername,
            credentials.validPassword
        );

        await dashboardPage.verifyDashboardLoaded();

    });

    // TC_Dashboard_001
    // Verify successful navigation to the Dashboard.
    test('TC_Dashboard_001 - Verify Dashboard Navigation', async ({ page }) => {

        timeout: 60000;

        await dashboardPage.verifyDashboardLoaded();

        await captureScreenshot(
            page,
            'TC_Dashboard_001_Dashboard'
        );

    });

    // TC_Dashboard_002
    // Verify all major dashboard components are visible.
    test('TC_Dashboard_002 - Verify Dashboard Components', async ({ page }) => {

        await dashboardPage.verifyDashboardHeading();

        await dashboardPage.verifySideMenuVisible();

        await dashboardPage.verifyUserMenuVisible();

        await dashboardPage.verifyQuickLaunchVisible();

        await captureScreenshot(
            page,
            'TC_Dashboard_002_Dashboard_Components'
        );

    });

    // TC_Dashboard_003
    // Verify navigation to the My Info page.
    test('TC_Dashboard_003 - Verify My Info Navigation', async ({ page }) => {

        await dashboardPage.navigateToMyInfo();

        await expect(page).toHaveURL(/viewPersonalDetails/);

        await captureScreenshot(
            page,
            'TC_Dashboard_003_My_Info'
        );

    });

    // TC_Dashboard_004
    // Verify the user dropdown menu.
    test('TC_Dashboard_004 - Verify User Dropdown', async ({ page }) => {

        await dashboardPage.openUserMenu();

        await dashboardPage.verifyLogoutOptionVisible();

        await captureScreenshot(
            page,
            'TC_Dashboard_004_User_Dropdown'
        );

    });

    // TC_Dashboard_005
    // Verify logout functionality.
    test('TC_Dashboard_005 - Verify Logout', async ({ page }) => {

        await dashboardPage.logout();

        await expect(page).toHaveURL(/login/);

        await captureScreenshot(
            page,
            'TC_Dashboard_005_Logout'
        );

    });

});