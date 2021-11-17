const { posts, hashTag } = require("../../models");

module.exports = async (req, res) => {
  //delete 요청
  const userInfo = req.userInfo
  const { post_id, hashTag_id, password } = req.body;

  if (password !== userInfo.password) {
    return res.status(400).send({ message: "비밀번호가 일치하지 않습니다."});
  }

   posts
    .destroy({
        where: {
          post_id
        },
      })
      .then((data) => {
        if (!data) {
          // return res.status(401).send({ data: null, message: 'not authorized' });
          return res.json({ data: null, message: '해당 포스트가 존재하지 않습니다' });
        }
          hashTag.destroy({
            where: {
                hashTag_id
              }
          })
          post_hashtag.destroy({
            where: {
                post_id,
                hashTag_id
              }
          })
          res.status(200).send('삭제되었습니다');
        })
      .catch((err) => {
        res.status(500).send('err');
      });

  };