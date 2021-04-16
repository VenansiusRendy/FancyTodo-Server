const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  static register(req, res){
    const {email, password} = req.body;
    User.create({email, password})
    .then(user => res.status(201).json({status: 'Success', data: {id: user.id, email: user.email}}))
    .catch(err => res.status(400).json(err))
  }
  static login(req, res){
    const {email, password} = req.body;
    User.findOne({where: {
      email
    }})
    .then(user => {
      let match = bcrypt.compareSync(password, user.password)
      if(user && match){
        const access_token = jwt.sign({id: user.id}, 'Secret')
        res.status(200).json({success: true, access_token})
      }else{
        throw {
          status: 401,
          message: 'Kombinasi email dan password salah'
        }
      }
    })
    .catch(err => res.status(err.status || 500).json({success: false, error: err.message || err}))
  }
}

module.exports = UserController;