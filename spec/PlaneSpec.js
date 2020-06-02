describe('Plane', function() {

  var plane;

  beforeEach(function() {
      plane = new Plane();
  });

  describe('Plane can land at airport', function() {
      it('plane can land', function() {
          expect(plane.land()).toEqual('Landed');
      });
  });

  describe('Plane can take off', function() {
    it('plane is airborne', function() {
        expect(plane.airborne()).toEqual('Airborne');
    });
});
});