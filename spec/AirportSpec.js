describe('Airport', function() {

    var airport;

    beforeEach(function() {
        airport = new Airport();
    });

    describe('Plane can land at airport', function() {
        it('plane can land', function() {
            expect(airport.land()).toEqual('landed');
        });
    });

    describe('Plane can take off from airport', function() {
        it('plane can take off', function() {
            expect(airport.take_off()).toEqual('airborne');
        });
    });

});
