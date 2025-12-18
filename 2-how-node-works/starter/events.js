const events = require("events");
const http = require("http");

class Sales extends events {
  constructor() {
    super();
  }
}

const eventEmitter = new Sales();

eventEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

eventEmitter.on("newSale", () => {
  console.log("Customer name: John Doe");
});

eventEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

eventEmitter.emit("newSale", 9);

////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request received!");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
