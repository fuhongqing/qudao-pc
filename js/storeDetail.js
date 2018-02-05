$(function(){
    //头部筛选
    $('header').on('click','a',function(e){
        e.preventDefault();
        console.log($(e.target));
        $(e.target).addClass('active').siblings().removeClass('active');
        if($(e.target).html()=='分行数据'){
            $(location).attr('href','store.html');
        }
    });
    //基本信息
    $('#md5').click(function(){
        $('#cover').show();
       $('#myModal5').show().css({
           'opacity':'1',
           'top':'25%'
       });
    });
    $('#myModal5').on('click','.cancel',function(){
        $('#cover').hide();
        $('#myModal5').hide().css({
            'opacity':'0',
            'top':'-25%'
        });
    });
    //发佣信息
    $('#md6').click(function(){
        $('#cover').show();
        $('#myModal6').show().css({
            'opacity':'1',
            'top':'25%'
        });
    });
    $('#myModal6').on('click','.cancel',function(){
        $('#cover').hide();
        $('#myModal6').hide().css({
            'opacity':'0',
            'top':'-25%'
        });
    });
    //证照附件
    $('#md7').click(function(){
        $('#cover').show();
        $('#myModal7').show().css({
            'opacity':'1',
            'top':'25%'
        });
    });
    $('#myModal7').on('click','.cancel',function(){
        $('#cover').hide();
        $('#myModal7').hide().css({
            'opacity':'0',
            'top':'-25%',
            'left':'32%'
        });
    });
    var initWidth;//记录初始图片宽度
    $(".proof").on('click','img',function(){
        $('#bigimg').css('cursor','pointer');
        var _this = $(this);//将当前的img元素作为_this传入函数
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    });
    $(".cover").on('click','img.zoomout',function(){
        $('#bigimg').css('cursor','pointer');
        var _this = $(this).parent().prev();//将当前的img元素作为_this传入函数
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
    //点击上传图片
    $('.drag_load').on('click','a',function(e){
        $('#file').click();
    });
    //文件图片
    var fileUrl='';
    $('#file').change(function(e){
        if($(e.target).val()==''){
            alert('图片不能为空');
        }
        var files=$(e.target).prop('files');//获取文件列表
        var formData = new FormData();
        $.each(files, function(i) {
            if (files[i].size > 5 * 1024 * 1024) {
                alert("单个图片大小不可超过5M");
                return;
            }
            formData.append('files', files[i]);
        });
        $.ajax({
            url: 'http://www.ehaofangwang.com/publicshow/qiniuUtil/fileToQiniu',
            type: 'POST',
            data: formData,
            contentType: false, // 注意这里应设为false
            processData: false,
            cache: false,
            success: function(data) {
                fileUrl=data.pathUrls;//文件路径
                //fileName=data.fileNames;//文件名
                if(data.statas=='true'){
                    alert(data.message);
                }else if(data.statas=='false'){
                    alert(data.message);
                }
            },
            error: function (jqXHR) {
                console.log(JSON.stringify(jqXHR));
            }
        })
    });
    //拖拽上传
    var dragLi=document.getElementById('licence');
    dragLi.ondragover=function(e) {
        e.preventDefault();
    };
    dragLi.ondrop=function(e) {
        e.preventDefault();
        //获取拖拽过来的对象,文件对象集合
        var fs = e.dataTransfer.files;
        //若为表单域中的file标签选中的文件，则使用form[表单name].files[0]来获取文件对象集合
        //打印长度
        console.log(fs.length);
        //循环多文件拖拽上传
        for (var i = 0; i < fs.length; i++) {
            //文件类型
            var _type = fs[i].type;

            console.log(_type);
            //判断文件类型
            if (_type.indexOf('image') != -1) {
                //文件大小控制
                console.log(fs[i].size);
                //读取文件对象
                var reader = new FileReader();
                //读为DataUrl,无返回值
                reader.readAsDataURL(fs[i]);
                reader.onloadstart = function(e) {
                    //开始加载
                };
                // 这个事件在读取进行中定时触发
                reader.onprogress = function(e) {
                    console.log(e.total);

                };

                //当读取成功时触发，this.result为读取的文件数据
                reader.onload = function() {
                    //文件数据
                    // console.log(this.result);
                    //添加文件预览
                    var oImg = $("<img style='width:100px;' src='' />");
                    oImg.attr("src", this.result);
                    //$('#upload').append(oImg); //oDiv转换为js对象调用方法
                };
                //无论成功与否都会触发
                reader.onloadend = function() {
                    if (reader.error) {
                        console.log(reader.error);
                    } else {
                        //上传没有错误，ajax发送文件，上传二进制文件
                    }
                }
            } else {
                alert('请上传图片文件！');
            }
        }
    };
    var proveLi=document.getElementById('proveLi');
    proveLi.ondragover=function(e) {
        e.preventDefault();
    };
    proveLi.ondrop=function(e) {
        e.preventDefault();
        //获取拖拽过来的对象,文件对象集合
        var fs = e.dataTransfer.files;
        //若为表单域中的file标签选中的文件，则使用form[表单name].files[0]来获取文件对象集合
        //打印长度
        console.log(fs.length);
        //循环多文件拖拽上传
        for (var i = 0; i < fs.length; i++) {
            //文件类型
            var _type = fs[i].type;

            console.log(_type);
            //判断文件类型
            if (_type.indexOf('image') != -1) {
                //文件大小控制
                console.log(fs[i].size);
                //读取文件对象
                var reader = new FileReader();
                //读为DataUrl,无返回值
                reader.readAsDataURL(fs[i]);
                reader.onloadstart = function(e) {
                    //开始加载
                };
                // 这个事件在读取进行中定时触发
                reader.onprogress = function(e) {
                    console.log(e.total);

                };

                //当读取成功时触发，this.result为读取的文件数据
                reader.onload = function() {
                    //文件数据
                    // console.log(this.result);
                    //添加文件预览
                    var oImg = $("<img style='width:100px;' src='' />");
                    oImg.attr("src", this.result);
                    //$('#upload').append(oImg); //oDiv转换为js对象调用方法
                };
                //无论成功与否都会触发
                reader.onloadend = function() {
                    if (reader.error) {
                        console.log(reader.error);
                    } else {
                        //上传没有错误，ajax发送文件，上传二进制文件
                    }
                }
            } else {
                alert('请上传图片文件！');
            }
        }
    };
});