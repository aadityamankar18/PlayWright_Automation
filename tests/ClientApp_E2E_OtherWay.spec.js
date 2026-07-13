const { test, expect } = require("@playwright/test");
const { ClientAppE2EOtherWayObjectRepository } = require("../wrapperFunction/ClientApp_E2E_OtherWay.spec");

test('First Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const repo = new ClientAppE2EOtherWayObjectRepository(page);

    await repo.gotoClient();
    console.log(await page.title());
    await repo.OWuserEmail.fill(repo.email);
    await repo.OWpassword.fill(repo.userPassW);
    await repo.OWloginBtn.click();

    await page.waitForLoadState('networkidle');
    await repo.OWproducts.first().waitFor();

    await repo.OWproducts.click();
    await repo.OWcartLink.click();

    await page.waitForLoadState('networkidle');
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await repo.OWcheckoutButton.click();
    await repo.OWcheckoutInput2.fill("123");
    await repo.OWcheckoutInput3.fill("Aaditya Mankar");
    await repo.OWcountryInput.type("Ind");
    await repo.OWdropDown.waitFor();
    await repo.OWIndiaBtn.nth(1).click();

    await repo.OWplaceOrderBtn.click();

    await page.waitForLoadState('networkidle');
    await expect(repo.OWthankYouText).toBeVisible();

    const printOrderID = await repo.OWorderID.textContent();
    console.log("Order ID: " + printOrderID);

    await repo.OWordersBtn.click();
    await expect(repo.OWrows.first()).toBeVisible();

    const rows = await repo.OWrows.count();
    for (let i = 0; i < rows; ++i) {
        const rowOrderID = await repo.OWrows.nth(i).locator("th").textContent();
        console.log("Row Order ID: " + rowOrderID);
        if (rowOrderID && printOrderID.includes(rowOrderID.trim())) {
            await repo.OWrows.nth(i).locator("button").first().click();
            break;
        }
    }

    await expect(repo.OWsummaryID).toBeVisible();
    const orderIDDetails = await repo.OWsummaryID.textContent();
    console.log("Order ID details: " + orderIDDetails);

    expect(printOrderID.includes(orderIDDetails)).toBeTruthy();
});
