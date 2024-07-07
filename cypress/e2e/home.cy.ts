import LoginPage from "../support/pages/login.page";
import HomePage from "../support/pages/home.page";

describe('Home Page', () => {
  beforeEach(() => {
    LoginPage.visit();

    LoginPage.login({
      email: Cypress.env('email'),
      password: Cypress.env('password'),
    });

    cy.get(HomePage.teamLibraryHeader, {timeout: 15000}).should('be.visible');
  });

  // NOTE: this test will likely only pass if the team under test is in a valid state to see the message
  // A new account without an existing team should see it, so create a new account for testing if necessary
  it('displays "No Tangos here, yet" message', () => {
    cy.get(HomePage.noTangosMessage).should('contain.text', 'No Tangos here, yet.');
  });
});
