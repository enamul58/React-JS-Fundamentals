import "./App.css";
import ErrorMassage from "./components/ErrorMassage";
import FoodItems from "./components/FoodItems";
import Container from "./components/FoodItems";

function App() {
  let foodItems = ["Apple", "orange", "Mango", "Banana"];
  //let foodItems = [];
  //if (foodItems.length === 0) {
  //return <h3>I am sill hungry</h3>;
  //}

  return (
    <Container>
      <div className="w-50 mx-auto">
        <h1 className="my-3">Healthy Food</h1>
        <ErrorMassage ArrayItem={foodItems}></ErrorMassage>
        <FoodItems ArrayItem={foodItems}></FoodItems>
      </div>
    </Container>
  );
}

export default App;
