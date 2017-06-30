/**
 * Created by yxt on 17/6/30.
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

$(function(){
    $('#h3title').html(getQueryString('title'));
});
jwplayer("container").setup({
    sources: [
        {
            file: "rtmp://202.120.40.175:28935/vod/"+getQueryString('vid')
        }
    ],
    image: "image/bg.jpg",
    autostart: false,
    width: 800,
    height: 600,
    primary: "flash"
});