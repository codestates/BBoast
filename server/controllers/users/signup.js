// const { users } = require('../../models');
// const { generateAccessToken, resendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // 회원가입 및 사용자 생성

  const { name, email, password } = req.body;
  console.log(req.body);
  res.status(201).json({ message: '요청에 대한 응답!'});
  
//   users.findOrCreate(
//    {
//       where: {
//       email: email,  
//     }, 
//       defaults: {
//       user_name: name,
//       password: password,
//    }
//   })
// .then(([users, notexists]) => {
//   if (!notexists) {
//     return res.status(409).send('이미 존재하는 이메일입니다');
//   }
//    delete users.dataValues.password; // dataValues 확인
//    const newAccessToken = generateAccessToken(users.dataValues);
//    resendAccessToken(res, newAccessToken);
// })
// .catch((err) => {
//   console.log(err);
// });
};