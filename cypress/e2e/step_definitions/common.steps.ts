import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pageobjects/loginPage";
import { InventoryPage } from "../pageobjects/inventoryPage";

const loginPage = new LoginPage;
const inventoryPage = new InventoryPage;
const username = 'standard_user';
const password = 'secret_sauce';

Given('A user is logged in', () => {
    cy.visit('/');
    loginPage.login(username, password);

});

When('A user clicks the logout button', () =>{
    inventoryPage.menuButton.click();
    inventoryPage.logoutButton.click();
});

Then('A user should be logged out', () =>{
    cy.url().should('equal', 'https://www.saucedemo.com/')
});