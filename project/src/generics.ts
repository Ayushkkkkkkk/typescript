const score: Array<number> = [];
const names: Array<string> = [];

function identityone(val: boolean | number): boolean | number | string {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("true");

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "lauda", type: 44 });

function getSearchProduct<T>(products: T[]): T {
  // do some database op
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProduts = <T>(products: T[]): T => {
  const myindex = 1;
  return products[0 + myindex];
};

interface dataBase {
  connection: string;
  userName: string;
  password: string;
}

function anotherOne<T, U extends dataBase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherOne(3, {
  connection: "localhost",
  userName: "ayush",
  password: "lamda",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
}

