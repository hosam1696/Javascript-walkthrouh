const total = require('./test1');
let order1 = {
    items: [
        {name: 'food', price: 6, quantity: 2},
        {name: 'cage [small]', price: 60, quantity: 8},
        {name: 'shipping', price: 20,quantity: 4, shipping: true}
    ]
};


it('works', ()=>{
    expect(total(order1)).toBe(60)
});