import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
import Place from "./Place";

const Places = () => {
  const dropdownRef = useRef(null);
  const [places, setPlace] = useState([]);

  const [sort, setSort] = useState("default");
  const [name, setName] = useState("Default");

  const handleToggle = () => {
    if (dropdownRef.current) {
      const isOpen = dropdownRef.current.open;
      dropdownRef.current.open = !isOpen; // Toggle open state
    }
  };

  const handleClose = () => {
    console.log("Test Close Modal");
    if (dropdownRef.current) {
      dropdownRef.current.open = false; // Close the dropdown
    }
  };

  console.log({ sort });

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tour-palic-server.vercel.app/places?sort=${sort}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPlace(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log(false);
      }
    };

    fetchData();
  }, [sort]);

  console.log({ places });

  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto my-2">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-extrabold text-orange-700">
            All Tourist Spots
          </h1>
          <p className="font-medium text-xl text-orange-600 mt-2">
            Select your dream Spot
          </p>
          <p className="font-medium text-orange-500">with reasonable package</p>
        </div>
        <div className="text-end">
          <details className="dropdown" ref={dropdownRef}>
            <summary
              className="btn m-1"
              onClick={() => {
                handleToggle;
                setName("Default");
              }}
            >
              {name} <IoIosArrowDown />
            </summary>
            <ul className="menu dropdown-content bg-white font-bold rounded-box z-[1] w-44 p-1 -ml-14">
              <li
                onClick={() => {
                  handleClose();
                  setSort("low");
                  setName("Low -> High");
                }}
              >
                <a>
                  Cost (Low
                  <FaArrowRightLong />
                  High)
                </a>
              </li>

              <li
                onClick={() => {
                  handleClose();
                  setSort("high");
                  setName("High -> Low");
                }}
              >
                <a>
                  Cost (High
                  <FaArrowRightLong />
                  Low)
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-2 pt-3 gap-4">
          {places.map((place, index) => (
            <Place place={place} key={index}></Place>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

Places.propTypes = {};

export default Places;
