const express = require('express')
const router = express.Router()

const Register = require('../controllers/Register')
const Produk = require('../controllers/Produk')

// Create data to DB
router.post('/create', Register.create)
router.post('/create', Produk.create)

// Create data from DB
router.get('/getdata', Register.getAll)
router.get('getdata', Produk.getAll)

// Update Data by ID
router.put('/update/:id',Register.updatebyId)
router.put('/update/:id',Produk.updatebyId)

// Delete by Id
router.delete('/delete/:id',Register.deletebyId)
router.delete('/delete/:id',Register.deletebyId)

module.exports = router