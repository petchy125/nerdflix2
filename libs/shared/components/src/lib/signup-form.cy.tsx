import * as React from 'react';
import SignUp from './signup-form';

describe(SignUp.name, () => {
  it('renders', () => {
    cy.mount(<SignUp />);
  });
});
