// cool버튼을 누르고 해당 포스트와 누른 유저의 id가 둘다 존재하는 data 있는지 확인
// 없으면 db에 cool table data추가 : 
// cool버튼을 누르면 해당 유저 id와 포스트 id를 준다 (처음에 조회할 때 애초에 id를 줌 클라이언트 쪽에서 저장)
//   const userInfo = await cool.findOne({
//     where: { user_id }
//   });

//   const postInfo = await cool.findOne({
//     where: { post_id }
//   });

//   const coolInfo = await cool.findOne({
//     where: { user_id, post_id }
//   });

// coolInfo.create({})
// 있으면 db에서 data 삭제 : delete({where : })
// findAndCountAll()을 이용해서 post_1d를 where로 놓고 조회, 개수를 전달
// 위 과정은 db가 업뎃되는 즉시 실행해서 async-await로 진행 