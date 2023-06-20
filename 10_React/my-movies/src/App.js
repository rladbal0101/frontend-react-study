import { Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    // <>
    //   <MoviesList />
    // </>
    <Routes>
      <Route path="/" element={<MoviesPage />} />
    </Routes>
  );
}

export default App;
