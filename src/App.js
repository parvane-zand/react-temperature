import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Weather Prediction</h3>
        <Weather city="Tehran" />
      </header>
    </div>
  );
}
export default App;
