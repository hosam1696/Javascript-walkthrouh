//@ts-check
const chalk = require('chalk');

const five = require('johnny-five');

const board = new five.Board();

board.on('connect', ()=>{
    console.log('you are connected successfully to the board');
});


board.on('ready', ()=>{

    console.log('board connected');
    
    let led = new five.Led(13);
    let button = new five.Button(17);

    led.blink(1000);

    button.on('press', ()=>{
        console.log('hey there the button was clicked !');
    });

    button.on('hold',()=>{
        let dateNow = Date.now();
        console.log('you are holding the button!');
        button.on('release', ()=>{
            console.log(chalk.red('the holding time estimated')+': '+ chalk.cyan(Date.now() - dateNow)+ ' ms');
        });
    })

});

