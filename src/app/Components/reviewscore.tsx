"use client";

export default function ReviewScores() {
  return (
    <div className="max-w-3xl p-6 font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Scores</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Overall Score */}
          <div className="p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="text-7xl font-bold text-gray-800">4.13</div>
            <div className="text-lg text-gray-500 -mt-2">/5</div>
            <div className="text-[#A3BFFA] font-medium mt-1">Wonderful</div> {/* Changed to lighter purple-blue */}
            <div className="text-sm text-gray-500 mt-1">3 verified reviews</div>
          </div>

          {/* Right Section - Score Breakdown */}
          <div className="p-8 md:w-2/3">
            <div className="space-y-4">
              {/* Quality */}
              <div className="flex items-center">
                <div className="w-24 text-gray-700">Quality</div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#A3BFFA] rounded-full animate-[progressBar_1.5s_ease-in-out_infinite] hover:bg-[#1E2A44] transition-colors duration-300"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-700">3.67/5</div>
              </div>

              {/* Location */}
              <div className="flex items-center">
                <div className="w-24 text-gray-700">Location</div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#A3BFFA] rounded-full animate-[progressBar_1.5s_ease-in-out_infinite] hover:bg-[#1E2A44] transition-colors duration-300"
                      style={{ width: "87%" }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-700">4.33/5</div>
              </div>

              {/* Amenities */}
              <div className="flex items-center">
                <div className="w-24 text-gray-700">Amenities</div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#A3BFFA] rounded-full animate-[progressBar_1.5s_ease-in-out_infinite] hover:bg-[#1E2A44] transition-colors duration-300"
                      style={{ width: "93%" }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-700">4.67/5</div>
              </div>

              {/* Services */}
              <div className="flex items-center">
                <div className="w-24 text-gray-700">Services</div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#A3BFFA] rounded-full animate-[progressBar_1.5s_ease-in-out_infinite] hover:bg-[#1E2A44] transition-colors duration-300"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-700">4/5</div>
              </div>

              {/* Price */}
              <div className="flex items-center">
                <div className="w-24 text-gray-700">Price</div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#A3BFFA] rounded-full animate-[progressBar_1.5s_ease-in-out_infinite] hover:bg-[#1E2A44] transition-colors duration-300"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right text-gray-700">4/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}