const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
}

module.exports = {
  development: {
    ...sqlite,
    connection: {
      filename: "./db/development.db3"
    }
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./db/test.db3"
    }
  },
  production: {
    ...sqlite,
    connection: {
      filename: "./db/production.db3"
    }
  }
}