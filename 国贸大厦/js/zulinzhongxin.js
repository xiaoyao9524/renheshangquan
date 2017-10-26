(function() {
    var main = document.getElementsByClassName("main")[0];
    var list1 = main.getElementsByClassName("img-list1")[0];
    var oUl = list1.getElementsByClassName('clearFix')[0];
    var arr = [
        {
            url: "#",
            img: "./image/zulinzhongxin1.jpg",
            text: "时尚商圈环绕"
        },
        {
            url: "#",
            img: "./image/zulinzhongxin2.jpg",
            text: "高档办公首选"
        },
        {
            url: "#",
            img: "./image/zulinzhongxin3.jpg",
            text: "完美物业管理"
        }
    ]
    var str = '';
    for(var i = 0; i < arr.length; i++) {
        str += `
        <li>
            <a href="${arr[i].url}">
                <img src="${arr[i].img}" alt="">
                <span class="bg"></span>
                <span>${arr[i].text}</span>
            </a>
        </li>
        `;
    }
    oUl.innerHTML = str;
})()