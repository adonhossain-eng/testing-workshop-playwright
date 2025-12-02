import {expect, test} from "@playwright/test";

// 5 days a week, no irregular hours, full year
test(`Ticket 1-1`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    await expect(page.locator(`.govuk-heading-xl`)).toHaveText(`Calculate holiday entitlement`);
    await page.getByRole('button', { name: 'Start now' }).click();
    // No irregular hours
    await expect(page.locator(`.gem-c-radio__heading-text`)).toHaveText(`Does the employee work irregular hours or for part of the year?`);
    await page.getByRole('radio', { name: 'No' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Pay based on days worked
    await expect(page.locator(`.gem-c-radio__heading-text`)).toHaveText(`Is the holiday entitlement based on:`);
    await page.getByRole('radio', { name: 'days worked per week' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Calculate leave for full leave year
    await expect(page.locator(`.gem-c-radio__heading-text`)).toHaveText(`Do you want to work out holiday:`);
    await page.getByRole('radio', { name: 'for a full leave year' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    // 5 days worked per week
    await expect(page.locator(`.govuk-label--l`)).toHaveText(`Number of days worked per week?`);
    await page.getByRole('textbox', { name: 'Number of days worked per' }).click();
    await page.getByRole('textbox', { name: 'Number of days worked per' }).fill('5');
    await page.getByRole('button', { name: 'Continue' }).click();
    // We have our result for this case
    await page.getByText('The statutory holiday').click();
});
// 3 days a week, no irregular hours, full year
test(`Ticket 1-2`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    await expect(page.locator(`.govuk-heading-xl`)).toHaveText(`Calculate holiday entitlement`);
    await page.locator('.govuk-button--start').click();
    // No irregular hours
    await page.getByRole('radio', { name: 'No' }).check();
    await page.locator('.gem-c-button--bottom-margin').click();
    // Pay based on days worked
    await page.locator("#response-0").check();
    await page.getByRole('button', { name: 'Continue' }).click();
    // Calculate leave for full leave year
    await page.getByRole('radio', { name: 'for a full leave year' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    // 5 days worked per week
    await page.getByRole('textbox', { name: 'Number of days worked per' }).click();
    await page.getByRole('textbox', { name: 'Number of days worked per' }).fill('3');
    await page.getByRole('button', { name: 'Continue' }).click();
    // We have our result for this case
    await page.getByText('The statutory holiday').click();
});
