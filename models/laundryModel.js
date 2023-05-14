import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Laundry = db.define('laundry', {
    nama_laundry:{
        type : DataTypes.STRING
    },
    tanggal_berdiri:{
        type : DataTypes.DATE
    },
    kota:{
        type : DataTypes.STRING
    },
    latitude:{
        type : DataTypes.STRING
    },
    longitude:{
        type : DataTypes.STRING
    },
    photo:{
        type : DataTypes.TEXT
    },
},{
    freezeTableName:true
});

export default Laundry;