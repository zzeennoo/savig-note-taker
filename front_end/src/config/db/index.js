const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/se_project');
        console.log('successfully connected to mongo');
    } catch (error) {
        console.log('fail eo eo');
    }
}
module.exports = {connect};