var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    link: {
        type: String,
        required: true,
        unique: true
    },

    author: {
        type: String,
        required: true,
        default: 'No Author Available'
    },

    summary: {
        type: String,
        required: true,
        default: 'No summary provided'
    },

    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;