var IAConfig = __icfg = {

	version : '',
    path:null,

	end : true
};

var IAScriptLoad = {
	version : "v1.5.1",

	include : function (libraryName) {
        document.write('<script type="text/javascript" src="' + libraryName + '"></script>');
    },
    GetUrlRelativePath:function()
　     {
　　　　var url = document.location.toString();
　　　　if(url.indexOf("?") != -1){
　　　　　　var relUrl = (url.split("?")[1]).toUpperCase();
         IAScriptLoad.load(relUrl);
　　　　}else{
	     IAScriptLoad.load("LANG=ZH_CN");
	  }
　　  },
    load: function (relUrl) {
        var cr_scripts = new Array();
        var cr_csses = new Array();
        var scriptObjects = document.getElementsByTagName("script");


        for (var i = 0; i < scriptObjects.length; i++) {
            var s = scriptObjects[i];

            if (s.src && s.src.match(/ScriptLoad\.js(\?.*)?$/)) {
                var path = s.src.replace(/js\/ScriptLoad\.js(\?.*)?$/, '');
                __icfg.path=path;
                var type = s.src.match(/\?type=([a-z,]*)/);

                var t = new Date().getTime();

                cr_scripts = cr_scripts.concat([
                    // - lib
                    path + 'lib/jquery/jquery-1.10.2.js',
                    path + 'lib/echart/echarts.min.js',
                    path + 'lib/jquery/lib/jquery.json-2.4.js',
                    path + 'lib/jquery/DatePicker/WdatePicker.js',
                    path + 'lib/jquery/easyui-1.5.1/jquery.easyui.min.js',
                    path + 'js/custom.hash.js',
                    
					// - custom js
                    path + 'js/client.js',
                    path + 'js/init.js',
                    path + 'js/loadData.js',
                ]);
                if(relUrl=="LANG=EN"){
                	cr_csses = [
	                    path + "themes/embedClient-en.css?t="+t,
	                    path + "lib/jquery/easyui-1.5.1/themes/default/easyui.css?t="+t,
	                ];
                	cr_scripts = cr_scripts.concat([
	                    path + 'js/lang-en.js',
                    ]);
                }
                else if(relUrl=="LANG=ZH_CN"){
                	cr_csses = [
	                    path + "themes/embedClient-zh_CN.css?t="+t,
	                    path + "lib/jquery/easyui-1.5.1/themes/default/easyui.css?t="+t,
	                ];
                	cr_scripts = cr_scripts.concat([
		                path + 'js/lang-zh_CN.js',
                    ]);
                }else if(relUrl=="LANG=ZH_TW"){
                	cr_csses = [
	                    path + "themes/embedClient-zh_CN.css?t="+t,
	                    path + "lib/jquery/easyui-1.5.1/themes/default/easyui.css?t="+t,
	                ];
                	cr_scripts = cr_scripts.concat([
		                path + 'js/lang-zh_TW.js',
                    ]);
                }
                break;
            }
        }
        // CSS
        for (var j = 0; j < cr_csses.length; j++) {
            document.write('<link rel="stylesheet" type="text/css" href="' + cr_csses[j] + '" />');
        }
        for (var j = 0; j < cr_scripts.length; j++) {
        	IAScriptLoad.include(cr_scripts[j]);
        }
    },

    end :true
}

IAScriptLoad.GetUrlRelativePath();
