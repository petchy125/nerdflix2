import Collections from './Collections';
import { Show } from "../../../types";
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  // Add `unoptimized` to any use of `next/image` in our tests
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

describe('Collections Component', () => {
  it('should render collections with searched results', () => {
    const collectionsData = [
      {
        title: 'Collection 1',
        shows: [{ id: 1, title: 'Show 1', backdrop_path: 'path1', overview: 'Overview 1' } as Show],
      },
    ];

    const searchedResults = [
      { id: 2, title: 'Show 2', backdrop_path: 'path2', overview: 'Overview 2' } as Show,
    ];

    cy.mount(<Collections collections={collectionsData} searchedResults={searchedResults} />);

   
    cy.get('[data-testid="item"]').should('have.length', 1); // Assuming you have two items in total
  });

  it('should render collections without searched results', () => {
    const collectionsData = [
      {
        title: 'Collection 1',
        shows: [{ id: 1, title: 'Show 1', backdrop_path: 'path1', overview: 'Overview 1' } as Show],
      },
    ];

    const searchedResults:Show[] = [];

    cy.mount(<Collections collections={collectionsData} searchedResults={searchedResults} />);
    cy.get('[data-testid="modal"]').should('not.exist');
  });

});
