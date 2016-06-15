// JavaScript Document
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}

	

	function Init(option, id, eventName, callback){
		id=id || "main";
		require(['echarts','echarts/chart/line','echarts/chart/bar','echarts/chart/pie'],
            function (ec) {
                var myChart = ec.init(document.getElementById(id));				
				if(eventName!=null)myChart.on(eventName, callback); 
				myChart.setOption(option);
				window.onresize = myChart.resize;
            }
        )	 		
	}
