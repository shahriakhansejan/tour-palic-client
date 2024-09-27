import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Nav from "../Header/Nav";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const location = useLocation();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const newUser = { name, email, photo };

    setError("");

    if (password.length < 6) {
      setError("Password will be at least 6 character of longer");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password will be at least one Uppercase");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password will be at least one Lowercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state ? location.state : "/");

        fetch("https://tour-palic-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <Nav></Nav>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full shadow-md max-w-3xl">
          <div className="card-body">
            <h2 className="text-center text-4xl mb-3 mt-5 font-extrabold">
              Please Sign Up!
            </h2>
            <form onSubmit={handleSignUp} className="mb-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="text-2xl -ml-8"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </span>
                </div>
                <p className="mt-2 pl-2">
                  <input
                    className="mr-1"
                    type="checkbox"
                    name=""
                    id=""
                    required
                  />{" "}
                  Please accept our{" "}
                  <a
                    className="font-medium text-green-600"
                    target="_blank"
                    href="https://i.postimg.cc/T2LXvq9h/wildflower-terms-and-conditions.png"
                  >
                    Terms & Conditions
                  </a>
                </p>
              </div>
              <div className="form-control mt-6">
                <p className="pl-2 mb-2">
                  Already have an Account? Please{" "}
                  <Link className="font-semibold text-blue-700" to="/signin">
                    Sign In
                  </Link>
                </p>
                <button className="btn btn-primary">Sign Up</button>
                <div className="mt-1 ml-2">
                  <div>{error && <p className="text-red-600">{error}</p>}</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
