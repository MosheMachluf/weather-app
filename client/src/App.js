import Weather from "./components/Weather";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} width="100" alt="logo" />
        <h1>Weather App</h1>
      </div>
      <Weather />
    </div>
  );
}

export default App;
