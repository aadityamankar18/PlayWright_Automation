const {test, expect} = require("@playwright/test");
const { ObjectRepository } = require("../wrapperFunction/objectRepository");

test('Playwright Special Locators', async ({browser})=>
{ 
    //playwright code -
    const context =  await browser.newContext();
    const page = await context.newPage();
    const repo = new ObjectRepository(page);

    await repo.gotoAngularPractice();
    console.log(await page.title());

    await repo.checkIceCreamCheckbox.click();
    await repo.employedRadioButton.check();
    await repo.genderDropdown.selectOption('Female');
    await repo.userPassword.fill("repo.userPassword");
    await repo.submitButton.click();
    await repo.submitMsg.isVisible();
    await repo.shopLink.click();
    await repo.cardTitlesAddButton.click();




});
