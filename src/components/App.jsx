import { Route, Routes } from 'react-router-dom';
import { ImageGallery, Points, Props, Todo, Cocktails } from 'pages';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { SearchCocktails } from 'pages/SearchCocktails/SearchCocktails';
import CocktailDetails from 'pages/CocktailDetails/CocktailDetails';

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
          <Route path="searchcocktails/:id" element={<CocktailDetails />} />
        </Route>
      </Routes>
    </>
  );
};
