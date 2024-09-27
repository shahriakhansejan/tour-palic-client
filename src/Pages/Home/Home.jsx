import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import Nav from "../Header/Nav";
import HomePlaces from "./HomePlaces";
import CountryCard from "../Country/CountryCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../Footer/Footer";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Home = () => {
  const { homePlaces, country } = useLoaderData();

  return (
    <div>
      <div className="mb-10">
        <Nav></Nav>
        <div className="carousel w-full">
          {homePlaces.map((homePlace, index) => (
            <Banner
              homePlaces={homePlaces}
              homePlace={homePlace}
              index={index}
              key={index}
            ></Banner>
          ))}
        </div>
        {/* services section */}
        <div className="container mx-auto my-24">
          <div className="flex flex-col lg:flex-row items-center gap-7">
            <span className="flex-1">
              <img
                className="rounded-lg"
                src="https://i.postimg.cc/YSNGnVT4/happy-customers.jpg"
                alt=""
              />
            </span>
            <span className="flex-1">
              <h1 className="text-3xl font-bold mb-7 text-yellow-600">
                <i>We are happy to make you happier</i>
              </h1>
              <p className="text-justify font-medium text-gray-600">
                A successful tour agency provides essential services to ensure a
                seamless travel experience for clients. These include
                customizable tour packages, expert guides, 24/7 customer
                support, and convenient online booking. In addition, reliable
                transportation, quality accommodations, and assistance with
                travel documentation help create a hassle-free journey for every
                traveler.
              </p>
              <ul className="ml-5 flex flex-col gap-3 mt-7">
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp /> Customizable Tour Packages
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  Experienced Tour Guides
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  24/7 Customer Support
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  Online Booking System
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  Transportation Services
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  Accommodation Arrangements
                </li>
                <li className="flex gap-2 items-center text-lg font-medium text-blue-700">
                  <IoCheckmarkCircleSharp />
                  Visa and Travel Documentation Assistance
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-4">
          <div className="mt-8">
            <div className="text-center my-6">
              <h1 className="text-center text-4xl font-extrabold text-orange-600">
                Countries
              </h1>
              <p className="font-medium text-orange-600 mt-2">
                Which country do you want to travel to?
              </p>
            </div>

            <div className="border rounded-xl p-2 max-h-[150vh] overflow-y-scroll">
              {country.map((aCountry) => (
                <CountryCard
                  aCountry={aCountry}
                  key={aCountry._id}
                ></CountryCard>
              ))}
            </div>
          </div>

          <div className="col-span-2 mt-8">
            <div className=" text-center my-6">
              <h1 className="text-4xl text-orange-500 font-extrabold">
                Most Popular Packages
              </h1>
              <p className="font-medium text-orange-600 mt-2">
                See our packages & Get your decision{" "}
              </p>
            </div>
            <span className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-xl p-2">
              {homePlaces.map((homePlace) => (
                <HomePlaces
                  key={homePlace._id}
                  homePlace={homePlace}
                ></HomePlaces>
              ))}
            </span>
            <div className="text-center mt-6">
              <Link to="/places">
                <button className="btn btn-outline btn-info btn-lg font-extrabold">
                  See All Spots <FaArrowRightLong />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

Home.propTypes = {};

export default Home;
