var ip = "http://192.168.1.10:3000/city/"; //to be changed for your application
$(document).ready(function(){
    $("#b1").click(function(){
    	if ($("#city").val().trim()) {
    		$.get(ip+$("#city").val().trim(), function(data, status){
    			if (status == 'success') {
    				document.getElementById('max_temp').innerHTML = data.max_temp;
            		document.getElementById('min_temp').innerHTML = data.min_temp;
            		document.getElementById('time').innerHTML = data.time;
    			} else {
    				alert(data.message);
    			}
            
        	});
    	} else {
    		alert("City cannot be blank");
    	}
        
    });

    $("#b2").click(function(){
    	if ($("#city").val().trim() && $("#days").val().trim() && parseInt($("#days").val()) > 0 && parseInt($("#days").val()) < 17) {

    		////////////////////////


    		 var data1;
			$.get(ip+$("#city").val().trim()+"/"+$("#days").val().trim(), function(data, status){data1 = data.arr;
				var y =[];
				for (var i = 0; i < data1.length; i++) {
					var temp = [];
					for (var j = 0; j < data1[i].length; j++) {
						temp.push(parseInt(data1[i][j]));
					}
					y.push(temp);
				}
				Highcharts.chart('container', {

					title: {
					    text: 'Next n days Temparature forecast'
					},

					subtitle: {
					    text: $("#city").val().trim()
					},

					yAxis: {
					    title: {
					        text: 'Temparature'
					    }
					},
					xAxis: {
					    title: {
					        text: 'Day of the Month'
					    }
					},
					legend: {
					    layout: 'vertical',
					    align: 'right',
					    verticalAlign: 'middle'
					},

					plotOptions: {
					    series: {
					    }
					},

					series: [{
					    name: 'Temperature',
					    data: y
					}]

					});
				});


    		///////////////////////




    	} else{
    		alert("City and no of days cannot be blank,\nNo of days should be greater than 0 and less than 17");
    	}
    });

   

});


