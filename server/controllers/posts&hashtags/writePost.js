const { users, posts, hashTag } = require("../../models");
const multer = require('multer')
const upload = multer({dest: 'images/'}) //dest : 저장 위치

//참조
//https://github.com/codestates/pinGGye/blob/master/server/controller/queryFunction/create/createFeedData.js
//https://github.com/codestates/pinGGye/wiki/Schema


module.exports = async (req, res) => {
  const { user_id } = req.userInfo;
  const { title, image, content, hashtags } = req.body;
  // hashtags 는 배열 형태

  const writePost = posts.create({
    user_id: user_id,
    post_title: title,
    post_content: content,
    post_image: imageSrc,
  });

  router.post('/upload', upload.single('img'),(req,res) => {
      res.json(req.file)
      console.log(req.file)
  })

  console.log(req.file);

  // req.file = { 
  //   fieldname: 'img',
  //   originalname: 'ffefe.png',
  //   encoding: '7bit',
  //   mimetype: 'image/png',
  //   destination: './images',
  //   filename: 'ffefe.png',
  //   path: 'images\\ffefe.png',
  //   size: 128427 
  // }

  //* S3 이미지 서버에 저장된 이미지의 url 경로 획득
  const imageUrl = req.file.path; // req.file.transforms; ????
  console.log(imageUrl);
  let imageSrc;

  // imageUrl.forEach((data) => {
  //   if (data.id === "thumbnail") thumbnailSrc = data.location;
  //   else if (data.id === "original") imageSrc = data.location;
  // });

  try {
    //* 피드 및 태그 입력
    const write = await db.writePost(
      user_id,
      post_title,
      post_content,
      post_image,
      thumbnail,
      tagsText
    );
    res.status(201).json({ message: "Feed successfully uploaded" });
  } catch (error) {
    console.error('서버 에러');
    console.error(error);
    return res.status(500).json({ message: "Failed to upload feed" });
  }

};