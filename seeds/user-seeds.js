const sequelize = require("../config/connection");
const { User, Post } = require("../models");

//user seeds for the database
const userData = [
  {
    username: "jjohnd1",
    email: "jjohnd1@email.com",
    password: "jj1234",
  },

  {
    username: "rrrebel2",
    email: "rrrebel@email.com",
    password: "rrr1234",
  },

  {
    username: "potenc3",
    email: "potenc2@email.com",
    password: "potenc1234",
  },

  {
    username: "soln3",
    email: "soln3@email.com",
    password: "soln31234",
  },
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;
