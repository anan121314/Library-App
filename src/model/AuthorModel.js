const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ananthakrishnan1213:Asyoulikeit123@cluster0.87hr70i.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;