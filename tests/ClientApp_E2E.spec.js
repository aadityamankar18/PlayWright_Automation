const {test, expect} = require("@playwright/test");
const { ClientAppE2EObjectRepository } = require("../wrapperFunction/ClientApp_E2E.spec");

test('First Playwright test', async ({browser})=>
{ 
    //playwright code -
    const context =  await browser.newContext();
    const page = await context.newPage();
    const repo = new ClientAppE2EObjectRepository(page);
    const productName = "ZARA COAT 3";

    await repo.gotoClient();
    console.log(await page.title());
    await repo.userEmail.fill(repo.email);
    await repo.password.fill(repo.userPassW);
    await repo.loginBtn.click();

    await repo.cardTitles.first().waitFor();
    console.log(await repo.cardTitles.first().textContent());

    const allTitles = await repo.cardTitles.allTextContents();
    await page.waitForLoadState('networkidle');
    console.log(allTitles);

    const count = await repo.products.count();
    for ( let i = 0; i < count; ++i) {
        if ((await repo.products.nth(i).locator('b').textContent()).trim() === productName) {
            await repo.products.nth(i).locator('button:has-text("Add To Cart")').click();
            break;
        }
    }

    await repo.cartLink.click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    
    await repo.checkoutButton.click();
    //await page.pause();
    
    await repo.checkoutInput2.fill("123");
    await repo.checkoutInput3.fill("Aaditya Mankar");
    await repo.countryInput.type("Ind");
    await repo.dropDown.waitFor();
    const optionsCount = await repo.dropDown.locator("button").count();

    for (let i =0;i<optionsCount;++i) {

        const text = (await repo.dropDown.locator("button").nth(i).textContent()).trim();
        if (text === "India") {
            await repo.dropDown.locator("button").nth(i).click();
            break;
        }
    }
    //await page.pause();

    expect(await repo.shippingInfoText.first()).toHaveText(repo.email);
    await repo.placeOrderBtn.click();

    expect(await repo.thankYouText).toHaveText(" Thankyou for the order. ");
    const printOrderID = await repo.orderID.textContent();
    //const cleanOrderId = printOrderID.replace(/[| ]/g, "");     //Order ID stored HERE
    console.log("Order ID: " + printOrderID);


    await repo.ordersBtn.click();
    // Wait for orders rows to appear (SPA-friendly) instead of relying on networkidle
    await expect(repo.rows.first()).toBeVisible();

    const rows = await repo.rows.count();
    for (let i = 0; i < rows; ++i) {
        const rowOrderID = await repo.rows.nth(i).locator("th").textContent();
        console.log("Row Order ID: " + rowOrderID);
        if (rowOrderID && printOrderID.includes(rowOrderID.trim())) {
            await repo.rows.nth(i).locator("button").first().click();
            break;
        }
    }

    // Wait for the summary ID to be visible before reading it
    await expect(repo.summaryID).toBeVisible();
    const orderIDDetails = await repo.summaryID.textContent();
    console.log("Order ID details: " + orderIDDetails);

    expect(printOrderID.includes(orderIDDetails)).toBeTruthy();
    










 


    //await page.locator("//button[normalize-space()='Sign Out']").click();
});
