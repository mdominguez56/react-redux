import "./App.css";
import Count from "./Component/Count";
import NewCount from "./Component/NewCount";

function App() {
  return (
    <div>
      <h1>UseReducer</h1>
      <Count />
      <h1>New Counter</h1>
      <NewCount />
    </div>
  );
}

export default App;
