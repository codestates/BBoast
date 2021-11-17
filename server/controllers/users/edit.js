// const { users } = require("../../models");

module.exports = (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password )
  res.status(201).json({ message: "ok" });
};
