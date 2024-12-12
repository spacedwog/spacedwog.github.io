$(document).ready(function(){
    $("a").click(function(){
        alert("Link clicado!" + $(this).attr("href"));
      //$(this).hide();
    });
  });