<<<<<<< HEAD
$( document ).ready(function() {
  $( "a" ).click(function( event ) {
     alert( "Thanks for visiting!" );
     event.preventDefault();
     $(this).hide("slow");
    });
});
=======
$( document ).ready(function(){
  thermostat = new Thermostat();
  power = new Power();

  $("#temp").text(thermostat.temperature);

  $("#up").click(function( thermostat.increase_temp(power) ));



});



//   $( document ).ready(function(){
//     $( "a" ).click(function( event ) {
//       alert( "Come back soon" );
//       event.preventDefault();
//       $( this ).hide( "slow" );
//     });
//   });

// document.getElementById("output").innerHTML=name;

// function somefunction(){
//   var somevalue = "Data to be inserted";
//   $("#SecondDiv").text(somevalue);
// }
>>>>>>> 4bd35ab3b29a6436f888e0273d24b7aedcc7845c
