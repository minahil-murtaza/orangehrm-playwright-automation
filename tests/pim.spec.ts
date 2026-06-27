import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PIMPage } from '../pages/PIMPage';

import { credentials } from '../test-data/credentials';
import { pimData } from '../test-data/PIMData';

import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('PIM Module', () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let pimPage: PIMPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        pimPage = new PIMPage(page);

        // Login to the application.
        await loginPage.navigate();

        await loginPage.login(
            credentials.validUsername,
            credentials.validPassword
        );

        // Navigate to the PIM module.
        await pimPage.navigateToPIM();

        await pimPage.verifyEmployeeListLoaded();

    });

    // TC_PIM_001
    // Verify successful navigation to the PIM module.
    test('TC_PIM_001 - Verify PIM Navigation', async ({ page }) => {

        await pimPage.verifyEmployeeListLoaded();

        await captureScreenshot(
            page,
            'TC_PIM_001_PIM_Page'
        );

    });

    // TC_PIM_002
    // Verify Employee Information page is displayed.
    test('TC_PIM_002 - Verify Employee Information Page', async ({ page }) => {

        await pimPage.verifyEmployeeListLoaded();

        await captureScreenshot(
            page,
            'TC_PIM_002_Employee_Information'
        );

    });

    // TC_PIM_003
    // Verify employee search by name.
    test('TC_PIM_003 - Search Employee by Name', async ({ page }) => {

        await pimPage.searchByEmployeeName(
            pimData.employeeName
        );

        await pimPage.verifySearchResultsDisplayed();

        await captureScreenshot(
            page,
            'TC_PIM_003_Search_By_Name'
        );

    });

    // TC_PIM_004
    // Verify employee search by Employee ID.
    test('TC_PIM_004 - Search Employee by Employee ID', async ({ page }) => {

        await pimPage.searchByEmployeeId(
            pimData.employeeId
        );

        await pimPage.verifySearchResultsDisplayed();

        await captureScreenshot(
            page,
            'TC_PIM_004_Search_By_ID'
        );

    });

    // TC_PIM_005
    // Verify reset search filters.
    test('TC_PIM_005 - Reset Search Filters', async ({ page }) => {

        await pimPage.searchByEmployeeName(
            pimData.employeeName
        );

        await pimPage.resetSearch();

        await captureScreenshot(
            page,
            'TC_PIM_005_Reset_Search'
        );

    });

    // TC_PIM_006
    // Verify employee result table is displayed.
    test('TC_PIM_006 - Verify Search Result Table', async ({ page }) => {

        await pimPage.verifySearchResultsDisplayed();

        await captureScreenshot(
            page,
            'TC_PIM_006_Result_Table'
        );

    });

});