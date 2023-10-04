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
  title: "Movie Title",
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

    cy.contains('Movie Title'); // Check if the title is present
    // Add more assertions as needed
  });
});
