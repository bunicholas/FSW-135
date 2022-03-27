const express = require('express')
const AuthRouter = express.Router()
const User = require('./../models/UserModel.js')
const jwt = require('jsonwebtoken')

//login

AuthRouter.post('/login',function(req, res) {
    User.findOne({})
    newItem.save((err, savedItem) =>{

    if (err) {
      res.send(err);
    } else {
      res.send(savedItem);
    }
  });
});

//signup

AuthRouter.post('/signup',function(req, res) {
   jwt.findOne
    newItem.save((err, savedItem) =>{

    if (err) {
      res.send(err);
    } else {
      res.send(savedItem);
    }
  });
});

