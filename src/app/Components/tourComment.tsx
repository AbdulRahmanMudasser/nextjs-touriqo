"use client";
import { Star, MessageCircle } from "lucide-react";

export default function TourComments() {
  return (
    <div className="max-w-3xl mx-0 p-6 font-sans">
      {/* Comments Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-2">3 thoughts on "Cottages In The Middle Of Beach"</h2>
        <div className="w-12 h-1 bg-[#A3BFFA] mb-8"></div> {/* Changed to lighter purple-blue */}

        {/* Comment 1 */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-800">admin</h3>
                <button className="text-gray-600 flex items-center text-sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Reply
                </button>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                <span className="text-[#6ab04c] mr-2">—</span>
                February 8, 2023
              </div>

              {/* Ratings */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                {/* Quality */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Quality</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={`quality-1-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    <Star className="h-4 w-4 text-[#f39c12]" />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={`location-1-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Amenities</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={`amenities-1-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Services</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={`services-1-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    <Star className="h-4 w-4 text-[#f39c12]" />
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Price</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={`price-1-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    <Star className="h-4 w-4 text-[#f39c12]" />
                  </div>
                </div>
              </div>

              {/* Comment Text */}
              <p className="text-gray-700">
                It is a great place to shop not too far from New York. We took the bus from Port Authority and traveled
                through the countryside to get there.
              </p>
            </div>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-800">admin</h3>
                <button className="text-gray-600 flex items-center text-sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Reply
                </button>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                <span className="text-[#6ab04c] mr-2">—</span>
                February 8, 2023
              </div>

              {/* Ratings */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                {/* Quality */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Quality</div>
                  <div className="flex">
                    {[1, 2, 3].map((i) => (
                      <Star key={`quality-2-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    {[1, 2].map((i) => (
                      <Star key={`quality-2-empty-${i}`} className="h-4 w-4 text-[#f39c12]" />
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={`location-2-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    <Star className="h-4 w-4 text-[#f39c12]" />
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Amenities</div>
                  <div className="flex">
                    {[1, 2, 3].map((i) => (
                      <Star key={`amenities-2-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    {[1, 2].map((i) => (
                      <Star key={`amenities-2-empty-${i}`} className="h-4 w-4 text-[#f39c12]" />
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Services</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={`services-2-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <div className="text-sm text-gray-600 mb-1">Price</div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={`price-2-${i}`} className="h-4 w-4 text-[#f39c12] fill-[#f39c12]" />
                    ))}
                    <Star className="h-4 w-4 text-[#f39c12]" />
                  </div>
                </div>
              </div>

              {/* Comment Text */}
              <p className="text-gray-700">
                This is the best tour on the east coast! It was amazing how many places we visited and what great
                memories we made!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Add a Comment</h2>
        <div className="w-12 h-1 bg-[#A3BFFA] mb-4"></div> {/* Changed to lighter purple-blue */}

        <p className="text-gray-600 text-sm mb-6">Your email address will not be published.</p>

        <form>
          {/* Rating Section */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
            {/* Quality */}
            <div>
              <div className="text-gray-700 mb-1">Quality</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`quality-form-${i}`} className="h-5 w-5 text-[#f39c12] fill-[#f39c12]" />
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="text-gray-700 mb-1">Location</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`location-form-${i}`} className="h-5 w-5 text-[#f39c12] fill-[#f39c12]" />
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="text-gray-700 mb-1">Amenities</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`amenities-form-${i}`} className="h-5 w-5 text-[#f39c12] fill-[#f39c12]" />
                ))}
              </div>
            </div>

            {/* Average Rating */}
            <div className="ml-auto bg-gray-100 p-4 flex flex-col items-center justify-center">
              <div className="text-[#f39c12] text-2xl font-bold">5.00</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
            {/* Services */}
            <div>
              <div className="text-gray-700 mb-1">Services</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`services-form-${i}`} className="h-5 w-5 text-[#f39c12] fill-[#f39c12]" />
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="text-gray-700 mb-1">Price</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={`price-form-${i}`} className="h-5 w-5 text-[#f39c12] fill-[#f39c12]" />
                ))}
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3BFFA] focus:border-transparent" // Changed focus ring to lighter purple-blue
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3BFFA] focus:border-transparent" // Changed focus ring to lighter purple-blue
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Write Your Comment"
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3BFFA] focus:border-transparent" // Changed focus ring to lighter purple-blue
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="save-info" className="h-4 w-4 text-[#6ab04c] border-gray-300 rounded" />
            <label htmlFor="save-info" className="ml-2 text-gray-700 text-sm">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#A3BFFA] hover:bg-[#1E2A44] text-white font-medium rounded-md transition duration-200" // Changed to lighter purple-blue with dark blue hover
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}