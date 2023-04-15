const User = {
  name: "ayush",
  email: "ayush123@gmail.com",
  active: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "ayush", isPaid: false, email: "h@hgmail.com" };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 905840 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUsers(user: User): User {
  return { name: "ayush", email: "ayush123@gmail.com", isActive: false };
}

createUsers({ name: "ayush", email: "ayush123@gmail.com", isActive: false });

type Node = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?:number;
};

function CreateNode(u: Node) {}

let myNode: Node = {
  _id: "3433f3f43ff34r34fef4r34",
  name: "ravi",
  email: "ayush123@gmail.com",
  isActive: false,

};

type CardNumber = {
    cardnumber : string;
}


type cardDate = {
    cardDate : string;
}


type cardDetails = CardNumber & cardDate & {
    cvv : number
}

myNode.email = "adfadfasdfsad";
// we cannot change this because it is using readyonly myNode._id = "dfsdfsdf"

export {};
