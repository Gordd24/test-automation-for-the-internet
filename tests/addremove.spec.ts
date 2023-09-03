import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

//positive scenarios  
test('should be able to add and remove elements', async ({page}) => { 
    //routes to ab page
    await page.getByRole('link', {name: 'Add/Remove Elements'}).click()
    
    await expect(page.getByText('Add/Remove Elements')).toBeVisible();
    await page.getByRole('button', { name: 'Add Element' }).click({
        clickCount: 3
      });
    await expect(page.getByRole('button', { name: 'Delete' }).first()).toBeTruthy
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await page.getByRole('button', { name: 'Delete' }).first().click();
    await expect(page.getByRole('button', { name: 'Delete' }).first()).toBeFalsy;
 });
 //negative scenarios
test('delete button should not be visible when no element is added yet', async ({page}) => { 
  //routes to ab page
  await page.getByRole('link', {name: 'Add/Remove Elements'}).click()
  await expect(page.getByRole('button', { name: 'Delete' }).first()).toBeFalsy;
});