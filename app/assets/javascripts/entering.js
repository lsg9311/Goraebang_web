var next_url = "http://localhost:3000"; //배포시 바꿔야됨!!!!!
var login_url = "http://localhost:3000/entering"; //배포시 바꿔야됨!!!!!

var sign_up_validate = function(email,name,pw,pwc){
	if(email==""||name==""||pw==""||pwc=="") return false;
	else return true;
};

$(document).ready(function(){
	//로그인 요청
	$("#sign_in").click(function(){
		var email=$("#user_email").val();
		var pw=$("#user_password").val();
		var send_data="user[email]="+email+"&user[password]="+pw;
		$.ajax({
			url: "http://52.78.113.43/json/login",
			type: "POST",
			dataType:"json",
			data:send_data,
			success: function(data){
				if(data.result=="SUCCESS"){
					alert("아이디나 비밀번호가 일치합니다.");
					window.location.href=next_url;
				}
				else{
					alert("아이디나 비밀번호가 맞지 않습니다.");
				}
			}
        });
	});
	//성별 선택
	$(".gender_btn").click(function(){
		$(".gender_btn").css("opacity","0.5");
		$(this).css("opacity","1");
	});
	
	
	//회원가입 요청
	$("#sign_up_btn").click(function(){
		var email=$("#new_email").val();
		var name=$("#new_name").val();
		var pw=$("#new_pw").val();
		var pwc=$("#new_pwc").val();
		if(!sign_up_validate(email,name,pw,pwc)){
			alert("필수항목을 채워주세요.");
			return;
		}
		var send_data="user[email]="+email+"&user[name]="+name+"&user[password]="+pw+"&user[password_confirmation]="+pwc;
		$.ajax({
			url: "http://52.78.113.43/json/regist",
			type: "POST",
			data:send_data,
			dataType:"json",
			success: function(data){
				if(data.result=="SUCCESS"){
					alert("회원가입이 완료되었습니다.");
					window.location.href=login_url;
				}
				else{
					alert("회원가입에 실패했습니다.");
				}
			}
        });
	});
});