import * as React from 'react';
import SigIn from './sigin-form';

describe(SigIn.name, () => {
  it('renders', () => {
    cy.mount(<SigIn />);
  });
});
