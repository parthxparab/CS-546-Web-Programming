const mongoCollections = require('../data/mongoCollections');
const posts = mongoCollections.posts;
const animal = mongoCollections.animals;
var ObjectId = require("mongodb").ObjectId;
const animals = require('./animals');

const exportedMethods = {
  async getAllPosts() {
    const postCollection = await posts();
    const animalCollection = await animal();
    const postData = await postCollection.find({}).toArray();
    var i;
    for (i = 0; i < postData.length; i++) {
      authID = postData[i].author.id;
      const animalo = await animalCollection.findOne({_id: ObjectId(authID)});
      const val = {id : authID, name : animalo.name};
      postData[i].author = val;
    }
    return postData;
  },

  async getPostById(id) {
    if(!id || typeof id!== "string" || id === undefined || id === null) throw `Invalid ID`;    
    const postCollection = await posts();
    const postOutput = await postCollection.findOne({_id: ObjectId(id) });
    if (!postOutput) throw 'Post not found';
    authID = postOutput.author.id;
    const animalo = await animalCollection.findOne({_id: ObjectId(authID)});
    const val = {id : authID, name : animalo.name};
    postOutput.author = val;

    return postOutput;
    },

  async addPost(title, content,author) {
        if (typeof title !== 'string') throw 'No title provided';
        if (typeof content !== 'string') throw 'I aint got nobody!';
    
        ObjectId = require('mongodb').ObjectID;
        const postCollection = await posts();
    
        const animalThatPosted = await animals.getByID(author);
    
        const newPost = {
          title: title,
          content: content,
          author: {
              id: author,
              name: `${animalThatPosted.name}`
          }
        };
    
        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;
    
        await animals.addPostToUser(ObjectId(author), newId, title);
    
        return await this.getPostById(newId);
      },

      async removePost(id) {
        if(!id || typeof id!== "string" || id === undefined || id === null) throw `Invalid ID`;

        var dataAni = {}
        if (!id) throw 'You must provide an id to search for';

        ObjectId = require('mongodb').ObjectID;
        const postCollection = await posts();
        let post = null;
        try {
          post = await this.getPostById(id);
        } catch (e) {
          console.log(e);
          return;
        }
        const deletionInfo = await postCollection.removeOne({_id: ObjectId(id)});
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete post with id of ${id}`;
        }
        await animals.removePostFromUser(post.author.id, id);
        dataAni.deleted = true;
        dataAni.data = post;
        return dataAni;
      },

      async updatePost(id, updatedPost) {
        if(!id || typeof id!== "string" || id === undefined || id === null) throw `Invalid ID`;

        else if (!updatedPost || typeof updatedPost!== "object" || updatedPost.length === 0) throw 'Invalid Entry';

        else
        {

        const postCollection = await posts();

        const updatedPostData = {};
    
    
        if (updatedPost.newTitle) {
          updatedPostData.title = updatedPost.newTitle;
        }
    
        else if (updatedPost.newContent) {
          updatedPostData.content = updatedPost.newContent;
        }

        else
        {
          updatedPostData.title = updatedPost.newTitle;
          updatedPostData.content = updatedPost.newContent;
        }
    
        const newInsertInformation = await postCollection.updateOne({_id: ObjectId(id)}, {$set: updatedPostData});
        if(newInsertInformation.modifiedCount == 0)
        {
          throw `Could not update post`;
        }

    
        return await this.getPostById(id);
      }
      },


};

module.exports = exportedMethods;
