$(document).ready(function() {
    
    $("#first2").click(function() {
        $(".six").slideDown(); 
    });
    
    $("#close").click(function() {
        $(".six").slideUp(); 
    });
    
     $("#first2").click(function() {
        $(".six2").slideDown(); 
    });
    
    $("#close").click(function() {
        $(".six2").slideUp(); 
    });
    
     $("#first21").click(function() {
        $(".six").slideDown(); 
    });
    
    $("#close3").click(function() {
        $(".six").slideUp(); 
    });
    

    $("#local").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });
    
    $("#sport").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });

       $("#business").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });
    
      $("#politics").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });
    
     $("#world").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });

     $("#health").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });

      $("#localinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });
    
      $("#sportinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });
    
      $("#businessinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });

      $("#politicsinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });

   $("#worldinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });

     $("#healthinfo").hover(function(){
        $(this).css("color", "gray");
        }, function(){
        $(this).css("color", "black");
    });

       $("#featuretext").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });

      $("#featuresub").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
    $("#featuretext1").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
     $("#featuresub1").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
    $("#featuretext2").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
     $("#featuresub2").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
     $("#first2").hover(function(){
        $(this).css("color", "#D5492B");
        }, function(){
        $(this).css("color", "#1EA8AA");
    });
    
     $("#first21").hover(function(){
        $(this).css("color", "#A7A9AC");
        }, function(){
        $(this).css("color", "white");
    });
    
     $('#arrow').click(function() {

     $('body').animate({scrollTop: 0}, 900);

    });
    
    
    
});


$(document).scroll(function() {

    var y = $(document).scrollTop();
    $("move").html(y);

    if (y > 650) {
        $("#arrow").fadeIn();
    }

    else {
        $("#arrow").fadeOut();
    }
    
});
