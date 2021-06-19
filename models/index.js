const Pet = require("./Pet")
const Post = require("./Post")
const User = require("./User")
const Comment = require("./Comment")

//User to Pet relation
User.hasMany(Pet,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
});

Pet.belongsTo(User, {
    foreignKey:'user_id',
});

//User to Post relation
User.hasMany(Post, {
    foreignKey:'user_id',
    onDelete:'CASCADE',
});

Post.belongsTo(User, {
    foreignKey:'user_id'
})

//User to comment relation
User.hasMany(Comment,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
});

Comment.belongsTo(User,{
    foreignKey:'user_id',
});

//Include this one?
//Post to Comment relation
Post.hasMany(Comment, {
    foreignKey:'post_id',
    onDelete:'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey:'post_id'
});

module.exports = {Pet, Post, User, Comment};


