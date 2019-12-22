const todolist = require('../models/Produk')

module.exports = {
    create: (req, res, next) => {
        todolist.create({
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock
        },
        (err, result) => {
            if(err)
            next(err)
            else res.json(result)
        })
    },
    getAll: (req, res, next) => {
        todolist.find({}).then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    },
    updatebyId: (req, res, next) => {
        todolist.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            stock: req.body.stock
        },
        (err, result) => {
            if(err)
            next(err)
            else res.json(result)
        })
        
        },
    deletebyId: (req, res, next) => {
        todolist.findByIdAndRemove(req.params.id,(err, result) =>
        {
            if (err)
                next(err)
            else {
                res.json(result)
            }
        })
    }
}