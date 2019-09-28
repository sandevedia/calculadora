//import express fromm 'express'   =>ecma6 
const express = require('express') //si no tiene una ruta node lo toma como un módulo. 
const cors = require('cors')
const bodyParser = require('body-parser')
const Result = require('./models')
const mongoose = require('mongoose')
const app = express()

//mongo


const url = 'mongodb+srv://santiago:santiago@cluster0-hlxhl.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(url, {useNewUrlParser:true}, (error) =>
{
    if(error){
        console.log(error)        
    }else{
        console.log("Base de datos conectada")
    }
})




app.use(bodyParser.urlencoded({extended: true})) // agrega en el server la funcionalidad de body-parser
app.use(bodyParser.json())
app.use(cors())//agrega en el servidor la funcionalidad de cors
 
//en la url ':' indica que es un parametro
app.get('/suma/:firstValue/:secondValue/', function (req, res) {
   console.log(req.params) 
   const firstValue = parseFloat(req.params.firstValue) 
   const secondValue = parseFloat(req.params.secondValue)
   let result
   result = firstValue + secondValue
   res.send({result})

   const newResult = new Result({value: result})

   newResult.save((error, result)=>{
    if(error){
        console.log(error)
    }else{
        console.log(result)
    }
   })
})
 

app.get('/resta/:firstValue/:secondValue/', function (req, res) {
    console.log(req.params) 
    const firstValue = parseFloat(req.params.firstValue) 
    const secondValue = parseFloat(req.params.secondValue)
    let result
    result = firstValue - secondValue
    res.send({result})
 })

 app.get('/multiplicacion/:firstValue/:secondValue/', function (req, res) {
    console.log(req.params) 
    const firstValue = parseFloat(req.params.firstValue) 
    const secondValue = parseFloat(req.params.secondValue)
    let result
    result = firstValue * secondValue
    res.send({result})
 })

 app.get('/division/:firstValue/:secondValue/', function (req, res) {
    console.log(req.params) 
    const firstValue = parseFloat(req.params.firstValue) 
    const secondValue = parseFloat(req.params.secondValue)
    let result
    result = firstValue / secondValue
    res.send({result})
 })

app.listen(3000, () =>{
    console.log("server corriendo en puerto 300")
})
//callback cuando el backend se levanta bien ejecuta una funcion