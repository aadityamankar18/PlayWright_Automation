const {test, expect} = require("@playwright/test");

test.only('First Playwright test', async ({browser})=>
{ 
    //playwright code -
    const context =  await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const signInButton = page.locator("#login");
    const cardTitles = page.locator(".card-body b");
  
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await userName.fill("aadityamankar18@gmail.com");
    await password.fill("Pass@123");
    await signInButton.click();

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());

    await cardTitles.first().waitFor();
    const allTitles = await cardTitles.allTextContents();
    await page.waitForLoadState('networkidle');

    await page.locator("//button[normalize-space()='Sign Out']").click();


    console.log(allTitles); 


    




    

    
    




});
