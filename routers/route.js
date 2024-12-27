const express = require('express');
const task = require ("../models/taskModel");
const route = express.Router();

route.post('/tasks',  (req, res) => {
    console.log('Requête reçue :', req.body);
    const { titre, description, statut } = req.body;
    // Create a new task
    const newTask = new task({
        titre,description,statut});
    const savedTask =  newTask.save();
    console.log('Tâche sauvegardée :', savedTask);
    res.status(201).json(savedTask);

});
route.get('/tasks',(req,res)=>{
 task.find({}) .then(resultat=>{
    res.send(resultat)})
})
route.delete('/tasks/:id', async (req, res) => {
    await task.findByIdAndDelete(req.params.id);
        
         res.send( "La tâche a été supprimée avec succès");
    
 });
 route.put('/tasks/:id', async (req, res) => {
    
    const updatedTask = await task.findByIdAndUpdate(
        req.params.id, 
        { titre: req.body.titre },
        { new: true } )
    if (!updatedTask) {
        return res.status(404).send({ message: "La tâche n'a pas été trouvée" });
    }
    res.send("Mise à jour effectuée avec succès");

});

module.exports = route;
