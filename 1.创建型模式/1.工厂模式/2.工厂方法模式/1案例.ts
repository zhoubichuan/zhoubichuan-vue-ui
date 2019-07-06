class Plant2{
    name:string
    constructor(name:string){
        this.name=name
    }
    grow(){
        console.log('grow~~~')
    }
}
class Apple2 extends Plant2{
    taste:string
    constructor(name:string){
        super(name)
        this.taste='甜'
    }
}
class Orange2 extends Plant2{
    taste:string
    constructor(name:string){
        super(name)
        this.taste="酸"
    }
}
class AppleFactory{
    create(){
        return new Apple2('苹果')
    }
}
class OrangeFactory{
    create(){
        return new Orange2('橘子')
    }
}
const settings={
    'apple':AppleFactory,
    'orange':OrangeFactory
}
let apple2=new settings['apple']().create()
console.log(Apple2)
let orange2=new settings['orange']().create()
console.log(Orange2)