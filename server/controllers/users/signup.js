const { users } = require('../../models');
const { generateAccessToken, resendAccessToken } = require('../tokenFunctions');

module.exports = (req, res) => {
  // 회원가입 및 사용자 생성

  const { name, email, password } = req.body;

  if (!req.body.name || !req.body.password || !req.body.email) {
    return res.status(422).send('모든 항목을 입력해 주세요');
  }

  users.findOrCreate(
   {where: {
     email: email,  
    }, 
   defaults: {
     user_name: name,
     password: password,
   }
})
.then(([users, notexists]) => {
  if (!notexists) {
    return res.status(409).send('이미 존재하는 이메일입니다');
  }
   delete users.dataValues.password; // dataValues 확인
   const newAccessToken = generateAccessToken(users.dataValues);
   resendAccessToken(res, newAccessToken);
})
.catch((err) => {
  console.log(err);
});
};