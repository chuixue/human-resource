// JavaScript Document
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}

	

	function Init(option, id, eventName, callback, otherLibs){
		id=id || "main";
		var libs = ['echarts','echarts/chart/line','echarts/chart/bar','echarts/chart/pie'];
		if(otherLibs != null)otherLibs.forEach(function(d){ libs.push('echarts/chart/' + d) });
		require(libs,
            function (ec) {
                var myChart = ec.init(document.getElementById(id));				
				if(eventName != null)myChart.on(eventName, callback); 
				myChart.setOption(option);
				window.onresize = myChart.resize;
				return myChart;
            }
        )	 		
	}
