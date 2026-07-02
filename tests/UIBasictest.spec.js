const {test, expect} = require("@playwright/test");

test('First Playwright test', async ({browser})=>
{ 
    //playwright code -
    const context =  await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const signInButton = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    const dropdown = await page.locator("select.form-control");
    const radioButton = await page.locator("span.checkmark");
    const documentLink = await page.locator("[href*='documents-request']");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await userName.fill("rahulshetty");
    await password.fill("Learning");
    await signInButton.click();
    console.log(await page.locator("[style*='block']").inputValue());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("Learning@830$3mK2");

    //UI COntrols - SELECT, CHECKBOX, RADIO BUTTONS
    await dropdown.selectOption("consult");
    //await page.pause();  - inspector for debug

    await radioButton.last().click();
    await page.locator("#okayBtn").click();
    console.log(await radioButton.last().isChecked());
    await expect(radioButton.last()).toBeChecked();

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();


    await expect (documentLink).toHaveAttribute("class", "blinkingText");


    //await page.pause(); //- inspector for debug


    await signInButton.click();

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


});

test.only('Child Window Handling', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const documentLink = await page.locator("[href*='documents-request']");


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  //listen for any new page pending, rejected, fulfilled.
        documentLink.click(),
  
    ])   // new page is opened.

    const text = await newPage.locator(".red").textContent();
    console.log(text);

    const domainName = text.split("@")[1].split(" ")[0];
    console.log(domainName);


    await page.locator("#username").fill(domainName);
    await page.locator("#username").textContent();
    await page.pause();
    console.log(await page.locator("#username").textContent());
    

    
     





})