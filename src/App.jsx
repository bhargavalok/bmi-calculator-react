import React from "react";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (lbs) : </label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
            />
          </div>

          <div>
            <label>Height (inch) : </label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
