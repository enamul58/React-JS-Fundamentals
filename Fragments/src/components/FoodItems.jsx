import Item from "./Item";

const FoodItems = ({ ArrayItem }) => {
  // let foodItems = ["Apple", "orange", "Mango", "Banana"];
  return (
    <ul className="list-group">
      {ArrayItem.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
