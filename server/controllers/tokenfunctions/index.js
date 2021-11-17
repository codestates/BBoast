require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1m" });
    // Access token으로 sign합니다.
    // 토큰을 리턴
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "5m" });
  },
  sendRefreshToken: (res, refreshToken) => {
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    // });
    // 스프린트에선 refreshToken을 쿠키에 저장
    // 그러나 프로젝트에서는 더 안전하게 DB에 저장하도록 한다 (?)

  },
  sendAccessToken: (res, accessToken) => {
    res.cookie("jwt", accessToken, {
      httpOnly: true,
    });
    res.status(200).json({ data: { accessToken }, message: "ok" });
    // JWT 토큰을 쿠키로 전달합니다.
  },
  isAuthorized: (req) => {
    const cookie = req.headers["cookie"];
    if (!cookie) {
      return null;
    }
    const token = cookie.split('=')[1].split(';')[0]; //쿠키 구조분석해서 수정요망
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
    // JWT 토큰 정보를 받아서 검증합니다.
    // jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴
  },
  resendAccessToken: (res, accessToken) => {
    res.cookie("jwt", accessToken, {
      httpOnly: true,
    });
    res.status(201).json({ message: 'ok' });
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      // return null if refresh token is not valid
      return null;
    }
  },
};