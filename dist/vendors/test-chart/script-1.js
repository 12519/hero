//chart data
var chartjson = {
  "title": "LEADS GENERATED TILL DATE = Until 15 Nov",
  //"title": "",
  "data": [{
    "name": "Agent External",
    "score": 97
  }, {
    "name": "Bayut Listings",
    "score": 3
  }, {
    "name": "Bayut/Dubizzle Campaign",
    "score": 5
  }, {
    "name": "Dubizzle Listings",
    "score": 2
  }, {
    "name": "Facebook CPL",
    "score": 6
  }, {
    "name": "Google Pin Calls",
    "score": 13
  }, {
    "name": "Property finder.ae",
    "score": 4
  }, {"name": "SEM Display",
    "score": 6
  }, {"name": "Walk-In's",
    "score": 6
  }, {    
    "name": "Total",
    "score": 83
  }],
  "xtitle": "Secured Marks",
  "ytitle": "Marks",
  "ymax": 0,
  "ykey": 'score',
  "xkey": "name",
  "prefix": "%"
}


//chart colors
var colors = ['fourteen', 'thirteen', 'fourteen', 'thirteen', 'fourteen', 'thirteen', 'fourteen', 'thirteen', 'fourteen', 'seventeen'];

//constants
var TROW = 'tr',
  TDATA = 'td';

var chart1 = document.createElement('div');
//create the chart canvas
var barchart = document.createElement('table');
//create the title row
var titlerow = document.createElement(TROW);
//create the title data
var titledata = document.createElement(TDATA);
//make the colspan to number of records
titledata.setAttribute('colspan', chartjson.data.length + 1);
titledata.setAttribute('class', 'charttitle');
titledata.innerText = chartjson.title;
titlerow.appendChild(titledata);
barchart.appendChild(titlerow);
chart1.appendChild(barchart);

//create the bar row
var barrow = document.createElement(TROW);

//lets add data to the chart
for (var i = 0; i < chartjson.data.length; i++) {
  barrow.setAttribute('class', 'bars');
  var prefix = chartjson.prefix || '';
  //create the bar data
  var bardata = document.createElement(TDATA);
  var bar = document.createElement('div');
  bar.setAttribute('class', colors[i]);
  bar.style.height = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.innerText = chartjson.data[i][chartjson.ykey] + prefix;
  bardata.appendChild(bar);
  barrow.appendChild(bardata);
}

//create legends
var legendrow = document.createElement(TROW);
var legend = document.createElement(TDATA);
legend.setAttribute('class', 'legend');
legend.setAttribute('colspan', chartjson.data.length);

//add legend data
for (var i = 0; i < chartjson.data.length; i++) {
  var legbox = document.createElement('span');
  legbox.setAttribute('class', 'legbox');
  var barname = document.createElement('span');
  barname.setAttribute('class', colors[i] + ' xaxisname');
  var bartext = document.createElement('span');
  bartext.innerText = chartjson.data[i][chartjson.xkey];
  legbox.appendChild(barname);
  legbox.appendChild(bartext);
  legend.appendChild(legbox);
}
barrow.appendChild(legend);
barchart.appendChild(barrow);
barchart.appendChild(legendrow);
chart1.appendChild(barchart);
document.getElementById('chart1').innerHTML = chart1.outerHTML;