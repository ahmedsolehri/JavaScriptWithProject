const myArray = [1,2,3,4,4,5]
const myHer = ["Hello", "suparman", "spideman"] 


const myArray2 = new Array(12,3,3,5,7)
// console.log(myArray2[3]);

// myArray.push(100)
// console.log(myArray);

// myArray.pop()
// myArray.unshift(101)
// myArray.shift()
// console.log(myArray);
// myArray.shift()
// // console.log(myArray);


// console.log(myArray.includes(1000));


// const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);


// slice, splice

console.log("A ", myArray);

const mynn1 = myArray.splice(1, 3)
console.log(mynn1);

console.log("B ", myArray);


const mynn2 = myArray.slice(1, 3)
console.log(mynn2);

console.log("C ", myArray);

//splice mein jo part jo splice kiya hai wo he original array sy cut ho jata hai


// array shallow copy bnata hai
// shallow mein jo ap change karein gein wo change ho jaye gaoriginal array mein
// deep copy mein changes nahi hoti orignal array mein




