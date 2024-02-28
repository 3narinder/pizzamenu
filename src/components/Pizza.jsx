import React from "react";

const Pizza = ({ pizzaObj }) => {
  return (
    <div className={`flex gap-12 ${pizzaObj?.soldOut && "text-[#888]"}`}>
      <img
        className={`w-48 h-auto aspect-w-1 aspect-h-1 self-start ${
          pizzaObj.soldOut ? "filter backdrop-grayscale-0 opacity-80" : ""
        }`}
        src={`${pizzaObj.photoName}`}
        alt={pizzaObj.name}
      />
      <div className="flex flex-col gap-3 px-2 py-0">
        <div className=" text-4xl font-normal">{pizzaObj.name} </div>
        <div className="text-xl font-light italic mb-auto">
          {pizzaObj?.ingredients}
        </div>

        <div>
          {pizzaObj?.soldOut ? (
            <div className="text-red-300 text-xl font-semibold">SOLD OUT</div>
          ) : (
            <div className="text-red-600 text-xl font-semibold">
              ${pizzaObj?.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
