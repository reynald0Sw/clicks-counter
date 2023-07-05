import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import logo from "./img/Perona.jpeg";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo of one piece" />
      </div>
      <div className="principal-container">
        <Counter numClicks={numClicks} />
        <Button
          text="Click"
          isclickButton={true}
          handleButtonClick={handleClick}
        />
        <Button
          text="Reset"
          isclickButton={false}
          handleButtonClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
