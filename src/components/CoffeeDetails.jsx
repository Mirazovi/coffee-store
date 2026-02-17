import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const navigate = useNavigate();
    console.log(coffee);
    const { name, photoUrl, price, taste, supplier, chef, details } = coffee
    return (
        <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
                src={photoUrl}
                alt={name}
                className="w-full h-96 object-cover rounded-lg"
            />

            <div className="mt-6 space-y-2">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>💲 Price: {price}</p>
                <p>☕ Taste: {taste}</p>
                <p>🏭 Supplier: {supplier}</p>
                <p>👨‍🍳 Chef: {chef}</p>
                <p>📄 Details: {details}</p>
                 <button
                  onClick={() => navigate('/')}
                 className="mt-4 bg-[#6f4e37] text-white px-4 py-2 rounded"
              >
               Back to Home
              </button>
            </div>
        </div>
    );
};
export default CoffeeDetails