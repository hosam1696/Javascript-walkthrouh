/*

	supported protocols:
		file, ftp, ftps , tftp, stft, http, https, telnet

*/

console.log('testing');

function type(type) {
	
	return Object.prototype.toString.call(type).match(/\s+.[a-z]*/)[0].trim()
	
}

console.log(type('hosam'));


console.log(type([1,1]));
console.log(type({x:'Hosam'}))
console.log(type(new Date(Date.now())));

console.log(type(new Error('error')))
