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
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>{step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button
          onClick={() => setCount((count) => count - (step !== 0 ? step : 1))}
        >
          -
        </button>
        <span>{count}</span>
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
