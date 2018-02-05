$(function(){
    var x="121.434702";
    var y="31.266207";
//定义变量存放省
    var provinceName='上海';
    var mp = new BMap.Map("allMap", {
        minZoom: 4,
        maxZoom: 18,
        enableMapClick: false
    }); //市级视图单位缩放比zoom18
    mp.disableDoubleClickZoom();
//mp.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT})); // 添加默认比例尺控件
    /*缩放控件type有四种类型:
     BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/
//mp.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_ZOOM})); //添加默认缩放平移控件
    mp.addControl(new BMap.NavigationControl());  //左上角，添加默认缩放平移控件
    var point = new BMap.Point(x, y); //上海视图
    mp.centerAndZoom(point, 8); //初始缩放比
    mp.enableScrollWheelZoom();
    var marker = new BMap.Marker(point);  // 创建标注
    mp.addOverlay(marker);              // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//setTimeout(function(){
//    mp.setZoom(14);
//}, 1000);  //1秒后放大到14级
// 复杂的自定义覆盖物
    function ComplexCustomOverlay(point, infohtml){
        this._point = point;
        this._infohtml = infohtml;
    }
    ComplexCustomOverlay.prototype = new BMap.Overlay();
    ComplexCustomOverlay.prototype.initialize = function(map){
        this._map = map;
        var div = this._div = document.createElement("div");
        div.style.position = "absolute";
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = "#ED9127";
        //div.style.border = "1px solid #BC3B3A";
        div.style.color = "white";
        div.style.minHeight = "124px";
        div.style.width = "130px";
        //div.style.padding = "10px";
        div.style.opacity = ".8";
        //div.style.lineHeight = "18px";
        div.style.whiteSpace = "nowrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px";
        div.innerHTML=this._infohtml;
        div.setAttribute('id','info');
        var that = this;
        mp.getPanes().labelPane.appendChild(div);
        return div;
    };
    ComplexCustomOverlay.prototype.draw = function(){
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x + "px";
        this._div.style.top  = pixel.y + "px";
    };
    var infoHtml = "<div class='caret'></div>"+
        "<ul>"+
        "<li><span>浙江省</span><span>29393家</span></li>"+
        "<li><span>杭州</span><span>29393家</span></li>"+
        "<li><span>杭州</span><span>29393家</span></li>"+
        "<li><span>杭州</span><span>29393家</span></li>"+
        "</ul>";

    var myCompOverlay=new ComplexCustomOverlay(new BMap.Point(x, y), infoHtml);
    //getBoundary();//初始化
    function showInfo(e){
        x=e.point.lng;   //获取鼠标当前点击的经纬度
        y=e.point.lat;
        myCompOverlay = new ComplexCustomOverlay(new BMap.Point(x, y), infoHtml);

        var point = new BMap.Point(x,y);  //获取当前地理名称
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs){
            provinceName = rs.addressComponents.province;
            getBoundary();
            //获取省份的经纬度
            var localSearch = new BMap.LocalSearch(mp);
            localSearch.setSearchCompleteCallback(function(searchResult) {
                var poi = searchResult.getPoi(0);
                if(poi != undefined){
                    x=poi.point.lng;//经度
                    y=poi.point.lat;//纬度
                    //console.log(x);
                    var point = new BMap.Point(x,y);
                    mp.centerAndZoom(point,8);
                    marker = new BMap.Marker(point);  // 创建新的标注
                    mp.addOverlay(marker);    //将标注添加到地图上
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                }else{
                    console.log("error");
                }
            });
            localSearch.search(provinceName);
            //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        });
    }
//获取轮廓线
    function getBoundary() {
        var bdary = new BMap.Boundary();
        //var name = document.getElementById("districtName").value;
        bdary.get(provinceName, function (rs) {       //获取行政区域
            mp.clearOverlays();        //清除地图覆盖物
            var count = rs.boundaries.length; //行政区域的点有多少个
            for (var i = 0; i < count; i++) {
                var ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 2, strokeColor: "#73708C"}); //建立多边形覆盖物
                mp.addOverlay(ply);  //添加覆盖物
                mp.addOverlay(myCompOverlay);

                //mp.setViewport(ply.getPath());    //调整视野
            }

        });
    }
    function clearAll(e){
        mp.removeOverlay(marker);
    }
    mp.addEventListener("click", showInfo);
//视图切换
    $('select').change(function(){
        if($(this).val()==1){
            mp.centerAndZoom(point, 9);
        }else{
            mp.centerAndZoom(point, 5);
        }
    });
});