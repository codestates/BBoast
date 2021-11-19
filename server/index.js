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
    origin: true,
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

app.use(cookieParser());

app.get('/authAccesstoken', controllers.authAccesstoken);
app.get('/authRefreshtoken', controllers.authRefreshtoken);

app.post('/signup', controllers.signup);
app.delete('/withdrawal', controllers.withdrawal);

app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.patch('/edit', controllers.edit)

app.delete('/deleteComment', controllers.deleteComment);
app.post('/writeComment', controllers.writeComment);

app.get('/clickPost', controllers.clickPost);
app.delete('/deletePost', controllers.deletePost);
app.patch('/updatePost', controllers.updatePost);
app.post('/writePost', controllers.writePost);

app.get('/myPage', controllers.myPage);
app.get('/cool', controllers.cool);
app.get('/', controllers.main);


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

