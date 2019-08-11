window.addEventListener("load" , function(){
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
   
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".nav-design");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

function hoverContent(){
  $('#sp1').removeClass("hidden");
}

function hoverContentOut(){
  $('#sp1').addClass("hidden");
}

function hoverContent2(){
  $('#sp2').removeClass("hidden");
}

function hoverContentOut2(){
  $('#sp2').addClass("hidden");
}

function hoverContent3(){
  $('#sp3').removeClass("hidden");
}

function hoverContentOut3(){
  $('#sp3').addClass("hidden");
}

function hoverContent4(){
  $('#sp4').removeClass("hidden");
}

function hoverContentOut4(){
  $('#sp4').addClass("hidden");
}

function hoverContent5(){
  $('#etros-id').addClass("etros-move-back");
}

function hoverContentOut5(){
  $('#etros-id').removeClass("etros-move-back");
}

function backHover(){
  $('#back').addClass("bg-img2");
  $('#back div').addClass("hover-move");
}

function aftHover(){
  $('#back').removeClass("bg-img2");
  $('#back div').removeClass("hover-move");
}