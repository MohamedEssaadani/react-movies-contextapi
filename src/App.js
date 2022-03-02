import MoviesListF from "./components/MoviesListF";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import MoviesContextProvider from "./contexts/MoviesContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MoviesContextProvider>
          <MoviesListF />
        </MoviesContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
