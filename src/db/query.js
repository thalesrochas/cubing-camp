const connection = require("./connection");

async function query(q, p = undefined) {
  return new Promise((resolve, reject) => {
    connection.query(q, p, (error, response, _fields) => {
      if (error) {
        reject(error);
      }
      resolve(response);
    });
  });
}

module.exports = query;
