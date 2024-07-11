import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { ToastContainer } from "react-toastify";

const FoodItem = ({ id, name, price, description, category, image }) => {
  const { addToCart } = useContext(StoreContext);
  return (
    <div className="w-[300px] p-[10px] rounded-[20px] bg-white">
      <div className="cursor-pointer transition duration-500 border rounded-2xl hover:scale-105 py-[30px]">
        <img src={image} alt={name} className="mb-[10px]" />
        <p className="mb-[5px] text-gray-500">{id}</p>
        <h3 className="mb-[10px] text-lg font-bold px-[10px]">{name}</h3>
        <p className="mb-[10px] text-gray-700 px-[10px]">{description}</p>
        <p className="mb-[10px] text-lg font-semibold px-[10px]">Rs.{price}</p>
        <p className="mb-[20px] text-gray-500 px-[10px]">{category}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={addToCart}
            className="bg-[#A70604] text-white rounded-[10px] h-[40px] w-[90%] px-[10px] py-[5px] flex justify-center items-center gap-[2px] max-w-xs transition duration-500 cursor-pointer hover:scale-105"
          >
            Add to the Cart
            <ShoppingCartIcon className="ml-[5px]" />
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
