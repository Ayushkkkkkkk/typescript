type UserType = {
  email: string;
  userId: number;
};

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial : () => string
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
    githubToken : string;
}

interface Admin extends User{
    role : "admin" | "ta" | "lerner"
}

const ayush: Admin = {
  dbId: 12,
  email: "ayush123@gmail.com",
  userId: 2211,
  role : "admin",
  startTrial: () => {
    return "trailstarted";
  },
  getCoupon: (name = "ayush", val = 90) => {
    return 10;
  },
  githubToken : "904850jr0terj034t03",
 
};
ayush.email = "ayush123@gmail.com";
export {};
