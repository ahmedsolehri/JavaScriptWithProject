const programming = ["js", "go", "python"]

// programming.forEach( function (val) {
//     console.log(val);
// })

// programming.forEach( (val) => {
//     console.log(val);
// })

let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]
  

cars.forEach( (item) => {
    console.log(item.capacity);
})
