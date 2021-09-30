import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://nc-games-backend.herokuapp.com/api'
});

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews?limit=20');
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
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: increment
  });
  return data;
};

export const updateCommentVotes = async (comment_id, increment) => {
  const { data } = await gamesApi.patch(`comments/${comment_id}`, {
    inc_votes: increment
  });

  return data;
};

export const postComment = async (review_id, commentToAdd) => {
  const { data } = await gamesApi.post(
    `reviews/${review_id}/comments`,
    commentToAdd
  );
  return data;
};

export const postReview = async (reviewToAdd) => {
  const { data } = await gamesApi.post('reviews', reviewToAdd);
  return data;
};

export const deleteComment = async (comment_id) => {
  const { data } = await gamesApi.delete(`comments/${comment_id}`);
  return data;
};

export const deleteReview = async (review_id) => {
  const { data } = await gamesApi.delete(`reviews/${review_id}`);
  return data;
};
