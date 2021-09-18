const Post = require('../../models/Post');


async function index(req, res) {
    try{
    // 1. Get all Posts from the database
    // 2. Use res.json() to send the posts to the frontend

    const allPosts = await Post.find({});
    res.status(200).json({data: allPosts, success: true});

    } catch (err) {
        res.status(400).json({error: err.message, success: false})
    }
}

async function create(req, res) {
    // 1. Create a post in the database (the data will be incoming via `req.body`)
    // 2. use res.json() to send a response to the frontend
    try {
    // opetion 1
    const newPost = new Post(req.body);
    const response = await newPost.save();

    // option 2
    // await Post.create(req.body)

    res.status(200).send(response);
    } catch (err) {
        console.log(err.message)
    }
}


module.exports = {
    index,
    create
}