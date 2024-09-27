import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomePlaces = ({ homePlace }) => {
  const {
    _id,
    spotName,
    countryName,
    averageCost,
    travelTime,
    totalVisitor,
    userName,
    userEmail,
    location,
    description,
    season,
    photo,
  } = homePlace;
  return (
    <div>
      <div className="card h-72 group relative flex items-end overflow-hidden p-4 text-center text-white bg-gray-200 shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 focus-within:scale-105">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:translate-y-[-4%]"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90"></div>
        <div className="content relative z-10 transition-transform duration-700 ease-in-out group-hover:translate-y-0 transform translate-y-full">
          <h2 className="title text-2xl mb-3 font-bold">{spotName}</h2>
          <p className="copy font-serif italic text-lg">{description.slice(0,75)}...</p>
          <Link to={`/details/${_id}`}>
            <button className=" mt-8 px-3 py-2 border border-green-700 rounded bg-green-700 hover:bg-green-950 text-white text-sm font-bold tracking-wide focus:outline-none focus:ring-2 focus:ring-yellow-400">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

HomePlaces.propTypes = {
  homePlace: PropTypes.object
};

export default HomePlaces;
