import * as React from 'react';
import ShowModal from './show-modal';

describe(ShowModal.name, () => {
  it('renders', () => {
    cy.mount(<ShowModal />);
  });
});
