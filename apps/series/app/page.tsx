import Hero from '@nerdflix-nx-cypress/shared/components/hero';
import { getSearchedResult, getShow } from '@nerdflix-nx-cypress/shared/utils/fetcher';
import Collections from '@nerdflix-nx-cypress/shared/components/collections';
import { getRandomShow } from '@nerdflix-nx-cypress/shared/utils/util';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nerdflix | Series',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Record<PropertyKey, string>;
}) {
  const allShows = await getShow('tv');
  const searchedResults = await getSearchedResult(searchParams?.search ?? '');
  const randomShow = getRandomShow(allShows.netflix);

  const collections = [
    { title: 'Trending', shows: allShows.trending },
    { title: 'Top Rated', shows: allShows.topRated },
    { title: 'Comedy', shows: allShows.comedy },
    { title: 'Romance', shows: allShows.romance },
    { title: 'Documentary', shows: allShows.docs },
  ];

  return (
    <section>
      <div className="pt-10">
        {searchedResults.length < 1 && <Hero type="show" show={randomShow} />}
        <Collections
          collections={collections}
          searchedResults={searchedResults}
        />
      </div>
    </section>
  );
}
