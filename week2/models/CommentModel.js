const mongoose = require("mongoose")
const schema = mongoose.Schema

const CommentSchema = new schema({
    CommentBody: {
        type: String,
        required:true,
    },
    CommentPosted: {
        type: Date,
        required:true,
        default: Date.now
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Issue: {
        type: Schema.Types.ObjectId,
        ref: 'Issue',
        required: true,
    },
})

module.exports = mongoose.model('Comment', CommentSchema) 