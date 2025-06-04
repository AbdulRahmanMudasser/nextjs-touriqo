import Image from 'next/image';
import { FaMapMarkerAlt, FaUsers, FaRegHeart, FaCamera } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import { AiFillStar, AiOutlineArrowRight } from 'react-icons/ai';

const TourCard = () => {
  const tours = [
    {
      image: "/images/mountains.jpg",
      alt: "Cottages",
      title: "Cottages In The Middle Of Beach",
      price: "From $109.00",
      location: "Main Street, Brooklyn, NY",
      duration: "3 days",
      people: "12"
    },
    {
      image: "/images/tent.jpg",
      alt: "Tent",
      title: "Man Standing on a Rock",
      price: "From $129.00",
      location: "Main Street, Brooklyn, NY",
      duration: "3 days",
      people: "12"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {tours.map((tour, index) => (
        <div key={index} className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 relative">
          <div className="relative w-60 h-60 flex-shrink-0">
            {/* Replace <img> with <Image> */}
            <Image
              src={tour.image}
              alt={tour.alt}
              width={240} // Set your desired width
              height={240} // Set your desired height
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded">
              FEATURED
            </div>
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer">
              <FaRegHeart className="text-gray-600 text-sm" />
            </div>
          </div>

          <div className="p-4 flex flex-col justify-between flex-1 text-left">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 text-yellow-500 text-sm">
                  {[...Array(4)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                  <AiFillStar className="text-yellow-300" />
                </div>
                <div className="flex items-center space-x-1 text-gray-400 text-sm">
                  <FaCamera />
                  <span>05</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-1">{tour.title}</h3>
              <p className="flex items-center text-gray-500 text-sm mt-1">
                <FaMapMarkerAlt className="mr-1" />
                {tour.location}
              </p>
              <p className="text-green-600 font-semibold text-sm mt-2">{tour.price}</p>
            </div>

            <div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded mt-4 text-sm">
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <MdOutlineAccessTime className="mr-1" />
                  {tour.duration}
                </span>
                <span className="flex items-center">
                  <FaUsers className="mr-1" />
                  {tour.people}
                </span>
              </div>
              <a href="#" className="text-green-600 font-medium flex items-center hover:underline">
                Explore <AiOutlineArrowRight className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCard;
