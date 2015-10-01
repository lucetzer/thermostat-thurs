$(document).ready(function() {
  thermostat = new Thermostat();
  power = new Power();


  $("#temp").text(thermostat.temperature);
  $('#central').css('background-color', thermostat.colour);

  $("#up").click(function(){
    $("#temp").text(thermostat.increase_temp(power));
    thermostat._change_display();
    $('#central').css('background-color', thermostat.colour);
  });

  $("#down").click(function(){
    $("#temp").text(thermostat.decrease_temp());
    thermostat._change_display();
    $('#central').css('background-color', thermostat.colour);
  });

  $('#power').change(function() {
    power.switch_power()
    if(thermostat.temperature > 25) {
      thermostat.temperature = 25;
      $("#temp").text(thermostat.temperature);
      $('#central').css('background-color', thermostat.colour);
    };
  });

  $("#reset").click(function(){
    $("#temp").text(thermostat.reset_temp());
    thermostat._change_display();
    $('#central').css('background-color', thermostat.colour);
  });
});
