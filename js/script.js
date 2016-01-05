$(document).ready(function(){



$('#onepage-nav').onePageNav();
	
	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 58) {
             $('#container-nav-div').addClass('navbar-fixed-top');
         }
         else {
             $('#container-nav-div').removeClass('navbar-fixed-top');
         }
    });





	
	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "#3C3C3C"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});