import db from './db.json' assert {type: "json"};
import config from './config.json'assert {type: "json"};
import jsonServer from 'json-server';

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(config.port, () => {
  console.log('JSON Server is running')
})