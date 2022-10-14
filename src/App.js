import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          This project was coded by Liza Tarasova
          <small>
            {" "}
            <a href="https://polite-sherbet-e0fba5.netlify.app">
              Open-source code
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
