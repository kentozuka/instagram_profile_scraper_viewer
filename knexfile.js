module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DB_URL,
    pool: {
      min: 1,
      max: 5
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DB_URL,
    pool: {
      min: 1,
      max: 5
    }
  }
};