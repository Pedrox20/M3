'use strict'

const models = require('../models/model')
const express = require('express')
const { listSeries } = require('../models/model')
// const { response } = require('../app')

const router = express.Router()
module.exports = router

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

router.get("/users", function(req,res){
    res.status(200).json(models.listUsers());
})
router.post("/users", function(req,res){
    try{
        const result= models.addUser(req.body.email, req.body.name);
        res.status(201).json({msg: result});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})



router.patch("/users/plan", function(req,res){
    try{
        const result= models.switchPlan(req.query.user);
        res.status(200).json({msg: result});
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
})



router.get("/series", function(req,res){
    res.status(200).json(models.listSeries());
})
router.post("/series", function(req,res){
    try{
        const result= models.addSerie(req.body.name, req.body.seasons, req.body.category, req.body.year);
        res.status(201).json({msg: result});
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})



router.get("/series/:category", function(req,res){
    try{
        const result= models.listSeries(req.params.category);
        res.status(200).json(result);
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
})



router.get("/play/:serie", function(req,res){
    try{
        const result= models.play(req.params.serie, req.query.user);
        res.status(200).json({msg: result});
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
})



router.get("/watchAgain", function(req,res){
    try{
        const result= models.watchAgain(req.query.user);
        res.status(200).json(result);
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
})



router.post("/rating/:serie", function(req,res){
    try{
        const result= models.rateSerie(req.params.serie, req.body.email, req.body.score);
        res.status(200).json({msg: result});
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
})
// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.