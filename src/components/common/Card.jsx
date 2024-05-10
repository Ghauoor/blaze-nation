import React from "react";
import Button from "./Button";

const Card = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="bg-gray-200 flex flex-col justify-evenly  rounded-lg shadow hover:shadow-gray-800 transition duration-300 ease-in-out">
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-52 object-fill rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-5">{description}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;
