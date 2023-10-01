import Hero from "./hero";
import { Show } from '../../../types';
import { StaticImageData } from "next/image";

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

describe("Hero Component", () => {
  it("should render a 'show' type hero correctly", () => {
    cy.mount(<Hero type="show" show={showData} />);

    // Ensure that the hero section is rendered with the show details
    cy.get("h1").should("contain.text", showData.title);
    cy.get(".text-green-600").should(
      "contain.text",
      `${(showData.vote_average * 10).toFixed(2)}% Match`
    );
    cy.get(".text-gray-300").should("contain.text", showData.first_air_date);
    cy.get(".line-clamp-4").should("contain.text", showData.overview);
  });

  it("should open the modal when clicking 'Play' button", () => {
    cy.mount(<Hero type="show" show={showData} />);

    // Click the 'Play' button
    cy.get("button[aria-label='Play video']").click();

    // Ensure that the modal is opened
    cy.get('[data-testid="modal"]').should("be.visible");
  });

  it("should open the modal when clicking 'More Info' button", () => {
    cy.mount(<Hero type="show" show={showData} />);

    // Click the 'More Info' button
    cy.get("button[aria-label='Open shows details modal']").click();

    // Ensure that the modal is opened
    cy.get('[data-testid="modal"]').should("be.visible");
  });

  // Add more test cases as needed for the 'show' type hero

  it("should render a 'static' type hero correctly", () => {
    const src:StaticImageData = {
      src: '/path-to-image.png', // Replace with the actual path to your image
      height: 100, // Replace with the actual height of the image
      width: 100, // Replace with the actual width of the image
      blurDataURL: 'data:image/png;base64,...' // Replace with the actual blurDataURL if available
    };

    cy.mount(
      <Hero type="static" src={src}>
        <p>This is a static hero content.</p>
      </Hero>
    );

    // Ensure that the static hero section is rendered with the provided content
    cy.contains("This is a static hero content.");
  });

  // Add more test cases as needed for the 'static' type hero
});
