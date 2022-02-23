const Sequelize = require("sequelize");
const Joi = require("joi");
const db = require("../config/database");

const identifierValidator = value => {
  const schema = Joi.object({
    identifier: Joi.string(),
    title: Joi.string(),
  });
  return schema.validate(value);
};

const jobtitleValidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    title: Joi.string(),
  });
  return schema.validate(value);
};

const reportsToValidator = (value) => {
  const schema = Joi.object({
    id: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
  });
  return schema.validate(value);
};

const addressvalidator = value => {
  const schema = Joi.object({
    addressLine1: Joi.string(),
    addressLine2: Joi.string(),
    countryCode: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.string(),
  });
  return schema.validate(value);
};

const relationsValidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    relationType: Joi.string(),
    gender: Joi.string(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    displayName: Joi.string(),
    email: Joi.string(),
    dateOfBirth: Joi.string(),
    profession: Joi.string(),
    mobile: Joi.number(),
  });
  return schema.validate(value);
};

const educationDetailsValidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    degree: Joi.string(),
    branch: Joi.string(),
    university: Joi.string(),
    profession: Joi.string(),
    cgpa: Joi.number(),
    yearOfJoining: Joi.number().integer(),
    yearOfCompletion: Joi.number().integer(),
   
  });
  return schema.validate(value);
};

const experienceDetailsValidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    companyName: Joi.string(),
    jobTitle: Joi.string(),
    location: Joi.string(),
    description: Joi.string(),
    dateOfJoining: Joi.string(),
    dateOfRelieving: Joi.string(),
   
  });
  return schema.validate(value);
};

const customFieldsvalidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    title: Joi.string(),
    type: Joi.string(),
    value: Joi.string(),
  });
  return schema.validate(value);
};

const groupsValidator = value => {
  const schema = Joi.object({
    id: Joi.string(),
    title: Joi.string(),
    groupType: Joi.string(),
  });
  return schema.validate(value);
};

const User = db.define("userinfo", {
  employeeNumber: {
    type: Sequelize.STRING,
   
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
   
  },
  lastName: {
    type: Sequelize.STRING,
   
  },
  displayname: {
    type: Sequelize.STRING,
   
  },
  email: {
    type: Sequelize.STRING,
   
  },
  jobtitle: {
    type: Sequelize.Sequelize.DataTypes.JSON,
    validate: { jobtitleValidator },
  },
  secondaryJobTitle: {
    type: Sequelize.STRING,
  },
  reportsTo: {
    type: Sequelize.DataTypes.JSON,
    validate: { reportsToValidator },
  },
  timeType: {
    type: Sequelize.STRING,
  },
  workerType: {
    type: Sequelize.STRING,
  },
  isProfileComplete: {
    type: Sequelize.STRING,
  },
  maritalStatus: {
    type: Sequelize.STRING,
  },
  marriageDate: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.STRING,
  },
  joiningDate: {
    type: Sequelize.STRING,
  },
  professionalSummary: {
    type: Sequelize.TEXT,
  },
  dateOfBirth: {
    type: Sequelize.STRING,
  },
  resignationSubmittedDate: {
    type: Sequelize.STRING,
  },
  exitDate: {
    type: Sequelize.STRING,
  },
  employmentStatus: {
    type: Sequelize.STRING,
  },
  accountStatus: {
    type: Sequelize.STRING,
  },
  invitationStatus: {
    type: Sequelize.STRING,
  },
  exitStatus: {
    type: Sequelize.STRING,
  },
  personalEmail: {
    type: Sequelize.STRING,
  },
  workPhone: {
    type: Sequelize.INTEGER,
  },
  homePhone: {
    type: Sequelize.INTEGER,
  },
  mobilePhone: {
    type: Sequelize.INTEGER
  },
  bloodGroup: {
    type: Sequelize.STRING,
  },
  attendanceNumber: {
    type: Sequelize.STRING,
  },
  probationEndDate: {
    type: Sequelize.STRING,
  },
  currentAddress: {
    type: Sequelize.DataTypes.JSON,
    validate: { addressvalidator },
  },
  relations: {
    type: Sequelize.DataTypes.JSON,
    validate: { relationsValidator },
  },
  educationDetails: {
    type: Sequelize.DataTypes.JSON,
    validate: { educationDetailsValidator },
  },
  experienceDetails: {
    type: Sequelize.DataTypes.JSON,
    validate: { experienceDetailsValidator },
  },
  customFields: {
    type: Sequelize.DataTypes.JSON,
    validate: { customFieldsvalidator },
  },
  groups: {
    type: Sequelize.DataTypes.JSON,
    validate: { groupsValidator },
  },
  leavePlanInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  bandInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  payGradeInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  shiftPolicyInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  weeklyOffPolicyInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  captureSchemeInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  trackingPolicyInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  expensePolicyInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  overtimePolicyInfo: {
    type: Sequelize.DataTypes.JSON,
    validate: { identifierValidator },
  },
  id: {
    type: Sequelize.STRING,
  },
  succeeded: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
  errors: {
    type: Sequelize.STRING,
  },
},{
  tableName: "userinfo",
  timestamp: false,
});

User.sync().then(() => {
  console.log('user table created');
}).catch((err) => {
  console.log(err.message);
});

module.exports = User;
