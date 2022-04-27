var bingoGames = &&([game.category=BINGO.all].[full])&&;
var casinoGames = &&([game.category=CASINO.all].[full])&&;
var cardGames = &&([game.category=CARTAS.all].[full])&&;
var lotteryGames = &&([game.category=LOTTERY.all].[full])&&;
var boardGames = &&([game.category=MESA.all].[full])&&;
var otherGames = &&([game.category=OTROS.all].[full])&&;
var pokerGames = &&([game.category=POKER.all].[full])&&;
var slotsGames = &&([game.category=SLOTS.all].[full])&&;
var checkersGames = &&([game.category=CHECKERS.all].[full])&&;

console.log("##(seo_url_lang)##");

bingoGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#bingo-games').append(texto_side_juego);
});

casinoGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#casino-games').append(texto_side_juego);
});

cardGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#card-games').append(texto_side_juego);
});

lotteryGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#lottery-games').append(texto_side_juego);
});

boardGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#board-games').append(texto_side_juego);
});

otherGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#other-games').append(texto_side_juego);
});

pokerGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#poker-games').append(texto_side_juego);
});

slotsGames.forEach(function(element) 
{
	texto_side_juego = '<li class="nav-item py-2 px-4"><a href="//==(language)==.++(domain)++/' + element.common_params.game_seo + '" class="text-capitalize">' + element.common_params.game_name + '</a></li>';
	$('#slots-games').append(texto_side_juego);
});

//left-side bar
$('div[data-toggle="collapse"]').on('click', function(e){
	
	let tCls = $(this).attr('aria-controls');
	
	if(!$("#"+tCls).hasClass("show")){
		
    	$(this).find('i').removeClass('fas fa-chevron-left');
    	$(this).find('i').addClass('fas fa-chevron-down');    	
    }else{

    	$(this).find('i').removeClass('fas fa-chevron-down');
    	$(this).find('i').addClass('fas fa-chevron-left');
    }

});

$('.game-sort-name.pl-3.text-uppercase').each(function(key, element){

	let str = $(element).text();

	if(str.length > 21){
		$(element).text( str.substring(0, 20) + '...' );
	}
});

const ps = new PerfectScrollbar('#sidenav-bar');

$('#logout_bar_side').click(function(){
	deleteSession();
	$('#login_bars').show();
	$('#register_upper_menu').show();
	$('#nick_on_bar').hide();
	$('.not_login_menu').show();
	$('.logged_menu').hide();
});