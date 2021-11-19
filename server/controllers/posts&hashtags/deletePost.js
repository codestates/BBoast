const { posts, hashTag } = require("../../models");

module.exports = async (req, res) => {
  
  const userInfo = req.userInfo
  const { post_id, hashTag_id, password } = req.body;

  if (password !== userInfo.password) {
    return res.status(403).json({ message: "비밀번호가 일치하지 않습니다."});
  }

   posts
    .destroy({
        where: {
          post_id
        },
      })
      .then((data) => {
        if (!data) {
        res.status(401).json({ data: null, message: 'not authorized' });
      
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
          res.status(200).json({message : 'delete post'});
        })
      .catch((err) => {
        res.status(500).send('err');
      });

  };