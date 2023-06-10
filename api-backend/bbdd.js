const { Sequelize } = require('sequelize');
const players = require('./models/players.js')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/databaseFile.db'
});

sequelize.define(
    'Players',
    players.jugadoresAtributos,
    players.jugadoresOpciones
)


module.exports = sequelize;
