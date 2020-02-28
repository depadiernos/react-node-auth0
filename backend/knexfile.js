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
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
}