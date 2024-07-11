import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import MobileApp from "../components/MobileApp";

const MenuPage = () => {
  return (
    <div>
      <div className="z-[2]">
        <ExploreMenu />
      </div>
      <hr />
      <div className="z-[0.5]">
        <FoodDisplay />
      </div>
      <MobileApp />
    </div>
  );
};

export default MenuPage;
