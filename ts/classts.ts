interface IX {
    prop: string,
    s: number
}

abstract  class CX  {
    public name: string;
    age: number;
    love: string;
    public happy: boolean = false;

    getHappy() {
        return this.happy;
    }

    getLove(love = 'Menna Allah') {
        return `Life Love is ${love}`;
    }
}


class Ctest extends  CX {



    prop = "hosam";
    s = 1996;

    constructor() {
        super()
    }

    log() {
        console.log(super.getLove())
    }

}

let cTest = new Ctest();

cTest.log();
