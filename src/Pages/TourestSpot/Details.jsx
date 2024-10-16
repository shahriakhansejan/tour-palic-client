import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const place = useLoaderData();
    const navigate = useNavigate();
    const {
        spotName,
        countryName,
        averageCost,
        travelTime,
        totalVisitor,
        location,
        season,
        photo,
      } = place; 

    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div className='container min-h-screen mt-6 mx-auto'>
            <div className='flex flex-col lg:flex-row p-2 gap-2'>
            <div className='flex-1'>
            <img className='rounded bg-[#f1f1f1] p-3' src={photo} alt="" />
            </div>
            <div className='flex-1 flex flex-col  border rounded p-3 justify-between'>
                <div className='flex flex-col gap-3'>
                <h2 className='text-yellow-700 text-2xl font-bold'>Spot Name: {spotName}</h2>
                <h2 className='text-green-700 text-lg font-semibold border-b mb-3'>Country Name: {countryName}</h2>
                <h2 className='text-gray-500 text-lg font-semibold'>Location: {location}</h2>
                <h2 className='text-gray-500 text-lg font-semibold'>Cost: {averageCost} in {travelTime}</h2>
                <h2 className='text-gray-500 text-lg font-semibold'>Total Visitor: {totalVisitor} per Year</h2>
                <h2 className='text-gray-500 text-lg font-semibold'>Spot Name: {spotName}</h2>
                <h2 className='text-gray-500 text-lg font-semibold'>Prefer Season: {season}</h2>
                </div>



                <div className='flex mt-6 justify-between'>
                <Link to='/places'><button className='btn btn-info text-white'>Back to All spot</button></Link>
                <button onClick={handleBack} className='btn'><FaArrowLeftLong/> Back</button>
                </div>
            </div>
            </div>


            
        </div>
    );
};

Details.propTypes = {
    
};

export default Details;