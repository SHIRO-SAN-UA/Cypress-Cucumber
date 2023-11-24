import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pageobjects/loginPage";
import { faker } from "@faker-js/faker";

const loginPage = new LoginPage();
const randomUsername = faker.internet.userName();
const randomPassword = faker.internet.password();

Given("A user is at the login page", () => {
    cy.visit("/");
});

When("A user checks the login and password fields", () => {});

Then("The login and password fields should be visible", () => {
    loginPage.inputUsernameField.should("be.visible");
    loginPage.inputPasswordField.should("be.visible");
});

When("A user checks the login button", () => {});

Then("The login button should be clickable", () => {
    loginPage.submitButton.should("be.enabled");
});

When("A user enters a valid username {string} and the valid password {string}", (username: string, password: string) => {
        loginPage.login(username, password);
    }
);

Then("A user should be logged in successfully", () => {
    cy.url().should("include", "/inventory.html");
});

When("A user enters a locked out username {string} and the valid password {string}",
    (username: string, password: string) => {
        loginPage.login(username, password);
    }
);

Then("A user should see locked out error message", () => {
    loginPage.errorContainer.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
});

When("A user enters an invalid username and an invalid password", () => {
    loginPage.login(randomUsername, randomPassword);
});

Then("A user should see an invalid credentials error message", () => {
    loginPage.errorContainer.should("have.text", "Epic sadface: Username and password do not match any user in this service"
    );
});
