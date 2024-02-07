// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link')
//
// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });
//
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
        $('.navbar').removeClass("sticky");
    }
  });
  $flag=0;
    $('.menu-btn').click(function(){
      if($flag == 0){
        $("#line").css({transform:'rotate(-90deg)'});
        $("#open").css({opacity:'0'});
        $("#close").css({left:'0px',opacity:'1'});
        $('.navbar .menu').toggleClass("active");
        // $('.navbar .menu').animate({left:'0%'});
        // $("#mnu").css({opacity:'1'});
        $flag=1;
      }
      else{
          $("#line").css({transform:'rotate(0deg)'});
          $("#open").css({opacity:'1'});
          $("#close").css({left:'70px',opacity:'0'});
          $('.navbar .menu').toggleClass("active");
          // $('.navbar .menu').animate({left:'-70%'});
          // $("#mnu").css({opacity:'0'});
          $flag=0;
      }
    });
    $('.navbar .menu').click(function(){
        $('.navbar .menu').removeClass('active');
        $(this).addClass('active');
        $selectedMenu = $(this).text();
        $("#bigFont").text($selectedMenu);
      });
  // toggle menu/navbar script
  // $('.menu-btn').click(function(){
  //   $('.navbar .menu').toggleClass("active");
  //   $('.menu-btn i').toggleClass("active");
  // });
});
// $(document).ready(function(){
//   $flag=0;
//   $("#icon").click(function(){
//     if($flag == 0){
//       $("#line").css({transform:'rotate(-90deg)'});
//       $("#open").css({opacity:'0'});
//       $("#close").css({left:'0px',opacity:'1'});
//       $("#main").animate({left:'0%'});
//       $("#mnu").css({opacity:'1'});
//       $flag=1;
//     }
//     else{
//         $("#line").css({transform:'rotate(0deg)'});
//         $("#open").css({opacity:'1'});
//         $("#close").css({left:'70px',opacity:'0'});
//         $("#main").animate({left:'-70%'});
//         $("#mnu").css({opacity:'0'});
//         $flag=0;
//     }
//   });
//   $("#mnu ul li").click(function(){
//     $("#mnu ul li").removeClass('active');
//     $(this).addClass('active');
//     $selectedMenu = $(this).text();
//     $("#bigFont").text($selectedMenu);
//   });
// });
