// cool버튼을 누르고 해당 포스트와 누른 유저의 id가 둘다 존재하는 data 있는지 확인
// 없으면 db에 cool table data추가 : 
// cool버튼을 누르면 해당 유저 id와 포스트 id를 준다 (처음에 조회할 때 애초에 id를 줌 클라이언트 쪽에서 저장)
// coolInfo.create({})
// 있으면 db에서 data 삭제 : delete({where : })
// findAndCountAll()을 이용해서 post_1d를 where로 놓고 조회, 개수를 전달
// 위 과정은 db가 업뎃되는 즉시 실행해서 async-await로 진행 
// cool버튼 누르면 먼저 db를 건드리고 나중에 숫자를 세서 개수를 넘겨줘야 함

const { cool } = require("../models");

module.exports = (req, res) => {

  const { user_id, post_id } = req.userInfo; 

  const countCool = cool.findAndCountAll();

  cool.findOne(
   {where: {
    user_id, 
    post_id
    }
   }).then((data) => {
  if (!data) {
    cool.create({
        user_id: data.dataValues.user_id, 
        post_id: data.dataValues.post_id
        });
    } else{
    cool.destroy({
      where: {
        user_id: data.dataValues.user_id, 
        post_id: data.dataValues.post_id
       }});
    }
  }).then(() => {
    res.status(200).json({data : {countCool: countCool}, message : 'countCool'})
  })
.catch((err) => {
  console.log(err);
});
};