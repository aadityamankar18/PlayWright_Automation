class moreValidationsObjectRepository {
    constructor(page) {
        this.page = page;
        this.PageUrl = "https://rahulshettyacademy.com/AutomationPractice/";
        this.PageUrl2 = "https://www.google.com/";
        this.displayedText = page.locator("#displayed-text");
        this.hideTextBox = page.locator("#hide-textbox");
        this.enterName = page.locator("#name");
        this.confirmBtn = page.locator("#confirmbtn"); 
        this.hoverBtn = page.locator("#mousehover");

    }

    async gotoOffers() {
        await this.page.goto(this.PageUrl);
    }

    async gotoGoogle() {
        await this.page.goto(this.PageUrl2);
    }
}

module.exports = { moreValidationsObjectRepository };