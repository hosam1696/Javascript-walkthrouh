let order1 = {
    items: [
        {name: 'food', price: 6, quantity: 2},
        {name: 'cage [small]', price: 60, quantity: 8},
        {name: 'shipping', price: 20,quantity: 4, shipping: true}
    ]
};

let orderTotal = order=> {
    const totalItems = order.items
        .filter(o=>!o.shipping)  
        .reduce((acc, p)=> acc + p.price*p.quantity, 0);
    
    const shippingItem = order.items.find(i=>Boolean(i.shipping));

    const shipping = (totalItems>1000)?0:shippingItem.price;

    return totalItems + shipping
};

let total = orderTotal(order1);

total

const x = {
    name: 'hosam'
};

let arr = Array.from(x.name).reduce((a,c)=>{
    let char = c.toLowerCase();
    console.log(char.charCodeAt(0))
    if (char.charCodeAt(0)>110) {
        a++
    }
    return `${a}`;
},0);

arr

console.log((97+13))




let {readFile} = require('fs');


readFile(__dirname+'/test1.js',{encoding:'utf8'},(err,content)=> {
    console.log(content);
});

module.exports = orderTotal;
