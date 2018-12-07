class Login {
  constructor() {
    this.element = document.createElement("div");
    this.element.innerHTML = `用户名<input type="text"/>
    密码<input type="password">
            <button>登录</button>
            `;
    this.element.style.cssText =
      "width:100px;height:100px;position:absolute;left:50%;top:50%;display:block;";
    document.body.appendChild(this.element);
  }
  show() {
    this.element.style.display = "block";
  }
  hide() {
    this.element.style.display = "none";
  }
}
Login.getInstance = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new Login();
    }
    return instance;
  };
})();
document.getElementById("showBtn").addEventListener("click", function(event) {
  Login.getInstance().show();
});
document.getElementById("hideBtn").addEventListener("click", function(event) {
  Login.getInstance().hide();
});
