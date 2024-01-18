import { getCoctailByName } from 'api/coctails';
import { Container, Section } from 'components';
import { CocktailsList } from 'components/CocktailsList/CocktailsList';
import { Form } from 'components/Form/Form';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchCocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cocktail = searchParams.get('cocktail');
    if (!cocktail) return;
    setIsLoading(true);
    getCoctailByName(cocktail)
      .then(setCocktails)
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  const handleSubmit = cocktail => {
    setSearchParams({ cocktail });
  };
  return (
    <Section>
      <Container>
        <Form addTodo={handleSubmit} text={'Search'} />
        {cocktails?.length > 0 && <CocktailsList cocktails={cocktails} />}
        {cocktails === null && <p>We don't find any cocktails</p>}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default SearchCocktails;
