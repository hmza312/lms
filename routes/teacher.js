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
  res.send('<h1>Welcome to teacher Section</h1>');
});
router.get('/viewquiz', function(req, res, next) {
  AttempQuiz.find().populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
router.get('/viewquiz:qid', function(req, res, next) {
  AttempQuiz.findById(req.params.subid)
  .populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
router.get('/viewattassign', function(req, res, next) {
  AttemptAss.find().populate('question').exec(function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
});
router.get('/viewattassign:qid', function(req, res, next) {
  AttemptAss.findById(req.params.subid)
  .populate('question').exec(function(error, results) {
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
//POST Operations
router.post('/addquiz', function(req, res, next) {
  Quiz.create(req.body)
      .then((quiz) => {
          console.log('Quiz has been Added ', quiz);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(quiz);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.post('/addassignment', function(req, res, next) {
  Assignment.create(req.body)
      .then((assignment) => {
          console.log('Quiz has been Added ', assignment);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(assignment);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.post('/addmarks', function(req, res, next) {
  Marks.create(req.body)
      .then((marks) => {
          console.log('marks has been Added ',  marks);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(marks);
      }, (err) => next(err))
      .catch((err) => next(err));
});
router.post('/addmat', function(req, res, next) {
  Material.create(req.body)
      .then((file) => {
          console.log('MAterial has been Added ', file);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(file);
      }, (err) => next(err))
      .catch((err) => next(err));
});
//put
router.put('/marks/:mid/:number', function(req, res, next) {
  Marks.findOneAndUpdate({ _id: req.params.mid }, { number: req.params.number }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
//delete
router.delete('/delquiz/:id', function(req, res, next) {
  Quiz.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
router.delete('/delassignment/:id', function(req, res, next) {
  Assignment.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
//
router.delete('/delmarks/:id', function(req, res, next) {
  Marks.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});



router.delete('/material/:id', function(req, res, next) {
  Material.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
module.exports = router;
