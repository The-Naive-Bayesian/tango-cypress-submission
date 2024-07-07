class LoginPage {
  headerSelector = "h2";
  createAnAccountSelector = "[data-testid='auth.signIn.signUpLink']";
  googleAuthSelector = "[data-testid='auth.signUp.googleButton']";
  emailInputSelector = "[data-testid='auth.signIn.emailInput']";
  passwordInputSelector = "[data-testid='auth.signIn.passwordInput']";
  continueButtonSelector = "[data-testid='auth.signIn.submitButton']";

  login({email, password}: Credentials) {
    cy.get(this.emailInputSelector).type(Cypress.env('email'));

    cy.get(this.passwordInputSelector)
      .should('be.enabled')
      .type(Cypress.env('password'));

    cy.get(this.continueButtonSelector)
      .should('be.enabled')
      .click();
  }

  visit() {
    cy.visit('https://app.tango.us/sign-in');
  }
}

export interface Credentials {
  email: string;
  password: string;
}

export default new LoginPage();
