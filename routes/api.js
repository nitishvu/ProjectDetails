var express = require('express');
var router = express.Router();
var Model = require('../models/model');

router.post('/human', function (req, res) {

    var human = new Model(req.body);

    human.save(function (err, resource) {
        if (err) {
            res.send(err).status(501);
        } else {
            res.json(resource).status(201);
        }
    });
});

router.post('/updateHuman', function (req, res) {
        console.log('inside updateHuman');
        console.log(req.body);
         var id = req.body._id;
         console.log('id='+id);
         Model.update({ _id: id },req.body,function (err, resource) {
        if (err) {
            return res.send(err);
        }
        else {
            res.send(resource);
        }
        });
       // res.json(req.body).status(201);
  
});



router.get('/human', function (req, res) {
    Model.find({}, function (err, resources) {
        if (err) {
            res.send(err).status(404);
        }
        else {
            res.send(resources).status(200);
        }

    });

});

router.delete('/human/:id', function (req, res) {
    console.log('body');
    console.log(req.params.id);
    var id = req.params.id;
    Model.remove({ _id: id }, function (err, resource) {
        if (err) {
            return res.send(err);
        }
        else {
            res.send(resource);
        }
    });
});



module.exports = router; 