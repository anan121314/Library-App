const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ananthakrishnan1213:Asyoulikeit123@cluster0.87hr70i.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;