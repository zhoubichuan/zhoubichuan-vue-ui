class Button{
    render(){

    }
}
class AppleButton{
    render(){
        console.log('苹果按钮')
    }
}
class WindowsButton{
    render(){
        console.log('windows按钮')
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
class WindowsIcon{
    render(){
        console.log('Windows图标')
    }
}
class AppleFactory3{
    createButton(){
        return new AppleButton()
    }
    createIcon(){
        return new AppleIcon()
    }
}
class WindowsFactory3{
    createButton(){
        return new WindowsButton()
    }
    createIcon(){
        return new WindowsIcon()
    }
}
const settings3={
    'apple':AppleFactory3,
    'windows':WindowsFactory3
}
let appleFactory3=new settings3['apple']()
appleFactory3.createButton().render()
appleFactory3.createIcon().render()

let windowsFactory3=new settings3['windows']()
windowsFactory3.createButton().render()
windowsFactory3.createIcon().render()