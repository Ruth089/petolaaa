const express = require("express");
const router = express.Router();
const db = require('../../models');
const Abonnement = db.Abonnement;

router.post("/abonnements/utilisateur/:id/tarif/:idTarif", (req, res) => {
  
  Abonnement.create({
    duree:req.body.duree,
    adresse:req.body.adresse,  
    TarifId  : Number(req.params.idTarif), 
    UtilisateurId  : Number(req.params.id) 
  })
  .then((abonnement) => {
    return res.status(201).json(abonnement);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.get("/abonnements", (req, res) =>{
  Abonnement
  .findAll({include: [db.Tarif, db.Utilisateur ]})
  .then((abonnements) => {
    return res.send(abonnements);
})
.catch((err) => res.status(404).json(err));
})

router.get("/abonnements/utilisateur/:id", (req, res) =>{
  Abonnement
  .findAll({
    where: { UtilisateurId: Number(req.params.id)},
    include: {
      model : db.Tarif,
      include : [db.Startup]
    }
  })
  .then((abonnements) => {
    return res.send(abonnements);
})
.catch((err) => res.status(404).json(err));
})

module.exports = router;