import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    success,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="lg:mt-20 md:mt-20 mt-14 p-4">
      <div className="flex justify-center">
        {success && (
          <div className="mb-4 text-green-500 font-bold bg-green-100 p-2 rounded text-center inline-block">
            {success}
          </div>
        )}
      </div>
      {cart.length === 0 ? (
        <p className="font-bold lg:text-4xl md:text-4xl text-2xl text-red-500 text-center">
          Your cart is empty
        </p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <React.Fragment key={item.id}>
              <li className="item-container">
                <div className="lg:flex md:flex lg:justify-between md:justify-between items-center">
                  <div className="flex items-center w-full lg:w-auto md:w-auto">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="lg:w-14 md:w-14 w-10 h-10 lg:h-14 md:h-14 inline-block mr-3 rounded-md"
                    />
                    <span className="flex-grow font-bold whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                  <div className="items-center mt-2 w-full lg:w-auto md:w-auto">
                    <button
                      className="bg-red-500 text-white rounded-full p-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="mx-2 font-bold w-10 text-center">{item.quantity}</span>
                    <button
                      className="bg-green-500 text-white rounded-full p-1"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <FaPlus />
                    </button>
                    <span className="font-bold ml-2 px-2 py-1 bg-sky-500 rounded-full text-white">
                      {item.price * item.quantity} Rs
                    </span>
                    <button
                      className="bg-red-600 text-white rounded-full p-1 ml-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </li>
              {index < cart.length - 1 && <hr className="border-black my-4" />}
            </React.Fragment>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <hr className="border-sky-500 border-t-4 mb-2" />
          <p className="font-bold lg:text-2xl md:text-2xl text-xl text-sky-500">
            Total Price of your Cart : {totalPrice} Rs
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

