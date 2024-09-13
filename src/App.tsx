import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Layout from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PokemonPage = lazy(() => import("./pages/PokemonPage"));
const PokedexPage = lazy(() => import("./pages/PokedexPage"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-screen flex items-center justify-center">
            <Loading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<PokemonPage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
