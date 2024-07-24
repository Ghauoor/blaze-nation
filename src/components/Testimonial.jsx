// Testimonial.js
import React from "react";

const Testimonial = ({
  clientName,
  clientTitle,
  clientFeedback,
  clientAvatar,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 md:p-12 hover:bg-gray-100 hover:shadow-md transition duration-300 ease-in-out overflow-hidden">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <img
          src={clientAvatar}
          alt={clientName}
          className="w-16 h-16 rounded-full mr-4 md:mr-8 mb-4 md:mb-0 object-cover"
        />
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {clientName}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">{clientTitle}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        {clientFeedback}
      </p>
    </div>
  );
};

export default Testimonial;
