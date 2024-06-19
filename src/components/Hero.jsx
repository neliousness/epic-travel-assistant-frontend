import { useState } from "react";
import { appConfig } from "../utils/constants";

const Hero = ({
  title = appConfig.title,
  subtitle = appConfig.subTitle,
  handleSearch,
}) => {


  const color = appConfig.theme.primaryColor

  return (
    <>
      {/* <!-- Hero --> */}
      <section className={`bg-${color}-700 py-20 mb-4`}>
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
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
