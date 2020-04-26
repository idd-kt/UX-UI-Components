window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  
  if (scrolled < 24) {
    $('a').removeClass("boxy")
    document.getElementById(`box1`).classList.add("boxy")}
    else if (scrolled<45) {
      $('a').removeClass("boxy")
      document.getElementById(`box2`).classList.add("boxy")
    }
    else if (scrolled<64) {
      $('a').removeClass("boxy")
      document.getElementById(`box3`).classList.add("boxy")
    }
    else if (scrolled<84) {
      $('a').removeClass("boxy")
      document.getElementById(`box4`).classList.add("boxy")
    }
    else if (scrolled<100) {
      $('a').removeClass("boxy")
      document.getElementById(`box5`).classList.add("boxy")
    }
    else{
      window.alert('Congratulation, you finished all programs!')
    }
  }

$('a').click(function () { 
 
  if($('a').hasClass("box")){
    $('a').removeClass("box");
  };
  console.log($(this).attr('href'))
  if($(this).attr('href') !== "#home"){
    $(this).addClass("box");
    
  }
   
});


$(`#article.img`).removeClass(`hover`)