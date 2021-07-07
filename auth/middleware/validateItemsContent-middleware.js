module.exports = function validateItemsContent(req, res, next) {
    if (!req.body.name && !req.body.user_id) {
      res.status(400).json({ message: "'name' and 'user_id' are required fields." });
    } else {
      next();
    }
  }