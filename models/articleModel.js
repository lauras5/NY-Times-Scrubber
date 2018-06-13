var mongoose = require('mongoose');

var Schema = mongoose.Schema
var articlemodel = new Schema ({
    title : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    }, 
    saved : {
        type: Boolean,
        default: false
    }  
})

var Article = mongoose.model('Article', articlemodel);

module.exports = Article;