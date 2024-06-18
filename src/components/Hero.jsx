import { appConfig } from "../utils/constants";

const Hero = ({ title = appConfig.title, subtitle = appConfig.subTitle }) => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className={`bg-${appConfig.theme.primaryColor}-700 py-20 mb-4`}>
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
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Where are you interested in going?"
                required
               
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
