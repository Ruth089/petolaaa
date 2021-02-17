const express = require("express");
const router = express.Router();
const db = require('../../models')
const Startup = db.Startup

router.post("/startups", (req, res) => {
    Startup.create({
        nom: req.body.nom,
        adresse : req.body.adresse,
        description:req.body.description
    })
  .then((startup) => res.status(201).json(startup))
  .catch((err) => res.status(400).json(err));
});

router.get("/startups", (req, res) => {
    Startup
      .findAll(
        {include: [db.Employe, db.Tarif, db.Horaire,db.CoordonneStartup]}
       )
      .then((startups) => {
        return res.send(startups);
    })
    .catch((err) => res.status(404).json(err));
});
router.get("/startups/:id", (req, res) => {
  Startup
    .findAll({where: { id: Number(req.params.id)}, 
      include: [db.Employe, db.Subscription, db.Horaire,db.CoordonneStartup
       ]})
    .then((startups) => {
      return res.send(startups);
  })
  .catch((err) => res.status(404).json(err));
});

router.put("/startups/:id", (req, res) => {
  Startup
    .update(req.body, {
      where: { id: Number(req.params.id)}
    })
    .then((startup) => {
      return res.send(startup);
  })
  .catch((err) => res.status(404).json(err));
});

router.delete("/startups/:id", (req, res) => {
  Startup
    .destroy({
      where: { id: Number(req.params.id)}
    })
    .then((startup) => {
      return res.send("suppression effectuée avec succes");
  })
  .catch((err) => res.status(404).json(err));
});
 
module.exports = router;