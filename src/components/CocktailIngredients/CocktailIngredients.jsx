import { getCocktailsIngredients } from 'api/coctails';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CocktailIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCocktailsIngredients(id)
      .then(setIngredients)
      .catch()
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading && <Loader />}
      {ingredients?.length > 0 && (
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient.strIngredient}>
              <p>{ingredient.strIngredient}</p>
              <p>{ingredient.strDescription}</p>
              <p>{ingredient.strType}</p>
            </li>
          ))}
        </ul>
      )}
      {ingredients === null && <p>We don't find any ingredients</p>}
    </div>
  );
};

export default CocktailIngredients;
