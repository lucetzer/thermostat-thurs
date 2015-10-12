describe('Thermostat', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function() {
    expect('#temp').toContainText('20');
  });

  it("increases temperature by 1 degree", function() {
    var $temperature = $('#temp');
    var $upLink = $('#up');

    $upLink.click();
    expect($temperature.text()).toEqual('21');
  });

  it("decreases temperature by 1 degree", function() {
    var $temperature = $('#temp');
    var $downLink = $('#down');

    $downLink.click();
    expect($temperature.text()).toEqual('19');
  });

  it("changes to red when temperature reaches 25 degrees", function() {
    var $upLink = $('#up');
    $upLink.click();
    $upLink.click();
    $upLink.click();
    $upLink.click();
    $upLink.click();
    // console.log($('#central').attr('style'));
    expect($('#central')).toHaveCss( {'background-color': 'rgb(255, 77, 77)'} );
  });

  it("changes to green when temperature is reduced to 18 degrees", function() {
    var $downLink = $('#down');
    $downLink.click();
    $downLink.click();
    $downLink.click();
    // console.log($('#central').attr('style'));
    expect($('#central')).toHaveCss( {'background-color': 'rgb(173, 235, 173)'} );
  });


});


// #testing must be served up
