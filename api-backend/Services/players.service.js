const sequelize = require('../bbdd.js')
const {Op} = require('sequelize')

async function getAllplayers(){
    const data = await sequelize.models.Players.findAll({
        attributes:[
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar",
        ]
    })

    const arrayJugadores = data.map(player => player.dataValues)
    return(arrayJugadores)
}

async function getByfilter(filtro,orden){
    if(!filtro && !orden){
       return await getAllplayers()
    }
    if(filtro && !orden ){
        orden = 'id'
    }

    const data = await sequelize.models.Players.findAll({
        attributes:[
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar",
        ], where : {
            [Op.or] : [
                {full_name : {[Op.like]: `${filtro}%` }},
                {email : {[Op.like]: `${filtro}%` }},
                {nickname : {[Op.like]: `${filtro}%` }} 
            ]
        },
        order : [[orden, 'ASC']]
    })

    const arrayJugadores = data.map(player => player.dataValues)
    return(arrayJugadores)
}





const servicios = {
    getAllplayers,
    getByfilter
}


module.exports = servicios;