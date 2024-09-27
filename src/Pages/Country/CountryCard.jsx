import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CountryCard = ({ aCountry }) => {
  return (
    <div className="card bg-base-100 image-full mb-2 ">
      <figure>
        <img src={aCountry.photo} alt="Shoes" />
      </figure>
      <div className="card-body mt-10 text-justify">
        <h2 className="text-3xl text-center text-blue-100 font-extrabold mb-5">
          {aCountry.name}
        </h2>
        <p className="font-medium text-yellow-50">{aCountry.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/places-country/${aCountry.name}`}>
            <button className="font-extrabold hover:border px-3 py-2 rounded">
              <span className="flex items-center gap-2">
                See Spots <FaArrowRightLong />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  aCountry: PropTypes.object,
};

export default CountryCard;
