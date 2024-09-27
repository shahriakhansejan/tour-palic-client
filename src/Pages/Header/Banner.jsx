import PropTypes from "prop-types";

const Banner = ({ homePlace, index, homePlaces }) => {
  const {spotName,
    countryName,
    averageCost,
    travelTime,
    totalVisitor,
    location,
    season,
    photo } = homePlace;

  const totalSlide = homePlaces.length;
  const preSlide = index === 0 ? `#slide${totalSlide}` : `slide${index}`
  const nextSlide = totalSlide - 1 === index ? `#slide1` : `#slide${index + 2}`

  const slideId = `slide${index + 1}`;



  return (
    <div style={{ backgroundImage: `url(${photo})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPositionY: 'center' }} id={slideId} className="carousel-item bg-black/50 bg-blend-multiply relative w-full">
      <div className="py-36 container mx-auto ">
        <div className=" text-center">
          <h1 className="text-4xl font-extrabold text-yellow-200">{spotName}</h1>
          <h2 className="text-5xl mt-7 mb-2 font-extrabold text-yellow-100">Get Opportunity For</h2>
          <h2 className="text-3xl font-extrabold text-green-200">Tour & Travels</h2>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={preSlide} className="btn btn-circle">
            ❮
          </a>
          <a href={nextSlide} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  homePlace: PropTypes.object,
  index: PropTypes.number,
  homePlaces: PropTypes.array
};

export default Banner;
