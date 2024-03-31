import Button from "./Elements/Button";

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
        <button className="order-btn  text-yellow-300 px-6 py-3 md:mr-4 mb-2 md:mb-0 rounded-lg focus:outline-none hover:bg-red-700">
                <a href="/menu" >
          Menu
         </a>
        
        </button>
        {/* <a href="/menu" className="menu-btn bg-gray-800 text-white px-6 py-3 rounded-lg focus:outline-none hover:bg-gray-900">
          Menu
        </a> */}
      </div>

      {/* Image */}
      <div className="banner-image w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6SUEUFdy2lNSNXfsmXAvKpSXzLoU9MgratWIDh6K2aw&s"
          alt="banner"
          className="w-full rounded-3xl"
        />
      </div>
    </div>
  );
};
