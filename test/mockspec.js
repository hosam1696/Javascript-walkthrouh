/*
WHY WE MOCK?
    USE MOCKS AND STUBS TO ISOLATE .
    USE DYNAMIC MOCKING FRAMEOWORKS TO SAVE TIME
    AND SIMPLY MAINTENENCE
HOW WE USE MOCKS?
    use stubs to enable state
    output testing, use mocks to test
    implementation details
*/
const fetch = require('node-fetch');

describe('(1): TESTING the Unit Testing', () => {
    const name = 'Hosam Elnabawy';
    it('should be true...', () => {
        expect(name).toBeTruthy();
    })
});

/*describe('(2): Testing Async Calls', () => {
    const url = 'https://pokeapi.co/api/v2/pokedex/'
    const res = '';
    beforeEach((done) => {
        fetch(url + '1')
            .then(data => {
                res = data;
                done()
            }).catch(err => {
                res = null;
                done()
            })
    });

    it('response has value', done => {
        expect(res).toBeTruthy();
        done();
    })
})*/

function callMe(cb) {
    cb();
}

describe('(3): Testing spyon', () => {
    it('should be called', () => {
        let sp = jasmine.createSpy(callMe);
        expect(sp).toBeCalled();
    })
})