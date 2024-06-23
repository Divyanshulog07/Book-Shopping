import React, { useContext } from "react";
import list from "./data";
import { CartContext } from "./CartProvider";

const Cards = () => {
  const { addToCart, error, success } = useContext(CartContext);

  return (
    <div className="mx-auto p-4 lg:mt-20 md:mt-20 mt-14">
      <div className="flex justify-center">
      {error && (
        <div className="mb-4 text-red-500 font-bold bg-red-100 p-2 rounded text-center inline-block">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 text-green-500 font-bold bg-green-100 p-2 rounded text-center inline-block">
          {success}
        </div>
      )}
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((item) => (
          <div
            className="mt-2 hover:scale-105 duration-200 hover:shadow-2xl hover:border hover:rounded-xl p-4"
            key={item.id}
          >
            <div>
              <img className="w-40 h-52" src={item.img} alt={item.title} />
            </div>
            <div className="">
              <p className="font-bold font-serif">{item.title}</p>
              <p className="font-semibold text-gray-400 font-serif text-xs">
                {item.author}
              </p>
              <p className="font-bold text-gray-500">Price - {item.price}Rs</p>
              <button
                className="mt-1 border bg-blue-500 text-white font-semibold rounded-full px-3 py-1 hover:bg-blue-600"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cards;