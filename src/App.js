import { useState, useEffect} from "react";
import "./App.css";
import Musichai from "./Components/Musichai";

function App() {
  const [Music, setMusic] = useState([]);
  const hi = (color, src) => {
    // Generate a new user object
    const newMusic = {
      id: Music.length + 1,
      music: src,

      colors: color,
    };

    // Update the state by adding the new user
    setMusic([...Music, newMusic]);
    console.log("Clicked " + color);
  };

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCounter(prevCounter => {
            if (prevCounter >= 30) {
                clearInterval(intervalId); // Stop the counter when it reaches 3
                return prevCounter;
            } else {
                return prevCounter + 1; // Increment the counter
            }
        });
    }, 1000);

    // Clear interval when component unmounts or when counter reaches 3
    return () => {
        clearInterval(intervalId);
    };
}, []);


  console.log(Music);

  return (
    <div className="mainContainer">
      <h3>Camba.ai</h3>

      <div className="Navbar">
        <ul>
          <li
            onClick={() => hi("yellow", "Guitar.m4a")}
            style={{ backgroundColor: "yellow" }}
          >
            Guitar
          </li>
          <li
            onClick={() => hi("red", "Piano.m4a")}
            style={{ backgroundColor: "red" }}
          >
            Piano
          </li>
          <li
            onClick={() => hi("green", "Tabla.m4a")}
            style={{ backgroundColor: "green" }}
          >
            Tabla
          </li>
          <li
            onClick={() => hi("blue", "Drums.m4a")}
            style={{ backgroundColor: "blue" }}
          >
            Drum
          </li>
        </ul>
      </div>
      <div>{counter+"/30"}</div>
      <div className="line-container">
      <div class="vertical-line">


        </div>
      {Music.map((Music) => (
        <>
          <Musichai Music={Music} setMusic={setMusic} />
        </>
      ))}
      </div>
    </div>
  );
}

export default App;
