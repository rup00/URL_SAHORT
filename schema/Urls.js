const mongo = require('mongoose');
// const schema = mongo.Schema();

const urlsTable = new mongo.Schema({
    url : {
        type: String,
        required : true
    },
    slug : {  //As a primary key
        type: String,
        required : true
    }
})

module.exports = Urls = mongo.model('Urls',urlsTable);