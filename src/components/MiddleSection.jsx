import { MS_Images } from "../assets/assets";

const MiddleSection = () => {
  return (
    <div className="pb-0 pt-[15px] ">
      <div>
        <h1 className="text-3xl font-semibold text-center pt-[15px]">
          Best Foods in Sri Lanka
        </h1>
        <div className="flex justify-between h-[500px] w-[400px] gap-[50px] py-[20px] relative ">
          <img src={MS_Images.M_Chicken} alt="" className="cursor-pointer " />
          <img src={MS_Images.M_Biriyani} alt="" className="cursor-pointer" />
          <img src={MS_Images.M_Burger} alt="" className="cursor-pointer" />
        </div>
        <div className="flex justify-between h-[500px] w-[400px] gap-[50px] py-[20px]">
          <img
            className="w-[400px] h-[400px] gap-[50px] py-[20px] relative"
            src={MS_Images.Chicken_Bucket}
            alt=""
          />
          <div className="py-[50px]">
            <p className="text-xl font-medium w-[500px] text-[#DAB407]  ">
              100% LOCALLY SOURCED FROM OUR VERY OWN POULTRY FARMERS
            </p>
            <p className="text-xl w-[500px] font-semibold py-[30px]">
              EXPERTLY PREPARED, BURSTING WITH FRESHNESS, AND SIMPLY
              MOUTHWATERING!
            </p>
            <p className="text-xl w-[500px] text-[#c1312f]">
              A Taste You Can Trust!
            </p>
            <div className="py-[30px]">
              <button className="text-xl w-[200px] hover:bg-black rounded-[10px]  text-white bg-[#A70604] h-[50px]">
                Order Now
              </button>
            </div>
          </div>
          <img
            className="w-[400px] h-[400px] gap-[50px]  py-[20px]  relative"
            src={MS_Images.Delivery}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
