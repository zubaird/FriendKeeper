
module.exports = {

  development: {
    client: 'pg',
    connection: {
      debug: true,
      database: 'friendkeeper_dev'
    }
  },

  test: {
    client: 'pg',
    connection: {
      debug: true,
      database: 'friendkeeper_test'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
