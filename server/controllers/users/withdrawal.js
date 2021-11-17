// const { users } = require('../../models');


module.exports = (req, res) => {
  console.log(req.body)
  res.status(200).send('안전하게 탈퇴처리되었습니다.');
  // ToDo: users 테이블을 받아 destory 메소드를 사용하여 delete 요청
  //   users
  //   .destroy({
  //       where: {
  //         password
  //       },
  //     })
  //     .then((data) => {
  //       if (!data) {
  //         // return res.status(401).send({ data: null, message: 'not authorized' });
  //         return res.json({ data: null, message: '비밀번호가 일치하지 않습니다' });
  //       }
        
  //       res.clearCookie('access_token')((err) => {
  //         if (err) {
  //           res.status(400).send('you are currently not logined');
  //         } else {
  //           res.clearCookie('refresh_token')
  //           res.status(200).send('안전하게 탈퇴처리되었습니다.');
  //       };
  //     })
  //     .catch((err) => {
  //       res.status(500).send('err');
  //     });
  //     // 토큰 2개 삭제
  //   })
  };