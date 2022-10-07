var express = require("express");
var User = require("../models/User");

let router = express.Router();

router.post("/", async (req, res) => {
    try {
        let user = new User.User();
        let body = req.body;
        user.id = body.id;
        user.name = body.name.replace(/'/g, "''");
        user.email = body.email;
        user.save().then((result) => {
            let data = { status: "success", data: result }
            res.end(JSON.stringify(data))
        },
            (err) => {
                let data = { status: "failed", data: err }
                res.end(JSON.stringify(data))
            });
    }
    catch (ex) {
        let data = { status: "failed", data: ex }
        res.end(JSON.stringify(data));
    }
});

router.delete("/", async (req, res) => {
    try {
        let user = new User.User();
        let body = req.body;
        user.id = body.id;
        user.delete().then((result) => {
            let data = { status: "success", data: result }
            res.end(JSON.stringify(data))
        },
            (err) => {
                let data = { status: "failed", data: err }
                res.end(JSON.stringify(data))
            });
    }
    catch (ex) {
        let data = { status: "failed", data: ex }
        res.end(JSON.stringify(data));
    }

});

router.get("/", async (req, res) => {
    try {
        let user = new User.User();
        let body = req.body;
        user.list().then((result) => {
            let data = { status: "success", data: result }
            res.end(JSON.stringify(data))
        },
            (err) => {
                let data = { status: "failed", data: err }
                res.end(JSON.stringify(data))
            });
    }
    catch (ex) {
        let data = { status: "failed", data: ex }
        res.end(JSON.stringify(data));
    }
});

router.get("/:id", async (req, res) => {
    try {
        let user = new User.User();
        user.id = req.params.id;
        // user.id = req.params.x;
        user.get().then((result) => {
            let data = { status: "success", data: result }
            res.end(JSON.stringify(data))
        },
            (err) => {
                let data = { status: "failed", data: err }
                res.end(JSON.stringify(data))
            });
    }
    catch (ex) {
        let data = { status: "failed", data: ex }
        res.end(JSON.stringify(data));
    }
});

module.exports = router;