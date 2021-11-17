const {
    checkRefeshToken,
    generateAccessToken,
    resendAccessToken,
  } = require('../tokenFunctions');
  const { users } = require('../../models');
  
  module.exports = (req, res) => {
    const refreshToken = req.cookies.refreshToken; //쿠키에 담게 되면
    // const refreshToken = users.refreshToken; //db에 저장된다면
  
    if (!refreshToken) {
      // return res.status(403).send("refresh token does not exist, you've never logged in before");
      return res.json({ data: null, message: 'refresh token not provided' });
    }
  
    const refreshTokenData = checkRefeshToken(refreshToken);
    if (!refreshTokenData) {
      return res.json({
        data: null,
        message: 'invalid refresh token, please log in again',
      });
    }

    // *** refreshToken이 만료되었으면 db에서 삭제하고 다시 발급받는다 ***

    const { email } = refreshTokenData; // 왜 유저아이디
    users.findOne({ where: { email } })
      .then((data) => {
        if (!data) {
          return res.json({
            data: null,
            message: 'refresh token has been tempered',
          });
        }
        delete data.dataValues.password;
  
        const newAccessToken = generateAccessToken(data.dataValues);
        resendAccessToken(res, newAccessToken, data.dataValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };