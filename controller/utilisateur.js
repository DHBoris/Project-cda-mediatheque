const { Utilisateur } = require("../model/utilisateur")
const client = require("../bd/connect")

const ajouterUtilisateur = async (req, res) =>{
    try{
        let utilisateur = new Utilisateur(
            req.body.noms, 
            req.body.adresse, 
            req.body.telephone)

        let result = await client.bd().collection("utilisateurs").insertOne(utilisateur);

        res.status(200).json(result);
    }catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

const getTousUtilisateurs = async (req, res) => {
    try {
      let cursor = client.bd().collection("utilisateurs").find();
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).json({ msg: "Aucun utilisateur trouvé" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };

module.exports = { ajouterUtilisateur, getTousUtilisateurs }