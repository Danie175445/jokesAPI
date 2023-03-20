const joke = require('../models/jokes.model');

module.exports.findAllJokes = (req,res) => {
    joke.find()
        .then((allTheJokes)=>{
            res.json({joke:allTheJokes})
        })
        .catch((err)=> {
            res.json({message:'something went wrong',error:err})
        });
}
module.exports.findOneSingleJoke = (req,res) => {
    joke.find({_id: req.params.id})
        .then((onesingleJoke) =>{
            res.json({joke:onesingleJoke})
        })
        .catch((err)=>{
            res.json({message:'something went wrong',error:err})
        });
}
module.exports.createJoke = (req,res) => {
    joke.create(req.body)
        .then((newJoke)=>{
            res.status(201).json(newJoke);
            // return res.json(newJoke)
        })
        .catch((err)=>{
            console.log('soemething went wrong', err)
        });
}
module.exports.updateJoke = (req,res) =>{
    joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true,runValidator:true}
    )
        .then(updateJoke=>{
        res.json({joke:updateJoke})
        })
        .catch((err)=>{
            res.json({message:'something went wrong',error:err})
        });
}
module.exports.delteJoke = (req,res) => {
    joke.deleteOne({_id: req.params.id})
        .then(result =>{
            res.json({result:result})
        })
        .catch((err)=>{
            res.json({message:'something went wrong',error:err})
        });
}
