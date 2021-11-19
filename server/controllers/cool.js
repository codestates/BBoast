
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