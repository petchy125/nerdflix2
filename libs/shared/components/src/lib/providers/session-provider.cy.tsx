import * as React from 'react';
import SessionProvider from './session-provider';

describe(SessionProvider.name, () => {
  it('renders', () => {
    cy.mount(<SessionProvider />);
  });
});
