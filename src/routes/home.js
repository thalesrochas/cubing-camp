const { query } = require("../db");
const moment = require("moment");

function get() {
  return async (_req, res) => {
    const campeonatos = await query(
      "SELECT * FROM `campeonato` ORDER BY `data_inicio` desc;"
    );

    // Campeonatos passados
    let past = campeonatos.filter(c =>
      moment().isAfter(moment(c.data_termino))
    );
    // Campeonatos em mandamento
    let now = campeonatos.filter(c =>
      moment().isBetween(moment(c.data_inicio), moment(c.data_termino))
    );
    // Campeonatos futuros
    let upcomming = campeonatos.filter(c =>
      moment().isBefore(moment(c.data_inicio))
    );

    res.render("home", { past, now, upcomming });
  };
}

module.exports = { get };
