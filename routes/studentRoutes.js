const logger = require("../middleware/logger");
const validateStudent = require("../middleware/validateStudent");
const validateStudentUpdate = require("../middleware/validateStudentUpdate");
const express = require("express");

const router = express.Router();

const {
    getStudents,
    addStudent,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");


router.get("/", logger, getStudents);

router.post("/", logger, validateStudent, addStudent);

router.get("/:id", getStudentById);

router.put(
    "/:id",
    logger,
    validateStudentUpdate,
    updateStudent
);

router.delete("/:id", deleteStudent);


module.exports = router;