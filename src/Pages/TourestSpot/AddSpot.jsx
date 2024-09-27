import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import Nav from "../Header/Nav";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddTourists = (event) => {
    event.preventDefault();
    const form = event.target;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const totalVisitor = form.totalVisitor.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const location = form.location.value;
    const description = form.description.value;
    const season = form.season.value;
    const photo = form.photo.value;

    const spotInformation = {
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
    };

    console.log(spotInformation);

    fetch("https://tour-palic-server.vercel.app/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <Nav></Nav>
      <div className="bg-[#f7f7f7] py-12">
        <div className="max-w-4xl mx-auto bg-[#ffff] rounded-lg pt-12 shadow-lg">
          <h1 className="text-5xl text-center mb-3 font-bold">
            Add Tourists Spot
          </h1>
          <form onSubmit={handleAddTourists} className="card-body">
            {/* form part */}
            <div className="flex flex-col md:flex-row gap-2">
              {/* form part 1 */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Spot Name</span>
                  </label>
                  <input
                    type="text"
                    name="spotName"
                    placeholder="Type Spot Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="countryName"
                    placeholder="Country Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Average Cost</span>
                  </label>
                  <input
                    type="text"
                    name="averageCost"
                    placeholder="Average-cost"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Travel Time</span>
                  </label>
                  <input
                    type="text"
                    name="travelTime"
                    placeholder="Travel Time=> 7d/1m/1y"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total visitor/Year</span>
                  </label>
                  <input
                    type="text"
                    name="totalVisitor"
                    placeholder="Total visitor"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              {/* form part 2 */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Enter your Name"
                    className="input input-bordered"
                    defaultValue={user && user.displayName}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Enter your Email"
                    className="input input-bordered"
                    defaultValue={user && user.email}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Add Location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Add short description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Preferred season </span>
                  </label>
                  <input
                    type="text"
                    name="season"
                    placeholder="Which season is best?"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL (1080 X 768)"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Spot</button>
            </div>
          </form>

          <div className="text-end pb-3 pr-2">
            <Link to="/add-country">
              <button className="btn text-green-600">
                Add Country
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AddSpot.propTypes = {};

export default AddSpot;
