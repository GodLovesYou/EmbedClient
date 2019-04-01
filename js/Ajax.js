var Ajax={
	SendAjax:function(action,params,callback){
		var fn="Ajax.SendAjax";
		try{
			if(typeof action=='undefined'||action==""||action==null)
			{
				return false;
			}
			var data = {
				request: {
					action:action,
					content:params
				}
			}
			var datas = $.toJSON(data);
			$.ajax({
				type:"POST",
				url:"service/php/index.php",
				dataType:"json",
				data:encodeURIComponent(datas),
				success:function(rv){
					if($.isFunction(callback))
					{
						callback(rv);
					}
				},
				error:function(error){
					alert("Ajax发送失败"+error.message);
				}
			});
		}catch(e){
			console.log(fn+":发生异常，"+e.name+","+e.message)
		}
	},

	Construct:function(errorCode){
		switch(errorCode){
			case "0x0000" :
				$.messager.alert("操作提示","0x0000 成功","info",function(){});
				break;
			case "0X0001" :
				$.messager.alert("操作提示","0X0001 失败","error",function(){});
				break;
			case "0x0002" :
				$.messager.alert("操作提示","0x0002 抛出异常","error",function(){});
				break;
			case "0x0010" :
				$.messager.alert("操作提示","0x0010 系统已登录","error",function(){});
				break;
			case "0x0011" :
				$.messager.alert("操作提示","0x0011 系统未登录","error",function(){});
				break;
			case "0x1000" :
				$.messager.alert("操作提示","0x1000 请求消息体为空","error",function(){});
				break;
			case "0x1001" :
				$.messager.alert("操作提示","0x1001 请求消息体格式不合法 ","error",function(){});
				break;
			case "0x1003" :
				$.messager.alert("操作提示","0x1003 action参数未知","error",function(){});
				break;
			case "0x1005" :
				$.messager.alert("操作提示","0x1005 action参数不存在","error",function(){});
				break;
			case "0x1007" :
				$.messager.alert("操作提示","0x1007 content参数不存在","error",function(){});
				break;
			case "0x1009" :
				$.messager.alert("操作提示","0x1009 content内容为空","error",function(){});
				break;
			case "0x100A" :
				$.messager.alert("操作提示","0x100A 函数功能禁用","error",function(){});
				break;
			case "0x100B" :
				$.messager.alert("操作提示","0x100B 参数不合法","error",function(){});
				break;
			case "0x2001" :
				$.messager.alert("操作提示","0x2001 MYSQL数据库连接实例对象创建失败","error",function(){});
				break;
			case "0x2002" :
				$.messager.alert("操作提示","0x2002 MYSQL数据库操作失败","error",function(){});
				break;
			case "0x2003" :
				$.messager.alert("操作提示","0x2003 建立MYSQL平台主数据实例对象失败","error",function(){});
				break;
			case "0x3000" :
				$.messager.alert("操作提示","0x3000 登录失败","error",function(){});
				break;
			case "0x3001" :
				$.messager.alert("操作提示","0x3001 登录超时","error",function(){});
				break;
			case "0x3002" :
				$.messager.alert("操作提示","0x3002 登陆失效","error",function(){});
				break;
			case "0x3003" :
				$.messager.alert("操作提示","0x3003 登陆断开","error",function(){});
				break;
			case "0x4000" :
				$.messager.alert("操作提示","0x4000 上传失败","error",function(){});
				break;
			case "0x4001" :
				$.messager.alert("操作提示","0x4001 上传文件格式不正确","error",function(){});
				break;
		}
	}
}