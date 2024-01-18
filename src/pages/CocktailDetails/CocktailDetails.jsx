import { getCoctailDetails } from 'api/coctails';
import { Container, Section } from 'components';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCoctailDetails(id)
      .then(setCocktail)
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [id]);
  console.log(cocktail);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {cocktail && (
          <div>
            <img
              src={cocktail.strDrinkThumb ? cocktail.strDrinkThumb : defaultImg}
              alt={cocktail.strDrink}
              width={350}
            />
            <h3>{cocktail.strDrink}</h3>
            <p>Glass: {cocktail.strGlass}</p>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CocktailDetails;
