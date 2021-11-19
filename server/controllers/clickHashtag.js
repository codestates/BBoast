const { posts, post_hashtag, hashTag, cool } = require("../../models");

module.exports = async (req, res) => {

//특정 해시태그를 클릭했을 때 해당 목록 전송 페이지
//목록에 쿨 카운트, 상태정보도 들어가야함
//최종 전달 데이터 모양
// data = [{users : {id :3, email, ...}, posts : {id: 17, ....}, hashTags : [], coolState : on off, coolCount : 56}, 
// {users : {data.....}, posts : {}, hashTags : [],cool: {},  coolState : on off, coolCount : 89}, 
// {users : {data.....}, posts : {}, hashTags : [],cool: {},  coolState : on off, coolCount : 50}, ....] 
// 
//
//
//
//
//

//맨 처음에 받는 데이터 : 해시태그 이름
//1. 해시태그 아이디를 얻는다 hashTag.id
//2. post_hashtag join table 이용해 post_hashtag.post_id를 '배열'목록으로 얻는다
//3. post_id들 모음 = [2,4,56,78,....]
// 여기서부터 3을 맵핑한것 (ele = postid) 이후의 모든 값은 이 post_id를 이용해서 얻는다
//4-1. data.users = {} //해당 글을 쓴 유저  // 
users.findOne({ 
    where : {

    }, 
    includes : { 
        attributes: ['concert_Id', 'starttime', 'endtime', 'stage', 'artist', 'con_day', 'festival_Id'],
model: concert,
where: {
festival_Id: req.params.fest_id
}     } })


let data = {}
data.users = {} //해당 글을 쓴 유저  // 
data.posts = {} //해당 포스트 // 
data.hashTags = [] // 그 포스트의 해시태그를 전부 배열에 // 
data.coolState = true // '로그인한 유저'가 그 포스트에 cool 눌렀는지 // 
data.coolCount = 67 // 해당 포스트의 cool개수

//글

// 현실적으로 지금 해야하는거
// 1순위 메인페이지 구현
// 2순위 해시태그 누르면 목록
// 3순위 포스트 누르면 덧글 빼고 좋아요만 조인해서 넣기

// 마이페이지 글 목록 구현안함



    const { hashtag } = req.qurey // req.qurey = {hashtag : '일상'}

    try {

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
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
   }; 

}
