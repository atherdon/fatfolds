$( document ).ready(function() {
   
   // console.log(local_data);
	// console.log(steps);
	// console.log(target);


	$('#steps-vs-target').highcharts({
        chart: {
          type: 'line',
          zoomType: 'xy',
          backgroundColor: 'rgba(255, 255, 255, 0.01)'
        },
        title: {
          text: 'Steps-per-day vs. Target'
        },
        xAxis: {
          title: {
            text:'Previous 365 days',
          }
        },
        yAxis: {
          title: {
            text: 'Number of Steps'
          }
        },
        series: [{
          name: 'Your Steps',
          data: local_data.steps
        }, {
          name: 'Target',
          data: local_data.target
        }]
      });

});