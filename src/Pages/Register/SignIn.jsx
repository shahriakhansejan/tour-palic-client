import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Nav from "../Header/Nav";

const SignIn = () => {
  const { googleSignIn, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const location = useLocation();

  // google-signin
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);

      navigate(location.state ? location.state : "/");
    });
  };

  // Eamil-password-signin
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };

        navigate(location.state ? location.state : "/");
        // update userData

        fetch("https://tour-palic-server.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((error) => {
        console.error(error);
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
              Sign In Now!
            </h2>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
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
              </div>
              <div className="form-control mt-6">
                <p className="pl-2 mb-2">
                  New here? Please{" "}
                  <Link className="font-semibold text-blue-700" to="/signup">
                    Sign Up
                  </Link>
                </p>
                <button className="btn btn-primary">Sign In</button>
                <div>{error && <p className="text-red-600">{error}</p>}</div>
              </div>
            </form>
            <div className="mx-auto mt-5">
              <p className="text-xl font-semibold text-center">Or,</p>
              <p className="text-xl font-semibold text-center">Sign In With:</p>
              <div className="flex justify-center gap-2 mt-7">
                <button
                  onClick={handleGoogleLogin}
                  className="hover:bg-black/10 rounded-full p-2"
                >
                  <FcGoogle className="text-4xl" />
                </button>
                <button className="hover:bg-black/10 rounded-full p-2">
                  <SiGithub className="text-4xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
