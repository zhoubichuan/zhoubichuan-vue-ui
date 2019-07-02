class Vnode{
    tag:string
    attrs:string
    children:string
    constructor(tag:string,attrs:string,children:string){
        this.tag=tag;
        this.attrs=attrs;
        this.children=children;
    }
}
let React:any={createElement:''}
React.createElement=function(tag:string,attrs:string,children:string):object{
    return new Vnode(tag,attrs,children)
}