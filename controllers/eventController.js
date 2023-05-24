const Event = require('../models/eventModel');


const addEvent = async(req, res) => {
        let data = new Event(req.body);
        let result = await data.save();
        if(result){
            res.status(200).json({message: result._id});            
        }
        else{
            res.status(400).json({message: "Couldn't add data provided."});
        }
}


const latestEvents = async(req, res) => {
        const type = req.query.type; // recency order
        const page = parseInt(req.query.page); // Current page number
        const limit = parseInt(req.query.limit); // Number of items per page      
        let sortOrder;
        if(type === "latest"){
            sortOrder = -1
        }else{
            sortOrder = 1
        } 
        const allData = await Event.find()
            .sort({ createdAt: sortOrder })
            .skip((page - 1) * limit)
            .limit(limit);

        if(allData.length > 0){
            return res.status(200).send(allData);
        }
        else{
            return res.status(400).json({message : "No Data Found."})
        }
}


const getEvent = async(req, res) => {
        const myData = await Event.findOne({ _id : req.params.id});
        if(myData){
            return res.status(200).send(myData);
        }
        else{
            return res.status(400).json({message : "No Data Found."})
        }
}


const updateEvent = async(req, res) => {
        let data = req.body;
        const myData = await Event.updateOne( 
            {_id : req.params.id} , 
            { $set : data }
        )
        if(myData){
            return res.status(200).json({message : "Data updated."})
        }
        else{
            return res.status(400).json({message : "Update failed."})
        }
}


const deleteEvent = async(req, res) => {
        const myData = await Event.deleteOne( {_id : req.params.id} )
        if(myData){           
            return res.status(200).json({message : "Data deleted."})
        }
        else{
            return res.status(400).json({message : "Deletion failed."})
        }
}


module.exports = {
    addEvent,
    getEvent,
    latestEvents,
    updateEvent,
    deleteEvent
}