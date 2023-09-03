import { test, expect } from '@playwright/test'

// test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//   });

test('basic auth success', async ({browser}) => { 

    const context = await browser.newContext(
        {
          httpCredentials:
          {
            username: 'admin',
            password: 'admin'
          }  
        })

    const page  = await context.newPage();
    await page.goto('/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.locator("div.example>h3")).toHaveText("Basic Auth")
});

test('basic auth incorrect username', async ({browser}) => { 

    const context = await browser.newContext(
        {
          httpCredentials:
          {
            username: 'incorrect',
            password: 'admin'
          }  
        })

    const page  = await context.newPage();
    await page.goto('/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.locator("body")).toHaveText("Not authorized")
});

test('basic auth incorrect password', async ({browser}) => { 

    const context = await browser.newContext(
        {
          httpCredentials:
          {
            username: 'admin',
            password: 'incorrect'
          }  
        })

    const page  = await context.newPage();
    await page.goto('/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.locator("body")).toHaveText("Not authorized")
});

test('basic auth blank username', async ({browser}) => { 

    const context = await browser.newContext(
        {
          httpCredentials:
          {
            username: '',
            password: 'admin'
          }  
        })

    const page  = await context.newPage();
    await page.goto('/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.locator("body")).toHaveText("Not authorized")
});

test('basic auth blank password', async ({browser}) => { 

    const context = await browser.newContext(
        {
          httpCredentials:
          {
            username: 'admin',
            password: ''
          }  
        })

    const page  = await context.newPage();
    await page.goto('/');
    await page.getByRole('link', { name: 'Basic Auth' }).click();
    await expect(page.locator("body")).toHaveText("Not authorized")
});
