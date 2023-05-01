const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      const message = fs.readFileSync("msg.txt", "utf-8");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<div>
        <h2>${message}</h2>
        <form action="/message" method="post">
          <input type="text" name="message" />
          <input type="submit" value="send" />
        </form>
      </div>`);
      res.end();
    }
    if (req.url === "/message" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body = chunk.toString();
      });
      req.on("end", () => {
        const msg = body;
        fs.writeFileSync("msg.txt", msg);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("server active");
  });
