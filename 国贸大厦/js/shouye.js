(function () {
    var arr = [
        {
            icon: "./image/data-1.png",
            text1: "占地总面积",
            text2: "超过17公顷",
            url: "./xiangqing.html"
        },
        {
            icon: "./image/data-2.png",
            text1: "总建筑面积",
            text2: "110万平方米",
            url: "./xiangqing.html"
        },
        {
            icon: "./image/data-3.png",
            text1: "写字楼建筑面积",
            text2: "31.8万平方米",
            url: "./xiangqing.html"
        },
        {
            icon: "./image/data-4.png",
            text1: "展厅面积",
            text2: "1万平方米",
            url: "./xiangqing.html"
        },
        {
            icon: "./image/data-5.png",
            text1: "建筑高度",
            text2: "330米",
            url: "./xiangqing.html"
        }
    ]
    var main = document.getElementsByClassName('main')[0];
    var introduce = main.getElementsByClassName('introduce')[0];
    var contentData = introduce.getElementsByClassName('content-data')[0];
    var str = '';
    for (let i = 0; i < arr.length;i++) {
        str += `
        <li class="data-item">
            <a href='${arr[i].url}'>
                <span><i style='background:url(${arr[i].icon}) no-repeat 0 0'></i></span>
                <span class="item-text1">${arr[i].text1}</span>
                <span class="item-text2">${arr[i].text2}</span>
            </a>
        </li>
        `
    }
    contentData.innerHTML = '' + str;
})()