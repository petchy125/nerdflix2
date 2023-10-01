import * as React from 'react';
import SharedComponent, { SharedComponentProps } from './shared-component';

describe(SharedComponent.name, () => {
  let props: SharedComponentProps;

  beforeEach(() => {
    props = {};
  });

  it('renders', () => {
    cy.mount(<SharedComponent {...props} />);
  });
});
