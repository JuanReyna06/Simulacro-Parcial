const {DataTypes} = require ("sequelize");

const jugadoresAtributos = {

    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    full_name: {
        type: DataTypes.STRING,
        validate : {
            len:[0,50]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            len:[0,50],
            notEmpty: {
                args: true,
                msg: "El email  es requerido"
            }
        }
        

    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate :{
            len:[0,50],
            notEmpty: {
                args: true,
                msg: "El email  es requerido"
            }
        }
    },
    ip_address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate :{
            len:[0,20],
        }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        validate : {
            len:[0,50],
        }
    
    }

}

const jugadoresOpciones = {
    timestamps: false
}



const players = {
    jugadoresAtributos,
    jugadoresOpciones
}

module.exports = players