const ErrorMassage = ({ ArrayItem }) => {
  //let foodItems = ["Apple", "orange", "Mango", "Banana"];
  return <>{ArrayItem.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMassage;
