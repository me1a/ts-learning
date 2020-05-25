const s = Symbol();

const s2 = Symbol("s2");
const s3 = Symbol(123);

console.log(s2);

let prop = "name";
const info = {
  [s2]: "me",
};

// 以下无法获取 symbol 属性名
// for in
// Object.keys(info)
//Object.getOwnPropertyNames(info)
//JSON.stringify(info)

// 以下可以
// Object.getOwnPropertySymbols(info)
// Reflect.ownKeys(info)

const s4 = Symbol.for("me");
const s5 = Symbol.for("me");

// console.log(s4 === s5); // true
Symbol.keyFor(s5); // me ， 可以返回用symbol.for 生成 symbol 的string

const obj1 = {
  [Symbol.hasInstance](obj: object) {
    // obj 表示 instanceof的前置变量
    console.log(obj);
    return true;
  },
};
console.log({ a: "a" } instanceof (obj1 as any));

let arr13 = [1, 3];
console.log(([] as number[]).concat(arr13, [3, 4])); //[1,3,3,4]
// arr13[Symbol.isConcatSpreadable] = false;
console.log(([] as number[]).concat(arr13, [3, 4])); // [[1,3], 3,4]

Symbol.species;

const obj3 = {
  [Symbol.match](string: string | any[]) {
    console.log(string.length);
  },
};
Symbol.replace;
Symbol.split;
Symbol.iterator;
Symbol.toPrimitive;
Symbol.toStringTag;
Symbol.unscopables;
