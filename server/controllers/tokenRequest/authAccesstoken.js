const { users } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  // TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: 'not authorized' });
  }
  
  const { email } = accessTokenData;
  users.findOne({ where: { email } })
    .then((data) => {
      if (!data) {
        return res.json({
          data: null,
          message: 'not authorized',
        });
      }
      
      delete data.dataValues.password;
      console.log(data.dataValues)
      return res.json({ data: { userInfo: data.dataValues }, message: 'ok' });
    })
    .catch((err) => {
      console.log(err);
    });

  // res.status(401).send({ data: null, message: 'not authorized' });
};