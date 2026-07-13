const { test, expect } = require("@playwright/test");
const { CalenderObjectRepository } = require("../wrapperFunction/calender.spec");

test('Calender validations', async ({ page }) => {
    const monthNumber = '6';
    const date = '15';
    const year = '2027';
    const expectedList = [monthNumber, date, year];
    const repo = new CalenderObjectRepository(page);

    await repo.gotoOffers();
    await repo.selectDate(monthNumber, date, year);

    const inputs = repo.dateInputs;

    await expect(inputs).toHaveCount(3);

    for (let i = 0; i < expectedList.length; i++) {
        await expect(inputs.nth(i)).toHaveValue(expectedList[i]);
    }
});