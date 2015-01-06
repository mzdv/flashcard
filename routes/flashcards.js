/**
 * Created by Milos on 5.1.2015..
 */
var express = require("express");
var router = express.Router();

var _ = require("lodash");

var mock_data = require("../mock_data");

router
    .get('/', function(req, res) {
        res.render("flashcards", {
            flashcards: mock_data
        });
    })
    .get('/:id', function(req, res) {
        var flashcard = _.find(mock_data, {'id': req.params.id});
        res.render("single_flashcard", {
            flashcard: flashcard
        });
    })
    .get('/:id/answer', function(req, res) {
        res.render("single_answer", {
            answer: _.find(mock_data, {'id': req.params.id}).answer
        });
    });

module.exports = router;