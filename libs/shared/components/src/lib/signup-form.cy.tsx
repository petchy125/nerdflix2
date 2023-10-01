import SignUp from './signup-form';

describe('SignUp Component', () => {
  it('renders the component', () => {
    cy.mount(<SignUp />);
    cy.get('form[data-testid="sign-up"]').should('exist');
  });

  it('displays an error message for empty fields', () => {
    cy.mount(<SignUp />);
    cy.get('form[data-testid="sign-up"]').submit();
    cy.get('div[data-testid="error"]').should('contain.text', 'Please fill in all fields.');
  });

  it('displays an error message for a short password', () => {
    cy.mount(<SignUp />);
    cy.get('input[placeholder="Password"]').type('12345');
    cy.get('form[data-testid="sign-up"]').submit();
    cy.get('div[data-testid="error"]').should('contain.text', 'Password must be at least 6 characters long.');
  });

  it('successfully signs up a user', () => {
    const email = 'test@example.com';
    const password = 'password';
    const firstName = 'John';

    cy.mount(<SignUp />);
    cy.get('input[placeholder="First Name"]').type(firstName);
    cy.get('input[placeholder="Email address"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('form[data-testid="sign-up"]').submit();

  });
});
