const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const myTotal = myNums.reduce((acc, currval) => acc+currval,0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2
    },
    {
        itemName: "py course",
        price: 9
    },
    {
        itemName: "mobile dev course",
        price: 5
    },
    {
        itemName: "data science course",
        price: 1
    },
]

const CoursePrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(CoursePrice);