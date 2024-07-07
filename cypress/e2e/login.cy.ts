import LoginPage from "../support/pages/login.page";

describe('login page', () => {
  beforeEach(() => {
    // This is a prerequisite for all tests in this file, so we place it here to avoid repetition
    cy.visit('https://app.tango.us/sign-in');

    // Reduce noise when debugging this page by turning logs off for this path
    cy.intercept('/frontegg/flags', { log: false });
    cy.intercept('/embed/unread', { log: false });
  });

  // The first set of tests (not in a nested 'describe' block) check basic facts about the page
  it('loads the page', () => {
    cy.get("h2").should('contain.text', 'Sign in to Tango');
  });

  it('displays the "create an account" option', () => {
    cy.get("[data-testid='auth.signIn.signUpLink']")
      .should('be.visible')
      .should('be.enabled');
  });

  // We are going to keep things simple for the Google sign in, since it is to a large extent a 3rd party maintained system
  describe('google-based sign in', () => {
    it('displays the Google login option', () => {
      cy.get("[data-testid='auth.signUp.googleButton']")
        .should('be.visible')
        .should('be.enabled');
    });
  });

  // Here we take a closer look at the email-based login section and its behavior
  describe('email-based sign in', () => {
    const teamLibraryHeader = "[data-testid='workflowsList.title']";

    it('displays the email-based login option', () => {
      cy.get(LoginPage.emailInputSelector)
        .should('be.visible')
        .should('be.enabled');

      cy.get(LoginPage.continueButtonSelector).should('be.disabled');
    });

    it.only('displays the password field after submitting a valid email', () => {
      cy.get(LoginPage.emailInputSelector).type(Cypress.env('email'));

      cy.get(LoginPage.passwordInputSelector)
        // By checking first if it is enabled, we can provide better error feedback if it is not and breaks the test
        // This also serves as an implicit wait condition for the test, improving its reliability
        .should('be.enabled')
        .type(Cypress.env('password'));

      cy.get(LoginPage.continueButtonSelector)
        .should('be.enabled')
        .click();

      cy.get(teamLibraryHeader).should('contain.text', 'Team Library');
    });
  });
});
