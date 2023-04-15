const user: (string | number | boolean)[] = ["as", 1, true, false];
let user2: [string, number, boolean]; // order matter in tuple
user2 = ["as", 1232323123, true];

let rgb: [number, number, number];
rgb = [255, 124, 112];

type User = [number, string];

const newUser: User = [12, "lauda"];

newUser[0] = 90;
export {};
