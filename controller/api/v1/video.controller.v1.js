const VideoModel = require('../../../models/video');

const createVideo = async (req, res) => {
    try {
        const video = await VideoModel.create({
            urlImageThumbnail: req.body.urlImageThumbnail,
        });

        res.status(201).json({
            message: 'Video Posted',
            data: video
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const updateVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const video = await VideoModel.findByIdAndUpdate(id, {
            urlImageThumbnail: req.body.urlImageThumbnail,
        });

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        const updatedVideo = await VideoModel.findById(id);

        res.status(201).json({
            message: 'Video Updated',
            data: updatedVideo
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllVideo = async (req, res) => {
    try {
        const videos = await VideoModel.find();
        
        res.status(200).json({
            message: 'Success retrieving data',
            data: videos
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const getOneVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const video = await VideoModel.findById(id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }
        
        res.status(200).json({
            message: 'Success retrieving data',
            data: video
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const deleteVideo = async (req, res) => {
    try {
        const {id} = req.params;
        const video = await VideoModel.findByIdAndDelete(id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        res.status(201).json({
            message: 'Video Deleted',
            data: video
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = { getAllVideo, getOneVideo, createVideo, updateVideo, deleteVideo };