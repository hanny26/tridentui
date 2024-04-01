import React from 'react'

export const About = () => {
  return (
    <div className="bg-white text-black">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-medium">About Us</h2>
          <p className="text-lg md:text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            beatae! Doloribus fuga aperiam magni ipsum repellat voluptates
            itaque error, atque, exercitationem fugit ab, modi ut voluptatum
            sequi ad eum! Rerum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus quia suscipit deserunt, neque nemo veniam
            adipisci deleniti culpa dolor dolores omnis, rem veritatis assumenda
            eaque dignissimos ut, nam debitis numquam!
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/909906350/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=3CI-bw2NhYaX_t0-CZIXIIXsOygFcUaoGSmzbnVB-fU="
            alt=""
            className="w-full md:w-[400px] h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
