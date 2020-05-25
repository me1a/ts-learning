let bool: boolean = false;
let num: number = 1;
num = 0b1111;
num = 0o132;
num = 0x23;
let str: string = "ab";
let arr: number[] = [2, 3, 4];
console.log(arr);
let arr1: Array<number> = [2, 3];
let arr2: (string | number)[] = [1, "3"];
let tuple: [string, number, boolean] = ["", 0, false];
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER,
}
let any: any;
any = 1;
any = false;
any = [];

let v: void;
v = undefined;

let u: undefined = undefined;
let n: null = null;

let errorFunc = (message: string): never => {
  throw Error();
};

let obj: object = {
  name: "me",
};

console.log(Roles);
