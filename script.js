$(function(){
    $('.menu-icon').click(function() {
    if($(".menu").hasClass('open')) { 
      $(".menu").removeClass('open');
      $(".menu").slideUp();
    } else {
      $(".menu").addClass('open'); 
      $(".menu").slideDown();
    }
  });
});
$(function(){
  $(".img-seminar1 img:not(:first-child)").hide();
  setInterval(function() {
    $(".img-seminar1 img:first-child").fadeOut("slow").next("img").fadeIn("slow").end().appendTo(".img-seminar1");
  },5000);
});
