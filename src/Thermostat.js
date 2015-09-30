function Thermostat() {
  this.temperature = 20;
  this.colour = "yellow";
}

Thermostat.prototype.increase_temp = function(power) {

  if(this.temperature > 24 && power.mode) {
    throw "Maximum temperature is 25 degrees when power saving is switched on";
  } else if (this.temperature > 31 && !power.mode) {
    throw "Maximum temperature is 32 degrees when power saving is switched off";
  }
  this.temperature = this.temperature + 1;
  // return this.temperature;
  if(this.temperature >= 25) {
    this.colour = "red";
  } else if (this.temperature >= 18) {
    this.colour = "yellow";
  }
};

Thermostat.prototype.decrease_temp = function() {
  if(this.temperature < 11) {
    throw "Minimum temperature is 10 degrees";
  }
     this.temperature = this.temperature - 1;
  // return this.temperature;
  if(this.temperature < 18) {
     this.colour = "green";
  } else if (this.temperature < 25) {
     this.colour = "yellow";
  // return this.colour;
  }
};

Thermostat.prototype.reset_temp = function() {
     this.temperature = 20;
};
