import * as React from 'react';
import Hero from './hero';

describe(Hero.name, () => {
  it('renders', () => {
    cy.mount(<Hero />);
  });
});
