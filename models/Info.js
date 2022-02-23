const Sequelize = require('sequelize');
const db = require('../config/database');


const Info = db.define('infos',{
 
    firstName:{
        type:Sequelize.STRING
    },
    lastName:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    address:{
        type:Sequelize.STRING
    }
})

Info.sync().then(() => {
    console.log('table created');
  });
module.exports = Info;