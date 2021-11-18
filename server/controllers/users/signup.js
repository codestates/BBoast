const { users } = require('../../models');
const { generateAccessToken, resendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // 회원가입 및 사용자 생성

  const { username, email, password } = req.body;
  console.log(req.body);
  res.status(201).json({ message: '요청에 대한 응답!' });

  users.findOrCreate({ where: { email }, defaults: { username, password } })
    .then(([user, created]) => {
      if (!created) {
        res.status(409).send('email exists')
      } else {
        delete user.dataValues.password
        const accessToken = generateAccessToken(user)
        res.status(201)
        sendAccessToken(res, accessToken)

      }
    })
    .catch((err) => console.log(err))
};