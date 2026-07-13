class CalenderObjectRepository {
    constructor(page) {
        this.page = page;
        this.offersPageUrl = "https://rahulshettyacademy.com/seleniumPractise/#/offers";
        this.calendarInput = page.locator(".react-date-picker__inputGroup");
        this.navigationLabel = page.locator(".react-calendar__navigation__label");
        this.monthOptions = page.locator(".react-calendar__year-view__months__month");
        this.dateInputs = page.getByRole('spinbutton');
    }

    async gotoOffers() {
        await this.page.goto(this.offersPageUrl);
    }

    async selectDate(monthNumber, date, year) {
        await this.calendarInput.click();
        await this.navigationLabel.click();
        await this.navigationLabel.click();
        await this.page.getByText(year, { exact: true }).click();
        await this.monthOptions.nth(Number(monthNumber) - 1).click();
        await this.page.locator("//abbr[text()='" + date + "']").click();
    }
}

module.exports = { CalenderObjectRepository };
