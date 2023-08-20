const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const videoControllerV1 = require("../../../controller/api/v1/video.controller.v1");

router.get("/all", jsonParser, videoControllerV1.getAllVideo);
router.get("/:id", jsonParser, videoControllerV1.getOneVideo);
router.post("/create", jsonParser, videoControllerV1.createVideo);
router.put("/update/:id", jsonParser, videoControllerV1.updateVideo);
router.delete("/delete/:id", jsonParser, videoControllerV1.deleteVideo);

module.exports = router;