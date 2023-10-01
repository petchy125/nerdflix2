import { Show } from '@nerdflix-nx-cypress/shared/types';
import ShowModal from './show-modal'; // Update the path accordingly
import { SetStateAction } from 'react';

const showData: Show = {
  adult: true,
  backdrop_path: "/test-backdrop.jpg",
  media_type: 'tv',
  budget: 10000,
  homepage: 'home',
  showId: '1',
  id: 1,
  imdb_id: '1',
  original_language: 'th',
  original_title: "Test Show",
  overview: "Test Show",
  popularity: 1,
  poster_path: "/test-backdrop.jpg",
  number_of_seasons: 1,
  number_of_episodes: 1,
  release_date: "2023-09-30",
  first_air_date: "2023-09-30",
  last_air_date: "2023-09-30",
  revenue: 20000,
  runtime: 20000,
  status: 'online',
  tagline: 'new',
  title: "Test Show",
  name: "Test Show",
  video: false,
  vote_average: 5,
  vote_count: 1000,
};

describe('ShowModal Component', () => {
  it('renders correctly', () => {
    cy.mount(<ShowModal show={showData} toggle={true} toggleHandler={function (value: SetStateAction<boolean>): void {
      throw new Error('Function not implemented.');
    } } />);
    cy.get('.aspect-video'); // Check for a specific element in your component
    cy.get('iframe[src*="youtube.com"]'); // Check if the YouTube iframe is present
    cy.contains('Movie Title'); // Check if the title is present
    // Add more assertions as needed
  });

  it('fetches data on mount', () => {
    cy.intercept('GET', '**/api.themoviedb.org/3/movie/1*', {
      fixture: 'movieData.json', // Create a fixture file with sample API response data
    }).as('fetchData');

    cy.mount(<ShowModal show={showData} toggle={true} toggleHandler={function (value: SetStateAction<boolean>): void {
      throw new Error('Function not implemented.');
    } } />);
    cy.wait('@fetchData'); // Wait for the API request to complete
    // Add assertions to check if data is displayed correctly
  });

  it('toggles when closed', () => {
    const toggleHandler = cy.stub().as('toggleHandler');

    cy.mount(<ShowModal show={showData} toggleHandler={toggleHandler} toggle={false} />);
    cy.get('button[aria-label="Close"]').click(); // Assuming there's a close button with aria-label
    cy.get('@toggleHandler').should('be.calledWith', false);
  });
});
