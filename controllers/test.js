const Post = require("../models/post");
const fs = require("fs");

exports.createPost = (req,res,next)=>{
    console.log("post test")
    console.log(req.body)
    const postObject = req.body

    const p = new Post({
        titre:req.body.titre,
        author: req.body.author,
        text: req.body.text

    })
    p.save()
        .then(() => res.status(201).json({message : 'ok'}))
        .catch(error => res.status(400).json({ error}))
}

exports.getPostId = (req,res,next)=>{
    console.log('get test id')
    Post.findOne({_id:req.params.id})
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}

exports.getAllPost = (req,res,next)=> {
    console.log('get all test')
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}));
}

exports.deletePostId = (req,res,next)=>{
    console.log('delete test id')
    Post.deleteOne({_id:req.params.id})
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}

exports.deleteAllPost = (req,res,next)=> {
    console.log('delete all test')
    Post.deleteMany()
        .then(posts => res.status(200).json(posts))
        .catch(error=> res.status(400).json({error}));
}

exports.updatePostId = (req,res,next)=>{
    console.log('update test id')
    Post.updateOne({_id:req.params.id},{
        titre:req.body.titre,
        text: req.body.text,
        author: req.body.author

    })
        .then(post=> res.status(200).json(post))
        .catch(error => res.status(404).json({error}))
}
