const { posts } = require("../../models");

//post를 클릭할 수 있다는 말은 이미 post 정보를 client가 받았다는 말
//별다른 서버 요청 없이 클라이언트에서 가능
//서버에서 파일을 만들 필요가...?

module.exports = async (req, res) => {
  
  const { post_id } = req.query;
  
  posts.findOne({
    where: {
      id : post_id
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(400).json({ data: null, message: '해당 포스트가 존재하지 않습니다' });
      }
      res.status(200).json({ data: data.dataValues ,message: "포스트를 조회합니다" });
    })
    .catch((err) => {
      console.log(err);
    });
    
  };