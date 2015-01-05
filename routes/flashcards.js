/**
 * Created by Milos on 5.1.2015..
 */
var express = require("express");
var router = express.Router();

router
    .get('/', function(req, res) {
        res.render("flashcards", {
            flashcards: [
                {
                    id: '1',
                    question: "This is flashcard number one",
                    answer: "This is answer to flashcard number one"
                },

                {
                    id: '2',
                    question: "This is flashcard number two",
                    answer: "This is answer to flashcard number two"
                }
            ]
        })
    })
    .get('/:id', function(req, res) {

    })
    .get('/:id/solution', function(req, res) {

    });

module.exports = router;