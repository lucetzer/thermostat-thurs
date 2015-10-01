$(document).ready(function() {
  thermostat = new Thermostat();
  power = new Power();


  $("#temp").text(thermostat.temperature);
  $('#temp').css('color', thermostat.colour);

  $("#up").click(function(){
    $("#temp").text(thermostat.increase_temp(power));
    thermostat._change_display();
    $('#temp').css('color', thermostat.colour);
  });

  $("#down").click(function(){
    $("#temp").text(thermostat.decrease_temp());
    thermostat._change_display();
    $('#temp').css('color', thermostat.colour);
  });

  $('#power_save').change(function() {
    power.switch_power()
    if(thermostat.temperature > 25) {
      thermostat.temperature = 25;
      $("#temp").text(thermostat.temperature);
      $('#temp').css('color', thermostat.colour);
    };
  });

  $("#reset").click(function(){
    $("#temp").text(thermostat.reset_temp());
    $('#temp').css('color', thermostat.colour);
  });
});
