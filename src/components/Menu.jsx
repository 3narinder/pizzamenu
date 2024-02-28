import React from "react";
import Pizza from "../components/Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  const pizzas = pizzaData;
  const pizzaNum = pizzaData?.length;

  return (
    <div className="flex flex-col items-center gap-16">
      {/* Menu heading */}
      <div className="inline-block py-4 border-t-2 border-b-2 border-current text-3xl uppercase tracking-wider font-semibold">
        Our menu
      </div>

      {pizzaNum > 0 ? (
        <>
          <div className="text-center font-semibold text-xl w-5/6 ">
            Authentic Italian cuisine. {pizzaNum} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12">
            {pizzas?.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza?.name} />
            ))}
          </div>
        </>
      ) : (
        "Sorry ! We are still working on our menu"
      )}
    </div>
  );
};

export default Menu;
