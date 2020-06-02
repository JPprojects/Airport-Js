describe('Airport', function() {

    var airport;
    var plane;

    beforeEach(function() {
        airport = new Airport();
        // plane = jasmine.createSpy('Plane', ['land'])
        plane = new Plane();

    });

    describe('Plane can land at airport', function() {
        it('plane can land', function() {
            expect(airport.land(plane)).toEqual('Landed');
        });
    });

    describe('Plane can take off from airport', function() {
        it('plane can take off', function() {
            expect(airport.take_off(plane)).toEqual('Airborne');
        });
    });

    describe('check the hanger capcity', function(){
        it('plane can not land if hanger is full', function(){
            airport.land(plane);
            airport.land(plane);
            airport.land(plane);
            expect(function(){ airport.land(plane); }).toThrow(new Error('Hanger is full'));
        });
    });
});
