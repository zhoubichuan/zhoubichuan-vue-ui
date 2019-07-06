class jQuery{
    length:number
    constructor(selector:string){
        let elements=(<any>Array).from(document.querySelectorAll(selector));
        let length=elements?elements.length:0;
        for(let i=0;i<length;i++){
            this[i]=elements[i]
        }
        this.length=length
    }
    html(){

    }
}
let $=function(selector:string){
    return new jQuery(selector)
}