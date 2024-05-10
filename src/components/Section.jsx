import { useState } from "react";
import { Button } from "./index";

function Section({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  isImageOnRight,
  className,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`flex flex-col m-4 md:m-8 p-4 md:p-10 bg-white rounded-lg shadow-lg ${className}`}
    >
      <div
        className={`md:flex ${
          isImageOnRight ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className={`md:w-1/2 ${isImageOnRight ? "md:mr-10" : "md:ml-10"}`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-auto rounded-lg object-cover ${
              isHovered
                ? "shadow-lg transform scale-105 transition-transform duration-300"
                : "transition-transform duration-300"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4 md:mb-6 lg:mb-10">
              {title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6 lg:mb-10">
              {description}
            </p>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
