import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import userPic from "../../assets/user.svg";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";

const Nav = () => {
  const { loading, user, signOutUser } = useContext(AuthContext);
  // const { user, signOutUser } = useAuth();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://tour-palic-server.vercel.app/users?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setData(data);
        });
    }
  }, []);

  const handleSignOut = () => {
    signOutUser().then().catch();
  };

  if (loading) {
    return (
      <div className="text-center mt">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/places">All Spot</NavLink>
      </li>
      <li>
        <NavLink to={`/places-email/${user?.email}`}>My List</NavLink>
      </li>
      <li>
        <NavLink to="/addspot">Add Spot</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#f1f1f1]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="activeNav font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <div className="flex items-center">
            <span className="hidden md:block">
              <img className="w-24" src={logo} alt="" />
            </span>
            <p className="text-xl md:text-4xl text-green-600 font-extrabold">
              Tour Palic
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="activeNav flex gap-7 font-bold px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end">
          <span className="flex items-center gap-2">
            {user ? (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName ? user.displayName : data?.name}
              >
                <img
                  src={user.photoURL ? user.photoURL : data?.photo}
                  alt="tooltip image"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            ) : (
              <img className="w-10 h-10 rounded-full " src={userPic} alt="" />
            )}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn text-white hover:bg-red-700  bg-red-500"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/signin">
                <button className="btn text-white hover:bg-green-800 bg-green-600">
                  Sign In
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
Nav.propTypes = {
  signInUser: PropTypes.array,
};

export default Nav;
