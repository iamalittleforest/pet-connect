// import Comment model
const { Comment } = require('../models');

const commentData = [
  {
    body: 'I can watch your cats for the weekend!',
    user_id: '1',
    post_id: '1', 
  },
  {
    body: 'We can have our dogs meet every Friday at the park!',
    user_id: '2',
    post_id: '2', 
  },
  {
    body: 'They should average 20 hours per day because they grow very fast!',
    user_id: '5',
    post_id: '3', 
  },
  {
    body: 'Echo clean leash is my favorite one!',
    user_id: '5',
    post_id: '4', 
  },
  {
    body: 'I know a great trainer that can help you!',
    user_id: '2',
    post_id: '5', 
  },
  {
    body: 'Your cat Layla can play with my cats on the weekends that I am home!',
    user_id: '3',
    post_id: '6', 
  },
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;