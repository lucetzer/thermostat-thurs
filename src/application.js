  $( document ).ready(function(){
    $( "a" ).click(function( event ) {
      alert( "Come back soon" );
      event.preventDefault();
      $( this ).hide( "slow" );
    });
  });