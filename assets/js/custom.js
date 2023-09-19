
   // preloder
    

jQuery(window).load(function() {
  $('.loder').delay(100).fadeOut('slow');
  $('#preloader').delay(500).fadeOut('slow');
  $('body').delay(500).css({'overflow':'visible'});
});

$(document).ready(function(){

  
  // Popup
    setTimeout(function() {
    $(".bts-popup").addClass("is-visible");
  }, 600);

  //open popup
  $(".bts-popup-trigger").on("click", function(event) {
    event.preventDefault();
    $(".bts-popup").addClass("is-visible");
  });

  //close popup
  $(".bts-popup").on("click", function(event) {
    if (
      $(event.target).is(".bts-popup-close") ||
      $(event.target).is(".bts-popup")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
  $('.offer-content p').click(function(){
    $('.bts-popup').removeClass("is-visible");
  });



  $('.menu-bars i').click(function(){
    $('.menu-slide-up').slideDown(600);
    $('.reponsive-menu-area').fadeIn(600);
    $(this).hide(100);
  });

  $('.fa-xmark').click(function(){
    $('.menu-slide-up').slideUp(600);
    $('.reponsive-menu-area').fadeOut(600);
    $('.menu-bars i').show();
  });


  $('.mixitup-menubar').click(function(){
    $(".mixitup-list ul li").show(500);
    $('.twitters').addClass('active-twitters');
    $(this).hide();
  });
    $('.twitters').click(function(){
      $(".mixitup-list ul li").hide(500);
      $('.mixitup-area button').removeClass("buttons");
      $('.twitters').removeClass('active-twitters');
      $('.mixitup-menubar').show();
  });


      $('.vplay').magnificPopup({
        type: 'iframe',
      
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                    '</div>', 
          
            patterns: {
              youtube: {
                index: 'youtube.com/',
          
                id: 'v=',
          
                src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: 'https://player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }

            },
          
            srcAction: 'iframe_src', 
          }  
    });

    var swiper = new Swiper(".eatat-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
              navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
        // autoplay: {
        //   delay: 900,
    
        //   disableOnInteraction: false,
        // },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }
    });

    var swiper = new Swiper(".power", {
      // autoplay: {
      //   delay: 900,
      //    disableOnInteraction: false,
      //   },
              freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });


      var swiper = new Swiper(".ambassador-slider", {
      // freeMode: true,
      spaceBetween: 10,
      slidesPerView: 2,
      loop:true,
       autoplay: {
        delay: 2000,
         disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
        var swiper = new Swiper(".recipes-slider", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
    });

            var options = {
        animation: {
              enable: true,
               easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
          },
          controls: {
              live: false
          }
      }

      var mixer = mixitup('.mixitup-container',options);


});


// JAVASCRIPT INCRIMENT OR DECREMENT EQUAL TO TOTAL CODE
     let valueCount = 1;

     let increment = document.querySelector('.plus');
     let decrement = document.querySelector('.minus');
     let count = document.querySelector('#btncost');
     let totalcount = document.querySelector('.totaladd');

     increment.addEventListener("click",()=>{
         let add = valueCount++;
        count.value=add;
        totalcount.innerHTML=add*19.5;
      });

      decrement.addEventListener("click",()=>{
        if(valueCount >= 2){
        let sub = --valueCount;
        count.value=sub;
        totalcount.innerHTML=sub*19.5;
        }
      });


    // This is my Custom Progressbar 
      const skillsSection = document.getElementById('skills-section');
      const progressBar = document.querySelectorAll('.progress-bar');


      function showProgress(){
        progressBar.forEach(progressBars=> {

          const value = progressBars.dataset.progress;

          progressBars.style.opacity = 1;
          progressBars.style.width = `${value}%`;

        });
      }

      function hideProgress(){
        progressBar.forEach(p=> {
          p.style.opacity = 0;
          p.style.width = 0;
        });
      }


      window.addEventListener('scroll',() =>{

        const sectionPos = skillsSection.getBoundingClientRect().top;

        const screenPos = window.innerHeight;


        if(sectionPos < screenPos){
          showProgress();
        }

        else{
          hideProgress();
        }

      });







          var swiper = new Swiper(".goodfood-slider", {
      // freeMode: true,
      spaceBetween: 20,
      slidesPerView: 4,
       autoplay: {
        delay: 900,
         disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });




          var swiper = new Swiper(".upcoming", {
        slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
        return current + '-' + (total - 1); 
    }
  },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });







    var swiper = new Swiper(".thumbnail-slider", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".thumbnail-slider2", {
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });



    var swiper = new Swiper(".mights", {
      freeMode: true,
      spaceBetween: 10,
      slidesPerView: 1,
       autoplay: {
        delay: 900,
         disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
     
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
    });







            var options = {
        animation: {
              enable: true,
               easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
          },
          controls: {
              live: false
          },
          load: {
              filter: '.all'
          }
      }

      var mixer = mixitup('.mixitup-container',options);



 $(document).ready(function(){ 




  
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == "270") {
      $(".bts-popup").removeClass("is-visible");
    }
  });


  $('.items-store').click(function(){ 
    $('.items-store').removeClass('items-store-active');
    $(this).addClass('items-store-active');

  });





  $('.mixitup-list ul li').click(function(){
    $('.mixitup-list ul .mixtup-actives').removeClass('mixtup-actives');
    $(this).addClass('mixtup-actives');
  });





  $('.choose-items-radio').click(function(){
      $(".choose-items-radio").removeClass("radio-active");
      $(this).addClass("radio-active");
  });
  $('.gender-area .radio').click(function(){
      $(".gender-area .radio").removeClass("yes-active");
      $(this).addClass("yes-active");
  });





  
  });

  // incriment or decriment


 // var $addinput = $('#dolors');

 //  if()

 //  var $input = $('#btncost');
 //  $input.val(2);
 //    $('.button').click(function(){
 //        if( $(this).hasClass('plus'))
 //         $input.val(parseInt($input.val()) + 1)
 //        else if($input.val(2) >= 2)
 //          $input.val(parseInt($input.val()) - 1)
 //    });

      var swiper = new Swiper(".follow", {
               autoplay: {
        delay: 900,
         disableOnInteraction: false,
        },
                    slidesPerView: 1,
              freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
              breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
    });




          var swiper = new Swiper(".food-slider", {
      // freeMode: true,
      spaceBetween: 10,
      slidesPerView: 1,
       // autoplay: {
       //  delay: 900,
       //   disableOnInteraction: false,
       //  },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

     var swiper2 = new Swiper(".thumbnail-slider2", {
      spaceBetween: 90,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });




      var swiper = new Swiper(".digest-slider", {
      // freeMode: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
            pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });














   // $('.nav-icon').click(function(){
   //  $('.menu').addClass('menu-active');
   //  $('.header-area').addClass('header-sticky');
   // });
   // $('.nav-xmark').click(function(){
   //  $('.menu').removeClass('menu-active');
   // });

   // $('.menu ul li a').click(function(){
   //  $('.menu ul li a.active').removeClass('active');
   //  $(this).addClass("active");
   // });


     // counterUp
       // $('.counter').counterUp({
       //    dealy:20000,
       //    time:1500
       //  });

       





   // hero-slide



    // testimonial-slider-area

        // inner-slider



    // var swiper = new Swiper(".thumbnail-slider", {
    //   spaceBetween: 10,
    //   slidesPerView: 5,
    //   loop:true,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    // });
    















// $(document).ready(function(){

//   // counterUp
//   $('.counter').counterUp({
//     dealy:20000,
//     time:1500
//   });
//       // preloder
//      $(window).load(function() {
//        $(".preloder").delay(1000).fadeOut("fast");
//        $(".loder").delay(1000).fadeOut("fast");
//      });



//     // nav-bar-button
//      let menuToggle = document.querySelector(".toggle");
//        menuToggle.onclick = function() {
//         menuToggle.classList.toggle("active-main-menus");
//        };
//       $('.toggle').click(function(){
//         $('.responsive-style').slideToggle();
//         $('.header-area').toggleClass("position-sticky");
//         $('.main-about-page').toggleClass("position-sticky");
//       });








//             // happy-customar-slider
//        var swiper = new Swiper(".varticals", {
//        direction: "vertical",
//        loop: true,
//        speed: 2000,
      
//              autoplay: {
//          delay: 5000,
//        disableOnInteraction: false,
//      },
//      slidesPerView: 2,
//      spaceBetween: 154,
//      freeMode: true,
//     });
//        var swiper = new Swiper(".var-right", {
//        direction: "vertical",
//        loop: true,
//        speed: 2000,
      
//              autoplay: {
//          delay: 1000,
//        disableOnInteraction: false,
//      },
//      slidesPerView: 2,
//      spaceBetween: 154,
//      freeMode: true,
//     });

//     var swiper = new Swiper(".price-slider", {
//       slidesPerView: 1,
//             navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//       freeMode: true,
//       // autoplay: {
//       //   delay: 900,
//       // },
//       breakpoints: {
//         520: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//          autoplay: false,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//           autoplay: false,
//         },
//         992: {
//           slidesPerView: 4,
//           spaceBetween: 30,
//           autoplay:false,
       
//         },
//       },
//   });


//          // magnific-popup
//          $('.video-play-button').magnificPopup({
//         type: 'iframe',
      
//         iframe: {
//             markup: '<div class="mfp-iframe-scaler">'+
//                       '<div class="mfp-close"></div>'+
//                       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
//                     '</div>', 
          
//             patterns: {
//               youtube: {
//                 index: 'youtube.com/',
          
//                 id: 'v=',
          
//                 src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
//               },
//               vimeo: {
//                 index: 'vimeo.com/',
//                 id: '/',
//                 src: 'https://player.vimeo.com/video/%id%?autoplay=1'
//               },
//               gmaps: {
//                 index: '//maps.google.',
//                 src: '%id%&output=embed'
//               }

//             },
          
//             srcAction: 'iframe_src', 
//           }  
//     });



// });





//     // editor-area
//     function ddselect(){
//   var d = document.getElementById('ddselect');
//   var displaytext = d.options[d.selectedIndex].text;
//   document.getElementById('textvalue').value = displaytext;
// }
// // copyTextScript

// let copyText = document.querySelector('.copy-text');

// copyText.querySelector('.restor-btn').addEventListener('click',function(){
//   let input = copyText.querySelector('textarea.text');
//   input.select();
//   document.execCommand("copy");
//   copyText.classList.add('active');

//   window.getSelection.removeAllRanges(); 
//   // setTimeout(function(){
//   //   copyText.classList.remove('active');
//   // },2500);


// });

// // menu-set-input
//       function showme(count){
//         document.getElementById('textvalue').value=count;
//       }


//       $(document).ready(function(){
//         $(".integration-menu input").click(function(){
//            $('.integration-menu input').removeClass('actives');
//            $(this).addClass('actives');
//         });
//       setTimeout(function() {
//            $('.copy-text').removeClass('active');
//         }, 1000);


//       $('.blog-2-table-content ul li a').click(function(){
//         $('.blog-2-table-content ul li a.active-blog-2-table').removeClass('active-blog-2-table');
//         $(this).addClass('active-blog-2-table');
//       })

//       });


//       // pro-pricing-swiper-slider





