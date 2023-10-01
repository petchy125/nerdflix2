import * as React from 'react';
import ProtectedLayout from './layout';

describe(ProtectedLayout.name, () => {
  it('renders', () => {
    cy.mount(<ProtectedLayout />);
  });
});
