import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Paris" />
        <p className="text-center">
          <a
            href="https://github.com/Elyzavetka/react-weather-app"
            rel="noreferrer"
            target="_blank"
            id="git-link"
          >
            Open-source code
          </a>{" "}
          by Liza Tarasova
        </p>
      </div>
    </div>
  );
}
