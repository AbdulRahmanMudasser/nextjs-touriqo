"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface BookingFormProps {
  id: string;
}

export default function BookingForm({ id }: BookingFormProps) {
  // Form state
  const [startDate, setStartDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<number>(1);
  const [serviceBooking, setServiceBooking] = useState<boolean>(false);
  const [servicePerson, setServicePerson] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Time slot options
  const timeSlots = ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

  // Calculate total cost
  const baseTicketPrice = 50; // $50 per ticket (adjustable)
  const serviceBookingCost = serviceBooking ? 30 : 0;
  const servicePersonCost = servicePerson ? ticketCount * (18 + 16) : 0;
  const totalCost = ticketCount * baseTicketPrice + serviceBookingCost + servicePersonCost;

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate) {
      setError("Please select a date.");
      return;
    }
    if (!timeSlot) {
      setError("Please select a time slot.");
      return;
    }
    setError("");
    console.log({
      id,
      startDate,
      timeSlot,
      ticketCount,
      serviceBooking,
      servicePerson,
      totalCost,
    });
  };

  return (
    <div className="w-full md:w-1/3">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-[#A3BFFA] pl-3">
          Book Your Tour
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date Input */}
          <div>
            <label
              htmlFor={`from-${id}`}
              className="block text-gray-700 mb-1 text-sm font-medium"
            >
              From:
            </label>
            <div className="relative">
              <input
                type="date"
                id={`from-${id}`}
                value={startDate}
                onChange={(e) => {
                  console.log("Date selected:", e.target.value);
                  setStartDate(e.target.value);
                  setError("");
                }}
                className="w-full border border-gray-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-[#A3BFFA] focus:border-[#A3BFFA] transition"
                min={new Date().toISOString().split("T")[0]}
                aria-label="Select tour start date"
              />
            </div>
          </div>

          {/* Time Slot Dropdown */}
          <div>
            <label
              htmlFor={`time-${id}`}
              className="block text-gray-700 mb-1 text-sm font-medium"
            >
              Time:
            </label>
            <select
              id={`time-${id}`}
              value={timeSlot}
              onChange={(e) => {
                setTimeSlot(e.target.value);
                setError("");
              }}
              className="w-full border border-gray-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-[#A3BFFA] focus:border-[#A3BFFA] transition"
              aria-label="Select tour time slot"
            >
              <option value="" disabled>
                Select time
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Ticket Count */}
          <div>
            <label
              htmlFor={`tickets-${id}`}
              className="block text-gray-700 mb-1 text-sm font-medium"
            >
              Tickets:
            </label>
            <input
              type="number"
              id={`tickets-${id}`}
              value={ticketCount}
              onChange={(e) => setTicketCount(Math.max(1, Math.min(10, +e.target.value)))}
              min={1}
              max={10}
              disabled={!startDate}
              className="w-full border border-gray-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-[#A3BFFA] focus:border-[#A3BFFA] transition disabled:bg-gray-50 disabled:cursor-not-allowed"
              placeholder={startDate ? "Enter number of tickets" : "Please select date first"}
              aria-label="Number of tickets"
            />
          </div>

          {/* Service per Booking */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`service-booking-${id}`}
                checked={serviceBooking}
                onChange={(e) => setServiceBooking(e.target.checked)}
                className="h-4 w-4 text-[#A3BFFA] border-gray-300 rounded focus:ring-[#A3BFFA] cursor-pointer"
                aria-label="Service per booking"
              />
              <label
                htmlFor={`service-booking-${id}`}
                className="ml-2 text-gray-700 text-sm cursor-pointer"
              >
                Service per booking
              </label>
            </div>
            <span className="text-gray-700 font-medium text-sm">$30.00</span>
          </div>

          {/* Add Extras */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Add Extras</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-person-${id}`}
                    checked={servicePerson}
                    onChange={(e) => setServicePerson(e.target.checked)}
                    className="h-4 w-4 text-[#A3BFFA] border-gray-300 rounded focus:ring-[#A3BFFA] cursor-pointer"
                    aria-label="Service per person"
                  />
                  <label
                    htmlFor={`service-person-${id}`}
                    className="ml-2 text-gray-700 text-sm cursor-pointer"
                  >
                    Service per person
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center pl-6">
                <span className="text-gray-600 text-sm">Children:</span>
                <span className="text-gray-700 font-medium text-sm">$18.00</span>
              </div>
              <div className="flex justify-between items-center pl-6">
                <span className="text-gray-600 text-sm">Youth:</span>
                <span className="text-gray-700 font-medium text-sm">$16.00</span>
              </div>
            </div>
          </div>

          {/* Total and Submit */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-gray-800">${totalCost.toFixed(2)}</span>
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-2" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full border border-gray-200 bg-[#A3BFFA] hover:bg-[#8aa9ff] text-white font-bold py-2 px-4 rounded-md flex items-center justify-center text-sm transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!startDate || !timeSlot}
              aria-label="Book tour"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
            Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}