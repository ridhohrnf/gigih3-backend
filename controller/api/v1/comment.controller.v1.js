const CommentModel = require('../../../models/comment');
const VideoModel = require('../../../models/video');

const createComment = async (req, res) => {
    try {
        const {id} = req.params
        const video = await VideoModel.findById(id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        const comment = await CommentModel.create({
            username: req.body.username,
            comment: req.body.comment,
            videoId: id
        });

        res.status(201).json({
            message: 'Comment Posted',
            data: comment
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const updateComment = async (req, res) => {
    try {
        const {id} = req.params;
        const comment = await CommentModel.findByIdAndUpdate(id, {
            comment: req.body.comment
        });

        if(!comment){
            return res.status(404).json({
                message: 'Comment not found'
            })
        }

        const updatedComment = await CommentModel.findById(id);

        res.status(201).json({
            message: 'Comment Updated',
            data: updatedComment
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllComment = async (req, res) => {
    try {
        const {id} = req.params
        const video = await VideoModel.findById(id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        const comments = await CommentModel.find({
            videoId: id
        });
        
        res.status(200).json({
            message: 'Success retrieving data',
            data: comments
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const deleteComment = async (req, res) => {
    try {
        const {id} = req.params;
        const comment = await CommentModel.findByIdAndDelete(id);

        if(!comment){
            return res.status(404).json({
                message: 'Comment not found'
            })
        }

        res.status(200).json({
            message: 'Comment Deleted',
            data: comment
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = { createComment, getAllComment, updateComment, deleteComment };

