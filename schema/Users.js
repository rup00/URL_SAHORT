const mongo = require('mongoose');
// const schema = mongo.Schema();

const userTable = new mongo.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    api_calls : {
        type : Number,
        required : true
    },
    subscription : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
})

module.exports = Users = mongo.model('Users',userTable);