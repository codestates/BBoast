// const { users } = require('../../models');
// const {
//   generateAccessToken,
//   generateRefreshToken,
//   sendRefreshToken,
//   sendAccessToken,
// } = require('../tokenFunctions');

module.exports = (req, res) => {
  const { email, password } = req.body;

  if (!req.body.password || !req.body.email) {
    return res.status(422).send('모든 항목을 입력해 주세요');
  }

  res.status(401).send({ message: "이메일 혹은 비밀번호가 일치하지 않습니다"});


  // users.findOne({
  //   where: {
  //     email,
  //     password
  //   },
  // })
  //   .then((data) => {
  //     if (!data) {
  //       // return res.status(401).send({ data: null, message: 'not authorized' });
  //       return res.json({ data: null, message: '이메일 혹은 비밀번호가 일치하지 않습니다' });
  //     }
  //     delete data.dataValues.password;
  //     const accessToken = generateAccessToken(data.dataValues);
  //     const refreshToken = generateRefreshToken(data.dataValues);
  //     // 로그인 할 때마다 accessToken, refreshToken 재발급 (스프린트 방식)
  //     sendRefreshToken(res, refreshToken);
  //     sendAccessToken(res, accessToken);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};