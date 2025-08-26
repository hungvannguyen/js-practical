const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tripled = num.map(n => n * 3);

console.log(tripled);

const mapped = num.map(n => n);
console.log(mapped);

const keys = num.map((_, i) => i);
console.log(keys);

const values = num.map(n => n);
console.log(values);

const entries = num.map((n, i) => [i, n]);
console.log(entries);

const assigned = Object.assign({}, ...entries.map(([key, value]) => ({ [key]: value })));
console.log(assigned);

const frozen = Object.freeze(assigned);
console.log(Object.isFrozen(frozen));

const sealed = Object.seal(assigned);
console.log(Object.isSealed(sealed));