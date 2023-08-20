const router = require("express").Router();
const bodyParser = require("body-parser");
require("express-group-routes");

const jsonParser = bodyParser.json();
const productControllerV1 = require("../../../controller/api/v1/product.controller.v1");

router.get("/all/", jsonParser, productControllerV1.getAllProduct);
router.get("/all/:id", jsonParser, productControllerV1.getProductList);
router.post("/create/:id", jsonParser, productControllerV1.createProduct);
router.put("/update/:id", jsonParser, productControllerV1.updateProduct);
router.delete("/delete/:id", jsonParser, productControllerV1.deleteProduct);

module.exports = router;