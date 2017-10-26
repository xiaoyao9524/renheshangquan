(function() {
    var main = document.getElementsByClassName("main")[0];
    var list1 = main.getElementsByClassName("img-list1")[0];
    var oUl = list1.getElementsByClassName('clearFix')[0];
    var arr = [
        {
            url: "#",
            img: "./image/m1.jpg",
            text: "外景"
        },
        {
            url: "#",
            img: "./image/m2.jpg",
            text: "外景"
        },
        {
            url: "#",
            img: "./image/m3.jpg",
            text: "外景"
        },
        {
            url: "#",
            img: "./image/m4.jpg",
            text: "展厅"
        },
        {
            url: "#",
            img: "./image/m5.jpg",
            text: "大堂"
        },
        {
            url: "#",
            img: "./image/m6.jpg",
            text: "走廊"
        },
        {
            url: "#",
            img: "./image/m7.jpg",
            text: "接待区"
        },
        {
            url: "#",
            img: "./image/m8.jpg",
            text: "办公区"
        },
        {
            url: "#",
            img: "./image/m9.jpg",
            text: "会议室"
        },
        {
            url: "#",
            img: "./image/m10.jpg",
            text: "休闲区"
        },
        {
            url: "#",
            img: "./image/m11.jpg",
            text: "门禁"
        },
        {
            url: "#",
            img: "./image/m12.jpg",
            text: "公共区域"
        },
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