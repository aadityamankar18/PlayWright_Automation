const { test, expect } = require('@playwright/test');
const { moreValidationsObjectRepository } = require('../wrapperFunction/moreValidations.spec');

test('Pop-up validations', async ({ page }) => {

    const repo = new moreValidationsObjectRepository(page);

    await repo.gotoOffers();
    await repo.gotoGoogle();

    //Back, Forward
    await page.goBack();
    await page.goForward();
    await page.goBack();
    
    //to check hidden elements
    await expect(repo.displayedText).toBeVisible();
    await repo.hideTextBox.click();
    await expect(repo.displayedText).toBeHidden();

    //to handle pop-ups
    await repo.enterName.fill("Aaditya");
    await repo.confirmBtn.click();
    page.on("dialog", dialog => dialog.accept());
    await repo.confirmBtn.click();
    page.on("dialog", dialog => dialog.dismiss());


    //mouse hovers
    await repo.hoverBtn.hover();

    //frames
    const framesPage = page.frameLocator("#courses-iframe");

    await framesPage.locator("li a[href='lifetime-access']:visible").click();
    const textCheck = await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split("")[1]);







});