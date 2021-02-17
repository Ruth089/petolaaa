const express = require("express");
const router = express.Router();
const db = require('../../models')
const Horaire = db.Horaire

router.post("/horaires/startups/:id", (req, res) => {
  Horaire.create({
    jour: req.body.jour,
    heure_debut: req.body.heure_debut,
    heure_fin: req.body.heure_fin,
    StartupId : Number(req.params.id)
  })
  .then((horaire) => {
    return res.status(201).json(horaire);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/horaires", (req, res) => {
  Horaire
    .findAll()
    .then((horaires) => {
      return res.send(horaires);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/horaires/:id", (req, res) => {
  Horaire
    .findAll({where: { id: Number(req.params.id)},
        include: [db.Startup]
    })
    .then((horaire) => {
      return res.send(horaire);
  })
  .catch((err) => res.status(404).json(err));
});

router.get("/horaires/startup/:id", (req, res) => {
  Horaire
    .findAll({where: { StartupId : Number(req.params.id)},
        include: [db.Startup]
    })
    .then((horaire) => {
      return res.send(horaire);
  })
  .catch((err) => res.status(404).json(err));
});

module.exports = router;