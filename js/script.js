$(document).ready(function(){
  
  $("button#dark").click(function(){
    $("body").removeClass();
     $("body").addClass("darkBg"); 
   });
 
  $("button#light").click(function(){
    $("body").removeClass();
     $("body").addClass("lightBg");
   });

   $(".para").click(function(){   
    $("#hide").toggle();
     $("#show").toggle();
   });
});
