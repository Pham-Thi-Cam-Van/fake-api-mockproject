const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// server.listen(port);
server.listen(port,()=>{  // do not add localhost here if you are deploying it
    console.log("server listening to port "+port);
});
