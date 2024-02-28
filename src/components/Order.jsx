import React from "react";

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        We'are open from {openHour}:00 to {closeHour}:00.Come visit use or order
        online.
      </div>

      <button className="bg-yellow-400 px-5 py-3 rounded-sm  font-semibold text-lg tracking-wide">
        Order
      </button>
    </div>
  );
};

export default Order;
