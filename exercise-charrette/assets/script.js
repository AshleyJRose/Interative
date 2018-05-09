    $(document).ready(function(){
        
        $('#button-3').click(function() {
            $(this).animate({
                opacity: 0.4,
                fontSize: '24px',
                borderWidth: '10px'
            }, 1000 );
        });

        $('#button-4').hover(function() { 
            $("#button-5").toggleClass("change-yellow");
        });


        $( "#button-6" ).click(function() {
            $( "#circle" ).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 1000, function() {
         });
        });

         $( "#button-7" ).click(function() {
            $(this).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 1000, function() {
         });

        });

    //code from noahbaker

        $("#button-8").mouseenter(function(){
        alert("Stop touching Box 8!");
        });


    //code from internet

        $( "#button-9" ).click(function() {
            $(this).animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
          }, 1500 );

    });

     $( "#button-10" ).click(function() {
            $(this).animate({
            width: "20%",
          }, 1500 );
    
    });

    $( "#button-11" ).click(function() {
            $(this).animate({
            marginTop: "0.6in",
          }, 1500 );
    
    });

     $("#button-13").click(function(){
        $("#square2").fadeToggle();
    });

     $("#button-14").click(function(){
        $("#square3").fadeOut(3000);
    });

     $("#button-15").click(function(){
        $(this).fadeOut(3000);
    });

     $("#button-16").click(function(){
        $("#panel").slideDown("fast");
    });

      $("#button-17").click(function(){
        $("#panel2").slideToggle();
    });

    $("#button-18").click(function(){
        $("#leaving").hide();
    });

    $("#button-19").click(function(){
        $("#square4").animate({
            left: "+=500",
          }, 300, function() {
         });
        });

    $("#button-20").click(function(){
       $("#text3").animate({letterSpacing: "+=10px"});
    });


    $("#button-21").click(function(){
       $("#text4").animate({wordSpacing: "+=15px"});
    });

    $("#button-22").click(function(){
        $("#square5").animate({padding: "+=100px"});
    });

     $("#button-24").click(function(){
        $("#stripe2").animate({
            left: "+=500",
          }, 300, function() {
         });
        });



});


