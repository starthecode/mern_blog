'use client';
import Cards1 from '@/components/Cards/Cards1';
import { fetchGraphQL } from '@/lib/functions';
import { searchCaseStudies } from '@/lib/queries/queries';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const SearchBar = ({ item }: any) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useMemo(
    () => (query ? { slug: [query] } : { slug: [] }),
    [query]
  );

  useEffect(() => {
    // Fetch default search results
    setLoading(true);

    const searchAllCasestudies = async () => {
      await fetchGraphQL(searchCaseStudies, params).then((res) => {
        if (res) {
          setResults(res?.data?.caseStudies?.nodes);
        }
      });
      setLoading(false); // Make sure to stop loading after fetching
    };

    searchAllCasestudies();
  }, [params]);

  const onChange = (event: any) => {
    setQuery(event.target.value);
  };

  // const onFocus = useCallback(() => {
  //   setSearchActive(true);
  //   window.addEventListener('click', onClick);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const onClick = useCallback((event: any) => {
  //   //@ts-ignore
  //   if (searchRef.current && !searchRef.current.contains(event.target)) {
  //     setSearchActive(false);
  //     window.removeEventListener('click', onClick);
  //   }
  // }, []);

  // const onSubmit = useCallback(
  //   (event: any) => {
  //     event.preventDefault();

  //     setLoading(true);
  //     fetch(searchEndPoint(query))
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setResults(data);
  //         setLoading(false);
  //       });
  //   },
  //   [query, searchEndPoint]
  // );

  return (
    <div className="container mt-10">
      <form
        ref={searchRef}
        onSubmit={() => ''}
        className="mx-auto w-screen h-12 max-w-screen-md relative z-10 flex justify-between rounded-lg ring-1 ring-onyx-700/40 px-2 py-1 sm:flex-row sm:items-center sm:p-0"
      >
        <div className="flex">
          <label
            className="focus-within:ring rounded-md ring-onyx-200"
            htmlFor="category"
          >
            <select
              className="bg-transparent w-fit px-2 py-4 outline-none"
              name="category"
              id="category"
            >
              <option className="text-black" value="All">
                Industry
              </option>
              <option className="text-black" value="All">
                Industry Two
              </option>
              <option className="text-black" value="All">
                Industry Three
              </option>
            </select>
          </label>
          <label
            className="focus-within:ring rounded-md ring-onyx-200"
            htmlFor="category"
          >
            <select
              className="w-fit bg-transparent px-2 py-4 outline-none"
              name="category"
              id="category"
            >
              <option className="text-black" value="All">
                Technology
              </option>
              <option className="text-black" value="All">
                Industry Two
              </option>
              <option className="text-black" value="All">
                Industry Three
              </option>
            </select>
          </label>
          <input
            id="search"
            autoComplete="off"
            placeholder="Type Something..."
            onChange={onChange}
            value={query}
            type="search"
            className="ml-1 w-full bg-transparent cursor-text rounded-md py-3 pl-6 outline-none border-0"
          />
        </div>
        <button
          type="submit"
          className="mt-2 flex w-fit items-center justify-center rounded-md bg-flamingo-500 px-2 py-2 text-center text-sm font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="w-full text-center mt-4">
          <span>Loading...</span>
        </div>
      ) : (
        results.length > 0 && (
          <div className="mt-10 grid lg:grid-cols-3 gap-6 lg:py-16 py-14 aos-init">
            {results.map((item: any) => (
              <div key={item.title}>
                <Image
                  width={300}
                  height={300}
                  alt="blog post img"
                  src={
                    item?.featuredImage?.mediaItemUrl
                      ? item?.featuredImage?.mediaItemUrl
                      : '/images/dummy-img-bizmetric.webp'
                  }
                  className="w-auto h-auto rounded-md mb-5"
                />

                <h1 className="text-md my-3 transition-all hover:text-primary">
                  {item?.title?.length > 60
                    ? `${item.title
                        .replace(/<[^>]*>?/gm, '')
                        .substring(0, 30)}...`
                    : item.title}
                </h1>
                <p className="text-sm/relaxed tracking-wider text-gray-500">
                  {item?.excerpt?.length > 100
                    ? `${item.excerpt
                        .replace(/<[^>]*>?/gm, '')
                        .substring(0, 80)}...`
                    : item.excerpt}
                </p>
                <Link
                  href={`/case_studies/${item?.slug}`}
                  className="text-primary"
                >
                  read more
                </Link>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
