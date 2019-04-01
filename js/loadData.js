//初始化组织结构
function InitOrganization(value){
	var str=value.split("|");
	for(var i=0;i<str.length;i++)
	{
		var value = str[i].split(",");
		var name = value[0];
		var index = value[1];
		var parentIndex = value[2];
		if(i==0)
		{
			$("#combobox_dynamic").combotree("loadData",[{"id":"dynamic"+index,"text":name,index: index,"checked":true}]);
			$("#combobox_deploy").combotree("loadData",[{"id":"deploy"+index,"text":name,index: index,"checked":true}]);
			$("#combobox_device").combotree("loadData",[{"id":"device"+index,"text":name,index: index,"checked":true}]);
			$("#combobox_hen").combotree("loadData",[{"id":"hen"+index,"text":name,index: index,"checked":true}]);
			$("#combobox_police").combotree("loadData",[{"id":"police"+index,"text":name,index: index,"checked":true}]);
		}
		else{
			var dynamic = $('#combobox_dynamic').combotree('tree');
			var node_dynamic = dynamic.tree('find',"dynamic"+parentIndex);
			dynamic.tree('append', {
				parent:node_dynamic.target,
				data: [{
					id: "dynamic"+index,
					text: name,
					index: index,
					"checked":true
				}]
			});
			
			var deploy = $('#combobox_deploy').combotree('tree');
			var node_deploy = deploy.tree('find',"deploy"+parentIndex);
			deploy.tree('append', {
				parent:node_deploy.target,
				data: [{
					id: "deploy"+index,
					text: name,
					index: index,
					"checked":true
				}]
			});
			
			var device = $('#combobox_device').combotree('tree');
			var node_device = device.tree('find',"device"+parentIndex);
			device.tree('append', {
				parent:node_device.target,
				data: [{
					id: "device"+index,
					text: name,
					index: index,
					"checked":true
				}]
			});
			
			var hen = $('#combobox_hen').combotree('tree');
			var node_hen = hen.tree('find',"hen"+parentIndex);
			hen.tree('append', {
				parent:node_hen.target,
				data: [{
					id: "hen"+index,
					text: name,
					index: index,
					"checked":true
				}]
			});
			
			var police = $('#combobox_police').combotree('tree');
			var node_police = police.tree('find',"police"+parentIndex);
			police.tree('append', {
				parent:node_police.target,
				data: [{
					id: "police"+index,
					text: name,
					index: index,
					"checked":true
				}]
			});
		}
	}
	var dynamic = $('#combobox_dynamic').combotree('tree');
	var nodesdynamic = dynamic.tree('getChecked');
	var strdynamic=new Array();
	for(var i=0;i<nodesdynamic.length;i++){
		strdynamic.push(nodesdynamic[i].id);
	}
	$('#combobox_dynamic').combotree('setValues', strdynamic);
	
	var deploy = $('#combobox_deploy').combotree('tree');
	var nodesdeploy = deploy.tree('getChecked');
	var strdeploy=new Array();
	for(var i=0;i<nodesdeploy.length;i++){
		strdeploy.push(nodesdeploy[i].id);
	}
	$('#combobox_deploy').combotree('setValues', strdeploy);
	
	var device = $('#combobox_device').combotree('tree');
	var nodesdevice = device.tree('getChecked');
	var strdevice=new Array();
	for(var i=0;i<nodesdevice.length;i++){
		strdevice.push(nodesdevice[i].id);
	}
	$('#combobox_device').combotree('setValues', strdevice);
	
	var hen = $('#combobox_hen').combotree('tree');
	var nodeshen = hen.tree('getChecked');
	var strhen=new Array();
	for(var i=0;i<nodeshen.length;i++){
		strhen.push(nodeshen[i].id);
	}
	$('#combobox_hen').combotree('setValues', strhen);
	
	var police = $('#combobox_police').combotree('tree');
	var nodespolice = police.tree('getChecked');
	var strpolice=new Array();
	for(var i=0;i<nodespolice.length;i++){
		strpolice.push(nodespolice[i].id);
	}
	$('#combobox_police').combotree('setValues', strpolice);
}

//案件动态表
function OnResponseQueryCaseInfoByConditon(strValues){
	var str=strValues.split("|");
	var html="";
	var arr=new Array();
	for(var i=0;i<str.length;i++){
		var value = str[i].split(",");
		var caseNumber=value[0];
		var pliceNumber=value[1];
		var caseStatus=value[2];
		var region=value[3];
		if(caseNumber!=undefined&&caseNumber!=""&&pliceNumber!=undefined&&pliceNumber!=""&&caseStatus!=undefined&&caseStatus!=""&&region!=undefined&&region!=""){
			arr.push({caseNumber:caseNumber,pliceNumber:pliceNumber,caseStatus:caseStatus,region:region})
		}
	}
	if(arr!=null&&arr!=undefined&&arr.length>0){
		Init.hash.set(Init.IndexKey,arr);
		var arrey=Init.hash.get(Init.IndexKey);
		if(arrey!=null&&arrey!=undefined&&arrey.length>0){
			$.each(arrey,function(index,content){
				html +="<tr>";
				html +="   <td>";
				html +="      <div title='"+content.caseNumber+"'>";
				html +=          content.caseNumber!=undefined&&content.caseNumber!=""?content.caseNumber:"-";
				html +="      </div>";
				html +="   </td>";
				html +="   <td>";
				html +="      <div title='"+content.pliceNumber+"'>";
				html +=          content.pliceNumber!=undefined&&content.pliceNumber!=""?content.pliceNumber:"-";
				html +="      </div>";
				html +="   </td>";
				html +="   <td>";
				if(content.caseStatus=="正在执行"){
					html +="      <div style='color:#28A9AA;' title='"+content.caseStatus+"'>";
					html +=          content.caseStatus;
					html +="      </div>";
				}
				else if(content.caseStatus=="未完成"){
					html +="      <div style='color:#B48120;' title='"+content.caseStatus+"'>";
					html +=          content.caseStatus;
					html +="      </div>";
				}else {
					html +="      <div title='"+content.caseStatus+"'>";
					html +=          content.caseStatus!=undefined&&content.caseStatus!=""?content.caseStatus:"-";
					html +="      </div>";
				}
				html +="   </td>";
				html +="   <td>";
				html +="      <div title='"+content.region+"'>";
				html +=           content.region!=undefined&&content.region!=""?content.region:"-";
				html +="      </div>";
				html +="   </td>";
				html +="</tr>";
			});
			$("#dynamic_table").html(html);
	    }
		if(arr.length>=50){
			Init.IndexKey++;
		    $("#next").css("background-image","url(themes/images/R.png)");
		}
	}else{
		Init.IndexKey--;
		$("#next").css("background-image","url(themes/images/1R.png)");
	}
	if(Init.IndexKey>=1){
		$("#last").css("background-image","url(themes/images/L.png)");
	}
}

//警力部署在线率
function OnResponseQueryPoliceUserOnline(strTotalNum,strOnlineNum,Processing){
	strTotalNum = parseInt(strTotalNum);
	strOnlineNum = parseInt(strOnlineNum);
	var val=(strOnlineNum/strTotalNum)*100;
	val = val.toFixed(2);
	Init.policeDeploymentOLRateBox.setOption({
		graphic:[{
            type: 'text',
            left: '2%',
            bottom:'8%',
            style: {
                fill: '#fff',
                text: [
                    '总数 : '+strTotalNum
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
                    '在线 : '+strOnlineNum
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
                    '处理中 : '+Processing
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
                    '离线 : '+(strTotalNum-strOnlineNum)
                ].join('\n'),
                font: '13px Microsoft YaHei'
            }
        }],
        series: [{
            data:[
                {value: val}
            ]
        }]
    });
}


//安防设备在线率
function OnResponseQueryPUOnline(strValues){
	var str=strValues.split("|");
	Init.securityDeviceOLRateBox.setOption({ 
        series: [{
            data:[
                {value:str[0].split(",")[0], name:Language.loadData.AnalyDev.OnlineVehicle.replace('$',str[0].split(",")[0]), itemStyle:{color:"#8D71E3"}},
                {value:str[0].split(",")[1], name:Language.loadData.AnalyDev.OfflineVehicle.replace('$',str[0].split(",")[1]), itemStyle:{color:"#31467F"}},
                {value:str[1].split(",")[0], name:Language.loadData.AnalyDev.OnlineFixedPoint.replace('$',str[1].split(",")[0]), itemStyle:{color:"#F6A424"}},
                {value:str[1].split(",")[1], name:Language.loadData.AnalyDev.OfflineFixedPoint.replace('$',str[1].split(",")[1]), itemStyle:{color:"#51594A"}},
                {value:str[2].split(",")[0], name:Language.loadData.AnalyDev.OnlineSingleSoldier.replace('$',str[2].split(",")[0]), itemStyle:{color:"#71D220"}},
                {value:str[2].split(",")[1], name:Language.loadData.AnalyDev.OfflineSingleSoldier.replace('$',str[2].split(",")[1]), itemStyle:{color:"#33745C"}},
                {value:str[3].split(",")[0], name:Language.loadData.AnalyDev.OnlineUAV.replace('$',str[3].split(",")[0]), itemStyle:{color:"#06A2FC"}},
                {value:str[3].split(",")[1], name:Language.loadData.AnalyDev.OfflineUAV.replace('$',str[3].split(",")[1]), itemStyle:{color:"#0F6193"}}
	         ]
        }]
    });
}
//案例类型
function OnResponseQueryCaseType(strValues){
	var str=strValues.split("|");
	var strType = new Array(),
		Incidence = new Array(),
		Settle =new Array();
	
	for(var i=0;i<str.length;i++){
		var value = str[i];
		var CaseType = value.split(",")[0];
		var CaseTotol = value.split(",")[1];
		var CaseOver = value.split(",")[2];
		strType.push(CaseType);
		Incidence.push(CaseTotol);
		Settle.push(CaseOver);
	}
	
	Init.caseTypeBox.setOption({ 
        yAxis: {
	        data:strType
	    },
	    series: [
	        {
	            name: Language.loadData.AnalyCaseType.IncidenceCase,
	            data: Incidence
	        },
	        {
	            name: Language.loadData.AnalyCaseType.RateSettlement,
	            data: Settle
	        }
	    ]
    });
}
//综合案件统计
function OnResponseQueryCaseNumByConditon(Completed,Underway,UnCompleted)
{
	var Completed = parseInt(Completed);
	var Underway = parseInt(Underway);
	var UnCompleted = parseInt(UnCompleted);
	Init.comprehensiveCaseBox.setOption({
		graphic:{
            type: 'text',
            left: '0%',
            bottom:'30',
            style: {
                fill: '#fff',
                text: [
                    '总数 : '+(Completed+Underway+UnCompleted)
                ].join('\n'),
                font: '13px Microsoft YaHei'
            }
        },
		series: [{
            data:[
                {value:Completed, name:Language.loadData.AnalyCase.Completed+"("+Completed+")"},
	            {value:Underway, name:Language.loadData.AnalyCase.Underway+"("+Underway+")"},
	            {value:UnCompleted, name:Language.loadData.AnalyCase.UnCompleted+"("+UnCompleted+")"},
            ]
        }]
    });
}

function OnResponseQueryPolicType(strValues){
	var str=strValues.split("|");
	var strType = new Array();
	var category=new Array();
	$("#policeTypeBox").css("height",(str.length)*40);
	Init.policeTypeBox.resize();
	for(var i=0;i<str.length;i++){
		var value = str[i].split(",");
		var strText = value[0];
		strType.push(strText);
		category.push({value:value[1],name:Language.loadData.AnalyPoliceType.IncidenceCase});
	}
	Init.policeTypeBox.setOption({
		yAxis: {
	        data:strType
	    },
        series: [{
            data:category
        }]
    });
}
