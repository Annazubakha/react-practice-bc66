import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Todo = lazy(() => import('pages/Todo/Todo'));
const ImageGallery = lazy(() => import('pages/ImageGallery/ImageGallery'));
const Points = lazy(() => import('pages/Points/Points'));
const Props = lazy(() => import('pages/Props/Props'));
const Cocktails = lazy(() => import('pages/Cocktails/Cocktails'));
const SearchCocktails = lazy(() =>
  import('pages/SearchCocktails/SearchCocktails')
);
const CocktailDetails = lazy(() =>
  import('pages/CocktailDetails/CocktailDetails')
);
const CocktailIngredients = lazy(() =>
  import('components/CocktailIngredients/CocktailIngredients')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="image" element={<ImageGallery />} />
          <Route path="points" element={<Points />} />
          <Route path="props" element={<Props />} />
          <Route path="cocktails" element={<Cocktails />} />
          <Route path="searchcocktails" element={<SearchCocktails />} />
          <Route path="searchcocktails/:id" element={<CocktailDetails />}>
            <Route path="ingredients" element={<CocktailIngredients />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
