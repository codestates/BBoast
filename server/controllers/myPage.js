const { users, posts, hashTag } = require("../../models");

// 마이페이지에서 내가쓴 글만 불러오기
// 마이페이지 들어가는 순간 맨 위에 유저정보 전달해주기 (그냥 비번 빼고 전부 다 주기)

module.exports = async (req, res) => {

  const { id } = req.userInfo // get 요청, 
  //userInfo는 특정 유저의 모든 값을 객체에 담은 것 {id: , user_name, password, email}
  //로그인한 유저의 아이디

  const hashtags = await hashTags.findAll();

  posts.findAll({
    where : { 
      user_id: id } // posts.user_id가 id랑 같을 경우
  }).then((data) => {
    if(!data){
    res.status(200).json({data : null,  message : '작성한 글이 없습니다'})
    }
    res.status(200).json({data : {postData: data.dataValues, tagData: hashtags}, message : '내가 쓴 글 목록 전달'})
  })

}