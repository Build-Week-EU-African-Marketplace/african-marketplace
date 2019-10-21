function loginRequired(req, res, next) {
    const body = req.body;

    if (!body.username || !body.password) {
        res.status(400).json({ message: "'username' and 'password' are required fields." });
    } else {
        next();
    }
}

function registerRequired(req, res, next) {
    const body = req.body;

    if (!body.username || !body.password || !body.department) {
        res.status(400).json({ message: "'username', 'password' and 'department' are required fields." });
    } else {
        next();
    }
}

module.exports = {
    registerRequired,
    loginRequired
}