$(document).ready(function(){
  $flag=0;
  $("#icon").click(function(){
    if($flag == 0){
      $("#line").css({transform:'rotate(-90deg)'});
      $("#open").css({opacity:'0'});
      $("#close").css({left:'0px',opacity:'1'});
      $("#main").animate({left:'0%'});
      $("#mnu").css({opacity:'1'});
      $flag=1;
    }
    else{
        $("#line").css({transform:'rotate(0deg)'});
        $("#open").css({opacity:'1'});
        $("#close").css({left:'70px',opacity:'0'});
        $("#main").animate({left:'-70%'});
        $("#mnu").css({opacity:'0'});
        $flag=0;
    }
  });
  $("#mnu ul li").click(function(){
    $("#mnu ul li").removeClass('active');
    $(this).addClass('active');
    $selectedMenu = $(this).text();
    $("#bigFont").text($selectedMenu);
  });
});
