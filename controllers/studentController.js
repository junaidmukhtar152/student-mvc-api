const Student = require("../models/Student");
const handleError = require("../utils/errorHandler");


const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        handleError(error, res);
    }
};


const addStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (error) {
        handleError(error, res);
    }
};


const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        handleError(error, res);
    }
};


const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        handleError(error, res);
    }
};


const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: student
        });

    } catch (error) {
        handleError(error, res);
    }
};


module.exports = {
    getStudents,
    addStudent,
    getStudentById,
    updateStudent,
    deleteStudent
};