const mongoCollections = require('../mongoCollections');
const animals = mongoCollections.animals;

async function get(id) {
  if (!id) throw 'You must provide an id to search for';
 // ObjectId = require('mongodb').ObjectID;
  const animalCollection = await animals();
  const animalo = await animalCollection.findOne({_id: id});
  if (animalo == undefined) throw 'No animal with that id';

  return (animalo.name +" the "+animalo.animalType);
}

async function getByID(id) {
  if (!id) throw 'You must provide an id to search for';
  //ObjectId = require('mongodb').ObjectID;
  const animalCollection = await animals();
  const animalo = await animalCollection.findOne({_id: id});
  if (animalo == undefined) throw 'No animal with that id';

  return animalo;
}

async function create(name, animalType)
{
    if (!name) throw 'You must provide a name for your animal';

//x    if (!animalType || !Array.isArray(animalType)) throw 'You must provide an array of animal type';

    if (animalType.length === 0) throw 'You must provide at least one animal type.';
    const animalCollection = await animals();

    let newAnimal = {
      name: name,
      animalType: animalType
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw 'Could not add animal';

    const newId = insertInfo.insertedId;

    const animal = await this.getByID(newId);
    return animal;
  }

  async function getAll() {
    const animalCollection = await animals();

    const animal = await animalCollection.find({}).toArray();

    return animal;
  }

  async function remove(id) {
    if (!id) throw 'You must provide an id to search for';
    //ObjectId = require('mongodb').ObjectID;
    const animalCollection = await animals();
    const animalo = await animalCollection.findOne({_id: id});
    const deletionInfo = await animalCollection.removeOne({_id: new ObjectId(id)});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${id}`;
    }

    return(animalo.name + " the " +animalo.animalType +" Was sucessfully deleted")
  }

  async function rename(id, name) {
    if (!id) throw 'You must provide an id to search for';

    if (!name) throw 'You must provide a name for your animal';


    if (animals.name === 0) throw 'You must provide at least one name.';
    ObjectId = require('mongodb').ObjectID;

    const animalCollection = await animals();
    const updatedanimal = {
      name: name
    };

    const updatedInfo = await animalCollection.updateOne({_id: id}, {$set: updatedanimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update animal successfully';
    }

    return await this.getByID(id);
  }
module.exports = {
get,create,getAll,remove,rename, getByID
    
};

