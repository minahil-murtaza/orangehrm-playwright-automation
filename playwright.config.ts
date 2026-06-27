import { defineConfig } from '@playwright/test';

export default defineConfig({

    // Location of all test files
    testDir: './tests',

    // Execute tests sequentially
    fullyParallel: false,

    // Run one test at a time
    workers: 1,

    // Retry failed tests only in CI environments
    retries: process.env.CI ? 2 : 0,

    // Console reporter only
    reporter: 'list',

    use: {

        // Base URL
        baseURL: 'https://opensource-demo.orangehrmlive.com/',

        // Keep browser visible
        headless: false,

        // Browser window size
        viewport: {
            width: 1366,
            height: 768
        },

        // Disable Playwright generated artifacts
        screenshot: 'off',

        video: 'off',

        trace: 'off',

        // Ignore HTTPS certificate issues
        ignoreHTTPSErrors: true,

        // Launch options
        launchOptions: {
            // slowMo: 100
        },

        // Action timeout
        actionTimeout: 45000,

        // Navigation timeout
        navigationTimeout: 90000

    }

});