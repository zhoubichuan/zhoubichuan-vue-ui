class Button{
    render(){

    }
}
class AppleButton{
    render(){
        console.log('苹果按钮')
    }
}
class WindowButton{
    render(){
        console.log('window按钮')
    }
}
class Icon{
    render(){

    }
}
class AppleIcon{
    render(){
        console.log('苹果图标')
    }
}
class WindowIcon{
    render(){
        console.log('Window图标')
    }
}
class Factory{
    createButton(){

    }
    createIcon(){

    }
}
class AppleFactory{
    createButton(){
        return new AppleButton()
    }
    createIcon(){
        return new AppleIcon()
    }
}
class WindowsFactory{
    createButton(){
        return new WindowButton()
    }
    createIcon(){
        return new WindowIcon()
    }
}
const settings={
    'apple':AppleFactory,
    'windows':WindowsFactory
}/
let appleFactory=new settings['apple']();
appleFactory.createButton().render()
appleFactory.createIcon().render()

let windowsFactory=new settings['windows']()
windowsFactory.createButton().render()
windowsFactory.createIcon().render()