export class LoginPage {
    get inputUsernameField() {
        return cy.get('[data-test="username"]');
    }

    get inputPasswordField() {
        return cy.get('[data-test="password"]');
    }

    get submitButton() {
        return cy.get('[data-test="login-button"]');
    }

    get errorContainer() {
        return cy.get('[data-test="error"]');
    }

    login(username: string, password: string) {
        this.inputUsernameField.type(username);
        this.inputPasswordField.type(password);
        this.submitButton.click();
    }
}

export default new LoginPage();
