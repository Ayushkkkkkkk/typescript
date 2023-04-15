class User {
  private _courceCount: number = 1;

  private name: string;
  public age: number;
  public readonly city: string = "kathmandu";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const ayush = new User("ayush123@gmail.com", 90);

class User1 {
  protected _courceCount: number = 1;
  readonly city: string = "kathmandu";
  constructor(public email: string, public name: string, private id: number) {}

  private deleteToken() {
    console.log("token deleted");
  }
  get getAppleEmail(): string {
    return `${this.email}`;
  }

  get courseCountPrint(): number {
    return this._courceCount;
  }

  set courseCountSet(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("course is less");
    }
    this._courceCount = courseNum;
  }
}

class Subuser extends User1 {
    isFamily : boolean = true;
    changeCourseCount(){
        this._courceCount = 4
    }
}
