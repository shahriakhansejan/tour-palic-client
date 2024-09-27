import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateSpot = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const place = useLoaderData();
  const {
    _id,
    countryName,
    spotName,
    averageCost,
    travelTime,
    totalVisitor,
    userName,
    userEmail,
    location,
    description,
    season,
    photo,
  } = place;
  console.log(place);

  const handleUpdateTourists = (event) => {
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

    const updateInformation = {
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
    fetch(`https://tour-palic-server.vercel.app/places/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Corrected header
      },
      body: JSON.stringify(updateInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/places-email/${user.email}`);
        }
      });
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen pt-12">
      <div className="max-w-4xl mx-auto bg-[#ffff] shadow-lg rounded-lg">
        <button
          onClick={handleBack}
          className="btn hover:btn-outline ml-5 mt-5"
        >
          <IoArrowBackCircleOutline className="text-3xl" />{" "}
        </button>

        <h1 className="text-5xl text-center mb-3 pt-12 font-bold">
          Update Tourists Spot
        </h1>
        <form onSubmit={handleUpdateTourists} className="card-body">
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
                  defaultValue={spotName}
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
                  defaultValue={countryName}
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
                  defaultValue={averageCost}
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
                  defaultValue={travelTime}
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
                  defaultValue={totalVisitor}
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
                  defaultValue={userName}
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
                  defaultValue={userEmail}
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
                  defaultValue={location}
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
                  defaultValue={description}
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
                  defaultValue={season}
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
              defaultValue={photo}
              placeholder="Photo URL (1080 X 768)"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateSpot.propTypes = {};

export default UpdateSpot;
