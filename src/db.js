import config from '../knexfile'
import knex from 'knex'

let cachedDB

export default function db () {
  if (cachedDB) return cachedDB

  const env = config[process.env.NODE_ENV || 'development']

  if (!env) {
    throw new Error(
      `Failed to get knex configuration for env:${process.env.NODE_ENV}`
    );
  }
  
  const DB = knex(env)
  cachedDB = DB
  return DB
};