//router import
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import RootLayout from "./layouts/RootLayout";
import Movies from "./pages/Movies";
import Welcome from "./pages/Welcome";
import MovieDetails from "./pages/MovieDetails";


//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Welcome/>}/>
      <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieTitle" element={<MovieDetails/>}/> 


    </Route>
  )
)
function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
