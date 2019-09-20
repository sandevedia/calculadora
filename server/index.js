//import express fromm 'express'   =>ecma6 
const express = require('express') //si no tiene una ruta node lo toma como un módulo. 
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // agrega en el server la funcionalidad de body-parser
app.use(bodyParser.json())
app.use(cors())//agrega en el servidor la funcionalidad de cors
 
//en la url ':' indica que es un parametro
app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
   console.log(req.params) 
   const firstValue = parseFloat(req.params.firstValue) 
   const secondValue = parseFloat(req.params.secondValue)
   let result
   switch(req.params.selectedOperator){
   case '+':
   result = firstValue + secondValue
   break;
   case '-':
   result = firstValue - secondValue
   break;
   case '/':
   result = firstValue / secondValue
   break;
   case '*':
   result = firstValue * secondValue
   break;
   }
  res.send({result})
})
 
app.listen(3000, () =>{
    console.log("server corriendo en puerto 300")
})
//callback cuando el backend se levanta bien ejecuta una funcion