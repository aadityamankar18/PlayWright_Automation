class LlcObjectRepository {
    constructor(page) {
        this.page = page;
        this.checkIceCreamCheckbox = page.getByLabel("Check me out if you Love IceCreams!");
        this.employedRadioButton = page.getByLabel("Employed");
        this.genderDropdown = page.getByLabel("Gender");
        this.userPassword = page.getByPlaceholder("Password");
        this.submitButton = page.getByRole("button", { name: "Submit" });
        this.submitMsg = page.getByText("Success! The Form has been submitted successfully!.");
        this.shopLink = page.getByRole("link", { name: "Shop" });
        this.cardTitlesAddButton = page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button", { name: "Add " });
    }

    async gotoAngularPractice() {
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }
}

module.exports = { LlcObjectRepository };
