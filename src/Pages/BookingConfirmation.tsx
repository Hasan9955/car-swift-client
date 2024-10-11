
import React from 'react';

interface BookingSummaryProps {
  pickupLocation?: string;
  pickupDate?: string;
  pickupTime?: string;
  dropoffLocation?: string;
  dropoffDate?: string;
  dropoffTime?: string;
  vehicleName?: string;
  vehicleRate?: string;
  totalVehicleCost?: string;
  insuranceCost?: string;
  oneWayFee?: string;
  roadCareCost?: string;
  grandTotal?: string;
}

const BookingConfirmation: React.FC<BookingSummaryProps> = ({
  pickupLocation,
  pickupDate,
  pickupTime,
  dropoffLocation,
  dropoffDate,
  dropoffTime,
  vehicleName,
  vehicleRate,
  totalVehicleCost,
  insuranceCost,
  oneWayFee,
  roadCareCost,
  grandTotal,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">Booking Summary</h2>

      <div className="flex justify-between mb-2">
        <div>
          <h3 className="font-semibold">Pick-up</h3>
          <p className="text-pink-600">{pickupLocation}</p>
          <p className="text-sm text-gray-500">{pickupDate}</p>
          <p className="text-sm text-gray-500">{pickupTime}</p>
          <a href="#" className="text-blue-500 text-sm underline">Edit itinerary</a>
        </div>

        <div>
          <h3 className="font-semibold">Drop-off</h3>
          <p className="text-green-600">{dropoffLocation}</p>
          <p className="text-sm text-gray-500">{dropoffDate}</p>
          <p className="text-sm text-gray-500">{dropoffTime}</p>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="flex items-center mb-2">
          <img className="w-16 h-16 rounded-lg mr-3" src="https://via.placeholder.com/100" alt="car image" />
          <div>
            <p className="font-semibold">{vehicleName}</p>
            <p className="text-sm text-gray-500">{vehicleRate}</p>
            <p className="text-red-500 font-semibold">{totalVehicleCost}</p>
            <a href="#" className="text-blue-500 text-sm underline">Change vehicle</a>
          </div>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between text-sm">
          <p>Peace of mind Insurance</p>
          <p className="text-red-500">{insuranceCost}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>One Way Fee</p>
          <p className="text-red-500">{oneWayFee}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Total Road Care 
            <span className="tooltip" data-tip="Includes road assistance">
              <i className="fas fa-question-circle"></i>
            </span>
          </p>
          <p className="text-red-500">{roadCareCost}</p>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between text-lg font-bold">
          <p>Grand Total</p>
          <p className="text-red-500">{grandTotal}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="btn btn-outline btn-sm">
          <i className="fas fa-envelope mr-1"></i> Email enquiry
        </button>
        <button className="btn btn-outline btn-sm">
          <i className="fas fa-save mr-1"></i> Save quote
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
 