class ClientAppE2EOtherWayObjectRepository {
    constructor(page) {
        this.page = page;
        this.email = "aadityamankar18@gmail.com";
        this.userPassW = "Pass@123";
        this.OWuserEmail = page.getByPlaceholder("email@example.com");
        this.OWpassword = page.getByPlaceholder("enter your passsword");
        this.OWloginBtn = page.getByRole("button", { name: "Login" });
        this.OWproducts = page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add To Cart" });
        this.OWcartLink = page.locator("[routerlink*='cart']");
        this.OWcheckoutButton = page.getByRole("button", { name: "Checkout" });
        this.OWcheckoutInput2 = page.locator("(//input[@type='text'])[2]");
        this.OWcheckoutInput3 = page.locator("(//input[@type='text'])[3]");
        this.OWcountryInput = page.getByPlaceholder("Select Country");
        this.OWdropDown = page.locator(".ta-results");
        this.OWIndiaBtn = page.getByRole("button", { name: "India" });
        this.OWshippingInfoText = page.locator(".user__name [type='text']");
        this.OWplaceOrderBtn = page.getByText("PLACE ORDER");
        this.OWthankYouText = page.getByText("Thankyou for the order.");
        this.OWorderID = page.locator(".em-spacer-1 [class='ng-star-inserted']");
        this.OWordersBtn = page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']");
        this.OWrows = page.locator("tbody tr");
        this.OWsummaryID = page.locator(".col-text");
    }

    async gotoClient() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
}

module.exports = { ClientAppE2EOtherWayObjectRepository };
