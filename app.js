const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
// DB config 
const db = require('./config/keys').MongoURI;
//connect to mongo
mongoose.connect(db,{useNewUrlParser:true})
.then(()=> console.log('MongoDB Connected...'))
.catch(err=> console.log(err));
//EJS
app.use(expressLayouts);
app.set('view engine','ejs');
//bodyparser
app.use(express.urlencoded({extended:false}));

//routes
app.use('/',require('./routes/index'));
app.use('/user',require('./routes/user'));

const PORT =process.env.PORT|| 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
