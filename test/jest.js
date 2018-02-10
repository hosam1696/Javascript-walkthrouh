function add (a,b) {

return a + b

}



test('Adding two Numbers', ()=>{

	expect(add(1,4)).toBe(5)

});


test('zero', () => {   
const z = 0;
expect(z).not.toBeNull();
expect(z).toBeDefined();
expect(z).not.toBeUndefined();
expect(z).not.toBeTruthy();
expect(z).toBeFalsy();
});

test('the data is peanut butter', done => {

function fetchData(callback) {
	setTimeout(()=>{
		callback('hosam elnabawy')
	}, 100)
}

function callback(data) {
expect(data).toBe('hosam elnabawy');
done();
}
fetchData(callback); });
