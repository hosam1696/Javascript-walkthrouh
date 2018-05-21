import { endianness } from "os";

/**
 *  ARRAYS AND COLLECTIONS
 *  
 *  ArrayBuffer
 *  data view and endianness
 *  Map and WeakMap
 *  Set and WeakSet
 *  Subclasses
 * 
 */

 // Array Extensions

Array.of(1454);
let salaries = Array.from([15, 54, 7], function(iter) {
    return iter + this.adjust
}, { adjust: 50 });

salaries

salaries.fill('filled', 1)
salaries

salaries.copyWithin(2, 0);
salaries

let entries = [...salaries.entries()]
entries

// Array Buffers

/* bit 
Array Buffer is simply an array of 8 bits bytes

*/

let buffer = new ArrayBuffer(1024);

console.log(buffer.byteLength);