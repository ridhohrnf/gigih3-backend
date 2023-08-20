const router = require("express").Router();

const commentRouterApiV1 = require("./api/v1/comment.routes.v1");
const videoRouterApiV1 = require("./api/v1/video.routes.v1");
const productRouterApiV1 = require("./api/v1/product.routes.v1");


// API
router.group("/api/v1", route => {
    route.use("/comment", commentRouterApiV1);
    route.use("/video", videoRouterApiV1);
    route.use("/product", productRouterApiV1);
});

module.exports = router;
