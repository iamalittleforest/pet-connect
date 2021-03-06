// import Post model
const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: 'I want a cat sitter!',
    category: 'service',
    description: 'I would like to find a cat sitter for my two cats James & Jackson.',
    user_id: 3,
  },
  {
    id: 2,
    title: 'Finding my dogs a friend!',
    category: 'meetup',
    description: 'I would like to find friends for my two dogs!',
    user_id: 1,
  },
  {
    id: 3,
    title: 'Sleep for dogs',
    category: 'inquiry',
    description: 'How much do husky pups need to sleep every day?',
    user_id: 2,
  },
  {
    id: 4,
    title: 'Leashes for pit bulls',
    category: 'products',
    description: 'Which leash is the best for my full grown pit bull?',
    user_id: 4,
  },
  {
    id: 5,
    title: 'Training older dogs',
    category: 'training',
    description: 'I would like to get training tips for my 5 year-old labrador!',
    user_id: 5,
  },
  {
    id: 6,
    title: 'Finding a friend for my cat',
    category: 'meetup',
    description: 'I would like to find a cat to befriend my cat Layla, so they can play on the weekends!',
    user_id: 5,
  },
];

// create and insert multiple Posts using postData
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;