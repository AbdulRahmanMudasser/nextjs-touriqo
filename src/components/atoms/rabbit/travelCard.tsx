import Image from "next/image";

const TravelCard = () => {
  return (
    <div className="flex justify-center items-center mt-4 ">
      <div className="group w-64 h-72 relative rounded-lg overflow-hidden shadow-xl">
        {/* Image with smooth zoom */}
        <div className="h-full w-full transform transition-transform duration-[4000ms] ease-out group-hover:scale-110">
          <Image
            src="/images/hero-bg-1.jpg"
            alt="Travel to United Kingdom"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>

        {/* Text overlay with smooth grow */}
        <div className="absolute inset-0 bg-opacity-40 flex items-end p-4">
          <h3 className="text-white text-sm md:text-base font-semibold transition-all duration-700 ease-out group-hover:text-lg group-hover:font-bold">
            Travel to United Kingdom
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;