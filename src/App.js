import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <MoviesList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
