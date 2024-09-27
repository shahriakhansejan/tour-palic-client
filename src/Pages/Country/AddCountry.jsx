import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCountry = () => {
  const navigate = useNavigate();
  const handleAddCountry = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const countryData = { name, description, photo };
    console.log(countryData);
    fetch("https://tour-palic-server.vercel.app/country", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(countryData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="hero bg-[#f1f1f1] min-h-screen">
      <div className="card bg-base-100 w-full max-w-3xl shrink-0">
        <h1 className="text-4xl text-center py-12 text-green-900 font-extrabold">
          Add Country Details
        </h1>
        <form onSubmit={handleAddCountry} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type Country Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter a short Description"
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
              placeholder="Photo URL..."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Country</button>
          </div>
        </form>
        <div className="flex justify-between mx-12 pb-6">
          <button onClick={() => navigate(-1)} className="btn btn-outline">
            <FaArrowLeftLong /> Back
          </button>
          <Link to="/">
            <button className="btn btn-outline btn-success">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AddCountry.propTypes = {};

export default AddCountry;
