const { users, posts, hashTag } = require("../../models");

// 마이페이지에서 내가쓴 글만 불러오기
// 마이페이지 들어가는 순간 맨 위에 유저정보 전달해주기 (그냥 비번 빼고 전부 다 주기)

module.exports = async (req, res) => {

  try {
      
    let allHashTags = await hashTag.findAll(); //배열

    let cntHashTags = await hashTag.findAndCountAll();

    let threeHashTags = randomNum(allHashTags) //랜덤 3개의 해시만 담긴 배열 완성
     // allHashTags는 전체 해시태그 배열담기

    let randomNum = function (arr, newArr = []) {
        let n = Math.floor(Math.random() * cntHashTags); //Math.random()은 0에서 1 사이 무작위
        if (newArr.length < 3 && newArr.indexOf(arr[n]) >= 0) {
          return randomNum(arr, newArr);
        }
        if (newArr.length < 3 && newArr.indexOf(arr[n]) < 0) { // newArr이 길이가 3보다 작고 배열안에 값이 없을 때
          newArr.push(arr[n]);
          return randomNum(arr, newArr);
        } else {
        return newArr;
         }
        }

    const findAll3TagInfo = hashTag.findAll({ //await 가장 먼저 하는 작업
        // attributes: ['id'],
        include: 
          {
              where: {
               hashtags: { [Op.in] : threeHashTags //[#일상, #맛집, #서울]
                         }
               }
           }
         }); // findAll3TagInfo = [{id, hashtags, user_id, post_id, created},{},{}]

    //[{hashTag_id, user_id, post_id, created}, {''}, {''}......] 셋 중 하나만 포함해도 무작위나열

    const usersInfo = findAll3TagInfo.map((hashTagInfo = {hashTag_id, user_id, post_id, created}) => {
            const userInfo = users.findOne({where : hashTagInfo.user_id})
            return userInfo
          })

    const postsInfo = findAll3TagInfo.map((hashTagInfo = {hashTag_id, user_id, post_id, created}) => {
            const postInfo = posts.findOne({where : hashTagInfo.posts_id})
            return postInfo
          })

    let user_post_tags = [];
    for (let i = 0 ; i < findAll3TagInfo.length; i++){
        user_post_tags.push([usersInfo[i], postsInfo[i], findAll3TagInfo[i]]);
    }
    res.status(200).json({ data : {user_post_tags}, message: '목록 전달'})
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

    // client에서 받을 때
    // data.data.user_post_tags.map((info) => {
    // return infos[1].datavalues.title, infos[0].datavalues.user_name, infos[2].datavalues.hashtags})
    // main.js 에서 요청하는 모든 정보는 full 정보를 줄 것
}