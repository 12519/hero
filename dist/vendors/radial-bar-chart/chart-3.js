Highcharts.chart('chart-3', {
  colors: ['#2e7f99', '#3898b6', '#03bbcd', '#27beb7', '#005b8b', '#0071ac', '#008fd5', '#00aeef'],
  chart: {
    type: 'column',
    inverted: true,
    polar: true
  },
  title: {
    text: 'Weekly Lead Status'
  },
  tooltip: {
    outside: true
  },
  pane: {
    size: '85%',
    innerSize: '20%',
    endAngle: 270
  },
  xAxis: {
    tickInterval: 1,
    labels: {
      align: 'right',
      useHTML: true,
      allowOverlap: true,
      step: 1,
      y: 3,
      style: {
        fontSize: '13px'
      }
    },
    lineWidth: 0,
    categories: [
      'Walk-Ins <span class="f16">' +
      '</span></span>',
      'SEM Display <span class="f16">' +
      '</span></span>',
      'Bayut Listings <span class="f16">' +
      '</span></span>',
      'Bayut/Dubizzle Campaign <span class="f16">' +
      '</span></span>',
      'Facebook CPL <span class="f16">' +
      '</span></span>',
      'Google Pin Calls <span class="f16">' +
      '</span></span>',
      'Propertyfinder.ae <span class="f16">' +
      '</span></span>',
      'Dubizzle Listings <span class="f16">' +
      '</span></span>' 
    ]
  },
  yAxis: {
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15
    }
  },
  series: [{
    name: 'Walk-Ins',
    data: [132, 105, 92, 73, 132, 105, 92, 64]
  }, {
    name: 'SEM Display',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },
  {
    name: 'Bayut Listings',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },
  {
    name: 'Bayut/Dubizzle Campaign',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },
  {
    name: 'Facebook',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },
  {
    name: 'Google Pin Calls',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },
  {
    name: 'Propertyfinder.ae',
    data: [125, 110, 86, 64, 132, 105, 92, 81]
  },  {
    name: 'Dubizzle Listings',
    data: [111, 90, 60, 62, 132, 105, 92, 87]
  }]
});