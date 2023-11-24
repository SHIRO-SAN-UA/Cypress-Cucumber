import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { InventoryPage } from "../pageobjects/inventoryPage";
import { LoginPage } from "../pageobjects/loginPage";

const inventoryPage = new InventoryPage;
const loginPage = new LoginPage;
const username = 'standard_user';
const password = 'secret_sauce';

Given("A user is at the Inventory page", () => {
    cy.visit('/');
    loginPage.login(username, password);
});

When("A user selects to sort products by Name A to Z", () => {
    inventoryPage.sortProductsByNameAZ();
});

Then("The products should get sorted by Name A to Z", () => {
    const isSortedAZ = inventoryPage.isProductListSortedByName('AZ');
    cy.wrap(isSortedAZ).should('be.true');
});

When("A user selects to sort products by Name Z to A", () => {
    inventoryPage.sortProductsByNameZA();
});

Then("The products should get sorted by Name Z to A", () => {
    const isSortedZA = inventoryPage.isProductListSortedByName('ZA');
    cy.wrap(isSortedZA).should('be.true');
});

When("A user selects to sort products by Price Low to High", () => {
    inventoryPage.sortProductsByPriceLowToHigh();
});

Then("The products should get sorted by Price Low to High", () => {
    const isSortedLH = inventoryPage.isProductListSortedByPrice('lohi');
    cy.wrap(isSortedLH).should('be.true');
});

When("A user selects to sort products by Price High to Low", () => {
    inventoryPage.sortProductsByPriceHighToLow();
});

Then("The products should get sorted by Price High to Low", () => {
    const isSortedHL = inventoryPage.isProductListSortedByPrice('hilo');
    cy.wrap(isSortedHL).should('be.true');
});