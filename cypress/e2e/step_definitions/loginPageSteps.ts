import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pageobjects/loginPage";

const loginPage = new LoginPage();

Given("A user is at the login page", () => {
    cy.visit("/");
});

When("A user checks the login and password fields", () => {

});

Then("The login and password fields should be visible", () => {
    loginPage.inputUsernameField.should("be.visible");
    loginPage.inputPasswordField.should("be.visible");
});

When("A user checks the login button", () => {

});

Then("The login button should be clickable", () => {
    loginPage.submitButton.should("be.enabled");
});

When("A user enters a valid username {string} and the valid password {string}", (username: string, password: string) => {
        loginPage.login(username, password);

});

Then("A user should be logged in successfully", () => {
    cy.url().should("include", "/inventory.html");
});

When("A user enters a locked out username {string} and the valid password {string}", (username: string, password: string) => {
        loginPage.login(username, password);

});

Then("A user should see an error message", () => {
    loginPage.errorContainer.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
});
