const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        type : {
            type: String
        },
        uid : {
            type: Number
        },
        name : {
            type: String
        },
        tagline : {
            type: String
        },
        schedule : {
            type: Date,
            default: Date.now()
        },
        description : {
            type: String
        },
        files : {
            type: String
        },
        moderator : {
            type: String
        },
        category : {
            type: String
        },
        sub_category : {
            type: String
        },
        rigor_rank : {
            type: Number
        },
        attendees : {
            type: Array
        }       
    }, 
    {
        timestamps: true
    }
)

const Event = mongoose.model("events", eventSchema);
module.exports = Event;