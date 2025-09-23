import { useState } from "react";
import "./App.css";

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          id="myRange"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label htmlFor="myRange">{step}</label>
      </div>
      <div>
        <button
          onClick={() => setCount((count) => count - (step !== 0 ? step : 1))}
        >
          -
        </button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button
          onClick={() => setCount((count) => count + (step !== 0 ? step : 1))}
        >
          +
        </button>
      </div>
      {count !== 0 ? (
        <p>
          {count < 0
            ? `${count} days ago was ${date.toDateString()}`
            : `${count} days from
          today is ${date.toDateString()}`}
        </p>
      ) : (
        <p>{`Today is ${date.toDateString()}`}</p>
      )}
      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(0);
          }}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
