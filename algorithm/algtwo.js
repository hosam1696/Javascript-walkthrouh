console.log('Algorithm file number two');   
const len = ds => ds.length;
// Bubble sorting
let nums = [10,5,3,8,2,6,4,7,9,1];

//let perNow = performance.now();

for (let x=0;x<nums.length;x++) {
  for(let y = x+1;y<nums.length;y++) {
    if(nums[x] > nums[y]) {
      let temp = nums[x];
      nums[x] = nums[y];
      nums[y] = temp;
    }
  }
}

nums


// insertion sort

/*
    step more complex but a bit more useful than bubbble sort and is occasionally useful

*/
let nums1 = [10,5,3,8,2,6,4,7,9,1];
for (let x=1;x<nums1.length;x++) {
    for(let y = 0;y<x;y++) {
      if(nums1[x] < nums1[y]) {
          nums1.splice(x,1);
          
          nums1.splice(y,0,nums1[y])
      }
    }
  }


  nums1


  // Quick sort


  let num2 = [10,5,3,8,2,6,4,7,9,1];

  function quickSort(nums) {
    if(nums.length<=0) return nums;
    let pivet   = nums[len(nums) - 1];
   
    const right = [];
    const left  = []
    for (let i=0;i<len(nums)-1;i++) {
        if(nums[i] < pivet)
            left.push(nums[i])
        else
            right.push(nums[i])
    }

    return [...quickSort(left), pivet, ...quickSort(right)]
  }

let qSort =   quickSort(num2);

qSort


class ArrayList{

    constructor() {
        this.length = 0;
        this._data = {};
    }
    push(value) {
        this._data[this.length] = value;
        this.length++;
        return this._data;
    }
    pop() {
        delete this._data[this.length-1];
        this.length--;
        return this._data[this.length-1];
    }

    get(index) {
        return this._data[index];
    }

    get data() {
        return this._data
    }

    shift() {

    }
    split() {

    }

}