const bodyParser = require("body-parser");
const express = require("express");
const DB = require("./mysqlConnection");
const app = express();
const routes = require("./routes/routes");

const PORT = process.env.PORT || 3000;

DB.connect(err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error("Erro na conexão do Banco de Dados: ", err);
  } else {
    // eslint-disable-next-line no-console
    console.log(
      `Conexão do Banco de Dados bem sucedida!\nConection ID: ${DB.threadId}`
    );
    app.emit("ready");
  }
});

// Se o processo node for finalizado, finaliza tambem a conexao do BD
process.on("SIGINT", () => {
  DB.end(err => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log("MySQL connection disconnected through app termination");
      process.exit(0);
    }
  });
});

app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use(routes);

app.on("ready", () => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log("Servidor rodando na porta:", PORT);
  });
});
