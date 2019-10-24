// from data.js
var tableData = data;


var tbody = d3.select("tbody");

for (var i = 0; i < tableData.length; i++) {
  
  var UFOSighting = tableData[i]; 


  var row = tbody.append("tr");

  
  row.append("td").text(UFOSighting['datetime']);
  row.append("td").text(UFOSighting['city']);
  row.append("td").text(UFOSighting['state']);
  row.append("td").text(UFOSighting['country']);
  row.append("td").text(UFOSighting['shape']);
  row.append("td").text(UFOSighting['durationMinutes']);
  row.append("td").text(UFOSighting['comments']);

}


var button = d3.select("#filter-btn");
console.log('Here is the button:', button);

button.on("click", function() {

  d3.event.preventDefault();

  console.log('.');

   var inputElement = d3.select("#datetime");
   console.log('Input Element:', inputElement);

  
   var dateInput = inputElement.property('value');
   console.log('Date Input:', dateInput);



  var filtered_dates = tableData.filter(
    function(obj){ 
      
      return obj['datetime'] === dateInput
    }
  );

  console.log('filtered_dates:', filtered_dates);

  tbody.html('');

  for (var i = 0; i < filtered_dates.length; i++) {
    // console.log(tableData[i]);
    var UFOSighting = filtered_dates[i]; 
  
  
    var row = tbody.append("tr");
  
 
    row.append("td").text(UFOSighting['datetime']);
    row.append("td").text(UFOSighting['city']);
    row.append("td").text(UFOSighting['state']);
    row.append("td").text(UFOSighting['country']);
    row.append("td").text(UFOSighting['shape']);
    row.append("td").text(UFOSighting['durationMinutes']);
    row.append("td").text(UFOSighting['comments']);
  
  }

})