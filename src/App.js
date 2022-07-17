import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="container">
        <div className="sidebar"></div>
        <div className="main">
          <div className="current">Current</div>
          <div className="details">Details</div>
          <div className="suggest">Suggest</div>
          <div className="hourly">Hourly</div>
          <div className="daily">Daily</div>
          <div className="uv">UV</div>
          <div className="aqi">AQI</div>
        </div>
      </div>
    </div>
  );
}
