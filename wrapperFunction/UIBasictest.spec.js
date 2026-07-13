class UIBasictestObjectRepository {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("#username");
        this.passwordPractice = page.locator("[type='password']");
        this.signInButton = page.locator("#signInBtn");
        this.cardTitlesA = page.locator(".card-body a");
        this.dropdown = page.locator("select.form-control");
        this.radioButton = page.locator("span.checkmark");
        this.documentLink = page.locator("[href*='documents-request']");
        this.err = page.locator("[style*='block']");
        this.okayBtn = page.locator("#okayBtn");
        this.terms = page.locator("#terms");
    }

    async gotoPractice() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }
}

module.exports = { UIBasictestObjectRepository };
