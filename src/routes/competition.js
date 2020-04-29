// const { query } = require("../db");

function get() {
  return async (req, res) => {
    // let id = req.params.id;
    // Competidores do campeonato
    // Categorias e qtd de rounds

    // let competition = query("", id);
    res.render("competition");
  };
}

module.exports = { get };
