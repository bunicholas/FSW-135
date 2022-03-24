const express = require('express')
const storeRouter = express.Router()
const Inventory = require('./../models/inventory.js')

//get all
storeRouter.get('/GetAll',function(req, res) {
    Inventory.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  storeRouter.post('/Handle',function(req, res) {
      const newItem = new Inventory(req.body)
      newItem.save((err, savedItem) =>{

      if (err) {
        res.send(err);
      } else {
        res.send(savedItem);
      }
    });
  });

  storeRouter.put('/:id',function(req, res) {
    Inventory.findOneAndUpdate({id:req.params.id},req.body,{new:true},(err,updateditem) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updateditem);
    }
  });
});

storeRouter.delete('/Delete/:id',function(req, res) {
    Inventory.findOneAndDelete(
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

  module.exports = storeRouter;