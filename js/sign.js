
const signUp = document.querySelector("#signup");
    
signUp.onclick = () => {
    alert("회원 가입을 축하드립니다!!!🧨🧨🧨");
  const frm = document.memberFrm;
  const userId = frm.userId;
  const pwd = frm.pwd;
  const pwdCheck = frm.pwdCheck;
  const userName = frm.userName;
  const email = frm.email;
  const tel = frm.tel;

  const member = new Member(userId.value, pwd.value, pwdCheck.value, userName.value, email.value, tel.value)
  console.log(member);

  const members = JSON.parse(localStorage.getItem('members')) || [];
  members.push(member);
  const jsonStr = JSON.stringify(members);
  localStorage.setItem("members", jsonStr);

  Event.preventDefault();
    
};
 

class Member {
    constructor(userId, pwd, pwdCheck, userName, email, tel) {
        this.userId = userId;
        this.pwd = pwd;
        this.pwdCheck = pwdCheck;
        this.userName = userName;
        this.email = email;
        this.tel = tel;
    }
}


