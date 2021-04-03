const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const forceHTTPS = true;

app.prepare().then(() => {

  const server = express();

  if (forceHTTPS)
    server.use((req, res, next) => {
          if (req.headers["x-forwarded-proto"] == "http")
              res.redirect(`https://${req.headers.host}${req.url}`);
          else
              next();
  });

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get('/', (req, res) => app.render(req, res, '/index'));
  server.get('/index', (req, res) => app.render(req, res, '/index'));
  server.get('/massa', (req, res) => app.render(req, res, '/massa'));
  server.get('/tamanho', (req, res) => app.render(req, res, '/tamanho'));
  server.get('/recheio', (req, res) => app.render(req, res, '/recheio'));
 

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    //console.log(`> Custom Express Server ready on http://localhost:${port}`);
  });
});
