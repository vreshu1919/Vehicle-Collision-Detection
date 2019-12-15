const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    Name: String,
    Email: String,
    Emergency: 
    [
        {
            EmerName: String,
            Relation: String,
            EmerContact: Number,
            EmerEmail: String

        },
        {
            EmerName: String,
            Relation: String,
            EmerContact: Number,
            EmerEmail: String

        }
    ],
    Password: String,
    Type: String
});

let adminSchema = new Schema({
    EmployeeID: String,
    FullName: String,
    Email: String,
    Password: String,
    Type: String
});


let user = mongoose.model('userDetails',userSchema);
let admin = mongoose.model('adminDetails',adminSchema);

module.exports = {
    user,
    admin
};