import PropTypes from 'prop-types';
import { FaArrowLeftLong, FaArrowRightLong, FaCommentDollar } from 'react-icons/fa6';
import { IoMdTime } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

const PlaceByCountryDetails = ({place}) => {
    const navigate = useNavigate()
    const {
        _id,
        spotName,
        countryName,
        averageCost,
        travelTime,
        totalVisitor,
        location,
        season,
        photo,
      } = place; 
    return (
        <div className=" bg-white rounded-xl border shadow-xl">
        <figure className="rounded-t-xl p-2">
            <img className="rounded-md w-screen h-72" src={photo} alt="Place" />
            <p className="-mt-7 absolute z-10 font-medium text-sm text-yellow-50 rounded bg-black/50 flex items-center gap-1 py-1 px-2"><TfiWorld/>{countryName}</p>
          </figure>
          
          
        <div className="card pb-5 px-3">
          <p className="flex font-medium py-1 items-center"><IoLocationSharp/>{location}</p>
            <h2 className="text-[#131313] font-bold text-2xl">{spotName}</h2>
            <div className="flex my-4 justify-between">
              <p className="flex px-3 py-2 rounded bg-[#dbfcd6] text-[#23BE0A] font-medium items-center gap-1"><FaCommentDollar className="text-[#23BE0A] text-xl"/>{averageCost}</p>
              <p className="flex px-3 py-2 rounded bg-[#dbfcd6] text-[#23BE0A] font-medium items-center gap-1"><IoMdTime className="text-[#23BE0A] text-xl"/>{travelTime}</p>
              
            </div>
            <p className="font-medium border-b text-[#414040]">Total visitor : {totalVisitor} /year</p>
  
            <div className="mt-2">
              <p className="font-semibold text-[#59C6D2]">{season}</p>
            <div className="flex justify-between mt-2">
                <button onClick={()=>navigate(-1)} className='btn btn-sm'><FaArrowLeftLong/> Back</button>
                <Link to={`/details/${_id}`}><button className="btn btn-sm btn-outline btn-success"><span className="flex items-center gap-1">View Details <FaArrowRightLong /></span></button></Link></div>
            </div>
  
        </div>
      </div>
    );
};

PlaceByCountryDetails.propTypes = {
    place: PropTypes.array
};

export default PlaceByCountryDetails;