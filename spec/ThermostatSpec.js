describe("Thermostat", function() {

  var thermostat;
  var power;

  beforeEach(function() {
    thermostat = new Thermostat();
    power = new Power();
  });

  it("should start at 20 degrees and power saving is on", function() {
    expect(thermostat.temperature).toEqual(20);
    expect(power.mode).toBe(true);
  });

  it("we can increase temperature", function() {
    thermostat.increase_temp(power);
    expect(thermostat.temperature).toEqual(21);
  });

  it("we can decrease temperature", function() {
    thermostat.decrease_temp();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a minimum temperature 10 degrees", function() {
    for(t = thermostat.temperature; t >= 11; t--) {
      thermostat.decrease_temp();
    }
    expect(function(){thermostat.decrease_temp();}).toThrow
    ("Minimum temperature is 10 degrees");
  });

  it("when power saving is on, maxmium temperature is 25 degrees", function() {
    for(t = thermostat.temperature; t <= 24; t++) {
      thermostat.increase_temp(power);
    }
    expect(function(){thermostat.increase_temp(power);}).toThrow
    ("Maximum temperature is 25 degrees when power saving is switched on");
  });

  it("when power saving is off, maxmium temperature is 32 degrees", function() {
    power.switch_power();
    for(t = thermostat.temperature; t <= 31; t++) {
      thermostat.increase_temp(power);
    }
    expect(function(){thermostat.increase_temp(power);}).toThrow
    ("Maximum temperature is 32 degrees when power saving is switched off");
  });

  it("We can reset the temperature to 20 by hitting the reset button ", function(){
    thermostat.increase_temp(power);
    thermostat.reset_temp();
    expect(thermostat.temperature).toEqual(20);
  });

  it("The thermostat should colour green when temperature is less than 18 degrees", function(){
    for(t = thermostat.temperature; t >= 18; t--) {
      thermostat.decrease_temp();
    }
    expect(thermostat.colour).toEqual("#adebad");
  });


  it("The thermostat should colour red when temperature is more than 25 degrees", function(){
    for(t = thermostat.temperature; t < 25; t++) {
      thermostat.increase_temp(power);
    }
    expect(thermostat.colour).toEqual("#ff4d4d");
  });


  it("The thermostat should colour yellow when temperature is more than 17 degrees", function(){
    for(t = thermostat.temperature; t >= 18; t--) {
      thermostat.decrease_temp();
    }
    thermostat.increase_temp(power);
    expect(thermostat.colour).toEqual("#ffffb2");
  });

  it("The thermostat should colour yellow when temperature is less than 25 degrees", function(){
    power.switch_power();
    for(t = thermostat.temperature; t <= 24; t++) {
      thermostat.increase_temp(power);
    }
    thermostat.decrease_temp();
    expect(thermostat.colour).toEqual("#ffffb2");
  });

});
