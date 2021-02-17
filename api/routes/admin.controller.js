const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = db.Admin

router.post("/admins", (req, res) => {
  Admin.create({
    nom: req.body.nom,
    pwd: req.body.pwd,
    role: req.body.role
  })
.then((admins) => res.status(201).json(admins))
.catch((err) => res.status(400).json(err));
});

router.post("/admins/login", (req, res, next) => {
  Admin
    .findAll({ where: { nom: req.body.nom } })
    .then((admin) => {
      if (admin.length < 1) {
        return res.status(404).json({
          message: "nom non trouvé, cet employé n existe pas",
        });
      }
      bcrypt.compare(req.body.pwd, admin[0].pwd, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "authentification échouée",
          });
        }
        if (result) {
          // const token = jwt.sign(
          //   {
          //     nom: admin[0].nom,
          //     pwd : admin[0].pwd,
          //     role : admin[0].role  
          //   },
          //   process.env.JWT_KEY,
          //   {
          //     expiresIn: "1h",
          //   }
          // );

          return res.status(200).json({
            message: "authentification reussie",
            //  token: token,
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

router.get("/admins", (req, res) => {
    Admin
    .findAll()
    .then((admin) => {
        return res.send(admin);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;