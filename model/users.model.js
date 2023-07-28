import DataTypes from 'sequelize';
import db from '../config/database.js';



export const Users = db.define('users', {
  user_sl_no: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:true,
    autoIncrement:true,
  },
  user_id: {
    type: DataTypes.CHAR(12),
    allowNull: false,
  },
  project_user_type: {
    type: DataTypes.CHAR(8),
    allowNull: true
  },
  name: {
    type: DataTypes.CHAR(50),
    allowNull: false
  },
  fathers_name:{
    type:DataTypes.CHAR(50),

  },
  mothers_name:{
    type:DataTypes.CHAR(50),
    allowNull: false

  },
  date_of_birth:{
    type:DataTypes.DATE,
    allowNull: false

  },
  nid:{
    type:DataTypes.INTEGER(20),
    allowNull: false
  },
  passport:{
    type:DataTypes.INTEGER,
    allowNull: false

  },
  phone_no:{
    type:DataTypes.CHAR(20),
    allowNull: false
  },
  email:{
    type:DataTypes.CHAR(30),
    allowNull: false
  },
  joining_date:{
    type:DataTypes.DATE,
    allowNull: false
  },
  blood_group:{
    type:DataTypes.CHAR(4),
    allowNull: false
  },
  sex:{
    type:DataTypes.CHAR(7),
    allowNull: false
  },
  religion:{
    type:DataTypes.CHAR(15),
    allowNull: false
  },
  company_name:{
    type:DataTypes.CHAR
  },
  maritial_status:{
    type:DataTypes.CHAR(10),
    allowNull: false

  },
  husband_name:{
    type:DataTypes.CHAR(50),
    allowNull: false
  },
  wife_name:{
    type:DataTypes.CHAR(50),
    allowNull: false

  },
  emergency_contact1:{
    type:DataTypes.CHAR(12),
    allowNull: false

  },
  emergency_contact2:{
    type:DataTypes.CHAR(12),
    allowNull: false
  },
  emergency_contact3:{
    type:DataTypes.CHAR(12),
    allowNull: false

  },
  present_add:{
    type:DataTypes.CHAR(100),
    allowNull: false
  },
  permanent_add:{
    type:DataTypes.CHAR(100),
    allowNull: false

  },
  education:{
    type:DataTypes.CHAR,
    allowNull: false
  },
  employment_history:{
    type:DataTypes.CHAR,
    allowNull: false

  },
  present_sallery:{
    type:DataTypes.INTEGER(7),
    allowNull: false

  },
  bank_account_no:{
    type:DataTypes.INTEGER(15),
    allowNull: false

  },
  bank_name:{
    type:DataTypes.CHAR(30),
    allowNull: false
  },
  branch:{
    type:DataTypes.CHAR(30),
    allowNull: false

  },
  routing_number:{
    type:DataTypes.CHAR(20),
    allowNull: false

  },
  tin_no:{
    type:DataTypes.CHAR(20),
    allowNull: false

  },
  designation: {
    type: DataTypes.CHAR(15),
    allowNull: true
  },
  img: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  type: {
    type:DataTypes.CHAR(10),
    allowNull:false
  }
}, {
  freezeTableName: true,
  timestamps : false
});
// Sync the models with the database using the 'alter' option
// db.sync({ alter: true })
//   .then(() => {
//     console.log('Database synchronized successfully with model definitions.');
//   })
//   .catch((error) => {
//     console.error('Error synchronizing the database:', error);
//   });