const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const commentControllerV1 = require("../../../controller/api/v1/comment.controller.v1");

router.get("/all/:id", jsonParser, commentControllerV1.getAllComment);
router.post("/create/:id", jsonParser, commentControllerV1.createComment);
router.put("/update/:id", jsonParser, commentControllerV1.updateComment);
router.delete("/delete/:id", jsonParser, commentControllerV1.deleteComment);

module.exports = router;
