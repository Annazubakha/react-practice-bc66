import { getTrandingCoctails } from 'api/coctails';
import { Container, Section } from 'components';
import { CocktailsList } from 'components/CocktailsList/CocktailsList';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getTrandingCoctails()
      .then(setCocktails)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        {cocktails.length > 0 && <CocktailsList cocktails={cocktails} />}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
