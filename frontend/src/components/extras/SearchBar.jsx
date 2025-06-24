import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../Heading/Heading';

export const SearchBar = ({ item, type }) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useMemo(
    () => (query ? { slug: [query] } : { slug: [] }),
    [query]
  );

  const isDark = type === 'dark';

  const baseStyles = {
    container: `mx-auto w-screen h-12 max-w-screen-md relative z-10 flex justify-between rounded-lg px-2 py-1 sm:flex-row sm:items-center sm:p-0
      ${
        isDark
          ? 'bg-zinc-900 ring-1 ring-white/20'
          : 'bg-white ring-1 ring-gray-300'
      }`,
    select: `bg-transparent px-3 py-2 outline-none appearance-none text-sm
      ${isDark ? 'text-white' : 'text-gray-900'}`,
    input: `ml-2 w-full bg-transparent text-sm placeholder:text-gray-400 rounded-md py-3 pl-4 outline-none border-0
      ${isDark ? 'text-white' : 'text-gray-900'}`,
    button: `mt-2 flex w-fit items-center justify-center rounded-md px-4 py-2 text-sm font-medium
      ${
        isDark
          ? 'bg-flamingo-500 text-white hover:bg-flamingo-600'
          : 'bg-orange-600 text-white hover:bg-orange-700'
      }
      sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring-2 ring-offset-2
      ${isDark ? 'focus:ring-white' : 'focus:ring-orange-300'}`,
  };

  // useEffect(() => {
  //   // Fetch default search results
  //   setLoading(true);

  //   const searchAllCasestudies = async () => {
  //     await fetchGraphQL(searchCaseStudies, params).then((res) => {
  //       if (res) {
  //         setResults(res?.data?.caseStudies?.nodes);
  //       }
  //     });
  //     setLoading(false); // Make sure to stop loading after fetching
  //   };

  //   searchAllCasestudies();
  // }, [params]);

  // const onChange = (event) => {
  //   setQuery(event.target.value);
  // };

  return (
    <>
      <form
        ref={searchRef}
        onSubmit={(e) => {
          e.preventDefault();
          // handle search
        }}
        className={baseStyles.container}
      >
        <div className="flex gap-2 w-full">
          <select className={baseStyles.select} name="industry" id="industry">
            <option value="industry-1">Industry</option>
            <option value="industry-2">Industry Two</option>
            <option value="industry-3">Industry Three</option>
          </select>

          <select className={baseStyles.select} name="tech" id="tech">
            <option value="tech-1">Technology</option>
            <option value="tech-2">Tech Two</option>
            <option value="tech-3">Tech Three</option>
          </select>

          <input
            id="search"
            type="search"
            autoComplete="off"
            placeholder="Type Something..."
            className={baseStyles.input}
          />
        </div>

        <button type="submit" className={baseStyles.button}>
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
            {results.map((item) => (
              <div key={item.title}>
                <img
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
                  to={`/case_studies/${item?.slug}`}
                  className="text-primary"
                >
                  read more
                </Link>
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};
