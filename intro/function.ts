function addTwo(num: number): number {
  //return num + 2;
  return 90;
}

function getUpper(value: string): string {
  return value.toUpperCase();
}

function singUp(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
): void {}

let loginUser = (email: string, name: string, isPaid: boolean = false) => {};

addTwo(90);
singUp("ayush", "ayush124@gmail.com", "1232323231", false);
loginUser("ayush1240945@gmail.com", "ayush", true);

function getValue(myVal: number): number {
  if (myVal > 5) {
    return 3.14;
  } else {
    return 2.71;
  }
}

const getHello = (isValid: boolean): boolean => {
  return false;
};

const heros = ["batman", "ben10", "legolas", "eragon"];

heros.map((hero: string, index: number):string => {
  return `hero is ${hero} and power is ${index}`;
});


function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function HandleError(errmsg : string):never{
    throw new Error(errmsg);
}

export {};
