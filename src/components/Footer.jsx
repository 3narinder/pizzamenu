import React from "react";
import Order from "./Order";

const Footer = () => {
  const Hour = new Date().getHours();

  const OpenHour = 10;
  const closeHour = 22;
  const isOpen = Hour >= OpenHour && Hour <= closeHour;

  return (
    <div className="text-xl">
      {isOpen ? (
        <Order openHour={OpenHour} closeHour={closeHour} />
      ) : (
        <div>
          We're happy to welcome you between {OpenHour}:00 and {closeHour}:00
        </div>
      )}
    </div>
  );
};

export default Footer;
