import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";

const FoodDisplay = () => {
  return (
    <div className="flex flex-wrap justify-center  pt-[30px]">
      {food_list.map((food) => (
        <FoodItem
          key={food._id}
          name={food.name}
          price={food.price}
          description={food.description}
          category={food.category}
          image={food.image}
        />
      ))}
    </div>
  );
};

export default FoodDisplay;
