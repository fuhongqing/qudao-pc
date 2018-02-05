$(function(){
    "use strict";
    //绘制日折线图
    function date(){
        var dateChart = echarts.init(document.getElementById('dateChart'));
        // 指定图表的配置项和数据
        var dateOption = {
            title: {
                text: '堆叠区域图',
                show:false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['成交','报备','来访'
                    //{name:'成交',icon:'circle'},
                    //{name:'报备',icon:'circle'},
                    //{name:'来访',icon:'circle'}
                ],
                //top: 265,
                //itemWidth:8,
                itemHeight:8,
                //padding: [5, 10, 15, 20],
                itemGap: 40,//间距
                textStyle:{
                    color:'#333',
                    fontSize:14
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right:40
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['4.29','4.30','5.1','5.2','5.3','5.4','5.5','5.6','5.7','5.8','5.9','5.10',
                        '5.11','5.12','5.13','5.14','5.15']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    //axisLabel:{formatter:{value}}//自处理
                    axisLabel:{
                        formatter: function (value) {
                            var texts = [];
                            if(value<=20){
                                texts.push('0');
                            }
                            else if (value <=40) {
                                texts.push('20');
                            }
                            else if (value<=60) {
                                texts.push('40');
                            }
                            else if(value<=80){
                                texts.push('60');
                            }
                            else if(value<=100){
                                texts.push('80');
                            }
                            else if(value<=120){
                                texts.push('100');
                            }else{
                                texts.push('120');
                            }
                            return texts;

                        }
                    }
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},//去除填充颜色
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7BB3ED",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7BB3ED"//折线颜色
                            }
                        }
                    },
                    data:[25, 18, 40, 20,25, 18, 40, 20,25, 18, 40, 20,25, 18, 40, 20,25]
                },
                {
                    name:'报备',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点形状
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7ED321",//拐点颜色
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7ED321"//折线颜色
                            }
                        }
                    },
                    data:[35, 28, 50, 30,35, 28, 50, 30,35, 28, 50, 30,35, 28, 50, 30,35]
                },
                {
                    name:'来访',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#ED9127",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#ED9127"//折线颜色
                            }
                        }
                    },
                    data:[45, 38, 60, 40,45, 38, 60, 40,45, 38, 60, 40,45, 38, 60, 40,45]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        dateChart.setOption(dateOption);
    }
    date();
    //绘制周折线图
    function week(){
        var weekChart = echarts.init(document.getElementById('weekChart'));
        // 指定图表的配置项和数据
        var weekOption = {
            title: {
                text: '堆叠区域图',
                show:false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['成交','报备','来访'
                    //{name:'成交',icon:'circle'},
                    //{name:'报备',icon:'circle'},
                    //{name:'来访',icon:'circle'}
                ],
                //top: 265,
                //itemWidth:8,
                itemHeight:8,
                //padding: [5, 10, 15, 20],
                itemGap: 40,//间距
                textStyle:{
                    color:'#333',
                    fontSize:14
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right:40
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    //axisLabel:{formatter:{value}}//自处理
                    axisLabel:{
                        formatter: function (value) {
                            var texts = [];
                            if(value<=20){
                                texts.push('0');
                            }
                            else if (value <=40) {
                                texts.push('20');
                            }
                            else if (value<=60) {
                                texts.push('40');
                            }
                            else if(value<=80){
                                texts.push('60');
                            }
                            else if(value<=100){
                                texts.push('80');
                            }
                            else if(value<=120){
                                texts.push('100');
                            }else{
                                texts.push('120');
                            }
                            return texts;

                        }
                    }
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},//去除填充颜色
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7BB3ED",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7BB3ED"//折线颜色
                            }
                        }
                    },
                    data:[25, 18, 40, 20,25, 18, 40]
                },
                {
                    name:'报备',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点形状
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7ED321",//拐点颜色
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7ED321"//折线颜色
                            }
                        }
                    },
                    data:[35, 28, 50, 30,35, 28, 50]
                },
                {
                    name:'来访',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#ED9127",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#ED9127"//折线颜色
                            }
                        }
                    },
                    data:[45, 38, 60, 40,45, 38, 60]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        weekChart.setOption(weekOption);
    }
    //绘制月折线图
    function month(){
        var monthChart = echarts.init(document.getElementById('monthChart'));
        // 指定图表的配置项和数据
        var monthOption = {
            title: {
                text: '堆叠区域图',
                show:false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['成交','报备','来访'
                    //{name:'成交',icon:'circle'},
                    //{name:'报备',icon:'circle'},
                    //{name:'来访',icon:'circle'}
                ],
                //top: 265,
                //itemWidth:8,
                itemHeight:8,
                //padding: [5, 10, 15, 20],
                itemGap: 40,//间距
                textStyle:{
                    color:'#333',
                    fontSize:14
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                },
                right:40
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    //axisLabel:{formatter:{value}}//自处理
                    axisLabel:{
                        formatter: function (value) {
                            var texts = [];
                            if(value<=20){
                                texts.push('0');
                            }
                            else if (value <=40) {
                                texts.push('20');
                            }
                            else if (value<=60) {
                                texts.push('40');
                            }
                            else if(value<=80){
                                texts.push('60');
                            }
                            else if(value<=100){
                                texts.push('80');
                            }
                            else if(value<=120){
                                texts.push('100');
                            }else{
                                texts.push('120');
                            }
                            return texts;

                        }
                    }
                }
            ],
            series : [
                {
                    name:'成交',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},//去除填充颜色
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7BB3ED",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7BB3ED"//折线颜色
                            }
                        }
                    },
                    data:[25, 18, 40, 20,25, 18, 40, 20,25, 18, 40, 20]
                },
                {
                    name:'报备',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点形状
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#7ED321",//拐点颜色
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#7ED321"//折线颜色
                            }
                        }
                    },
                    data:[35, 28, 50, 30,35, 28, 50, 30,35, 28, 50, 30]
                },
                {
                    name:'来访',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    //设置折线线条颜色
                    symbol:'circle',//拐点样式
                    symbolSize: 8,//拐点大小
                    itemStyle : {
                        normal : {
                            color:"#ED9127",
                            lineStyle:{
                                width:2,//折线宽度
                                color:"#ED9127"//折线颜色
                            }
                        }
                    },
                    data:[45, 38, 60, 40,45, 38, 60, 40,45, 38, 60, 40]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        monthChart.setOption(monthOption);
    }
});