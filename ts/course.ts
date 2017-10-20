
export class Client {
	prop= 'a class property';

     Prop(prop:string):void {
		this.prop = prop;
	}

}

export abstract class Server {
	title: string = 'server class';
    
}

class Initiate extends Server {
	initProp:string = 'Immediatelly Inital Value';
	constructor() {
		super()
	}

	get tip():string {
		return 'abstract keywork or access modifier prevent the class to be initiated yet if is in inherited class'
	}
}


let ser = new Initiate()




