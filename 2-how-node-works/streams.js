const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1: Blocking code and only send response when everything is ready
  /*fs.readFile("./starter/test-file.txt", (error, data) => {
    if (error) console.log(error);
    res.end(data);
  });*/
  // Solution 2: Streams - backpressure problem
  /*const readable = fs.createReadStream("./starter/test-file.txt");
  readable.on("data", (chunk) => {
    res.write(chunk);
  });

  readable.on("end", () => {
    res.end();
  });

  readable.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  });*/
  // Solution 3
  const readable = fs.createReadStream("./starter/test-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
