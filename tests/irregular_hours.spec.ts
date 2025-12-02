import {test} from '@playwright/test';

// Irregular hours, custom leave year

test(`Custom`, async ({ page }) => {
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    await page.getByRole('heading', { name: 'Calculate holiday entitlement' }).click();
    await page.getByRole('button', { name: 'Start now' }).click();
    await page.getByRole('heading', { name: 'Does the employee work' }).click();
    await page.getByRole('radio', { name: 'Yes' }).check();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('heading', { name: 'When does the leave year' }).click();
    await page.getByRole('textbox', { name: 'Day' }).click();
    await page.getByRole('textbox', { name: 'Day' }).fill('17');
    await page.getByRole('textbox', { name: 'Month' }).click();
    await page.getByRole('textbox', { name: 'Month' }).fill('11');
    await page.getByRole('textbox', { name: 'Year' }).click();
    await page.getByRole('textbox', { name: 'Year' }).fill('2025');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByText('How many hours has the').click();
    await page.getByRole('textbox', { name: 'How many hours has the' }).click();
    await page.getByRole('textbox', { name: 'How many hours has the' }).fill('120');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('heading', { name: 'Calculate holiday entitlement' }).click();
    await page.getByText('The statutory entitlement for').click();
});