
$( function() {
        var endDate = "December  27, 2014 15:03:25";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
		
		
		
      });
   
   
var customScripts = {
 
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top}, "slow"); 
                return false;
            });
    },   
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  			
			$('#services').waypoint(function() {				
			$('#services .col-md-3').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			$('#aboutUs').waypoint(function() {				
			$('#aboutUs').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			$('#contactUs').waypoint(function() {				
			$('#contactUs .parlex-back').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			 						 
		}, 
    init: function () {
        customScripts.onePageNav();  
		customScripts.waySlide(); 
    }
}
$('document').ready(function () {
	 $.backstretch([
      "images/pg_1.jpg"
    , "images/pouls1.jpg"
  ], {duration: 3000, fade: 1250});

	// if ($('.iso').length>0) {
  //   $(window).load(function() {
  //     $('.iso').fadeIn(1000);
  //     var $container = $('.iso').isotope({
  //       itemSelector: '.isotope-item',
  //       layoutMode: 'masonry',
  //       transitionDuration: '0.6s',
  //       filter: "*"
  //     });
  //     // filter items on button click
  //     $('.filters').on( 'click', 'ul.nav li a', function() {
  //       var filterValue = $(this).attr('data-filter');
  //       $(".filters").find("li.active").removeClass("active");
  //       $(this).parent().addClass("active");
  //       $container.isotope({ filter: filterValue });
  //       return false;
  //     });
  //   });
  // };

  // if($(".modal").length>0) {
  //   $(".modal").each(function() {
  //     $(".modal").prependTo( "body" );
  //   });
  // }

//   function filterItems(category) {
//     var items = document.querySelectorAll('.item');
//     items.forEach(function(item) {
//         if (category === 'all') {
//             item.classList.remove('hidden');
//         } else {
//             if (item.classList.contains(category)) {
//                 item.classList.remove('hidden');
//             } else {
//                 item.classList.add('hidden');
//             }
//         }
//     });
// }




document.querySelectorAll('.filters a').forEach(filterLink => {
  filterLink.addEventListener('click', function(e) {
    e.preventDefault();
    const filterValue = this.getAttribute('data-filter');
    document.querySelectorAll('.grid-media').forEach(item => {
      if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none'; 
      }
    });
  });
});


  
    customScripts.init();
	$('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity','0');
	$( "#menuToggle" ).toggle(function() {
	$(this).find('i').removeClass('fa-bars').addClass('fa-remove');
	 $('#mainNav').animate({"right":"0px"}, "slow");
	}, function() {
	  $('#mainNav').animate({"right":"-200px"}, "slow");
	  $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});	

  document.getElementById('bot').addEventListener('click', function() {
    const hiddenDiv = document.getElementById('hiddenDiv');
    if (hiddenDiv.classList.contains('hidden')) {
        hiddenDiv.classList.remove('hidden');
        // Utiliser un timeout pour permettre à la transition de se produire
        setTimeout(() => {
            hiddenDiv.classList.add('visible');
        }, 10); // Un petit délai pour permettre l'application de la classe visible
        // this.textContent = 'Cacher la div';
    } 
  });

  document.getElementById('close').addEventListener('click', function() {
    const hiddenDiv = document.getElementById('hiddenDiv');
    if (hiddenDiv.classList.contains('visible')) {
        hiddenDiv.classList.remove('visible');
        // Utiliser un timeout pour permettre à la transition de se produire
        setTimeout(() => {
            hiddenDiv.classList.add('hidden');
        }, 500); // Un petit délai pour permettre l'application de la classe visible
        // this.textContent = 'Cacher la div';
    } 
  });
});