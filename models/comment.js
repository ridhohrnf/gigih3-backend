const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const CommentModel = mongoose.model('Comment', CommentSchema)

module.exports = CommentModel;