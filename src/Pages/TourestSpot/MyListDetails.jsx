import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListDetails = ({ myList, myLists, setMyLists }) => {
  const {
    _id,
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
  } = myList;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tour-palic-server.vercel.app/places/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remainingLists = myLists.filter((item) => item._id !== _id);
            setMyLists(remainingLists);
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact border bg-base-100">
        <Link to={`/details/${_id}`}>
          <figure>
            <img
              className="bg-[#f1f1f1] rounded-xl h-60 w-full p-2"
              src={photo}
              alt="Place"
            />
          </figure>
        </Link>
        <p className="pl-3 text-green-800 font-semibold text-sm">
          {countryName}
        </p>

        <div className="card-body">
          <div>
            <h2 className="card-title">{spotName}</h2>
            <p className="font-medium text-[#23BE0A] flex items-center gap-1 pb-2">
              <IoLocationSharp />
              {location}
            </p>
            <p className="text-lg font-semibold text-[#59C6D2]">
              $ {averageCost} / {travelTime}
            </p>
          </div>
          <div className="flex justify-between">
            <Link to={`/places/${_id}`}>
              {" "}
              <button className="btn btn-primary btn-sm">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error text-white btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MyListDetails.propTypes = {
  myList: PropTypes.object,
  myLists: PropTypes.array,
  setMyLists: PropTypes.func,
};

export default MyListDetails;
