export class InventoryPage {
    get logoutButton() {
        return cy.get("#logout_sidebar_link");
    }

    get menuButton() {
        return cy.get("#react-burger-menu-btn");
    }

    logout() {
        this.menuButton.click();
        this.logoutButton.click();
    }
}
export default new InventoryPage();
