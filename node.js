const mongoose = require('mongoose');

// Define form schema
const formSchema = new mongoose.Schema({
    first: String,
    last: String,
    fatherName: String,
    motherName: String,
    DOB: Date,
    age: Number,
    Gender: String,
    phone: String,
    email: String,
    resume: String,
    photo: String
});

// Export the model
module.exports = mongoose.model('FormData', formSchema);
