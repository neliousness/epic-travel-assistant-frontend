import Spinner from "./Spinner";
import CityListing from "./CityListing";

const CityListings = ({ cities, loading }) => {
  

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Places you may consider
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityListing key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CityListings;
