import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MoviesList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
