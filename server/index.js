const fs = require('fs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const controllers = require('./controllers');
const { sequelize } = require('./models/index');
app.use(cookieParser());  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin:
     "http://localhost:3000/"
    //   "http://bboast.net.s3-website-us-east-1.amazonaws.com/",
    //   "https://d18mexsgb8jp34.cloudfront.net/",
    //   "https://www.bboast.net/"
    ,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE']
  })
);

sequelize.sync({ force: false }) // 이 코드 발견 시 시퀄라이즈 실행
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.error(err);
})


app.post('/login', controllers.login);
app.post('/logout', controllers.logout);

const port = 4000;

app.get('/', (req, res) => {
  res.status(200).send('good')
})

app.use((err, req, res, next) => {
   res.status(403).send('page load err')
})
app.use((req, res, next) => {
  console.log(err.stack);
  res.status(500).send('server err')
})

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});

