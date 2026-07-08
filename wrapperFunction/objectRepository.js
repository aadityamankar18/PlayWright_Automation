class ObjectRepository {
    constructor(page) {
        this.page = page;

        //Credentials
        this.email = "aadityamankar18@gmail.com";
        this.userPassword = "Pass@123";



        // Client app locators
        this.userEmail = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginBtn = page.locator("#login");
        this.cardTitles = page.locator(".card-body b");
        this.products = page.locator(".card-body");
        this.checkoutButton = page.locator("button:has-text('Checkout')");
        this.cartLink = page.locator("[routerlink*='cart']");
        this.checkoutInput2 = page.locator("(//input[@type='text'])[2]");
        this.checkoutInput3 = page.locator("(//input[@type='text'])[3]");
        this.countryInput = page.locator("[placeholder*='Country']");
        this.dropDown = page.locator(".ta-results");
        this.shippingInfoText = page.locator(".user__name [type='text']");
        this.placeOrderBtn = page.locator(".btnn");
        this.thankYouText = page.locator(".hero-primary");
        this.orderID = page.locator(".em-spacer-1 [class='ng-star-inserted']");
        this.ordersBtn = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
        this.rows = page.locator("tbody tr");
        this.summaryID = page.locator(".col-text");


        // Practice page locators - getByLabel
        this.checkIceCreamCheckbox = page.getByLabel("Check me out if you Love IceCreams!");
        this.employedRadioButton = page.getByLabel("Employed");
        this.genderDropdown = page.getByLabel("Gender");
        this.userPassword = page.getByPlaceholder("Password");
        this.submitButton = page.getByRole("button", {name: "Submit"});
        this.submitMsg = page.getByText("Success! The Form has been submitted successfully!.");
        this.shopLink = page.getByRole("link", {name: "Shop"});
        this.cardTitles = page.locator("app-card");
        this.cardTitlesAddButton = page.locator("app-card").filter({hasText: "Nokia Edge"}).getByRole("button", {name : "Add "});

        


        // Practice login page locators
        this.userName = page.locator("#username");
        this.passwordPractice = page.locator("[type='password']");
        this.signInButton = page.locator("#signInBtn");
        this.cardTitlesA = page.locator(".card-body a");
        this.dropdown = page.locator("select.form-control");
        this.radioButton = page.locator("span.checkmark");
        this.documentLink = page.locator("[href*='documents-request']");
        this.incorrectMsg = page.locator("[style*='block']");
        this.okayBtn = page.locator("#okayBtn");
        this.terms = page.locator("#terms");
    }

    async gotoClient() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async gotoAngularPractice() {
        await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    }

    async gotoPractice() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async validLogin(email, pass) {
        await this.userEmail.fill(email);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
}

module.exports = { ObjectRepository };