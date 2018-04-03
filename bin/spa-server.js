#!/usr/bin/env node
const compression = require(`compression`);
const express = require(`express`);
const path = require(`path`);

const openBrowser = require(`./lib/open-browser`);

const app = express();
const publicPath = path.join(process.cwd(), `dist`);
const port = 5000;

app.use(compression());
app.use(`/`, express.static(publicPath, { index: false }));
app.get(`/*`, (request, response) => {
  response.sendFile(`${publicPath}/index.html`);
});

app.listen(port);

// eslint-disable-next-line no-console
console.log(`Server started!`);
// eslint-disable-next-line no-console
console.log(`http://localhost:${port}`);

openBrowser(`http://localhost:${port}`);
