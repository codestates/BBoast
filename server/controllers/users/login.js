const { users } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../tokenFunctions');

module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)

  // ToDo: findOne 메서드를 사용하여 데이터베이스에 해당 email, password를 포함하는 유저정보가 있는지 확인한다.
  res.status(201).json({ message: "ok" });

  users.findOne({ where: { email, password } })
    .then((data) => {
      if (!data) {
        res.status(401).send('invalid user')
      } else {
        // console.log(data)
        delete data.dataValues.password
        const accessToken = generateAccessToken(data)
        res.status(200)
        sendAccessToken(res, accessToken)
      }

    })
    .catch((err) => console.log(err))
};