window.onload = function () {
    this.showCurrentYear();
    this.setPosterSize();
    this.getAphorism();
}

// 动态获取年份  设置值到Copyright
function showCurrentYear () {
    var date = new Date();
    var year = date.getFullYear();
    $("#year").text(year);
}

// 动态设置照片的大小
function setPosterSize () {
    // 获取poster_size_base 的宽度(照片按照这个为基础设置大小)
    var base = $("#poster_size_base");
    // console.log(base)
    var base_height = base[0].scrollWidth
    var height = base_height * 1.45;
    // alert(height)
    var poster = $("#poster");
    
    // poster.attr("width",height + "px")
    poster.width(height)
}

// 每日格言
function getAphorism () {
    $.get(
        "http://api.tianapi.com/txapi/dictum/index",
        {
            key : "dd98c9958387454cd961a15de6c8f771",
            num : 1
        },
        function (data) {
            var content = data.newslist[0].content;
            var mrname = data.newslist[0].mrname;
            $("#content").text(content);
            $("#mrname").append(mrname);
        }
    )
}