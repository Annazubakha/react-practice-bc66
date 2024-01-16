import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const BASE_URL = '/random.php';
const URLS = Array.from({ length: 12 }, () => BASE_URL);

export const getTrandingCoctails = async () => {
  const promises = URLS.map(async url => {
    const { data } = await instance.get(url);
    return data.drinks[0];
  });
  return Promise.all(promises);

  //   const coctails = [];
  //   for (let i = 0; i < 10; i++) {
  //     const { data } = await axios.get(BASE_URL);
  //     coctails.push(data.drinks[0]);
  //   }
  //   return coctails;
};

export const getCoctailByName = async coctail => {
  const { data } = await instance.get(`/search.php?s=${coctail}`);
  return data.drinks;
};

export const getCoctailDetails = async id => {
  const { data } = await instance.get(`/lookup.php?i=${id}`);
  return data.drinks[0];
};
