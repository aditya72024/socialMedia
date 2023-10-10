const Post = require('../models/post');



exports.getIndex = async (req,res,next) => {
    try {
        const data = await Post.findAll();

        const extradata = await req.user.getComments();

        
        res.status(201).json(data);
    }catch{
        res.status(500).json({error: err});
    }
}

exports.addPost = async (req,res,next) => {
    try{


       
        const postImage = req.body.data.postImage;
        const postDescription = req.body.data.postDescription;



        const data = await req.user.createPost({
            postImage : postImage,
            postDescription : postDescription,
          })



           
            res.status(201).json(data);
          


        // const data = await req.user.createPost({
           
         
        // });
    


        


    }catch(err){
        res.status(500).json({err: err});
    }
}

