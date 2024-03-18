import Employee from "./Employee";
import Enamul from "./Enamul";
import NotEnamul from "./NotEnamul";

function App() {
  // return <Employee name="enamul 58"></Employee>;
  let data;
  let name = "Enamul";

  if (name === "Enamul") {
    data = <Enamul />;
  } else {
    data = <NotEnamul />;
  }
  return <div>{data}</div>;
}

export default App;
