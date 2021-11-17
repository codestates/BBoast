# BBoast

BBoast는 소소한 자랑거리를 업로드하여 사용자간 공유할 수 있도록 하는 플랫폼 서비스입니다.

first test - complete

second test

server 모듈 및 라이브러리 설치 정리
express-session 설치
fs 설치
multer 설치

- api status 정리

200
oauthCallback : res.status(200).json({ accessToken: accessToken })
oauthImages : res.status(200).send({ images })
withdrawal : 탈퇴성공 : res.status(200).send('안전하게 탈퇴처리되었습니다.');

205
logout

400
withdrawal : 로그인이 되어 있지 않음 : res.status(400).send('you are currently not logined');

authAccesstoken
if (!accessTokenData) {
res.status(401).send({ data: null, message: 'not authorized' });
}

403
oauthImages : res.status(403).send({message: 'no permission to access resources'})

404
oauthCallback : catch(e => {res.status(404)})

409
signup : 중복된 이메일 : return res.status(409).send('email exists');

422
signup : 회원정보 없음 : return res.status(422).send('insufficient parameters supplied');

500
withdrawal : 에러 : res.status(500).send('err');
