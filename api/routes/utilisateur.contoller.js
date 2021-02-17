const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Utilisateur = db.Utilisateur

router.post("/utilisateurs", (req, res) => {
    Utilisateur.create({
    nom : req.body.nom,
    prenom : req.body.prenom,
    identifiant : req.body.identifant,
    pwd : req.body.pwd
  })
  .then((utilisateurs) => res.status(201).json(utilisateurs))
  .catch((err) => res.status(400).json(err));
});

router.post("/utilisateurs/login", (req, res, next) => {
    Utilisateur
      .findAll({ where: { identifant: req.body.identifant }})
      .then((utilisateur) => {
        if (utilisateur.length < 1) {
          return res.status(404).json({
            message: "identifiant non trouvé, cet utilisateur n' existe pas",
          });
        }
        bcrypt.compare(req.body.pwd, utilisateur[0].pwd, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "authentification échouée",
            });
          }
          // if (result) {
          //   const token = jwt.sign(
          //     {
          //       noms : utilisateur[0].noms,
          //       email : utilisateur[0].email,
          //       pwd : utilisateur[0].pwd,
          //       photo : utilisateur[0].photo,
          //       type_paiement : utilisateur[0].type_paiement,
          //       numero_carte :utilisateur[0].numero_carte,
          //       code_secret : utilisateur[0].code_secret
          //     },
          //     process.env.JWT_KEY,
          //     {
          //       expiresIn: "1h",
          //     }
          //   );
  
            return res.status(200).json({
              message: "authentification reussie",
              token: utilisateur,
            });
          // }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
       });
    });
});

router.get("/utilisateurs", (req, res) => {
  Utilisateur.findAll()
.then((utilisateurs) => res.status(201).json(utilisateurs))
.catch((err) => res.status(400).json(err));
});

router.get("/utilisateurs/:id", (req, res) => {
  Utilisateur.findAll({
    where: { id: Number(req.params.id) }
  })
.then((utilisateur) => res.status(201).json(utilisateur))
.catch((err) => res.status(400).json(err));
});

// router.get("/utilisateurs/:idEmploye/startups/:id", (req, res) => {
//   Utilisateur.findAll({
//     where: { id: Number(req.params.idEmploye),
//              StartupId : Number(req.params.id)  
//             },
//     include: [db.Startup]})
// .then((employe) => res.status(201).json(employe))
// .catch((err) => res.status(400).json(err));
// });

// router.put("/utilisateurs/:idEmploye/startups/:id", (req, res) => {
//   Utilisateur.update(req.body, {
//     where: { id: Number(req.params.idEmploye),
//              StartupId : Number(req.params.id)  
//             },
//     include: [db.Startup]})
// .then((employe) => res.status(201).json(employe))
// .catch((err) => res.status(400).json(err));
// });

// router.put("/utilisateurs/:idEmploye", (req, res) => {
//   Utilisateur.update(req.body, {
//     where: { id: Number(req.params.idEmploye),
//             //  StartupId : Number(req.params.id)  
//             },
//     include: [db.Startup]})
// .then((employe) => res.status(201).json(employe))
// .catch((err) => res.status(400).json(err));
// });

// router.delete("/utilisateurs/:idEmploye/startups/:id", (req, res) => {
//   Utilisateur.destroy({
//     where: { id: Number(req.params.idEmploye),
//              StartupId : Number(req.params.id)  
//             },
//     // include: [db.Startup]
//   })
// .then((employe) => res.status(201).json({message :"suppression effectuée avec succes"}))
// .catch((err) => res.status(400).json(err));
// });

// router.delete("/utilisateurs/:idEmploye", (req, res) => {
//   Utilisateur.destroy({
//     where: { id: Number(req.params.idEmploye),
//             //  StartupId : Number(req.params.id)  
//             },
//     // include: [db.Startup]
//   })
// .then((employe) => res.status(201).json({message :"suppression effectuée avec succes"}))
// .catch((err) => res.status(400).json(err));
// });
  
module.exports = router;