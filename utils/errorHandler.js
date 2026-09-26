const handleError = (error, res) => {

    console.log(error);

    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation error",
            errors: error.errors
        });
    }

    res.status(500).json({
        message: "Server error"
    });
};

module.exports = handleError;