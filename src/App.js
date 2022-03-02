import { Route, Routes } from "react-router-dom";
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
        {/* Nested Routes */}
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies" element={<MoviesListF />} />
          </Routes>
        </MoviesContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
