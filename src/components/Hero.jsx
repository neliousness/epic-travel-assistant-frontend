import { useMemo } from "react";
import { appConfig, debounceDelay } from "../utils/constants";
import debounce from "lodash.debounce";

const Hero = ({
  title = appConfig.title,
  subtitle = appConfig.subTitle,
  handleSearch,
}) => {

  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, debounceDelay), [handleSearch]);

  return (
    <>
      {/* <!-- Hero --> */}
      <section className={`bg-blue-700 py-20 mb-4`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>

            <div className="mt-10">
              <input
                type="text"
                id="search_input"
                name="search"
                className="border rounded w-full py-2 px-3"
                placeholder="Where are you interested in going?"
                required
                onChange={(e) => debouncedHandleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
