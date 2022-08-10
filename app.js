const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

//part1 point2
const bodyParser=require('body-parser')


//part2 point6
// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 
//part2 point7
app.use(cors());

app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});



//#part1 point5
app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});