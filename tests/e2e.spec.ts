import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MyInfoPage } from '../pages/MyInfoPage';

import { credentials } from '../test-data/credentials';
import { personalData } from '../test-data/profileData';

import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('End-to-End Workflow', () => {

    test('TC_E2E_001 - Verify Complete User Workflow', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const myInfoPage = new MyInfoPage(page);

        // Step 1 - Open application
        await loginPage.navigate();

        // Step 2 - Login
        await loginPage.login(
            credentials.validUsername,
            credentials.validPassword
        );

        // Step 3 - Verify dashboard
        await dashboardPage.verifyDashboardLoaded();

        await captureScreenshot(
            page,
            'TC_E2E_001_Dashboard'
        );

        // Step 4 - Navigate to My Info
        await dashboardPage.navigateToMyInfo();

        await myInfoPage.verifyMyInfoLoaded();

        await captureScreenshot(
            page,
            'TC_E2E_001_MyInfo'
        );

        // Step 5 - Update profile
        await myInfoPage.updatePersonalDetails(
            personalData.firstName,
            personalData.middleName,
            personalData.lastName,
            personalData.nickname,
            personalData.employeeId
        );

        // Step 6 - Save changes
        await myInfoPage.savePersonalDetails();

        // Step 7 - Verify success
        await myInfoPage.verifySuccessMessage();

        await captureScreenshot(
            page,
            'TC_E2E_001_Profile_Updated'
        );

        // Step 8 - Logout
        await dashboardPage.logout();

        await loginPage.verifyLoginPageLoaded();

        await captureScreenshot(
            page,
            'TC_E2E_001_Logout'
        );

    });

});