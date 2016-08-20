//make card
var make_card = function(data){
	var title = data.title;
	var jacket = "\""+data.jacket+"\"";
	
	var card_html = " ";
	card_html = "<div class='song_card' style='background-image:url("+jacket+"); "
	+"background-repeat: no-repeat; background-size:100% 100%'>"
		+"<div class='song_card_1st_layer'>"
		+"<div class='song_info'>"
		+"<p>"+title+"</p>"
		+"<p>ARTIST</p>"
		+"</div>"
		+"</div>"
		+"<div class='song_card_2nd_layer' data-toggle='modal' data-target='#song_modal'>"
		+"<div class='edge'></div>"
		+"<a class='card_like' href='#'></a>"
		+"<a class='card_hide' href='#'></a>"
		+"</div>"
	+"</div>";
	return card_html;
};

//load card
var load_song = function(){
	$.getJSON({
		url : "http://52.78.113.43/json/song",
		success: function(data){
			$(".card_box").append(make_card(data[0]));
			$(".card_box").append(make_card(data[1]));		
			/*for(var i in data){
				make_card(data[i]);
			}*/
			
		}
	});
};

//init cards
var init_card=function(){
	$(".song_card").on("mouseover",function(){
		$(this).find(".song_card_2nd_layer").show();	
	});
	$(".song_card").on("mouseout",function(){
		$(this).find(".song_card_2nd_layer").hide();	
	});
};

var init = function(){
	$("#hot_song > .select_button").show();
	$(".content_box").hide();
	$("#hot_song_content").show();
	load_song();
	init_card();
};

var changePage = function(pageName){
	if(pageName == "hot_song"){
		$(".content_box").hide();
		$("#hot_song_content").show();
	}
	else if(pageName=="new_song"){
		$(".content_box").hide();
		$("#new_song_content").show();
	}
	else if(pageName=="filter_song"){
		$(".content_box").hide();
		$("#filter_song_content").show();
	}
	else return;
	return;
};

$(document).ready(function(){
	init();
	$("#tab_menu > li").click(function(){
		$(".select_button").hide();
		$(this).find(".select_button").show();
		changePage($(this).attr('id'));
	});
});

