describe('Airport', function() {

    var airport;
    var plane;
    var weather

    beforeEach(function() {
        airport = new Airport();
        // plane = jasmine.createSpy('Plane', ['land'])
        plane = new Plane();
        weather = new weather(); 
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

    describe('change hanger capacity', function(){
        it('hanger capacity changed by airport', function(){
            var heathrow = new Airport(7);
            expect(heathrow.land(plane)).toEqual('Landed')
        });
    });


    describe('Check is weather is stormy', function(){
        it('plane cannot take off if weather is stormy', function(){
            expect(function(){plane.take_off(plane);})..toThrow(new Error('Weather is stormy'));
        });
    });

});
