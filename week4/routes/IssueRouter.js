const express = require('express')
const IssueRouter = express.Router()
const Issue = require('./../models/IssueModel.js')

//get all
IssueRouter.get('/GetAll',function(req, res) {
    Issue.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  IssueRouter.post('/Handle',function(req, res) {
      const newItem = new Issue(req.body)
      newItem.save((err, savedItem) =>{

      if (err) {
        res.send(err);
      } else {
        res.send(savedItem);
      }
    });
  });

  IssueRouter.put('/:id',function(req, res) {
    Issue.findOneAndUpdate({id:req.params.id},req.body,{new:true},(err,updateditem) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updateditem);
    }
  });
});

IssueRouter.delete('/Delete/:id',function(req, res) {
    Issue.findOneAndDelete(
        {id: req.params.id}, 
        (err, deletedItem) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(`Successfully deleted item ${deletedItem.body} from the database`)
        }
      )
    
  });

  module.exports = IssueRouter;