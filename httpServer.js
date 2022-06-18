// Server created using plain nodeJS
const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let url = req.url;
  if (url == "/") {
    url = "/index";
  }
  if (!["/index", "/about", "/contact-me"].includes(url)) {
    url = "/404";
  }
  const file = fs.readFile("." + url + ".html", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});

server.listen(port, () => console.log(`Server running at port ${port}`));
