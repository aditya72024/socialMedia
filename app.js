const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const sequelize = require('./util/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const postRoutes = require('./routes/post');


const Post = require('./models/post');
const Comment = require('./models/comment');
const User = require('./models/user');

app.use((req,res,next) => {
    User.findAll({where :{id : 1}})
    .then(user => {
        req.user = user[0];

       
        next();
    })
    .catch(err => console.log(err));
});

app.use(postRoutes);

         
Post.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Post);

Comment.belongsTo(Post, {constraints: true, onDelete: 'CASCADE'});
Post.hasMany(Comment);

Comment.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Comment);

sequelize.sync({force: true}).then(result => {
    return User.findByPk(1);
})
.then(user => {
    if(!user){
        User.create({name: 'Max', email: 'test@test.com'});
    }
    app.listen(5500);
})
.catch(err => {
    console.log(err);
})