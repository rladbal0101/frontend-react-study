import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <>
      <MoviesList />
    </>
    // <Routes>
    //   <Route path="/" element={<MoviesPage />} />
    // </Routes>
  );
}

export default App;
