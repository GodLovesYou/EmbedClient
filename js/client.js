var Client={
	Load:function(){
		var fn="Client.Load";
		try{
			var w = $(window).width();
			var h = $(window).height();
			$("body").css({backgroundSize:w + "px" + " " + h + "px"});
			Client.CreateMainPage();

			$(window).resize(function(){
				var winW = 0;
				var winH = 0;
				if($(window).width() < 1240){
					winW = 1240;
				}else{
					winW = $(window).width();
				}
				if($(window).height() < 768){
					winH = 768;
				}else{
					winH = $(window).height();
				}
				Client.Resize(winW,winH);
			});
		}catch(e){
			alert(fn+":发生异常，"+e.name+","+e.message)
		}
	},

	CreateMainPage:function(){
		var fn="Client.CreateMainPage";
		try{
			var html = "";
			html += "<div id='mainPage' style='margin:0 auto;'>";
			html += "	<div id='top'>";
			html += "		<div id='logo'><img src='themes/images/logo.png' /></div>";
			html += "		<div id='configManage'>";
			html += "			<div class='top_img'><img src='themes/images/config.png' /></div>";
			html += "			<div class='top_text'><span>"+Language.Client.ConfigurationManagement+"<span></div>";
			html += "		</div>";
			html += "		<div id='alarmManage'>";
			html += "			<div class='top_img'><img src='themes/images/alarm.png' /></div>";
			html += "			<div class='top_text'><span>"+Language.Client.AlarmManagement+"<span></div>";
			html += "		</div>";	
			html += "	</div>";
			html += "	<div id='content1'>";
			html += "		<div id='content1_left'>";
			html += "			<div id='caseDynamicTableWin'>";
			html += "				<div id='caseDynamicTable_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='caseDynamicTable_title_text'>"+Language.Client.CaseDynamicTable+"</div>";
			html += "				</div>";
			html += "				<div id='caseDynamicTable_content'>";
			html += "					<div style='height:34px;width:365px;margin:0 auto;'>";
			html += "                       <div class='div-bor' id='combobox_dynamic_box' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <input class='com_box' id='combobox_dynamic' placeholder='选择区域'/>";
			html += "                       </div>";
			html += "                       <div class='div-bor' style='float:left;'>";
			html += "                           <i class='icon-triangle' id='combobox_dynamic_icon'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <div class='time_box'>";
			html += "                               <input class='com_box' id='beginTimeDynamic' placeholder='开始时间'/>";
			html += "                           </div>";
			html += "                       </div>";
			html += "                       <div class='div-bor' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <div class='time_box'>";
			html += "                               <input class='com_box' id='endTimeDynamic' placeholder='结束时间'/>";
			html += "                           </div>";
			html += "                       </div>";
			html += "                       <div class='div-bor' style='float:left;'>";
			html += "                           <input class='com_box' style='padding-right:0px;width:236px;' id='combobox_number' placeholder='案例号、警号...'/>";
			html += "                       </div>";
			html += "                       <div style='float:left;width:123px;'>";
			html += "                           <div class='search_button' id='search_button_dynamic'></div>";
			html += "                           <div class='page_button' id='last'></div>";
			html += "                           <div class='page_button' id='next'></div>";
			html += "                       </div>";
			html += "                   </div>";
			html += "					<div id='caseDynamicTableBox'>";
			html += "                      <table style='margin:0 auto;' cellpadding='0' cellspacing='0' width=365>";
			html += "                         <thead>";
			html += "                            <tr style='text-align:left;'>";
			html += "                                <th>案件号</th>";
			html += "                                <th>执行警员/警员</th>";
			html += "                                <th>案件状态</th>";
			html += "                                <th>区域</th>";
			html += "                            </tr>";
			html += "                         </thead>";
			html += "                         <tbody id='dynamic_table'>";
			html += "                         </tbody>";
			html += "                      </table>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";
			html += "		</div>";
			html += "		<div id='content1_line'></div>";
			html += "		<div id='content1_right'>";
			html += "			<div id='policeDeploymentOLRateWin'>";
			html += "				<div id='policeDeploymentOLRate_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='policeDeploymentOLRate_text'>"+Language.Client.PoliceDeploymentOnlineRate+"</div>";
			html += "				</div>";
			html += "				<div id='policeDeploymentOLRate_content'>";
			html += "					<div style='height:30px;padding:0px 18px;float:right;'>";
			html += "                       <div class='div-bor' id='combobox_deploy_box' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <input class='com_box' id='combobox_deploy' placeholder='选择区域'/>";
			html += "                       </div>";
			html += "                       <div style='float:left;position: relative;z-index:10;'>";
			html += "                           <div class='search_button' id='search_button_deploy'></div>";
			html += "                       </div>";
			html += "                   </div>";
			html += "					<div id='policeDeploymentOLRateBox'>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";

			html += "			<div id='content1_divideWin'>";
			html += "				<div id='content1_divide_top'>";
			html += "				</div>";
			html += "				<div id='content1_divide_middle'>";
			html += "				</div>";
			html += "				<div id='content1_divide_bottom'>";
			html += "				</div>";
			html += "			</div>";

			html += "			<div id='securityDeviceOLRateOLRateWin'>";
			html += "				<div id='securityDeviceOLRate_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='securityDeviceOLRate_text'>"+Language.Client.OnLineRateOfSecurityEquipment+"</div>";
			html += "				</div>";
			html += "				<div id='securityDeviceOLRate_content'>";
			html += "					<div style='height:30px;padding:0px 18px;float:right;'>";
			html += "                       <div class='div-bor' id='combobox_device_box' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <input class='com_box' id='combobox_device' placeholder='选择区域'/>";
			html += "                       </div>";
			html += "                       <div style='float:left;position: relative;z-index:10;'>";
			html += "                           <div class='search_button' id='search_button_device'></div>";
			html += "                       </div>";
			html += "                   </div>";
			html += "					<div id='securityDeviceOLRateBox'>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";
			html += "		</div>";
			html += "	</div>";

			html += "	<div id='middle_line'></div>";

			html += "	<div id='content2'>";
			html += "		<div id='content2_left'>";
			html += "			<div id='caseTypeWin'>";
			html += "				<div id='caseType_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='caseType_title_text'>"+Language.Client.CaseType+"</div>";
			html += "				</div>";
			html += "				<div id='caseType_content'>";
			html += "					<div style='height:5px;'></div>";
			html += "					<div id='caseTypeBox'>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";
			html += "		</div>";
			html += "		<div id='content2_line'></div>";


			html += "		<div id='content2_right'>";
			html += "			<div id='comprehensiveCaseWin'>";
			html += "				<div id='comprehensiveCase_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='comprehensiveCase_text'>"+Language.Client.ComprehensiveCaseStatistics+"</div>";
			html += "				</div>";
			html += "				<div id='comprehensiveCase_content'>";
			html += "					<div style='height:30px;padding:0px 18px;float:right;'>";
			html += "                       <div class='div-bor' id='combobox_hen_box' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <input class='com_box' style='width:85px;' id='combobox_hen' placeholder='选择区域'/>";
			html += "                       </div>";
			html += "                       <div class='div-bor' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <div class='time_box'>";
			html += "                              <input class='com_box' id='beginTimeHen' placeholder='开始时间'/>";
			html += "                           </div>";
			html += "                       </div>";
			html += "                       <div class='div-bor' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <div class='time_box'>";
			html += "                                <input class='com_box' id='endTimeHen' placeholder='结束时间'/>";
			html += "                           </div>";
			html += "                       </div>";
			html += "                       <div style='float:left;position: relative;z-index:10;'>";
			html += "                           <div class='search_button' id='search_button_hen'></div>";
			html += "                       </div>";
			html += "                   </div>";
			html += "					<div id='comprehensiveCaseBox'>";
			html += "					</div>";
			html += "				</div>";
			html += "			</div>";

			html += "			<div id='content2_divideWin'>";
			html += "				<div id='content2_divide_top'>";
			html += "				</div>";
			html += "				<div id='content2_divide_middle'>";
			html += "				</div>";
			html += "				<div id='content2_divide_bottom'>";
			html += "				</div>";
			html += "			</div>";

			html += "			<div id='policeTypeWin'>";
			html += "				<div id='policeType_title'>";
			html += "					<div style='height:7px;'></div>";
			html += "					<div id='policeType_text'>"+Language.Client.PoliceStatistics+"</div>";
			html += "				</div>";
			html += "				<div id='policeType_content'>";
			html += "					<div style='height:30px;padding:0px 18px;float:right;'>";
			html += "                       <div class='div-bor' id='combobox_police_box' style='float:left;'>";
			html += "                           <i class='icon-triangle'></i>";
			html += "                           <i class='icon-line'></i>";
			html += "                           <input class='com_box' id='combobox_police' placeholder='选择区域'/>";
			html += "                       </div>";
			html += "                       <div style='float:left;position: relative;z-index:10;'>";
			html += "                           <div class='search_button' id='search_button_police'></div>";
			html += "                       </div>";
			html += "                   </div>";
			html += "                   <div id='policeTypeBox_box' style='overflow-y:scroll;'>";
			html += "					   <div id='policeTypeBox'>";
			html += "					   </div>";
			html += "                   </div>";
			html += "				</div>";
			html += "			</div>";
			html += "		</div>";
			html += "	</div>";
			html += "</div>";
			$("body").html(html);
            $("#beginTimeDynamic").off().on("click",function(){
            	WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});
            });
            $("#endTimeDynamic").off().on("click",function(){
            	WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});
            });
            
            $("#beginTimeHen").off().on("click",function(){
				WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})
			});
			$("#endTimeHen").off().on("click",function(){
				WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})
			});
            $("#beginTimeDynamic").val(getBeginDate());
            $("#endTimeDynamic").val(getEndDate());
            $("#beginTimeHen").val(getBeginDate());
            $("#endTimeHen").val(getEndDate());
            $('#combobox_dynamic').combotree({
            	panelHeight:200,
            	panelWidth:154,
            	multiple:true,
            	lines:true,
            	prompt:"选择区域"
            	
            });
            $("#combobox_dynamic_box").off().on("click",function(){
		        $("#combobox_dynamic").combobox("showPanel");
		    });
            $('#combobox_deploy').combotree({
            	panelHeight:200,
            	panelWidth:148,
            	multiple:true,
            	lines:true,
            	prompt:"选择区域"
            	
            });
            $("#combobox_deploy_box").off().on("click",function(){
		        $("#combobox_deploy").combobox("showPanel");
		    });
            $('#combobox_device').combotree({
            	panelHeight:200,
            	panelWidth:148,
            	multiple:true,
            	lines:true,
            	prompt:"选择区域"
            	
            });
            $("#combobox_device_box").off().on("click",function(){
		        $("#combobox_device").combobox("showPanel");
		    });
            $('#combobox_hen').combotree({
            	panelHeight:200,
            	panelWidth:154,
            	multiple:true,
            	lines:true,
            	prompt:"选择区域"
            });
            $("#combobox_hen_box").off().on("click",function(){
		        $("#combobox_hen").combobox("showPanel");
		    });
            $('#combobox_police').combotree({
            	panelHeight:200,
            	panelWidth:148,
            	multiple:true,
            	lines:true,
            	prompt:"选择区域"
            });
            $("#combobox_police_box").off().on("click",function(){
		        $("#combobox_police").combobox("showPanel");
		    });
            $("#last").off().on("click",function(){
            	var url=$("#last").css("background-image").split("(")[1].split(")")[0].replace(/"/g,"");
            	url=url.substr(url.length-6);
            	if(url=="1L.png"){
            		return false;
            	}
            	
            	Init.IndexKey--;
            	if(Init.IndexKey>=0){
            		var html="";
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
						$("#next").css("background-image","url(themes/images/R.png)");
					}
					if(Init.IndexKey==0){
						$("#last").css("background-image","url(themes/images/1L.png)");
					}
                }else{
                	Init.IndexKey++;
		            $("#last").css("background-image","url(themes/images/1L.png)");
            		return false;
            	}
            });
            
            $("#next").off().on("click",function(){
            	var url=$("#next").css("background-image").split("(")[1].split(")")[0].replace(/"/g,"");
            	url=url.substr(url.length-6);
            	if(url=="1R.png"){
            		return false;
            	}
            	Init.IndexKey++;
            	if(Init.hash.containsKey(Init.IndexKey)&&Init.IndexKey!=Init.hash.size()){
            		var html="";
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
						$("#next").css("background-image","url(themes/images/R.png)");
					}
					if(Init.IndexKey>=1){
						$("#last").css("background-image","url(themes/images/L.png)");
					}
            }else{
            	    Init.IndexKey--;
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
					window.external.OnQueryCaseInfoByConditon(strOrgs,strBeginTime,strEndTime,strVague,(Init.IndexKey)*50,(Init.IndexKey+1)*50);//回调接口
            	}
            });
            
			$("#configManage").mouseover(function(){
			})
			$("#configManage").mouseout(function(){
				
			})
			$("#alarmManage").mouseover(function(){
			})
			$("#alarmManage").mouseout(function(){
				
			})

			var h = ($(window).height() - 80-7)/2;
			$("#content1").css("height",h);

			$("#content1_left").css("width",Math.floor($(window).width()*2/7)+20);
			$("#content1_left").css("height",h-20);
			$("#caseDynamicTable_content").css("height",h-125);
			$("#caseDynamicTableBox").css("height",$("#caseDynamicTable_content").height()-20);

			$("#content1_line").css("height",h);

			$("#content1_right").css("height",h-20);
			$("#policeDeploymentOLRateWin").css("width",($(window).width()-$("#content1_left").width()-10-10-6-10-10)/2-2)
			$("#policeDeploymentOLRate_content").css("height",h-20-41);
			$("#policeDeploymentOLRateBox").css("width",$("#policeDeploymentOLRate_content").width()-40);
			$("#policeDeploymentOLRateBox").css("height",$("#policeDeploymentOLRate_content").height()-20);

			$("#content1_divide_middle").css("height",h-20-41-40);

			$("#securityDeviceOLRateOLRateWin").css("width",($(window).width()-$("#content1_left").width()-10-10-6-10-10)/2-1)
			$("#securityDeviceOLRate_content").css("height",h-20-41);
			$("#securityDeviceOLRate_content").css("width",($(window).width()-$("#content1_left").width()-10-10-6-10-10)/2-1)
			$("#securityDeviceOLRateBox").css("width",$("#securityDeviceOLRate_content").width()-40);
			$("#securityDeviceOLRateBox").css("height",$("#securityDeviceOLRate_content").height()-20);

			$("#middle_line").css({backgroundSize:$(window).width() + "px" + " " + "7px"});

			$("#content2_left").css("width",Math.floor($(window).width()*2/7)+20);
			$("#content2_left").css("height",h-20);
			$("#caseType_content").css("height",h-20-41);
			$("#caseTypeBox").css("width",$("#caseType_content").width()-40);
			$("#caseTypeBox").css("height",$("#caseType_content").height()-20);

			$("#content2_line").css("height",h);

			$("#content2_right").css("height",h-20);
			$("#comprehensiveCaseWin").css("width",($(window).width()-$("#content2_left").width()-10-10-6-10-10)/2-2)
			$("#comprehensiveCase_content").css("height",h-20-41);
			$("#comprehensiveCaseBox").css("width",$("#comprehensiveCase_content").width()-40);
			$("#comprehensiveCaseBox").css("height",$("#comprehensiveCase_content").height()-20);

			$("#content2_divide_middle").css("height",h-20-41-40);

			$("#policeTypeWin").css("width",($(window).width()-$("#content2_left").width()-10-10-6-10-10)/2-1)
			$("#policeType_content").css("height",h-20-41);
			$("#policeType_content").css("width",($(window).width()-$("#content2_left").width()-10-10-6-10-10)/2-1)
			$("#policeTypeBox_box").css("width",$("#policeType_content").width());
			$("#policeTypeBox_box").css("height",$("#policeType_content").height()-30);
			$("#policeTypeBox").css("width",$("#policeType_content").width());
			$("#policeTypeBox").css("height",$("#policeType_content").height()-30);


           Init.NumberCasesExecuted();
           Init.InitedInstrumentDiagram();
           Init.InitEquipmentPieChart();
           Init.InitCaseHistogram();
           Init.InitComprehensiveCasePieChart();
           Init.InitDendrogramPolice();
           Init.CheckIE();
		}catch(e){
			alert(fn+":发生异常，"+e.name+","+e.message)
		}
	},

	Resize:function(winW,winH){
		var fn="Client.Resize";
		try{
			$("#mainPage").css("width",winW);
			$("#mainPage").css("height",winH);
			$("body").css({backgroundSize:winW + "px" + " " + winH + "px"});
			var h = (winH - 80-7)/2;
			$("#content1").css("height",h);

			$("#content1_left").css("width",Math.floor(winW*2/7)+20);
			$("#content1_left").css("height",h-20);
			$("#caseDynamicTable_content").css("height",h-125);
			$("#caseDynamicTableBox").css("height",$("#caseDynamicTable_content").height()-20);

			$("#content1_line").css("height",h);

			$("#content1_right").css("height",h-20);
			$("#policeDeploymentOLRateWin").css("width",(winW-$("#content1_left").width()-10-10-6-10-10)/2)
			$("#policeDeploymentOLRate_content").css("height",h-20-41);
			$("#policeDeploymentOLRate_content").css("width",(winW-$("#content1_left").width()-10-10-6-10-10)/2-1)
			$("#policeDeploymentOLRateBox").css("width",$("#policeDeploymentOLRate_content").width()-40);
			$("#policeDeploymentOLRateBox").css("height",$("#policeDeploymentOLRate_content").height()-20);

			$("#content1_divide_middle").css("height",h-20-41-40);

			$("#securityDeviceOLRateOLRateWin").css("width",(winW-$("#content1_left").width()-10-10-6-10-10)/2-1)
			$("#securityDeviceOLRate_content").css("height",h-20-41);
			$("#securityDeviceOLRate_content").css("width",(winW-$("#content1_left").width()-10-10-6-10-10)/2-1)
			$("#securityDeviceOLRateBox").css("width",$("#securityDeviceOLRate_content").width()-40);
			$("#securityDeviceOLRateBox").css("height",$("#securityDeviceOLRate_content").height()-20);


			$("#middle_line").css({backgroundSize:winW + "px" + " " + "7px"});

			$("#content2").css("height",h);

			$("#content2_left").css("width",Math.floor(winW*2/7)+20);
			$("#content2_left").css("height",h-20);
			$("#caseType_content").css("height",h-20-41);
			$("#caseTypeBox").css("width",$("#caseType_content").width()-40);
			$("#caseTypeBox").css("height",$("#caseType_content").height()-20);

			$("#content2_line").css("height",h);

			$("#content2_right").css("height",h-20);
			$("#comprehensiveCaseWin").css("width",(winW-$("#content2_left").width()-10-10-6-10-10)/2);
			$("#comprehensiveCase_content").css("height",h-20-41);
			$("#comprehensiveCase_content").css("width",(winW-$("#content2_left").width()-10-10-6-10-10)/2-1)
			$("#comprehensiveCaseBox").css("width",$("#comprehensiveCase_content").width()-40);
			$("#comprehensiveCaseBox").css("height",$("#comprehensiveCase_content").height()-20);

			$("#content2_divide_middle").css("height",h-20-41-40);

			$("#policeTypeWin").css("width",(winW-$("#content2_left").width()-10-10-6-10-10)/2-1)
			$("#policeType_content").css("height",h-20-41);
			$("#policeType_content").css("width",(winW-$("#content2_left").width()-10-10-6-10-10)/2-1);
			$("#policeTypeBox_box").css("width",$("#policeType_content").width());
			$("#policeTypeBox_box").css("height",$("#policeType_content").height()-30);
			$("#policeTypeBox").css("width",$("#policeType_content").width());
		
			Init.policeDeploymentOLRateBox.resize();
			Init.securityDeviceOLRateBox.resize();
			Init.caseTypeBox.resize();
			Init.comprehensiveCaseBox.resize();
			Init.policeTypeBox.resize();
		}catch(e){
			alert(fn+":发生异常，"+e.name+","+e.message)
		}
	}
}
function getBeginDate () {
    var  date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' +(date.getMonth() + 1) : date.getMonth() +1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return year + '-' + month + '-' +day + ' ' +'00' + ':' + '00' + ':' +'00';
}
function getEndDate () {
    var  date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? '0' +(date.getMonth() + 1) : date.getMonth() +1;
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? '0' +date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' +date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' +date.getSeconds() : date.getSeconds();
    return year + '-' + month + '-' +day + ' ' +hours + ':' + minutes + ':' +seconds;
}