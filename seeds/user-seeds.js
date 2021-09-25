const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'abroarh0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'Highway1',
    email: 'high1@sogou.com',
    password: 'password123'
  },
  {
    username: 'theneman2',
    email: 'theneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'Breaker3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'Rush4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;