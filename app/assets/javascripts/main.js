//make card
var make_card = function(data){
	var title = data.title;
	var jacket = "\""+data.jacket+"\"";
	
	var card_html=$("<div>").attr("class","song_card").css("background-image","url("+jacket+")").css("background-size","100% 100%").css("background-repeat","no-repeat");
	
	//1st layer
	var first_layer=$("<div>").attr("class","song_card_1st_layer");
	var song_info=$("<div>").attr("class","song_info");
	song_info.append("<p>"+title+"</p> <p>ARTIST</p>");
	first_layer.append(song_info);
	
	//2nd layer
	var second_layer=$("<div>").attr("class","song_card_2nd_layer").attr("data-toggle","modal").attr("data-target","#song_modal");
	var edge=$("<div>").attr("class","edge");
	edge.append($("<a>").attr("class","card_like").attr("href","#"));
	edge.append($("<a>").attr("class","card_hide").attr("href","#"));
	second_layer.append(edge);
	//all append
	card_html.append(first_layer);
	card_html.append(second_layer);
	
	return card_html;
};

var make_carousel = function(data,i){
	var title = data.title;
	var jacket = data.jacket;
	var rank=parseInt(i)+1;
	
	if(i==0) var carousel_html=$("<div>").attr("class","item active");
	else var carousel_html=$("<div>").attr("class","item");
	
	var carousel_img="<img src=\""+jacket+"\" class=\"list_img\"/>";
		
	var carousel_caption=$("<div>").attr("class","carousel-caption");
	var caption_img=$("<div>").attr("id","caption_img").append("<img src=\""+jacket+"\"/>");
	
	var caption_info=$("<div>").attr("id","caption_info");
	var caption_rank=$("<div>").attr("id","caption_rank").append("<h1>"+rank+"위</h1>");	
	var caption_detail=$("<div>").attr("id","caption_detail");
	caption_detail.append("<h1>"+title+"</h1>");
	caption_detail.append("<h3>가수</h3>");
	caption_detail.append("<h4>8920명의 리스트에 라인업</h4>");
	caption_detail.append("<h2>번호 455010 <span><em>Line<br/>up!</em></span></h2>");
	
	caption_info.append(caption_rank);
	caption_info.append(caption_detail);
	
	carousel_caption.append(caption_img);
	carousel_caption.append(caption_info);
	
	carousel_html.append(carousel_img);
	carousel_html.append(carousel_caption);
	
	return carousel_html;
};

//load card and carousel
var load_song = function(){
	$.getJSON({
		url : "http://52.78.113.43/json/song",
		success: function(data){		
			for(var i in data){
				$(".card_box").append(make_card(data[i]));
				$(".carousel-inner").append(make_carousel(data[i],i));
			}
			
		}
	});
};

//init cards
var init_card=function(){
	$(document).on("mouseover",".song_card",function(){
		$(this).find(".song_card_2nd_layer").show();	
	});
	$(document).on("mouseout",".song_card",function(){
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

