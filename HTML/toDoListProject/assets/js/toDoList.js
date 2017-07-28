$("ul").on( "click" , "li" ,function(){
	"use strict";
	//	if($(this).css("color")=== "rgb(128 , 128, 128)"){
	//		$(this).css({color:"black" , textDecoration: "underline"});
	//		}else{
	//			$(this).css({color:"#808080" , textDecoration: "line-through"});
	//		}

	
	$(this).toggleClass("complete");
});

$("ul").on( "click" , "span" ,function(event){
	"use strict";

	$( this ).parent().fadeOut(500,function(){
		$( this ).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event) {
	"use strict";
	if(event.which === 13){
		var todo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>");
	}

});

$(".fa-plus-circle").click(function(){
	"use strict";
	$("input").fadeToggle();
});
