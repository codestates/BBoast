// const env = require('dotenv').config();
const fs = require('fs');
// const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
// const db = require('./lib/common/mysql');

const controllers = require('./controllers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE']
  })
);
app.use(cookieParser());
// app.get('/authAccesstoken', controllers.authAccesstoken);
// app.get('/authRefreshtoken', controllers.authRefreshtoken);
app.post('/signup', controllers.signup);
app.delete('/withdrawal', controllers.withdrawal);
app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.patch('/edit', controllers.edit)
const port = 4000;

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});

// // client에서 post요청으로 보낸 Authorization code가 들어옵니다.
// app.post('/oauthCallback', controllers.oauthCallback);

// // Access token에 있는 resource server를 확인하는 endpoint 입니다.
// app.get('/oauthImages', controllers.oauthImages);

// // const httpport = 4000;

// const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// // 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// // 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// // 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
// let server;
// if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
//   const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
//   const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
//   const credentials = { key: privateKey, cert: certificate };

//   server = https.createServer(credentials, app);
//   server.listen(HTTPS_PORT, () => console.log('https server runnning'));
// } else {
//   server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
// }
// module.exports = server;


