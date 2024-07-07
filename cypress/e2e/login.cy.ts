describe('login page', () => {
  beforeEach(() => {
    // This is a prerequisite for all tests in this file, so we place it here to avoid repetition
    cy.visit('https://app.tango.us/sign-in');
  });

  // The first set of tests (not in a nested 'describe' block) check basic facts about the page
  it('loads the page', () => {
    cy.get("h2").should('contain.text', 'Sign in to Tango');
  });

  it('displays the Google login option', () => {
    cy.get("[data-testid='auth.signUp.googleButton']")
      .should('be.visible')
      .should('be.enabled');
  });

  it('displays the "create an account" option', () => {
    cy.get("[data-testid='auth.signIn.signUpLink']")
      .should('be.visible')
      .should('be.enabled');
  });

  // Here we take a closer look at the email-based login section and its behavior
  describe('email-based sign in', () => {
    it('displays the email-based login option', () => {
      cy.get("[data-testid='auth.signIn.emailInput']")
        .should('be.visible')
        .should('be.enabled');
    });
  });
});
