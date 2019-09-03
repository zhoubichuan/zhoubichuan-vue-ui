class Window1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  static getInstance(name: string) {
    var ins: any = this.instance || null;
    if (!ins) {
      ins = new Window1(name);
    }
    return this.getInstance;
  }
}
var w1 = Window1.getInstance("");
var w2 = Window1.getInstance("");
console.log(w1 === w2);
