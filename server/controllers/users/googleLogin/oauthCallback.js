require('dotenv').config();

// 구글 소셜 로그인 로직
// 1. client가 google server로 회원가입 요청
// 2. google server가 idToken 전송
// 3. client가 서비스 서버로 idToken 전송
// 4. 서비스 서버가 idToken이 유효한지 google server에 검증 및 유저 데이터 요청
// 5. 유효한 idToken이면 user Data 전송
// 6. 서비스 서버가 받은 유저 데이터를 저장 및 가공 후 client에 응답
// 출처: https://uju-tech.tistory.com/entry/Nodejs-소셜로그인-정복하기-google [uju's Tech]

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios');

  const env = process.env.NODE_ENV || 'local';
  const { OAuth2Client } = require('google-auth-library');
  // ****** npm install google-auth-library --save
  let googleAccountOauthClient;
  if (env !== 'ci') {
  if (!clientSecret) {
  throw Error('`GOOGLE_CLIENT_SECRET` 환경변수가 설정되어 있지 않습니다');
  }
  googleAccountOauthClient = JSON.parse(clientSecret).oauth.google;
  if (!googleAccountOauthClient.clientId) {
  throw Error('`GOOGLE_CLIENT_SECRET`에 `clientId`가 없습니다.');
  }
  }

//  @param {string} token
//  @returns {Promise<TokenPayload|undefined|true>}
//  @throws Error

  const verifyGoogle = (() => {
  if (env === 'ci') return async () => true;
  const client = new OAuth2Client(googleAccountOauthClient.clientId);
  return async (token) => {
  const ticket = await client.verifyIdToken({
  idToken: token,
  audience: googleAccountOauthClient.clientId,
  });
  return ticket.getPayload();
  };
  })();

  module.exports = (req, res) => {
  verifyGoogle
  };
  
// 출처: https://uju-tech.tistory.com/entry/Nodejs-소셜로그인-정복하기-google [uju's Tech]

  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
  // TODO : 이제 authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github

  // axios({
  //   method: 'post',
  //   url: `https://github.com/login/oauth/access_token`, //구글로 수정요망
  //   headers: {
  //     accept: 'application/json',
  //   },
  //   data: {
  //     client_id: clientID,
  //     client_secret: clientSecret,
  //     code: req.body.authorizationCode 
  //     // authorizationCode는 클라이언트에서 받아온 authorization code로 
  //     // 다시 OAuth App에 요청해서 access token을 받을 때 해당 함수에서 쓰이는 매개변수 function getAccessToken(authorizationCode)
  //     // authorization code를 서버로 보내주고 서버에서 access token 요청을 하는 것이 적절
  //   }
  // }).then((res) => {
  //   accessToken = res.data.access_token;
  //   res.status(200).json({ accessToken: accessToken })

  // }).catch(e => {
  //   res.status(404)
  // })