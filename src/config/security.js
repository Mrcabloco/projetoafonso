const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  // Mudando de Objeto para String pura
  message: "Muitas requisições, tente novamente depois. Leonardo Souza Bastos RGM 2417544"
});

module.exports = { limiter };
