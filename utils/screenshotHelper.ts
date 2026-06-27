import { Page } from '@playwright/test';
import * as fs from 'fs';

/**
 * Captures a full-page screenshot.
 * Creates the screenshots folder if it does not exist.
 */
export async function captureScreenshot(
    page: Page,
    fileName: string
): Promise<void> {

    const folderPath = 'screenshots';

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    await page.screenshot({
        path: `${folderPath}/${fileName}.png`,
        fullPage: true
    });

}