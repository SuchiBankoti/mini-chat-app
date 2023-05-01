const express = require("express");
const fs = require("fs");
const app = express();
const logger = (req, res, next) => {
  if (req.url == "/") {
    const message = fs.readFileSync("msg.txt", "utf-8");
    res.send(`<div>
      <h2>${message}</h2>
      <form action="/message" method="post">
        <input type="text" name="message" />
        <input type="submit" value="send" />
      </form>
    </div>`);
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
  }
  next();
};

app.use(logger);
app.listen(3000, () => {
  console.log("server active");
});
