import HomeCover from "../assets/images/HomeCover.jpg";
import Dust from "../assets/images/dust.jpeg";
import Price from "../assets/images/priceImage.png";
import Scrap from "../assets/images/scrap-metals.png";
import Bin from "../assets/images/bin.png";
import Truck from "../assets/images/truck.png";
import { Section } from "../components/index";
import Card from "../components/common/Card";
import dustBin from "../assets/images/dustbin.jpg";
import price from "../assets/images/price.jpg";
import weight from "../assets/images/weight.jpg";
import nature from "../assets/images/nature.jpg";

function Home() {
  return (
    <>
      <Section
        imageSrc={HomeCover}
        imageAlt="Home Image"
        title="Your Trusted Scrap Recycling Partner"
        description="Welcome to Blaze-Nation, where our commitment to sustainability, environmental responsibility, and customer satisfaction drives everything we do."
        buttonText="Contact Us"
        isImageOnRight={false}
      />
      <Section
        className="bg-gray-100"
        imageSrc={Price}
        imageAlt="Dust Image"
        title="Grab up Best Current Prices"
        description="We have one of the highest scrap metals prices for delivered materials to the facility.
        
        For larger and commercial quantities, give us call and we will work out a suitable agreement."
        buttonText="Complete Price List"
        isImageOnRight={false}
      />
      <section>
        <h1 className="text-center text-6xl text-gray-800 text-opacity-75 font-semibold subpixel-antialiased mb-2">
          What we offer
        </h1>
        <h4 className="text-center mb-4 text-2xl text-gray-800 text-opacity-75 font-semibold subpixel-antialiased">
          Make recycling process easy and simple at metals recycling center
          texas
        </h4>
      </section>

      <Section
        imageSrc={Scrap}
        imageAlt="Scrap Image"
        title="Scrap Metals"
        description="It minimizes the environmental impact of mining, which can lead to habitat destruction.
          Produces fewer carbon emissions compared to primary metal production.
          Reduces the amount of energy used and the emissions of greenhouse gases."
        buttonText="Get A Quote"
        isImageOnRight={true}
      />

      <Section
        className="bg-gray-100"
        imageSrc={Bin}
        imageAlt="Bin Image"
        title="Containers & Bins"
        description="It contributes to a decrease in the carbon footprint associated with manufacturing new containers.
        It is not only environmentally responsible but also financially advantageous.
        Aligns with global efforts to reduce waste and conserve resources."
        buttonText="Get A Quote"
        isImageOnRight={false}
      />
      <Section
        imageSrc={Truck}
        imageAlt="Truck Image"
        title="Pick-up"
        description="Contact us to schedule a pick-up at a time that suits your convenience.
        On the scheduled day, our team will arrive at your location to collect your recyclables.
        Back at our metals recycling center orange county, your materials will be sorted, cleaned, and processed for recycling"
        buttonText="Get A Quote"
        isImageOnRight={true}
      />
      <section>
        <h1 className="text-center text-4xl text-gray-800 font-semibold subpixel-antialiased mb-2">
          Why Choose Blaze Nation
        </h1>
      </section>

      <section className="mb-5 flex flex-wrap justify-center lg:justify-evenly">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-64">
          <Card
            imageUrl={nature}
            title="Save Environment"
            description="Recycling conserves resources, helps protect the environment for us as we are working towards save Environment"
            buttonText="Get A Quote"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-64">
          <Card
            imageUrl={weight}
            title="Accurate Weight"
            description="We use certified calibrated weighing scales that gives complete assurance on accurate weight."
            buttonText="Get A Quote"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-64">
          <Card
            imageUrl={dustBin}
            title="Minimum Scrap Requirements"
            description="Minimum 10KG of scrap or scrap items. Else pickup charge will be applied."
            buttonText="Get A Quote"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-64">
          <Card
            imageUrl={price}
            title="Competitive Price"
            description="We pay the right value to customers considering minimal operational cost towards doorstep service."
            buttonText="Get A Quote"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
