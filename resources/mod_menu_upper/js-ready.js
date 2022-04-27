$("body").on( "click", ".openMenuBtn", function() {
	$(this).removeClass("openMenuBtn");
	$(this).addClass("closeMenuBtn");
	let ss = '==(slot_games)==';
	document.getElementById("sidenav-bar").style.width = ss.length > 18 ? "351px" : "320px";
});
$("body").on( "click", ".closeMenuBtn", function() {
	$(this).removeClass("closeMenuBtn");
	$(this).addClass("openMenuBtn");
	document.getElementById("sidenav-bar").style.width = "0";
});

if (loadSession("token")) 
{
	//getWallet( loadSession("token") );
        console.log ("loadSession");
	displayAsLoggedin();
}
else {
console.log ("Showing login bars");
	$('#login_bars').show();
	$('#register_upper_menu').show();
}

$('#logout_bar').on('click', function(){
	deleteSession();
	$('#login_bars').show();
	$('#register_upper_menu').show();
	$('#nick_on_bar').hide();
	$('.not_login_menu').show();
	$('.logged_menu').hide();
});

$('.loginFormBar').submit(function(){
	event.preventDefault();
	$(".is-invalid").removeClass("is-invalid");
	var user = $('#login-user-bar').val();
	var pass = $('#login-pass-bar').val();
	
	// Control de variables
	if ( (user == '') || (pass == '') ) {
		if( (user == '') ){
			$('#login-user-bar').addClass("is-invalid");
		}
		if( (pass == '') ){
			$('#login-pass-bar').addClass("is-invalid");
		}
	} else {
		//
		var game_seo = '%%(game_seo)%%';
		var loginRes = !!game_seo ? login(user,pass,'false') : login(user,pass,'false');
		if(loginRes.rc == 200){			
			var origen = !!game_seo ? game_seo : '';
			if(!origen){
				displayAsLoggedin()
			}else{
				location.replace("/" + origen);
			}
		}else {
			$('#login-user-bar').addClass('is-invalid');
			$('#login-pass-bar').addClass('is-invalid');
		}
	}
});

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function displayAsLoggedin(){
	if(loadSession("token")){
                if (loadSession("lastLogin") == getCurrentDate()){
                        getUserData(loadSession("token"));
                }
                else {
                        loginToken(loadSession("token"));
                }
		/*$('#login_bars').hide();
		$('#register_upper_menu').hide();
		$('#nick_on_bar').show();
		$('#nick_on_bar_inner').html(loadSession("nick"));
		$('.not_login_menu').hide();
		$('.logged_menu').show();
		
		var avatar = loadSession("avatar");
		if((typeof avatar !== 'undefined') && (avatar != '') && (avatar != 'null')) {
		
			$("#avataronmenu").attr("src","https://cdn.++(domain)++/images/avatar/users/" + avatar + ".png");	
		}*/
	}
       else {
        console.log ("token not found in displayasloguedin");
       }
}