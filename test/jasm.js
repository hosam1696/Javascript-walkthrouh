describe('should passed', ()=>{

	it('is exist', ()=>{
		let name = 'hosam elnabawy';

		expect(name.length).toBe(14);
	});

	it('have the right to vote', ()=>{
		let hosam = {name: 'hosam', age: 21, right: true}

		expect(hosam.right).toBe(true)
	});

	it('empty strings shoud be falsy', ()=>{
	
		expect('dsfsdf').toBeFalsy()
	})
});
