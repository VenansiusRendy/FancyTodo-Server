const {Todo} = require('../models');

class TodoController {
  static read(req, res){
    Todo.findAll()
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(500).json(err));
  }
  static add(req, res){
    const {title, description, status, due_date} = req.body;
    Todo.create({
      title,
      description,
      status,
      due_date
    })
    .then(todo => res.status(201).json(todo))
    .catch(err => {
      if(err.name === 'SequelizeValidationError'){
        res.status(400).json(err);
      }else{
        res.status(500).json(err);
      }
    })
  }
  static readById(req, res){
    const {id} = req.params;
    Todo.findOne({
      where: {
        id: +id
      }
    })
    .then(todo => {
      if(todo){
        res.status(200).json(todo)
      }else{
        res.status(404).json({message: "Error Not Found"})
      }
    })
    .catch(err => res.status(500).json(err));
  }
  static update(req, res){
    const {id} = req.params;
    const {title, description, status, due_date} = req.body;
    Todo.update(
      {
        title,
        description,
        status,
        due_date
      }, 
      {
        where: {
          id: +id
        },
        returning: true
      }
    )
    .then(data => {
      if(data[1].length){
        res.status(200).json(data[1][0])
      }else{
        res.status(404).json({message: "Error Not Found"})
      }
    })
    .catch(err => {
      if(err.name === 'SequelizeValidationError'){
        res.status(400).json(err);
      }else{
        res.status(500).json(err);
      }
    })
  }
  static updateStatus(req, res){
    const {id} = req.params;
    const {status} = req.body;
    Todo.update(
      {
        status
      }, 
      {
        where: {
          id: +id
        },
        returning: true
      }
    )
    .then(data => {
      if(data[1].length){
        res.status(200).json(data[1][0])
      }else{
        res.status(404).json({message: "Error Not Found"})
      }
    })
    .catch(err => {
      if(err.name === 'SequelizeValidationError'){
        res.status(400).json(err);
      }else{
        res.status(500).json(err);
      }
    })
  }
  static delete(req, res){
    const {id} = req.params;
    Todo.findByPk(id)
    .then(todo => {
      if(todo){
        return todo.destroy()
      }else{
        res.status(404).json({message: "Error Not Found"})
      }
    })
    .then(result => {
      res.status(200).json({message: 'todo success to delete'});
    })
    .catch(err => {
      if(err.name === 'SequelizeValidationError'){
        res.status(400).json(err);
      }else{
        res.status(500).json(err);
      }
    })
  }
}
module.exports = TodoController;