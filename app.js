const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/comp/:id", (req, res) => {
  let camp = true;
  res.render("competition", { camp });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Servidor rodando na porta:", PORT);
});
