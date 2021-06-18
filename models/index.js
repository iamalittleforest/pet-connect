const Pet = require("./Pet")
const Post = require("./Post")
const User = require("./User")
const Comment = require("./Comment")

//User to Pet relation
User.hasMany(Pet,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
});

Pet.belongTo(User,{
    foreignKey:'user_id',
});


//User to comment relation
User.hasMany(Comment,{
    foreignKey:'user_id',
    onDelete:'CASCADE',
});

Comment.belongTo(User,{
    foreignKey:'user_id',
});




