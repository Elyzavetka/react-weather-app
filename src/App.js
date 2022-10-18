import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="London" />
        <p className="text-center">
          <a
            href="https://polite-sherbet-e0fba5.netlify.app"
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

export default App;
