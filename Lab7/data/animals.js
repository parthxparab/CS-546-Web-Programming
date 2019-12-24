const mongoCollections = require('../data/mongoCollections');
const animals = mongoCollections.animals;
const post = mongoCollections.posts;

const posts = require("../data/posts");
var ObjectId = require("mongodb").ObjectId;

let exportedMethods = {

async getByID(id) {
  if(!id || typeof id!== "string" || id === undefined || id === null) throw `Invalid ID`;
    const animalCollection = await animals();
    const postCollection = await post();
    const animalOutput = await animalCollection.findOne({_id: ObjectId(id)});
    if (animalOutput == undefined) throw 'No animal with that id';
    var animalPosts = animalOutput.posts.length;
    x = 0;
    while(x<animalPosts)
    {
    authID = animalOutput.posts[x].id;
    const animalo = await postCollection.findOne({_id: ObjectId(authID)});
    const val = {id : authID, title : animalo.title};
    animalOutput.posts[x] = val;
    x++;
  }
    return animalOutput;
},

async getAll() {
  const animalCollection = await animals();
  const postCollection = await post();
  const animal = await animalCollection.find({}).toArray();
  var i;
  for (i = 0; i < animal.length; i++) {
    var animalPosts = animal[i].posts.length;
    x = 0;
    while(x<animalPosts)
    {
    authID = animal[i].posts[x].id;
    const animalo = await postCollection.findOne({_id: ObjectId(authID)});
    const val = {id : authID, title : animalo.title};
    animal[i].posts[x] = val;
    x++;
  }
  }

  return animal;
},

async create(name, animalType) {

    if (!name) throw 'You must provide a name for your animal';
    if (!animalType) throw 'You must provide Animal Type for your animal';


    if(typeof name!== "string") throw 'Type of Name must be String'

    if(typeof animalType!== "string") throw 'Type of Animal Type must be String'
    
    if (animalType.length === 0) throw 'You must provide at least one animal type.';
        const animalCollection = await animals();
    
        let newAnimal = {
          name: name,
          animalType: animalType,
          //_id: uuid(),
          posts: [] 
           
        };
    
        const insertInfo = await animalCollection.insertOne(newAnimal);
        if (insertInfo.insertedCount === 0) throw 'Could not add animal';
    
        const newId = insertInfo.insertedId;
    
        const animal = await this.getByID(newId);
        return animal;

},

async remove(id) {

  if(!id || typeof id!== "string" || id === undefined || id === null) throw `Invalid ID`;


    const animalCollection = await animals();
    const postCollection = await post();
    const animalo = await animalCollection.findOne({_id: ObjectId(id)});
    let animalPosts = animalo.posts;

    for(var i = 0; i< animalPosts.length; i++)
    {
      const deletionPost = await postCollection.removeOne({_id: ObjectId(animalPosts[i].id)});

    }

    const deletionInfo = await animalCollection.removeOne({_id: ObjectId(id)});

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete animal with id of ${id}`;
    }

    var dataAni = {
      "deleted" : true,
      "data" : animalo
    }
    return dataAni;
},

async rename(id, updatedAnimal) {

    if (!id || typeof id!== "string" || id === undefined || id=== null) throw 'You must provide an id to search for';

   else if (!updatedAnimal || typeof updatedAnimal!== "object" || updatedAnimal.length === 0) throw 'You must provide a name for your animal';

   else
   {

    ObjectId = require('mongodb').ObjectID;

    const animalCollection = await animals();
    const animalo = await this.getByID(id);

    if(!updatedAnimal.newName)
    {
    
    const updatedAnimalInfo = {
      name: animalo.name,
      animalType : updatedAnimal.newType
    };
    const updatedInfo = await animalCollection.updateOne({_id: ObjectId(id)}, {$set: updatedAnimalInfo});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update animal successfully';
    }
  }
    else if(!updatedAnimal.newType)
    {
      const updatedAnimalInfo = {
        name: updatedAnimal.newName,
        animalType : animalo.animalType
      };
      const updatedInfo = await animalCollection.updateOne({_id: ObjectId(id)}, {$set: updatedAnimalInfo});
      if (updatedInfo.modifiedCount === 0) {
        throw 'could not update animal successfully';
      }
    }

    else
    {
      const updatedAnimalInfo = {
        name: updatedAnimal.newName,
        animalType : updatedAnimal.newType
      };
      const updatedInfo = await animalCollection.updateOne({_id: ObjectId(id)}, {$set: updatedAnimalInfo});
      if (updatedInfo.modifiedCount === 0) {
        throw 'could not update animal successfully';
      }
    }

    return await this.getByID(id);
  }

},

async addPostToUser(authorId, postId, postTitle) {

  if (!authorId || typeof authorId!== "string" || authorId === undefined || authorId=== null) throw 'Invalid Entry';

  if (!postId || typeof postId!== "string" || postId === undefined || postId=== null) throw 'Invalid Entry';

  if (!postTitle || typeof postTitle!== "string" || postTitle === undefined || postTitle=== null) throw 'Invalid Entry';


    let currentUser = await this.getByID(authorId);
    console.log(currentUser);

    const animalCollection = await animals();
    const updateInfo = await animalCollection.updateOne(
      {_id: ObjectId(authorId)},
      {$addToSet: {posts: {id: postId, title: postTitle}}}
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getByID(authorId);
  },
  async removePostFromUser(authorId, postId) {
    let currentUser = await this.getByID(authorId);
    console.log(currentUser);
    ObjectId = require('mongodb').ObjectID;

    const animalCollection = await animals();
    const updateInfo = await animalCollection.replaceOne({_id: ObjectId(authorId)}, {$pull: {posts: {id: ObjectId(postId)}}});
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

    return await this.getByID(authorId);
  }
};

module.exports = exportedMethods;

