// import Comment model
const { Comment } = require('../models');

const commentData = [
    {
        user_id: '1',
        body: 'I can watch your cats for the weekend!',
        post_id: '1', 
    },
    {
        user_id: '2',
        body: 'We can have our dogs meet every Friday at the park!',
        post_id: '2', 
    },
    {
        user_id: '5',
        body: 'They should average 20 hours per day because they grow very fast!',
        post_id: '3', 
    },
    {
        user_id: '5',
        body: 'Echo clean leash is my favorite one!',
        post_id: '4', 
    },
    {
        user_id: '2',
        body: 'I know a great trainer that can help you!',
        post_id: '5', 
    },
    {
        user_id: '3',
        body: 'Your cat Layla can play with my cats on the weekends that I am home!',
        post_id: '6', 
    },
];

// create and insert multiple Comments using commentData
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;