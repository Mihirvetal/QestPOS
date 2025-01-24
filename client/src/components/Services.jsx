/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Services = () => {
  const dispatch = useDispatch();

  const services = [
    {
      id: 1,
      name: "Full Body Massage",
      description:
        "Relax your muscles and improve blood circulation with a professional full-body massage.",
      price: 1500,
      imageUrl:
        "http://ts2.explicit.bing.net/th?id=OIP.gA6V5XjN3f1KDqL9twjJOAHaFK&pid=15.1",
    },
    {
      id: 2,
      name: "Gym Membership",
      description:
        "Access to state-of-the-art gym equipment and professional trainers.",
      price: 2000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.tGy9ciTnye0UY2NCYp42rgHaEJ?w=288&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 3,
      name: "Yoga Class",
      description:
        "Join our yoga sessions to improve flexibility, balance, and mental clarity.",
      price: 1000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.L6PyYmR6sADkI3mJjq4BogHaE8?w=270&h=181&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 4,
      name: "Physical Therapy Session",
      description:
        "Personalized physical therapy to help recover from injuries and improve mobility.",
      price: 1800,
      imageUrl:
        "https://th.bing.com/th/id/OIP.yDLnrwRy7U5kICVAAAbhUQAAAA?w=269&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ];

  const handleAddToCart = (service) => {
    dispatch(addToCart(service));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
         
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={service.imageUrl}
                alt={service.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{service.name}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
                <p className="text-lg font-bold text-amber-600 mt-4">
                  ₹{service.price}
                </p>
                <button
                  onClick={() => handleAddToCart(service)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
