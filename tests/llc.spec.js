const { test } = require("@playwright/test");
const { LlcObjectRepository } = require("../wrapperFunction/llc.spec");

test('Playwright Special Locators', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const repo = new LlcObjectRepository(page);

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
