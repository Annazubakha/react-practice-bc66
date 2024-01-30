import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { lazy, useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { ScrollToTop, ToggleTheme } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'myRedux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { selectIsRefreshing } from 'myRedux/auth/selectors';
import { Loader } from './Loader/Loader';

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
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const { theme: themeColor } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[themeColor]}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route
              path="todo"
              element={
                <PrivateRoute component={<Todo />} redirectTo="/login" />
              }
            />
            <Route
              path="login"
              element={<PublicRoute component={<Login />} redirectTo="/todo" />}
            />
            <Route
              path="register"
              element={
                <PublicRoute component={<Register />} redirectTo="/todo" />
              }
            />
            <Route
              path="image"
              element={
                <PrivateRoute
                  component={<ImageGallery />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="points"
              element={
                <PrivateRoute component={<Points />} redirectTo="/login" />
              }
            />
            <Route
              path="props"
              element={
                <PrivateRoute component={<Props />} redirectTo="/login" />
              }
            />
            <Route
              path="cocktails"
              element={
                <PrivateRoute component={<Cocktails />} redirectTo="/login" />
              }
            />
            <Route
              path="searchcocktails"
              element={
                <PrivateRoute
                  component={<SearchCocktails />}
                  redirectTo="/login"
                />
              }
            />
            <Route path="searchcocktails/:id" element={<CocktailDetails />}>
              <Route
                path="ingredients"
                element={
                  <PrivateRoute
                    component={<CocktailIngredients />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      )}
      <ToggleTheme />
      <ScrollToTop />
    </ThemeProvider>
  );
};
