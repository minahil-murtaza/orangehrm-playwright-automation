import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { MyInfoPage } from '../pages/MyInfoPage';

import { credentials } from '../test-data/credentials';
import { personalData } from '../test-data/profileData';
import { captureScreenshot } from '../utils/screenshotHelper';

test.describe('My Info Module', () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let myInfoPage: MyInfoPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        myInfoPage = new MyInfoPage(page);

        await loginPage.navigate();

        await loginPage.login(
            credentials.validUsername,
            credentials.validPassword
        );

        await dashboardPage.navigateToMyInfo();

        await myInfoPage.verifyMyInfoLoaded();

    });

    // TC_MyInfo_001
    test('TC_MyInfo_001 - Verify My Info Navigation', async ({ page }) => {

        await myInfoPage.verifyMyInfoLoaded();

        await captureScreenshot(
            page,
            'TC_MyInfo_001_MyInfo_Page'
        );

    });

    // TC_MyInfo_002
    test('TC_MyInfo_002 - Verify Personal Details Page', async ({ page }) => {

        await myInfoPage.verifyMyInfoLoaded();

        await captureScreenshot(
            page,
            'TC_MyInfo_002_Personal_Details'
        );

    });

    // TC_MyInfo_003
    test('TC_MyInfo_003 - Update Personal Details', async ({ page }) => {

        await myInfoPage.updatePersonalDetails(

            personalData.firstName,
            personalData.middleName,
            personalData.lastName,
            personalData.nickname,
            personalData.employeeId

        );

        await captureScreenshot(
            page,
            'TC_MyInfo_003_Updated_Details'
        );

    });

    // TC_MyInfo_004
    test('TC_MyInfo_004 - Save Personal Details', async ({ page }) => {

        await myInfoPage.updatePersonalDetails(

            personalData.firstName,
            personalData.middleName,
            personalData.lastName,
            personalData.nickname,
            personalData.employeeId

        );

        await myInfoPage.savePersonalDetails();

        await captureScreenshot(
            page,
            'TC_MyInfo_004_Save_Details'
        );

    });

    // TC_MyInfo_005
    test('TC_MyInfo_005 - Verify Success Message', async ({ page }) => {

        await myInfoPage.updatePersonalDetails(

            personalData.firstName,
            personalData.middleName,
            personalData.lastName,
            personalData.nickname,
            personalData.employeeId

        );

        await myInfoPage.savePersonalDetails();

        await myInfoPage.verifySuccessMessage();

        await captureScreenshot(
            page,
            'TC_MyInfo_005_Success_Message'
        );

    });

    // TC_MyInfo_006
    test('TC_MyInfo_006 - Verify Updated Data Persists', async ({ page }) => {

        await myInfoPage.updatePersonalDetails(

            personalData.firstName,
            personalData.middleName,
            personalData.lastName,
            personalData.nickname,
            personalData.employeeId

        );

        await myInfoPage.savePersonalDetails();

        await myInfoPage.verifySuccessMessage();

        await page.reload();

        await myInfoPage.verifyMyInfoLoaded();

        await captureScreenshot(
            page,
            'TC_MyInfo_006_Data_Persistence'
        );

    });

});