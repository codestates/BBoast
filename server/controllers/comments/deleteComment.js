const { comments } = require("../../models");

module.exports = async (req, res) => {
  //delete 요청
  const { id } = req.userInfo; //댓그 ㄹ쓰는 유저아이디 전달
  const { post_id, comment_id } = req.body; //댓글 달리는 포스트아이디

  const allComments = comments.findAll({where:{
    post_id: post_id
  }}); // 해당 포스트 댓글 전부 조회

  const deleteComment = comments.destroy({  
    user_id: id,
    post_id: post_id,
    id: comment_id ,
  }).then((data) => {
    allComments.pull(data.dataValues)
  }); //댓글 삭제 db에 업로드 후 목록 변경, 데이터 형식 확인 요망

  try {
  deleteComment
      .then((data) => {
            res.status(201).json({data: allComments , message: "comment successfully deleted" });
      });
    } catch (error) {
        console.error('서버 에러');
        console.error(error);
        return res.status(500).json({ message: "Failed to upload comment" });
       };

  };