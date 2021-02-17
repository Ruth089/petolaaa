const express = require("express");
const router = express.Router();
const db = require("../../models");
const CoordonneStartup = db.CoordonneStartup


router.post("/coordonneStartups/:id", (req, res) => {
    CoordonneStartup.create({
        num_tel: req.body.num_tel,
        ville: req.body.ville,
        commune:req.body.commune,
        rue_avenu: req.body.rue_avenu,
        numero: req.body.numero,
        StartupId: Number(req.params.id)
    })
  .then((coordonneStartups) => res.status(201).json(coordonneStartups))
  .catch((err) => res.status(400).json(err));
});

router.post(
  "/startups/:id/coordonnes",
  async (req, res) => {
    // await db.Startup
    //   .findOne({
    //     where: {
    //       id: req.params.id,
    //     },
    //   })
    //   .then((startup) => {
    //     startup.setEmployes(req.params.id);
    //   })
    //   .catch((err) => {
    //     return res.status(400).json({ err });
    //   });

    await CoordonneStartup
      .create({
        num_tel: req.body.num_tel,
        ville: req.body.ville,
        commune:req.body.commune,
        rue_avenu: req.body.rue_avenu,
        numero: req.body.numero,
        StartupId: Number(req.params.id)
      })
      .then((coordonne) => {
        return res.status(201).json(coordonne);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  }
);


router.get("/coordonneStartups", (req, res) => {
    CoordonneStartup
      .findAll()
      .then((coordonnes) => {
        return res.send(coordonnes);
      })
      .catch((err) => res.status(404).json(err));
    });

module.exports = router;