const express = require("express");
const auth = require("../middlewares/auth");
const controller = require("../controllers/util");

module.exports = function(server) {
    const protectedRoutes = express.Router();
    const openRoutes = express.Router();

    protectedRoutes.use(auth);

    server.use("/api", protectedRoutes);

    server.use("/util", openRoutes);

    openRoutes.get("/exchanges/all", controller.listAllExchanges);
}
