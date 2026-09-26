const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    age: {
        type: Number,
        required: true,
        min: 1
    },

    department: {
        type: String,
        required: true,
        minlength: 2
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;