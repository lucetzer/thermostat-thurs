describe('Thermostat', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function() {
    expect('#temp').toContainText('20');
  });

  // it('temperature text is yellow when 20 degrees', function() {
  //   var $temperature = $('#temp');
  //   expect($temperature.text()).toHaveCss({color: "yellow"})
  // })

  it("increases temperature by 1 degree", function() {
    var $temperature = $('#temp');
    var $upLink = $('#up');

    $upLink.click();
    // location.href = $upLink.attr('href');
    expect($temperature.text()).toContainText("21");
  });

});


// #testing must be served up
