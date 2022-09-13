const express = require('express');
const { ajouterUtilisateur, 
    getTousUtilisateurs } = require('../controller/utilisateur');
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getTousUtilisateurs);
module.exports = router;
