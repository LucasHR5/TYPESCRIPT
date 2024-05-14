/*class UserAccount {
    name: string;
    age: number;


constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
}
logDetails(): void {
    console.log(`the player ${this.name} is ${this.age} years old`)
 }
}

class CharAccount extends UserAccount{
    nickname: string;
    level: number;
    
    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel(){
        console.log("---------------GET-----------");
        return this.level;
    }
    set setLevel(level: number){
        this.level = level;
    }
    logDetails2(): void {
        console.log(`the player ${this.name} is ${this.age} years old, his nickname is ${this.nickname} and his level ${this.level} `)

    }
   
    }

    const user = new UserAccount("Lukas",23);
    console.log(user);
    console.log(user.age);
    user.logDetails();

    const newUser = new CharAccount("Fernando", 45, "Fernandinhokkk", 100);

    newUser.logDetails2();
    newUser.setLevel = 499;

    console.log(newUser.getLevel);*/











