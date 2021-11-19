const { users, posts, hashTag } = require("../../models");
const multer = require('multer')
const upload = multer({dest: 'images/'}) 



module.exports = async (req, res) => {
  const { user_id } = req.body;
  const { title, image, content, hashtags } = req.body;
  

  const writePost = posts.create({
    userId: user_id,
    postTitle: title,
    postContent: content,
    postImage: imageSrc,
  });

  router.post('/upload', upload.single('img'),(req,res) => {
      res.json(req.file)
      console.log(req.file)
  })

  console.log(req.file);


  const imageUrl = req.file.path; 
  console.log(imageUrl);
  let imageSrc;

  try {
   
    const write = await db.writePost(
      user_id,
      post_title,
      post_content,
      post_image,
      thumbnail,
      tagsText
    );
    res.status(201).json({ message: "Post successfully uploaded" });
  } catch (error) {
    console.error('서버 에러');
    console.error(error);
    return res.status(400).json({ message: "Failed to upload post" });
  }

};