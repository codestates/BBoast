const { users, posts, comments } = require("../../models");

//참조
//https://github.cosm/codestates/pinGGye/blob/master/server/controller/queryFunction/create/createFeedData.js
//https://github.com/codestates/pinGGye/wiki/Schema


module.exports = async (req, res) => {
  const { id } = req.userInfo; //댓그 ㄹ쓰는 유저아이디 전달
  const { post_id, comment_content } = req.body; //댓글 달리는 포스트아이디와 댓글 내용
  // hashtags 는 배열 형태

  const allComments = comments.findAll({where:{
    post_id: post_id
  }}); // 해당 포스트 댓글 전부 조회

  const newAllComments = comments.create({
    user_id: id,
    post_id: post_id,
    comment_content: comment_content,
  }).then((data) => {
    allComments.push(data.dataValues)
  }); //내가 댓글 쓰고 db에 업로드한 다음 해당 포스트 댓 목록에 추가, 데이터 형식 확인 요망

  try {
    // 댓글 생성 -> 전체 댓글목록 데이터 전달
    newAllComments.then((data) => {
      res.status(201).json({data: allComments , message: "comment successfully uploaded" });
     })
    } catch (error) {
    console.error('서버 에러');
    console.error(error);
    return res.status(500).json({ message: "Failed to upload comment" });
   };

}