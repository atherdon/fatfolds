$( document ).ready(function() {

	
	var average = local_data.average;

	var gaugeOptions = {

		chart: {
		  type: 'solidgauge',
		  backgroundColor: 'rgba(255, 255, 255, 0.01)'
		},

		title: {
		  text: 'Average Steps-per-day vs. Target'
		},

		pane: {
		  //x, y position in pane
		  center: ['50%', '60%'],

		  size: '100%',

		  startAngle: -90,
		  endAngle: 90,
		  background: {
		    innerRadius: '60%',
		    outerRadius: '100%',
		    shape: 'arc'
		  }
		},

		tooltip: {
		  enabled: true
		},

		yAxis: {
		  stops: [
		    [0.3, '#DF5353'],
		    [0.6, '#DDDF0D'],
		    [0.9, '#55BF3B']
		  ],
		},

		plotOptions: {
		  solidgauge: {
		    dataLabels: {
		      y: 5,
		      borderWidth: 0,
		      useHTML: true
		    }
		  }
		}
	};


	$('#steps-average').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
          min: 0,
          max: 9000,
          title: {
            text: 'Goal'
          }
        },

        series: [{
          name: 'Steps',
          data: [average],
          dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
            '<span style="font-size:12px;color:black">  steps / 8000</span></div>'
          },
          tooltip: {
            valueSuffix: ' Average Steps'
          }
        }]
      }));

});