export class FriendsList {
    private name: string;
    private age: number;
    private email: string;
    private bestFriend: boolean;

    constructor(n: string, a: number, e: string, bff: boolean) {
        this.name = n;
        this.age = a;
        this.email = e;
        this.bestFriend = bff;
    }

    about(): any {
    return `name: ${this.name}, age: ${this.age}, email: ${this.email}, bff: ${this.bestFriend}`;
    }
}