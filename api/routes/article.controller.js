const db = require('../../models')
const Article = db.article

exports.createArticle = async(req,res,next)=>{
  // post
  await Article.create({
    nom = req.body.nom,
    image = req.body.image ,
    prix_UHT = req.body.prix_UHT,
    quantite = req.body.quantite,
    type = req.body.type,
    label = req.body.label
  })
  .then((resultat)=> res.status(200).json({resultat, message: "l'enregistrement a réussi"}))
  .catch((err) => res.status(400).json(err))   
}

//get('/articles')
exports.getArticle = async(req,res,next)=>{
  await Article.findAll()
  .then((resultat) => res.status(200).json(resultat))
  .catch((err)=> res.status(404).json(err))
}
//get('/articles/:id')
exports.getByOneArticle = async(req,res,next)=>{
    await Article.findByPk({id : Number(req.params.id)})
    .then((resultat) => res.send(resultat))
    .catch((err)=> res.status(404).json(err))
}

   //get('/startups/:id/articles')
exports.getArticleByStartup = async (req, res, next) => {
    await Article.findAll({
        where: {
          StartupId : req.params.id
        },
        include: { all: true, nested: true }
      // include: [db.startup, db.utilisateur],
    })
    .then((resultat) => res.send(resultat))
    .catch((err) => res.status(404).json(err))
}

//get('/utilisateurs/:id/articles')
exports.getArticleByUser = async (req, res, next) => {
    await Article.findAll({
        where: {
          UtilisateurId : req.params.id
        },
        include: { all: true, nested: true }
      // include: [db.startup, db.utilisateur]
      })
      .then((resultat) => res.send(resultat))
      .catch((err) => res.status(404).json(err))
}

//
// exports.getArticleByUserAndStartup = async(req,res,next)=>{
//     await Article.findOne({_id : req.params.id})
//     .then((resultat)=>{
//         res.status(200).json(resultat)
//     })
//     .catch((error)=>console.log(error))
// }

// exports.editeArticle = async(req,res,next)=>{
//     await Article.updateOne({_id: req.params.id},{...req.body,_id: req.params.id})
//     .then(()=>res.status(200).json({message: "modiffication effectuée avec succès"}))
//     .catch((error)=>console.log(error))

// }

exports.deleteArticle = async(req,res,next)=>{
  await Article.destroy({
    where: {
      id: Number(req.params.id)
    }
  })
  .then((resultat) => res.status(200).json({message : "suppression effectuée avec succes"}))
}
