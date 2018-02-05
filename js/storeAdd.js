$(function(){
    //多选点击下拉框显示
    $('#mainType').click(function(){
        $('#mainTypeMenu').fadeIn();
    });
    $('#mainBusiness').click(function(){
        $('#mainBusinessMenu').fadeIn();
    });
    //点击空白处主营业务，主营类型下拉框隐藏
    $(document).click(function(e){
        var _con=$('#mainBusiness,#mainBusinessMenu,#mainType,#mainTypeMenu');//设置目标区域
        if(!_con.is(e.target)&&_con.has(e.target).length===0){
            $('#mainBusinessMenu,#mainTypeMenu').hide(500);
        }
    });
});