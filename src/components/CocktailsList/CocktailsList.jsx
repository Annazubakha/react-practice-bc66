import React from 'react';
import { Link } from 'react-router-dom';

export const CocktailsList = ({ cocktails }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {cocktails.map(({ strDrink, idDrink, strDrinkThumb }) => (
        <li key={idDrink} style={{ flexBasis: '25%' }}>
          <Link to={`/searchcocktails/${idDrink}`}>
            <img src={strDrinkThumb} alt={strDrink} />
            <h3>{strDrink}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
