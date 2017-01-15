$( document ).ready(function() {

	// var average = local_data.average;

    $('#macro-breakdown').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 30,
          beta: 0
        },
        backgroundColor: 'rgba(255, 255, 255, 0.01)'
      },
      title: {
        text: 'Goal Macronutrients'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y} ',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Macronutrients',
        colorByPoint: true,
        data: [{
          name: 'Fat',
          y: local_data.fat
        }, {
          name: 'Protein',
          y: local_data.protein
        }, {
          name: 'Carbohydrates',
          y: local_data.carbs
        }]
      }]
    });

});