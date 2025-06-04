import { Calendar, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function TourBooking() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
        {/* Left Content Section */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Explore Tours</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm">
            Sed ut perspiciatis unde omniste natus error sit voluptatem accusantium doloremque laudantium totam rem
            aperiam, eaque ip quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Advance Facilities</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Challenge</h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.
          </p>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 relative h-72 sm:h-96">
          <Image
            src="/images/tour.jpeg"
            alt="Beautiful tour destination with scenic landscapes"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Right Booking Form */}
        <div className="w-full md:w-1/3">
          <div className="bg-[#f8fbf9] p-3 sm:p-4 rounded-md border-l-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 border-l-4 border-white -600 pl-3">
              Booking Tour
            </h3>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <label htmlFor="from" className="block text-gray-700 mb-2 text-sm">
                  From:
                </label>
                <div className="relative">
                  <input type="text" id="from" className="w-full border border-white rounded-md p-2 pr-10 text-sm" />
                  <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 mb-2 text-sm">
                  Time:
                </label>
                <input type="text" id="time" className="w-full border border-gray-300 rounded-md p-2 text-sm" />
              </div>

              <div>
                <label htmlFor="tickets" className="block text-gray-700 mb-2 text-sm">
                  Tickets:
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    id="tickets"
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 text-sm"
                    disabled
                    placeholder="please, select date first"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="service-booking"
                    className="h-3 w-3 text-green-600 border-gray-300 rounded"
                  />
                  <label htmlFor="service-booking" className="ml-2 text-gray-700 text-sm">
                    Service per booking
                  </label>
                </div>
                <span className="text-gray-700 font-medium text-sm">$30.00</span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Add Extra</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="service-person"
                        className="h-3 w-3 text-green-600 border-gray-300 rounded"
                      />
                      <label htmlFor="service-person" className="ml-2 text-gray-700 text-sm">
                        Service per person
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pl-4 sm:pl-6">
                    <span className="text-gray-700 text-sm">Children:</span>
                    <span className="text-gray-700 font-medium text-sm">$18.00</span>
                  </div>

                  <div className="flex justify-between items-center pl-4 sm:pl-6">
                    <span className="text-gray-700 text-sm">Youth:</span>
                    <span className="text-gray-700 font-medium text-sm">$16.00</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-base sm:text-lg font-bold text-gray-800">Total:</span>
                  <span className="text-base sm:text-lg font-bold text-gray-800"></span>
                </div>

                <button className="w-full bg-[#A3BFFA] hover:bg-[#A3BFFA] hover:text-[#1E2A44] text-white font-bold py-2 px-4 rounded-md flex items-center justify-center text-sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
