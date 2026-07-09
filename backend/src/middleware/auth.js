
const adminAuth = (req, res, next) => {
    let isAdmin = true;
    if (!isAdmin) {
        res.status(401).send("Please authorized first11");
    }
    next();
}

module.exports = {
    adminAuth
}