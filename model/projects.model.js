import DataTypes from 'sequelize';
import db from '../config/database.js';



export const projects = db.define('projects', {
  project_sl_no: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    allowNull:true,
    autoIncrement:true,
  },
  project_id: {
    type: DataTypes.CHAR,
    allowNull: false,
    unique: true
  },
  project_name: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  client_id: {
    type: DataTypes.INTEGER,
  },
  project_leader_id: {
    type: DataTypes.INTEGER,
  },
  assigned_ids: {
    type: DataTypes.INTEGER,
  },
  started_at: {
    type: DataTypes.DATE,

  },
  deadline: {
    type: DataTypes.DATE

  },
  status:{
    type: DataTypes.CHAR
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  img: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  link: {
    type: DataTypes.CHAR,
    allowNull:true
  }
}, {
  freezeTableName: true,
  timestamps : false
});
// Sync the models with the database using the 'alter' option
db.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully with model definitions.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });