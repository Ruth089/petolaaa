const express = require("express");
const router = express.Router();
const db = require("../../models");


router.post("/coordonneUtilisateurs", (req, res) => {
    db.CoordonneUtilisateur.create({
        num_tel: req.body.num_tel,
        ville: req.body.ville,
        commune:req.body.commune,
        quartier:req.body.quartier,
        avenu: req.body.avenu,
        numero: req.body.numero
    })
  .then((utilisateurs) => res.status(201).json(utilisateurs))
  .catch((err) => res.status(400).json(err));
});

router.get("/coordonneUtilisateurs", (req, res) => {
    db.CoordonneUtilisateur
      .findAll()
      .then((allcoordonnes) => {
        return res.send(allcoordonnes);
      })
      .catch((err) => res.status(404).json(err));
    });

module.exports = router;