import { assets } from "../assets/assets";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="flex w-[90%] justify-between m-auto items-center py-2 px-0 bg-cover max-h-[80px] ">
      <div className="w-[150px] ">
        <img src={assets.logo} alt="" />
      </div>
      <div className="flex gap-4 justify-start  ">
        <p className="hidden md:block">HOME</p>
        <p className="hidden md:block"> MENU</p>
        <p className="hidden md:block">MOBILE-APP</p>
        <p className="hidden md:block">CONATCT-US</p>
      </div>
      <div className="flex rounded-[20px] border-[2.5px] w-[200px] border-[#A70604] gap-2 h-[30px] my-2  ">
        <div className="bg-[#A70604] flex items-center justify-center w-[110px] rounded-l-[20px] ">
          <p className=" text-white">Sign Up</p>
        </div>
        <div className="bg-white flex items-center justify-center w-[90px] rounded-r-[20px]">
          <p className=" text-[#dd3835]">Register</p>
        </div>
      </div>
      <div className="flex rounded-[20px] border-[2.5px] border-[#A70604] w-[120px] justify-between  h-[30px]">
        <div className="flex items-center rounded-l-[20px] justify-center bg-[#A70604] w-[60px]">
          <ShoppingCartIcon className="text-white" />
        </div>
        <div className="flex items-center justify-center w-[60px] rounded-r-[20px]">
          <p className="text-[#dd3835]">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
