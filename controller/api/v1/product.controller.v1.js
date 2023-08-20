const ProductModel = require('../../../models/product');
const VideoModel = require('../../../models/video');

const createProduct = async (req, res) => {
    try {
        const {id} = req.params
        const video = await VideoModel.findById(id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        const comment = await ProductModel.create({
            productLink: req.body.productLink,
            title: req.body.title,
            price: req.body.price,
            videoId: id
        });

        res.status(201).json({
            message: 'Product Posted',
            data: comment
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await ProductModel.findByIdAndUpdate(id, {
            productLink: req.body.productLink,
            title: req.body.title,
            price: req.body.price,
            videoId: id
        });

        if(!product){
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        const updatedProduct = await ProductModel.findById(id);

        res.status(201).json({
            message: 'Product Updated',
            data: updatedProduct
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const getAllProduct = async (req, res) => {
    try {
        const product = await ProductModel.find();

        if(!product){
            return res.status(404).json({
                message: 'Product not found'
            })
        }
        
        res.status(200).json({
            message: 'Success retrieving data',
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const getProductList = async (req, res) => {
    try {
        const {id} = req.params;
        const video = await VideoModel.findById(id);

        // console.log(video.id);

        if(!video){
            return res.status(404).json({
                message: 'Video not found'
            })
        }

        const product = await ProductModel.find({
            videoId: id
        });
        
        res.status(200).json({
            message: 'Success retrieving data',
            data: product
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await ProductModel.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        res.status(201).json({
            message: 'Product Deleted',
            data: product
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = { getAllProduct, getProductList, createProduct, updateProduct, deleteProduct };