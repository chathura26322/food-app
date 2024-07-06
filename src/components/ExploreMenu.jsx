import { useState } from "react";

const ExploreMenu = () => {
  const [menu, setMenu] = useState("Rice");

  const handleClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <div>
      <div className="flex justify-between py-[30px] px-[40px]  h-[150px]">
        <div className="flex overflow-x-scroll gap-[100px]  relative ">
          {[
            "Rice",
            "Noodles",
            "FastFood",
            "Pure Veg",
            "Beverages",
            "Ice Cream",
            "Desserts",
            "Salads",
            "Pizza",
            "Snacks",
          ].map((menuItem) => (
            <p
              key={menuItem} // Add a unique key for each menu item
              className={`border-[3px] border-[#A70604] rounded-[25px] font-medium text-black  min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ${
                menu === menuItem ? "bg-[#A70604] text-white" : ""
              }`}
              onClick={() => handleClick(menuItem)}
            >
              {menuItem}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
