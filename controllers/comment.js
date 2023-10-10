const Comment = require('../models/comment');

exports.getComments = async (req,res,next) => {

    try {
        const data = await req.user.getComments({where: {postId: req.params.id}});


        console.log(data);

        

        
        res.status(201).json(data);
    }catch{
        res.status(500).json({error: err});
    }
}


exports.addComment = async(req,res,next) => {

    

    
    try{

        const postId = req.body.entryData.postId;
        const postComment = req.body.entryData.postComment;

        const data = await req.user.createComment({
            comment : postComment,
            postId : postId,
         
        });
    


        res.status(201).json(data);


    }catch(err){
        res.status(500).json({err: err});
    }
}