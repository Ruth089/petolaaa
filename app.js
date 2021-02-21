const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const Utilisateur = require("./api/routes/utilisateur.contoller");

const Startup=require("./api/routes/startup.controller");

const Abonnement = require("./api/routes/abonnement.controller");
const Horaire = require("./api/routes/horaire.controller");

const Tarif = require("./api/routes/tarif.controller");


// const checkAuth=require('./api/middleware/check-auth');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/uploads',express.static('uploads'));
//app.use(express.static(__dirname));

app.use("",Startup);
app.use("",Utilisateur);
app.use("",Abonnement);
app.use("",Horaire);
app.use("",Tarif);


app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
