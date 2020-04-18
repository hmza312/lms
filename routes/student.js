var express = require('express');
var router = express.Router();
var Quiz = require('../models/quiz');
var Assignment = require('../models/assignment');
var Marks = require('../models/marks');
var AttempQuiz = require('../models/attemptquiz');
var AttemptAss = require('../models/attemptass');
var Material = require('../models/material');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Student section');
});
router.get('/viewquiz', function(req, res, next) {
  Quiz.find().sort('question').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.get('/viewassignment', function(req, res, next) {
  Assignment.find().sort('question').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.get('/material', function(req, res, next) {
 
  Material.find().sort('file').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.get('/material/:subid', function(req, res, next) {
  Material.findById(req.params.subid)
      .then((file) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(file);
      }, (err) => next(err))
      .catch((err) => next(err));

});

router.get('/result', function(req, res, next) {
  Marks.find({}).populate('class').populate('quiz').populate('assignment').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
router.get('/result/:subid', function(req, res, next) {
  Marks.findById(req.params.subid)
      .then((marks) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(marks);
      }, (err) => next(err))
      .catch((err) => next(err));

});
//Post
router.post('/attemptquiz', function(req, res, next) {
  AttempQuiz.create(req.body)
      .then((result) => {
          console.log('Quiz  has been Attempted ', result);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.post('/submitassignment', function(req, res, next) {
  AttemptAss.create(req.body)
      .then((result) => {
          console.log('Assignment  has been Attempted ', result);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(result);
      }, (err) => next(err))
      .catch((err) => next(err));
});

module.exports = router;
