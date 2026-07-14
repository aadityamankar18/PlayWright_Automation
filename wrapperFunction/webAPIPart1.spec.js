class webAPIPart1ObjectRepository {
    constructor(page) {
        this.page = page;
        this.email = "aadityamankar18@gmail.com";
        this.userPassW = "Pass@123";
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
    }

    async gotoClient() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(email, pass) {
        await this.userEmail.fill(email);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
}

module.exports = { webAPIPart1ObjectRepository };
