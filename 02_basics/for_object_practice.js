const a = 'foo';
const b = 42;
const c = {d: 33};
const object2 = { a: a, b: b, c: c };
console.log(object2);

// Duplicate property names

// When using the same name for your properties, the second property will overwrite the first
// const a = { x: 1, x: 2 };
// console.log(a); // {x: 2}
