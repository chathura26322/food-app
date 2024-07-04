import { assets } from "../assets/assets";

const MobileApp = () => {
  return (
    <div
      className="mx-[100px] items-center p-[20px] my-auto text-3xl text-center font-[500]"
      id="mobile-app"
    >
      <p>
        For Better Experience Download <br />
        Our Mobile Apps
      </p>
      <div className="flex justify-between h-[120px] w-[400px] gap-[10px] py-[20px] relative">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
