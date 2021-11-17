// const { users } = require('../../models');
// const {
//   generateAccessToken,
//   generateRefreshToken,
//   sendRefreshToken,
//   sendAccessToken,
// } = require('../tokenFunctions');

module.exports = (req, res) => {
  const { email, password } = req.body;
  console.log(req)

  // ToDo: findOne 메서드를 사용하여 데이터베이스에 해당 email, password를 포함하는 유저정보가 있는지 확인한다.
  res.status(201).json({ message: "ok" });
  
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