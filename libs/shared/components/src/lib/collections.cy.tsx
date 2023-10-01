import * as React from 'react';
import Collections, { renderShowItem } from './collections';

describe(renderShowItem.name, () => {
  it('renders', () => {
    cy.mount(<renderShowItem />);
  });
});

describe(Collections.name, () => {
  it('renders', () => {
    cy.mount(<Collections />);
  });
});
