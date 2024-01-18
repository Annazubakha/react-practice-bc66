import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const CocktailsList = ({ cocktails }) => {
  const location = useLocation();
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {cocktails.map(({ strDrink, idDrink, strDrinkThumb }) => (
        <li key={idDrink} style={{ flexBasis: '25%' }}>
          <Link to={`/searchcocktails/${idDrink}`} state={{ from: location }}>
            <img src={strDrinkThumb} alt={strDrink} />
            <h3>{strDrink}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
