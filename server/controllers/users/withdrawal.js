const { users } = require('../../models');

// 회원탈퇴 버튼을 눌렀을 경우 클라이언트에서 비밀번호 모달창을 띄운다
// 비밀번호와 적은 비밀번호가 맞는지 확인하는 과정
// 서버는 비밀번호 일치 여부만 확인
// 비밀번호가 일치하는 유저 테이블의 해당 회원정보를 전부 날린다

module.exports = (req, res) => {
  //delete 요청
  const { password } = req.body;

  if (!password) {
    return res.status(400).send({ message: "비밀번호를 입력해 주세요"});
  }

    users
    .destroy({
        where: {
          password
        },
      })
      .then((data) => {
        if (!data) {
          // return res.status(401).send({ data: null, message: 'not authorized' });
          return res.json({ data: null, message: '비밀번호가 일치하지 않습니다' });
        }
        
        res.clearCookie('access_token')((err) => {
          if (err) {
            res.status(400).send('you are currently not logined');
          } else {
            res.clearCookie('refresh_token')
            res.status(200).send('안전하게 탈퇴처리되었습니다.');
        };
      })
      .catch((err) => {
        res.status(500).send('err');
      });
      // 토큰 2개 삭제
    })
  };