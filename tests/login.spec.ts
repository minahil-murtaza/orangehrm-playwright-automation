import { test, expect, Page } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

import { credentials } from '../test-data/credentials';
import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('Authentication Module', () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);

        await loginPage.navigate();

    });

    // Common validation for unsuccessful login attempts.
    async function verifyInvalidLogin(
        username: string,
        password: string,
        page: Page,
        screenshotName: string
    ): Promise<void> {

        await loginPage.login(username, password);

        await loginPage.verifyErrorMessageVisible();

        expect(await loginPage.getErrorMessage())
            .toBe('Invalid credentials');

        await captureScreenshot(page, screenshotName);

    }

    // TC_Login_001
    // Verify successful login with valid credentials.
    test('TC_Login_001 - Verify Successful Login', async ({ page }) => {

        await loginPage.login(
            credentials.validUsername,
            credentials.validPassword
        );

        await dashboardPage.verifyDashboardLoaded();
        await dashboardPage.verifyUserMenuVisible();

        await expect(page).toHaveURL(/dashboard/);

        await captureScreenshot(
            page,
            'TC_Login_001_Successful_Login'
        );

    });

    // TC_Login_002
    // Verify login using an invalid username.
    test('TC_Login_002 - Verify Login with Invalid Username', async ({ page }) => {

        await verifyInvalidLogin(
            credentials.invalidUsername,
            credentials.validPassword,
            page,
            'TC_Login_002_Invalid_Username'
        );

    });

    // TC_Login_003
    // Verify login using an invalid password.
    test('TC_Login_003 - Verify Login with Invalid Password', async ({ page }) => {

        await verifyInvalidLogin(
            credentials.validUsername,
            credentials.invalidPassword,
            page,
            'TC_Login_003_Invalid_Password'
        );

    });

    // TC_Login_004
    // Verify login using invalid username and password.
    test('TC_Login_004 - Verify Login with Invalid Credentials', async ({ page }) => {

        await verifyInvalidLogin(
            credentials.invalidUsername,
            credentials.invalidPassword,
            page,
            'TC_Login_004_Invalid_Credentials'
        );

    });

    // TC_Login_005
    // Verify validation when username is left empty.
    test('TC_Login_005 - Verify Empty Username Validation', async ({ page }) => {

        await loginPage.enterPassword(credentials.validPassword);
        await loginPage.submitLogin();

        await loginPage.verifyRequiredFieldValidation(1);

        await captureScreenshot(
            page,
            'TC_Login_005_Empty_Username'
        );

    });

    // TC_Login_006
    // Verify validation when password is left empty.
    test('TC_Login_006 - Verify Empty Password Validation', async ({ page }) => {

        await loginPage.enterUsername(credentials.validUsername);
        await loginPage.submitLogin();

        await loginPage.verifyRequiredFieldValidation(1);

        await captureScreenshot(
            page,
            'TC_Login_006_Empty_Password'
        );

    });

    // TC_Login_007
    // Verify validation when both username and password are empty.
    test('TC_Login_007 - Verify Empty Credentials Validation', async ({ page }) => {

        await loginPage.submitLogin();

        await loginPage.verifyRequiredFieldValidation(2);

        await captureScreenshot(
            page,
            'TC_Login_007_Empty_Credentials'
        );

    });

});