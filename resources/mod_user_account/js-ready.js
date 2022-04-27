$('#my-games-tab').click(function() {
	$('.tab-pane').hide();
	$('#my-games').show();
});
$('#user-info-tab').click(function() {
	$('.tab-pane').hide();
	$('#user-info').show();
});
$('#payment-info-tab').click(function() {
	$('.tab-pane').hide();
	$('#payment-info').show();
});
$("body").on("click",".submit_codep",function(){
	var code = $("#verifyPassword").val();
	confirmPass(code);
});
$("body").on("click",".submit_mail",function(){
	var mail = $("#inputEmail").val();
	sendMail(mail);
});
$("body").on("click",".submit_mailn",function(){
	var mail = $("#inputEmailNew").val();
	sendMailN(mail);
});
$("body").on("click",".submit_code",function(){
	var code = $("#verifyEmail").val();
	confirmMail(code);
});
$("body").on("click",".submit_pass",function(){
	if( $("#newPassword").val() != $("#newPasswordRepeat").val() ){
		$("#password_not_match").removeClass("d-none");
	}else{
		var code = {};
		code.actual = $("#actualPassword").val();
		code.newp = $("#newPassword").val();
		changePass(code);
	}
});
if( loadSession('token') != false )
{
	loadUserData();
}
else
{
	window.location="https://==(language)==.++(domain)++/==(url_login)==";
}
