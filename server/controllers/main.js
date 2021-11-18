const { users, posts, hashTag } = require("../../models");

// 메인화면으로 가면 데이터 목록 불러오기 로직
// 해시태그 중에 랜덤으로 3개 선택 아마 배열..???
// ex) random3Tag = [#일상, #맛집, #서울]

module.exports = async (req, res) => {

  try {
      
    let allHashTags = await hashTag.findAll(); //배열

    let cntHashTags = await hashTag.findAndCountAll();

    let threeHashTags = await randomNum(allHashTags.dataValues) //랜덤 3개의 해시정보만 담긴 배열 완성
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

    // threeHashTags = [{}, {}, {}]


    const idsOf3HashTags = await threeHashTags.map((ele) => {
      return ele.id
    }); // 해시태그 아이디만 가져온거

    const dataOfHashTag = await hashTag.findOne({
        where : { 
            hashtags : hashtag
        }
    }); //dataOfHashTag.dataValues = {id:, .....}

    const allPost_idsContainHash = await post_hashtag.findAll({
 
        attributes: ['post_id'],    //post_hashtag에서 조건 맞는 post_id 모두 가져옴  
        where: {
                hashtag_id: dataOfHashTag.dataValues.id      //post_hashtag.hashtag_id = hashtagId 인 조건
               },
         }); // [postid 1, 3, 5, .......]

    const postsData = await allPost_idsContainHash.map((postid) => {
        return posts.findAll({
              where : {
                 id : postid
              }
        });
    }); // postsData.dataValues = [{},{},{},...] //특정 해시 포함하는 목록들

    if(!postsData){
        res.status(400).json({ data : null, message: '목록이 없습니다'})
    }

        res.status(200).json({ data : postsData.dataValues, message: '목록 전달'})









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

    // user_post_tags = [[{usersInfo[i]}, {postsInfo[i]}, {findAll3TagInfo[i]}],[],[],.......]
    // info = [{usersInfo[i]}, {postsInfo[i]}, {findAll3TagInfo[i]}]
    // client에서 받을 때
    // data.data.user_post_tags.map((info) => infos[0] = usersInfo[i], infos[1] = postsInfo[i]....
    // return infos[1].datavalues.title, infos[0].datavalues.user_name, infos[2].datavalues.hashtags})
    // main.js 에서 요청하는 모든 정보는 full 정보를 줄 것
}



