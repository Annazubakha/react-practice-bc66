import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="todo">Todo</NavLink>
            </li>
            <li>
              <NavLink to="image">ImageGallery</NavLink>
            </li>
            <li>
              <NavLink to="points">Points</NavLink>
            </li>
            <li>
              <NavLink to="props">Props</NavLink>
            </li>
            <li>
              <NavLink to="cocktails">Cocktails</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
