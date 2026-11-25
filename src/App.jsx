import React, { useState } from "react";
const App = () => {
  // defining state for our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic
  const calcBmi = (e) => {
    e.preventDefault();
    const weightValue = Number(weight);
    const heightValue = Number(height);
    const heightMeter = heightValue * 0.0254;

    if (
      weight.trim() === "" ||
      height.trim() === "" ||
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightMeter) ||
      weightValue <= 0 ||
      heightMeter <= 0
    ) {
      setBmi("");
      setMessage("Please! enter valid positive values");
      alert("Please! Enter valid values");
      return;
    }
    const calculatedBmi = weightValue / (heightMeter * heightMeter);
    setBmi(calculatedBmi.toFixed(1));
    if (calculatedBmi < 18.5) {
      setMessage("You are underweight");
    } else if (calculatedBmi < 25) {
      setMessage("You are a healthy weight");
    } else if (calculatedBmi < 30) {
      setMessage("You are overweight");
    } else {
      setMessage("You are in the obesity range");
    }
  };

  // reload
  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">BMI Calculator</h2>

        <form onSubmit={calcBmi} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Weight (kg):</label>

            <input
              type="number"
              min="0"
              step="any"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Height (cm):</label>

            <input
              type="number"
              min="0"
              step="any"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Calculate
            </button>

            <button
              type="button"
              onClick={reload}
              className="flex-1 border border-slate-300 p-3 rounded-lg hover:bg-slate-100"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="mt-6 text-center" aria-live="polite">
          {bmi !== "" && (
            <h3 className="text-xl font-bold">Your BMI is: {bmi}</h3>
          )}

          {message && <p className="mt-2 text-slate-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;
