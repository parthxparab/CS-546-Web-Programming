const express = require('express');
const router = express.Router();
const animalData = require('../data/animals');
//const userData = data.animals;

router.get('/:id', async (req, res) => {
  try {
    let user = await animalData.getByID(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(404).json({error: 'User not found'});
  }
});

router.get('/', async (req, res) => {
  try {
    let userList = await animalData.getAll();
    res.status(200).json(userList);
  } catch (e) {
    res.sendStatus(500).send();
  }
});

router.post('/', async (req, res) => {
  let userInfo = req.body;

  if (!userInfo) {
    res.status(400).json({error: 'You must provide data to create a user'});
    return;
  }

  if (!userInfo.name) {
    res.status(400).json({error: 'You must provide animal'});
    return;
  }

  if (!userInfo.animalType) {
    res.status(400).json({error: 'You must provide animal Type'});
    return;
  }

  try {
    const newUser = await animalData.create(userInfo.name, userInfo.animalType);
    res.status(200).json(newUser);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  let userInfo = req.body;

  if (!userInfo || userInfo.length <=0 || typeof userInfo == "undefined") {
    res.status(400).json({error: 'You must provide data to update animal'});
    return;
  }


  if (typeof(userInfo.newName)!== "string" && typeof(userInfo.newType)=="undefined" ) {
    res.status(400).json({ error: 'You must provide data of type string' });
    return;
  }

  else if (typeof(userInfo.newName)== "string" && userInfo.newName.length <=0 && typeof(userInfo.newType)=="undefined" ) {
    res.status(400).json({ error: 'Data with length 0 not allowed' });
    return;
  }

  else if (typeof(userInfo.newName)== "undefined" && typeof(userInfo.newType)!=="string"){
    res.status(400).json({ error: 'You must provide data of type string' });
    return;
  }

  else if (typeof(userInfo.newName)== "undefined" && typeof(userInfo.newType)=="string" && userInfo.newType.length <=0){
    res.status(400).json({ error: 'Data with length 0 not allowed' });
    return;
  }

  else
  {

  try {
    await animalData.getByID(req.params.id);
  } catch (e) {
    res.status(404).json({error: 'Animal not found'});
    return;
  }
  try {
    const updatedUser = await animalData.rename(req.params.id, userInfo);
    res.status(200).json(updatedUser);
  } catch (e) {
    res.sendStatus(500).json({ error : e});
  }
}});

router.delete('/:id', async (req, res) => {

  try {
    const deletedAnimal = await animalData.remove(req.params.id);
    res.json(deletedAnimal);
  } catch (e) {
    res.sendStatus(500).json({error : e });
  }
});

module.exports = router;
