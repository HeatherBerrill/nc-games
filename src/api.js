import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-heather.herokuapp.com/api'
});

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews');
  return data.reviews;
};
