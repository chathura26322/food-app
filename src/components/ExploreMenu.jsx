import { useState } from "react";

const ExploreMenu = () => {
  const [menu, setMenu] = useState("Rice");
  return (
    <div>
      <div className="flex justify-between py-[30px] px-[40px]  h-[150px]">
        <div className="flex overflow-x-scroll gap-[100px]  relative ">
          <p
            className={`border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle  cursor-pointer ${
              menu === "Rice" ? "bg-[#A70604] text-white" : ""
            }`}
            onClick={() => setMenu("Rice")}
          >
            Rice
          </p>
          <p className="border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer">
            Noodles
          </p>
          <p className="  border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer">
            FastFood
          </p>
          <p className="  border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ">
            Pure Veg
          </p>
          <p className=" border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ">
            Beverages
          </p>
          <p className="  border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle  cursor-pointer">
            Ice Cream
          </p>
          <p className="  border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ">
            Desserts
          </p>
          <p className=" border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ">
            Salads
          </p>
          <p className=" border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle  cursor-pointer">
            Pizza
          </p>
          <p className=" border-[3px] border-[#A70604] rounded-[25px] font-medium text-black bg-white min-w-[110px] p-[3px] h-[35px] text-center align-middle cursor-pointer ">
            Snacks
          </p>
        </div>
      </div>
      <hr className="w-[100%] " />
    </div>
  );
};

export default ExploreMenu;
