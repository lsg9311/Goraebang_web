var init = function(){
	$("#hot_song > .select_button").show();
	$(".content_box").hide();
	$("#hot_song_content").show();
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

