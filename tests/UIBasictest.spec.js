const {test, expect} = require("@playwright/test");
const { ObjectRepository } = require("../wrapperFunction/objectRepository");

test('First Playwright test', async ({browser})=>
{ 
    //playwright code -
    const context =  await browser.newContext();
    const page = await context.newPage();
    const repo = new ObjectRepository(page);

    await repo.gotoPractice();
    console.log(await page.title());
    await repo.userName.fill("rahulshetty");
    await repo.passwordPractice.fill("Learning");
    await repo.signInButton.click();

    await expect(repo.err).toBeVisible();
    console.log(await repo.err.textContent());
    await expect(repo.err).toContainText("Incorrect");
 
    await repo.userName.fill("");
    await repo.userName.fill("rahulshettyacademy");
    await repo.passwordPractice.fill("");
    await repo.passwordPractice.fill("Learning@830$3mK2");
    await repo.signInButton.click();

    //UI COntrols - SELECT, CHECKBOX, RADIO BUTTONS
    await repo.dropdown.selectOption("consult");

    await repo.radioButton.last().click();
    await repo.okayBtn.click();

    console.log(await repo.radioButton.last().isChecked());
    await expect(repo.radioButton.last()).toBeChecked();

    await repo.terms.click();
    await expect(repo.terms).toBeChecked();
    await repo.terms.uncheck();
    expect(await repo.terms.isChecked()).toBeFalsy();

    await expect(repo.documentLink).toHaveAttribute("class", "blinkingText");

    await repo.signInButton.click();

    console.log(await repo.cardTitlesA.first().textContent());
    console.log(await repo.cardTitlesA.nth(1).textContent());

    const allTitles = await repo.cardTitlesA.allTextContents();
    console.log(allTitles);


});

test('Child Window Handling', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const repo = new ObjectRepository(page);
    await repo.gotoPractice();


    const [newPage] = await Promise.all([
        context.waitForEvent('page'),  //listen for any new page pending, rejected, fulfilled.
        repo.documentLink.click(),
  
    ])   // new page is opened.

    const text = await newPage.locator(".red").textContent();
    console.log(text);

    const domainName = text.split("@")[1].split(" ")[0];
    console.log(domainName);


    await repo.userName.fill(domainName);
    await repo.userName.textContent();
    // await page.pause();
    console.log(await repo.userName.textContent());
    

    
     





})