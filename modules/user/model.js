const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new Schema({
name:{
    type:String
}
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});
module.exports = mongoose.model('User',user);