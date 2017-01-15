$( document ).ready(function() {

	// var average = local_data.average;

    $('#calories-per-day').highcharts({
          chart: {
            type: 'column',
            zoomType: 'x',
            backgroundColor: 'rgba(255, 255, 255, 0.01)'
          },
          title: {
            text: 'Daily calorie intake vs. target'
          },
          xAxis: {
            title: {
              text: 'Previous 365 Days'
            }
          },
          yAxis: {
            title: {
              text: 'Calories'
            }
          },
          legend: {
            shadow: false
          },
          tooltip: {
            shared: true
          },
          plotOptions: {
            column: {
              grouping: false,
              shadow: false,
              borderWidth: 0
            }
          },
          series: [{
            name: 'Target',
            color: 'rgba(165,170,217,.5)',
            data: local_data.target2,
            pointPadding: 0.3,
            pointPlacement: -0.2
          }, {
            name: 'Calories',
            color: 'rgba(126,86,134,.9)',
            data: local_data.calories,
            pointPadding: 0.4,
            pointPlacement: -0.2
          }]
        });

});