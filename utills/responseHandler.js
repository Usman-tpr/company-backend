const sendResponse = (res, statusCode=200, success=true, message="True and 200", data = null) => {
    return res.status(statusCode).json({
        success,
        message,
        data,
    });
};

module.exports = sendResponse;
