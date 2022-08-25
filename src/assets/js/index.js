let btn = document.querySelector('.close-btn');
let adv = document.querySelector('.aside-adv');

//导航栏
let nav = document.querySelector('.gd');

window.addEventListener("scroll", scrollEvent);
function scrollEvent() {
    let width = window.innerWidth;
    //获取scroll的滚动值
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);
    //如果大于页面高度，则让a标签显示
    if (scrollTop > 680) {
        adv.style.display = 'block'
    } else {
        adv.style.display = 'none'
        console.log(1);
    }

    //手机端导航栏固定
    if (scrollTop >= 80 && width < 765) {
        nav.setAttribute("style", "position:fixed");
    } else {
        nav.setAttribute("style", "position:none");
    }
}

btn.onclick = function () {
    adv.style.display = 'none';  //消失
    window.removeEventListener("scroll", scrollEvent);
}
