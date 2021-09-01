import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-heather.herokuapp.com/api'
});

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews');
  return data.reviews;
};

export const getSortedReviews = async (sort) => {
  const { data } = await gamesApi.get(`/reviews?sortBy=${sort}`);
  return data.reviews;
};

export const getReview = async (review_id) => {
  const { data } = await gamesApi.get(`reviews/${review_id}`);
  return data.review;
};

export const getComments = async (review_id) => {
  const { data } = await gamesApi.get(`reviews/${review_id}/comments`);
  return data;
};

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getCategoryReviews = async (slug) => {
  const { data } = await gamesApi.get(`/reviews?category=${slug}`);
  return data.reviews;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get('/users');
  return data.users;
};

export const getSingleUser = async (username) => {
  const { data } = await gamesApi.get(`/users/${username}`);
  return data.user;
};

export const getVotedReviews = async () => {
  const { data } = await gamesApi.get('/reviews?sortBy=votes&limit=3');
  return data.reviews;
};

export const updateVotes = async (review_id, increment) => {
  console.log(review_id, 'review id');
  console.log(increment, 'inc');
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: increment
  });
  console.log(data, 'in api');
  return data;
};
