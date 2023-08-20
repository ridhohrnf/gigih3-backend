const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    urlImageThumbnail: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const VideoModel = mongoose.model('Video', VideoSchema)

module.exports = VideoModel;