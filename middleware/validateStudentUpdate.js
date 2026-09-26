const validateStudentUpdate = (req, res, next) => {

    const { name, age, department } = req.body;

    if (name === undefined && age === undefined && department === undefined) {
        return res.status(400).json({
            message: "At least one field is required"
        });
    }

    next();
};

module.exports = validateStudentUpdate;