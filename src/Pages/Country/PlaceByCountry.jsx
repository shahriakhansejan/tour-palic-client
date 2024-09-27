import { useLoaderData } from "react-router-dom";
import Place from "../TourestSpot/Place";
import Nav from "../Header/Nav";
import PlaceByCountryDetails from "./PlaceByCountryDetails";

const PlaceByCountry = () => {
  const places = useLoaderData();

  return (
    <div className="">
      <Nav></Nav>
      <div className="my-12">
        <div className="text-center my-12">
          <h1 className="text-4xl text-orange-500 font-extrabold mb-2">
            Tourists Spot by Specific Country
          </h1>
          <p className="text-orange-400 font-medium">
            Select your Tourists Spot from a Country
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 container mx-auto">
          {places.map((place) => (
            <PlaceByCountryDetails
              place={place}
              key={place._id}
            ></PlaceByCountryDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

PlaceByCountry.propTypes = {};

export default PlaceByCountry;
