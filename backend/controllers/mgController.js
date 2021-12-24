/* const Itinerary = require('../models/Itinerary') */

/* const likesControllers = {
    likes: async (req,res)=>{
        const id = req.body.itineraryId
        const itinerary = await Itinerary.findOne({_id : id}).lean()
        const likeExist = itinerary.likes.some(like => like.toString() === req.body.userId.toString())
        const action = likeExist ? "$pull" : "$push"
        Itinerary.findOneAndUpdate(
            {_id:id},{[action]:{likes: req.body.userId}},
            {new:true}
        ).lean()
        .then((response) => {
            res.json({response})
        })
        .catch((err) => console.log(err))
        
    }
}

module.exports = likesControllers  */