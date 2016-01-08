jQuery(document).ready(function() {
    jQuery('#fullpageEndeos').fullpage({
        anchors: ['endeos', 'empresa', 'servicios', 'contacta', 'working'],
        menu: '#menu',
		scrollingSpeed: 700,
       

        //events
      
         afterLoad: function(anchorLink, index){

            if(anchorLink=='empresa'){
                jQuery('#section1').find('.diapo').delay(200).animate({
                    left:'0%'
                },1000,'easeOutExpo');
               
            }
            if(anchorLink=='contacta'){
                jQuery('#section3').find('.diapo').delay(200).slideDown(1000,'easeOutCubic');

            }
            if(anchorLink=='working'){
                jQuery('#section4 h2').delay(500).animate({
                    left:'0%'
                },1500,'easeOutExpo',function(){
                     jQuery('#section4 img').fadeTo(4000,1);
                })
               
            }

        },
        afterRender: function(){
                jQuery('#section0 img').delay(700).animate({left:'0%'},1500,'easeOutExpo');    
        },  
    });
});