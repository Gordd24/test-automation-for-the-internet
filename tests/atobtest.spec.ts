import { test, expect } from '@playwright/test';

test('has title and header', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);

  //expect a header "to be visible"
  await expect(page.getByText('Welcome to the-internet')).toBeVisible();
});

test('has routed to a/b page', async ({page}) => { 
    await page.goto('/');
  
    //routes to ab page
    await page.getByRole('link', {name: 'A/B Testing'}).click()
    
    //expect a header either "A/B Test Variation 1" or A/B Test Variation 1 "A/B Test Control"
    let head3 = await page.getByRole('heading', { name: 'A/B Test Variation 1' }).isVisible();
    if (head3 === true){
        await expect(page.getByRole('heading', { name: 'A/B Test Variation 1' })).toBeVisible();
    }
    else{
        await expect(page.getByRole('heading', { name: 'A/B Test Control' })).toBeVisible();
    }
 })