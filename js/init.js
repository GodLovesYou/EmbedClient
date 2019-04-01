var Init={
	caseDynamicTableBox:null,
	policeDeploymentOLRateBox:null,
	securityDeviceOLRateBox:null,
	caseTypeBox:null,
	comprehensiveCaseBox:null,
	policeTypeBox:null,
	hash : new jQuery.Hash(),
	IndexKey : 0,
	MaxKey : null,
	//成功案例执行率饼图
	NumberCasesExecuted:function(){
		$("#search_button_dynamic").off().on("click",function(){
			var strOrgs=$("#combobox_dynamic").val();//参数
			var beginTimeDynamic=$("#beginTimeDynamic").val();
			var endTimeDynamic=$("#endTimeDynamic").val();
			var strVague=$("#combobox_number").val();//参数
			if(strOrgs==""){
				alert("请在案例动态表中选择区域！");
				return false;
			}
			if(beginTimeDynamic==""){
				alert("请选择案例动态表的开始时间！");
				return false;
			}
			if(endTimeDynamic==""){
				alert("请选择案例动态表的结束时间！");
				return false;
			}
			strOrgs=strOrgs.replace(/dynamic/g,"").replace(/,/g,"|");
			var strBeginTime=beginTimeDynamic.replace(/-/g,"").replace(/:/g,"").replace(" ","");//参数
			var strEndTime=endTimeDynamic.replace(/-/g,"").replace(/:/g,"").replace(" ","");//参数
			var beginTimeDynamic=new Date(beginTimeDynamic).getTime();
			var endTimeDynamic=new Date(endTimeDynamic).getTime();
			beginTimeDynamic=parseInt(beginTimeDynamic);
			endTimeDynamic=parseInt(endTimeDynamic);
			if(endTimeDynamic<beginTimeDynamic){
				alert("案例动态表中的结束时间要大于开始时间！");
				return false;
			}
			Init.IndexKey=0;
			Init.hash.clear();
			window.external.OnQueryCaseInfoByConditon(strOrgs,strBeginTime,strEndTime,strVague,(Init.IndexKey)*50,(Init.IndexKey+1)*50);//回调接口
		});
		
	},
	
	//初始化警力部署仪表图
	InitedInstrumentDiagram:function(){
		$("#search_button_deploy").off().on("click",function(){
			var strOrgs=$("#combobox_deploy").val();
			if(strOrgs==""){
				alert("请在警力部署在线率中选择区域！");
				return false;
			}
			strOrgs=strOrgs.replace(/deploy/g,"").replace(/,/g,"|");
			window.external.OnQueryPoliceUserOnline(strOrgs);
		});
		Init.policeDeploymentOLRateBox = echarts.init(document.getElementById('policeDeploymentOLRateBox'));
		option = {
		    tooltip:{
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    graphic:[{
	            type: 'text',
	            left: '2%',
	            bottom:'8%',
	            style: {
	                fill: '#fff',
	                text: [
	                    '总数 : '+0
	                ].join('\n'),
	                font: '13px Microsoft YaHei'
	            }
	        },{
	            type: 'text',
	            left: '20%',
	            bottom:'8%',
	            style: {
	                fill: '#fff',
	                text: [
	                    '在线 : '+0
	                ].join('\n'),
	                font: '13px Microsoft YaHei'
	            }
	        },{
	            type: 'text',
	            right: '20%',
	            bottom:'8%',
	            style: {
	                fill: '#fff',
	                text: [
	                    '处理中 : '+0
	                ].join('\n'),
	                font: '13px Microsoft YaHei'
	            }
	        },{
	            type: 'text',
	            right: '2%',
	            bottom:'8%',
	            style: {
	                fill: '#fff',
	                text: [
	                    '离线 : '+0
	                ].join('\n'),
	                font: '13px Microsoft YaHei'
	            }
	        }],
		    series:[
		        {
		            name:Language.Init.PoliceForceDeployment,
		            type: 'gauge',
		            startAngle: 180,
	                endAngle: 0,
	                data:[
		                {value: 0}
		            ],
		            center:['50%', '70%'],
	                itemStyle:{
	                	color:"#ffffff"
	                },
		            axisLine: { 
	                        lineStyle: { 
	                           color: [
	                               [0.5,  new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
	                                   offset: 1,
	                                   color: "#787BE4"
	                               }, {
	                                   offset: 0,
	                                   color: "#787BE4"
	                               }], false) ],
	                               [1,  new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
	                                   offset: 1,
	                                   color: "#518FE6"
	                              }, {
	                                   offset: 0,
	                                   color: "#787BE4"
	                               }], false) ]
	                            ],
	                            width: 60
	                        }
	                },
		            axisLabel: { 
		            	distance:-40,
		                textStyle: { 
		                    fontWeight: 'bolder',
		                    color: '#fff'
		                }
		            },
		            axisTick: {
	                    length: 0
	                },
	                splitLine: { 
	                    length: 10, 
	                    lineStyle: { 
	                    	width:1,
	                        color: '#fff',
	                        shadowColor: '#fff', 
	                        shadowBlur: 20
	                    }
	                },
	                detail: {
	                	offsetCenter: [4, '50%'], 
	                	formatter:'{value}%',
	                    textStyle: { 
	                        fontWeight: 'bolder',
	                        color: '#fff'
	                    }
	                }
		        }
		    ]
		}; 
	    Init.policeDeploymentOLRateBox.setOption(option);
	},
	
	
	//初始化设备饼图
	InitEquipmentPieChart:function(){
		$("#search_button_device").off().on("click",function(){
			var strOrgs=$("#combobox_device").val();
			if(strOrgs==""){
				alert("请在安防设备在线率中选择区域！");
				return false;
			}
			strOrgs=strOrgs.replace(/device/g,"").replace(/,/g,"|");
			window.external.OnQueryPUOnline(strOrgs);
		});
		Init.securityDeviceOLRateBox = echarts.init(document.getElementById('securityDeviceOLRateBox'));
	    option = {
	    	title: {
		        text:Language.Init.Equipment,
		        left:'123',
		        top:'center',
		        textStyle:{
		            color:'#fff',
		            fontSize:22,
		            align:'center'
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    calculable : true,
		    legend: {
		        orient: 'horizontal',
		        left:'310',
		        top:'15%',
		        width:'1',
		        textStyle:{
	                color: '#fff'
	           }
		    },
		    series: [
		        {
		            name:Language.Init.Equipment,
		            type:'pie',
		            radius: ['20%', '60%'],
		            avoidLabelOverlap: true,
		            center:['150', '50%'],
		            
		            label:{           
	                    normal:{
	                        show:true,
	                        textStyle : {
	                            fontWeight : 300 ,
	                            fontSize : 12 ,
	                            color:"#ffffff"
	                        },
	                        formatter:'{d}%'                       
	                    }
	                },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 1,
		                    shadowOffsetX: 2,
		                    shadowColor: 'rgba(0, 0, 0, 0.1)'
		                }
		            },
		            data:[
		                {value:0, name:'A', itemStyle:{color:"#8D71E3"}},
		                {value:0, name:'B', itemStyle:{color:"#31467F"}},
		                {value:0, name:'C', itemStyle:{color:"#F6A424"}},
		                {value:0, name:'D', itemStyle:{color:"#51594A"}},
		                {value:0, name:'E', itemStyle:{color:"#71D220"}},
		                {value:0, name:'F', itemStyle:{color:"#33745C"}},
		                {value:0, name:'G', itemStyle:{color:"#06A2FC"}},
		                {value:0, name:'H', itemStyle:{color:"#0F6193"}}
		            ]
		        }
		    ]
		};
	
	    Init.securityDeviceOLRateBox.setOption(option);
	},
	
	//初始化案例柱状图
	InitCaseHistogram:function(){
		Init.caseTypeBox = echarts.init(document.getElementById('caseTypeBox'));
	    option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    legend: {
		        bottom:'0%',
		        textStyle: {
                        color: '#fff'
                },
                itemGap:20,
		    },
		    grid: {
		        left: '2%',
		        right: '3%',
		        bottom: '12%',
		        top:'10%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
               },
               axisLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
               },
               splitLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
               }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
                },
		        data:['A','B','C','D','E']
		    },
		    series: [
		        {
		            name: 'B',
		            type: 'bar',
		            itemStyle:{
		            	normal:{
		            		barBorderRadius:[0,80, 80, 0],
		            		color:'#33D0C7'
		            	}
		            },
		            data: [0, 0, 0, 0, 0]
		        },
		        {
		            name: 'A',
		            type: 'bar',
		            itemStyle:{
		            	normal:{
		            		barBorderRadius:[0,80, 80, 0],
		            		color:'#F8A20F'
		            	}
		            },
		            data: [0, 0, 0, 0, 0]
		        }
		    ]
		};
		Init.caseTypeBox.setOption(option);
	},
	
	//初始化综合案例饼图
	InitComprehensiveCasePieChart:function(){
		$("#search_button_hen").off().on("click",function(){
			var strOrgs=$("#combobox_hen").val();
			var beginTimeHen=$("#beginTimeHen").val();
			var endTimeHen=$("#endTimeHen").val();
			if(strOrgs==""){
				alert("请选择综合案例统计中选择区域！");
				return false;
			}
			if(beginTimeHen==""){
				alert("请选择综合案例统计中的开始时间！");
				return false;
			}
			if(endTimeHen==""){
				alert("请选择综合案例统计中的结束时间！");
				return false;
			}
			strOrgs=strOrgs.replace(/hen/g,"").replace(/,/g,"|");
			var strBeginTime=beginTimeHen.replace(/-/g,"").replace(/:/g,"").replace(" ","");//参数
			var strEndTime=endTimeHen.replace(/-/g,"").replace(/:/g,"").replace(" ","");//参数
			var beginTimeHen=new Date(beginTimeHen).getTime();
			var endTimeHen=new Date(endTimeHen).getTime();
			beginTimeHen=parseInt(beginTimeHen);
			endTimeHen=parseInt(endTimeHen);
			if(endTimeHen<beginTimeHen){
				alert("综合案例统计中的结束时间要大于开始时间！");
				return false;
			}
			window.external.OnQueryCaseNumByConditon(strOrgs,strBeginTime,strEndTime);
		});
		Init.comprehensiveCaseBox = echarts.init(document.getElementById('comprehensiveCaseBox'));
	    option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        bottom:'25',
		        left:'16%',
		        textStyle: {
                        color: '#fff'
                },
                itemGap:20
		    },
		    graphic:{
	            type: 'text',
	            left: '0%',
	            bottom:'30',
	            style: {
	                fill: '#fff',
	                text: [
	                    '总数 : '+0
	                ].join('\n'),
	                font: '13px Microsoft YaHei'
	            }
	        },
		    color:['#8D71E2','#4893E6','#4853E6'],
		    series: [
		        {
		            name:Language.Init.ComprehensiveCase,
		            type:'pie',
		            radius: ['40%', '60%'],
		            center:['50%', '45%'],
		            avoidLabelOverlap: false,
		            label:{           
	                    normal:{
	                        show:true,
	                        textStyle : {
	                            fontWeight : 300 ,
	                            fontSize : 16 ,
	                            color:"#ffffff"
	                        },
	                        formatter:'{d}%'                       
	                    }
	                },
		            labelLine: {
		                normal: {
		                    show: true
		                }
		            },
		            data:[
		                {value:0, name:'A'},
		                {value:0, name:'B'},
		                {value:0, name:'C'}
		            ]
		        }
		    ]
		};
		Init.comprehensiveCaseBox.setOption(option);
	},
	
	//初始化警种布置树状图
	InitDendrogramPolice:function(){
		$("#search_button_police").off().on("click",function(){
			var strOrgs=$("#combobox_police").val();
			if(strOrgs==""){
				alert("请在警种统计中选择区域！");
				return false;
			}
			strOrgs=strOrgs.replace(/police/g,"").replace(/,/g,"|");
			window.external.OnQueryPolicType(strOrgs);
		});
		Init.policeTypeBox = echarts.init(document.getElementById('policeTypeBox'));
	    option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        }
		    },
		    grid: {
		        left: '2%',
		        right: '6%',
		        top:'10%',
		        bottom: '6%',
		        containLabel: true
		    },
		    xAxis: {
		        type: 'value',
		        axisLabel: {
		        	formatter:'{value}',
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
                },
                splitLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
                }
		    },
		    yAxis: {
		        type: 'category',
		        axisLabel: {
                    show: true,
                    interval:0,

                    showMinLabel:true,
                    formatter:function(params){
		        		if(params.length>6){
		        			return params.substring(0,6)+"...";
		        		}else{
		        			return params;
		        		}
		        	},
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine:{
               	    lineStyle:{
               	    	color:"#89AFC4"
               	    }
                },
		        data: ['A','B','C','D','E','F','G','H','I','G']
		    },
		    series: [
		        {
		            type: 'bar',
		            label: {
			            normal: {
			            	formatter:'{c}',
			                position: 'right',
			                show: true,
			                textStyle: {
		                        color: '#fff'
		                    }
			            }
			        },
		            itemStyle:{
		            	normal:{
		            		barBorderRadius:[0,80, 80, 0],
		            		color:new echarts.graphic.LinearGradient(
		                      0, 0, 1, 0,
		                    [
		                        {offset: 0, color: '#8D71E2'},   
		                        {offset: 1, color: '#4893E6'}
		                    ]
		                    )
		            	}
		            },
		            data: [0,0,0,0,0,0,0,0,0,0]
		        }
		    ]
		};
		Init.policeTypeBox.setOption(option);
	},
	
	CheckIE:function(){
		var userAgent = navigator.userAgent;
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion<9){
            	Init.policeTypeBox.setOption({
            		series: [{
		                itemStyle:{
			            	normal:{
			            		barBorderRadius:[0,80, 80, 0],
			            		color:'#8D71E2'
			            	}
			            }
		            }]
            	});
            	
            	Init.policeDeploymentOLRateBox.setOption({
            		series: [{
		                axisLine: { 
	                        lineStyle: { 
	                            color:[[1, '#787BE4']],
	                            width: 60
	                        }
	                    }
		            }]
            	});
            }
        } 
	},
	
	end:true
}
