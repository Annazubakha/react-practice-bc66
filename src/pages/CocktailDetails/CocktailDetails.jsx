import { getCoctailDetails } from 'api/coctails';
import { Container, Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CocktailDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const goBackLink = useRef(location.state?.from || '/cocktails');

  useEffect(() => {
    setIsLoading(true);
    getCoctailDetails(id)
      .then(setCocktail)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <Section>
      <Container>
        <Link to={goBackLink.current}>Go back</Link>
        {isLoading && <Loader />}
        {cocktail && (
          <div style={{ marginBottom: 20 }}>
            <img
              src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : defaultImg}
              alt={cocktail.strDrink}
              width={350}
            />
            <h3>{cocktail.strDrink}</h3>
            <p>Glass: {cocktail.strGlass}</p>
          </div>
        )}
        <Link to={'ingredients'} style={{ marginBottom: 20, display: 'block' }}>
          Ingredients
        </Link>

        <Outlet />
      </Container>
    </Section>
  );
};

export default CocktailDetails;
