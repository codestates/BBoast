const { users } = require("../../models");

module.exports = async (req, res) => {
  const { newName, password, newPassword } = req.body;

  if (!password || !newPassword) {
    return res.status(400).send({ message: "모든 항목을 입력해 주세요"});
  } 
  // 이름은 빈칸일 경우 수정 안함
  //기존 password, 새로 바꾸고자 하는 newPassword


  try { // try method 예외를 전부 에러로 보내버리는 처리 (?)
    const userInfo = await users.findOne({
      where: { password }
    }); // 기존 password로만 정보 조회

    if (!userInfo) {
      return res.status(400).json({ message: "User not found" });
    } // 보통 기존 password 틀린 경우

    if (!newName) {
      userInfo.update({ password: newPassword });
    } // 이름을 빈 칸으로 뒀을 때

    if (newName.length > 0) {
      userInfo.update({ user_name : newName, password: newPassword });
      res.status(201).json({ data: { user_name : newName }, message: "User info successfully updated" });
    } // 이름을 한 글자라도 입력하면 변형, 클라이언트로 바뀐 이름 보내야 함

    // delete userInfo.dataValues.password;
    // 비밀번호 정보 삭제 (?)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};