
var express = require('express');

var router = express.Router();
var Admin = require('../models/admin');
var Class = require('../models/class');
var Teacher = require('../models/teacher');
var Student = require('../models/student');
var Material = require('../models/material');



/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('Welcome to Head Section');
});
router.get('/graph', function(req, res, next) {
  
 
  res.send(
 '{ label: "Quiz1", y: 18 }'
);
   
    });
router.get('/result', function(req, res, next) {
  Class.find({}).populate('class').populate('Teacher').populate('students.sid').exec(function(error, results) {
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

router.get('/result/class/:id', function(req, res, next) {
  Class.find({ _id: req.params.id }).populate('teacher').populate('students.sid').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});


router.get('/result/students/:id', function(req, res, next) {
  Student.findById(req.params.id)
      .then((student) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(student);
      }, (err) => next(err))
      .catch((err) => next(err));

});
router.get('/class', function(req, res, next) {
  Class.find({}).populate('teacher').populate('students.sid').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});





module.exports = router;
