const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employe = db.Employe

router.post("/employes/startups/:id", (req, res) => {
  Employe.create({
    nom_employe: req.body.nom_employe,
    prenom: req.body.prenom,
    email : req.body.email,
    pwd : req.body.pwd,
    poste : req.body.poste,
    // photo : req.body.photo,
    StartupId : Number(req.params.id)
  })
.then((employes) => {res.status(201).json(employes);
  res.send(employes)})
.catch((err) => res.status(400).json(err));
});

router.get("/employes/startups", (req, res) => {
  Employe.findAll({include: [db.Startup]})
.then((employes) => res.status(201).json(employes))
.catch((err) => res.status(400).json(err));
});
router.get("/employes/:id/startups", (req, res) => {
  Employe.findAll({
    where: { id: Number(req.params.id) },
    include: [db.Startup]})
.then((employes) => res.status(201).json(employes))
.catch((err) => res.status(400).json(err));
});

router.get("/employes/:idEmploye/startups/:id", (req, res) => {
  Employe.findAll({
    where: { id: Number(req.params.idEmploye),
             StartupId : Number(req.params.id)  
            },
    include: [db.Startup]})
.then((employe) => res.status(201).json(employe))
.catch((err) => res.status(400).json(err));
});

router.put("/employes/:idEmploye/startups/:id", (req, res) => {
  Employe.update(req.body, {
    where: { id: Number(req.params.idEmploye),
             StartupId : Number(req.params.id)  
            },
    include: [db.Startup]})
.then((employe) => res.status(201).json(employe))
.catch((err) => res.status(400).json(err));
});

router.put("/employes/:idEmploye", (req, res) => {
  Employe.update(req.body, {
    where: { id: Number(req.params.idEmploye),
            //  StartupId : Number(req.params.id)  
            },
    include: [db.Startup]})
.then((employe) => res.status(201).json(employe))
.catch((err) => res.status(400).json(err));
});

router.delete("/employes/:idEmploye/startups/:id", (req, res) => {
  Employe.destroy({
    where: { id: Number(req.params.idEmploye),
             StartupId : Number(req.params.id)  
            },
    // include: [db.Startup]
  })
.then((employe) => res.status(201).json({message :"suppression effectuée avec succes"}))
.catch((err) => res.status(400).json(err));
});

router.delete("/employes/:idEmploye", (req, res) => {
  Employe.destroy({
    where: { id: Number(req.params.idEmploye),
            //  StartupId : Number(req.params.id)  
            },
    // include: [db.Startup]
  })
.then((employe) => res.status(201).json({message :"suppression effectuée avec succes"}))
.catch((err) => res.status(400).json(err));
});

router.post("/employes/login", (req, res, next) => {
  Employe
    .findAll({ where: { email: req.body.email }, include: [db.Startup]})
    .then((employes) => {
      if (employes.length < 1) {
        return res.status(404).json({
          message: "email non trouvé, cet employé n existe pas",
        });
      }
      bcrypt.compare(req.body.pwd, employes[0].pwd, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "authentification échouée",
          });
        }
        if (result) {
          // const token = jwt.sign(
          //   {
          //     nom_employe: employes[0].nom_employe,
              // prenom: prenom[0].prenom,
              // email : employes[0].email,
              // pwd : employes[0].pwd,
              // poste :  employes[0].poste,
              // photo : employes[0].photo
          //   },
          //   process.env.JWT_KEY,
          //   {
          //     expiresIn: "1h",
          //   }
          // );

          return res.status(200).json({
            message: "authentification reussie",
            result : result,
            employes : employes
            // token: token,
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
     });
  });
});

module.exports = router;