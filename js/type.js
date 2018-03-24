/*

	supported protocols:
		file, ftp, ftps , tftp, stft, http, https, telnet

*/



//function getType(type) {
	
//	return Object.prototype.toString.call(type).match(/\s+.[a-z]*/)[0].trim()

//}


//@ts-check


const x = 2656



// ASI => Automatic semicolon Insertion

const Typeof = ds => Object.prototype.toString.call(ds).match(/\b\w*/g)[2].toLowerCase()
module.exports = {
	type: Typeof
}
console.log(Typeof('hosam'))
console.log(Typeof([1,1]))
console.log(Typeof({x:'Hosam'}))
console.log(Typeof(new Date(Date.now())))
console.log(Typeof(new Error('error')))

console.log(typeof new Error())



