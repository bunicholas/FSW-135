const mongoose = require("mongoose")
const schema = mongoose.Schema

const IssueSchema = new schema({
    IssueBody: {
        type: String,
        required:true,
    },
  
})

module.exports = mongoose.model('Issue', IssueSchema) 