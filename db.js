const { Sequelize } = require('sequelize')
require('dotenv').config();
// Database
const sequelize = new Sequelize(
  process.env.DATABASE_URL, // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      connectTimeout: 60000 // 60 seconds
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
