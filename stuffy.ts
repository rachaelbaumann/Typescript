export class stuffy {
    // private access modifier makes them accessible only inside this class
    private name: string;
    private type: string;
    private color: string;

    constructor(n: string, t: string, c: string) {
        this.name = n;
        this.type = t;
        this.color = c;
    }

    // mamke var public
    get nombre(): string {
        return this.name;
    }

    about(): string { //class, don't need function keyword
        return `name: ${this.name}, type: ${this.type}, color: ${this.color}`;
    }
}



