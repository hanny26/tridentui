import React from "react";

export const Banner = () => {
  return (
    <div className="banner w-full md:w-2/3 px-4 md:px-8 mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Description */}
      <div className="banner-description w-full md:w-1/2 md:pr-6">
        <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold text-white">
          Food Ordering Made Easy
        </h2>
        <p className="font-semibold text-lg text-red-600">
          Get Started Today!
        </p>
      </div>

      {/* Buttons */}
      <div className="btn-container mt-4 md:mt-0 flex flex-col md:flex-row items-center">
        <a
          href="/menu"
          className="order-btn text-yellow-300 px-6 py-3 md:mr-4 mb-2 md:mb-0 rounded-lg focus:outline-none hover:bg-red-400 block md:inline-block text-center"
        >
          Menu
        </a>
      </div>

      {/* Image */}
      <div className="banner-image w-full md:w-1/2 mt-8 md:mt-0 mb-10">
        <img
          src="https://t3.ftcdn.net/jpg/01/86/33/72/360_F_186337209_9rbcMLu3wGCDNaEoK1jO0aNzb0pv7Xs7.jpg"
          alt="banner"
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Banner;
