if( loadSession('token') != false ){
 $("[href='//creativecommons.org/licenses/by/4.0/']:last").append(".");
}

/* social */
$("body").on( "click", ".btn-facebook", function(e) {
	var opt = $(this).attr("data-opt");
	console.log("FaceBook Login v3.8");
	window.open('/unilogin/login_FB.php?game_id=0&opt='+opt,'sociallogin','top=150,left=525,width=825,height=625,scrollbars=no,resizable=no,location=no,menubar=no,status=no,titlebar=no');
});
$("body").on( "click", ".btn-google", function(e) {
	var opt = $(this).attr("data-opt");
	console.log("Gooogle Sign-In Login");
	window.open('/unilogin/login_GP.php?game_id=0&opt='+opt,'sociallogin','top=150,left=525,width=825,height=625,scrollbars=no,resizable=no,location=no,menubar=no,status=no,titlebar=no');
});