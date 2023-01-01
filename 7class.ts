//                      //readonly
export{}

class Greeter {
    readonly name: string = "world";
   
    constructor(name:string) {
      this.name=name;
    }
   
    err() {
      this.name = "not ok";
  //Cannot assign to 'name' because it is a read-only property.
    }
  }
  const obj = new Greeter("another value");
  console.log(obj.name)
  g.name = "also not ok";