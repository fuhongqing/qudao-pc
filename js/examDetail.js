$(function(){
    var initWidth;//记录初始图片宽度
    $(".proof").on('click','img',function(){
        $('#bigimg').css('cursor','pointer');
        var _this = $(this);//将当前的img元素作为_this传入函数
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    });
    function imgShow(outerdiv, innerdiv, bigimg, _this){
        var src = _this.attr("src");//获取当前点击的pimg元素中的src属性
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性
        initWidth=$(bigimg)[0].width;
        $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg
        $(outerdiv).click(function(){//再次点击淡出消失弹出层
            $(this).fadeOut("fast");
            $(bigimg).css('width',initWidth);
        });
    }
//添加鼠标滚轮事件处理代码
    var myimage = document.getElementById('bigimg');
    if (myimage.addEventListener) {
        // IE9, Chrome, Safari, Opera
        myimage.addEventListener("mousewheel", MouseWheelHandler, false);
        // Firefox
        myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    }else{
        myimage.attachEvent("onmousewheel", MouseWheelHandler);
    }
// IE 6/7/8
//为了让不同浏览器都能支持的处理做法,我们将对Firefox的detail值取反然后返回1或者-1的其中一个
    function MouseWheelHandler(e) {
        // cross-browser wheel delta
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        //现在我们直接决定图片的大小范围。以下代码将图片的宽度范围设置在50-800个像素之间
        myimage.style.width = Math.max(initWidth, Math.min(1000, myimage.width + (30 * delta))) + "px";
        // 最后一点，我们在方法中返回false是为了终止标准的鼠标滚轮事件处理，以防它上下滑动网页
        if(parseFloat(myimage.style.width)<=initWidth){
            $('#bigimg:hover').css('cursor','default');
        }
        return false;
    }
});