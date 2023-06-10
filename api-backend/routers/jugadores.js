const express = require('express')
const servi = require('../Services/players.service.js')
const router = express.Router()


router.get('/api/players',async(req,res)=> {
     const {filtro, orden} = req.query
     console.log(filtro,orden)
    try{
        const resultado = await servi.getByfilter(filtro,orden)
        return res.json(resultado)
        
    }catch(error){
        console.error("Ha ocurrido un error", error)
    }
    
})






module.exports = router