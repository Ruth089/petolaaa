const express = require("express");
const router = express.Router();
const db = require('../../models')
const Tarif = db.Tarif

router.post("/tarifs/startups/:id", (req, res) => {
  Tarif.create({
    type_de_collecte: req.body.type_de_collecte,
    prix: req.body.prix,
    StartupId : Number(req.params.id)
  })
  .then((tarif) => {
    return res.status(201).json(tarif);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/tarifs", (req, res) => {
  Tarif
    .findAll()
    .then((tarifs) => {
      return res.send(tarifs);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/tarifs/:id", (req, res) => {
  Tarif
    .findAll({where: { id: Number(req.params.id)}})
    .then((tarifs) => {
      return res.send(tarifs);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/tarifs/startup/:id", (req, res) => {
  Tarif
    .findAll({where: { StartupId: Number(req.params.id)}})
    .then((tarifs) => {
      return res.send(tarifs);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/tarifs/:id/startups/:idStartup", (req, res) => {
  Tarif
  .findAll({where: { id: Number(req.params.id)}, 
  include: { all: true, nested: true }
  })
  .then((tarifs) => {
    return res.send(tarifs);
})
.catch((err) => res.status(404).json(err));
});

module.exports = router;