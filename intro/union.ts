let score: number | string = 33;
score = 55;

type User = {
  name: string;
  id: number;
};

type Admin = {
  Username: string;
  id: number;
};

let ayush: User | Admin = {
  name: "ayush",
  id: 334,
};

ayush = { Username: "hc", id: 34234 };

function getDbId(id: number | string): void {
  if (typeof id == "string") {
    id.toLowerCase();
  } else {
    id += 23;
  }
}

getDbId(3);
getDbId("dfs");

// arrays
const data: number[] | string[] = [1, 2, 3, 4, 5, 6, 90];
const data2: string[] | number[] = ["1", "2"];
const data3 : (string | number | boolean)[] = ["1" , "2" , 3 , true]


let pi:3.14 = 3.14;


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "window";

export {};
