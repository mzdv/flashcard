/**
 * Created by Milos on 5.1.2015..
 */
var express = require("express");
var router = express.Router();

var mock_data = require("./mockData");

router
    .get('/', function(req, res) {
        res.render("flashcards", {
            flashcards: mock_data
        })
    })
    .get('/:id', function(req, res) {

    })
    .get('/:id/solution', function(req, res) {

    });

module.exports = router;