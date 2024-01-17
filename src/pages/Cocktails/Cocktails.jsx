import { getTrandingCoctails } from 'api/coctails';
import React, { useEffect, useState } from 'react';

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    getTrandingCoctails().then(setCocktails);
  }, []);
  console.log(cocktails);
  return <div>Cocktails</div>;
};
