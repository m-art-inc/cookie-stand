function Location(locationName, minHourlyCust, maxHourlyCust, averageSales) {
    this.locationName = locationName;
    this.minHourlyCust = minHourlyCust;
    this.maxHourlyCust = maxHourlyCust;
    this.averageSales = averageSales;
    this.openHour = 10;
    this.closeHour = 18;
    randomCustomersPerHour = function() {
    };

    this.addLocation = function() {
        var table = document.createElement('table');
        var timeCol = document.createElement("tr");
        var timeCel = document.createElement("th");
          timeCel.innerText = this.locationName;
          timeCol.appendChild(timeCel);
        var salesCel = document.createElement("th");
          salesCel.innerText = "Sales Per Hour";
          timeCol.appendChild(salesCel);
          table.appendChild(timeCol);
        var openHour = this.openHour;
        var closeHour = this.closeHour;
        var salesPerHour = [];
        for (var x = openHour; x <= closeHour; x++) {
            var randomCustomers = Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust);
            var randCookiesSales = randomCustomers * this.averageSales;
              salesPerHour.push(parseInt(randCookiesSales));
        }

        for (var index = 0; index < salesPerHour.length; index++) {
            var tableRow = document.createElement('tr');
            var timeNode = document.createElement('td');
            var salesNode = document.createElement('td');
            var sales = document.createTextNode(salesPerHour[index]);
            var hour = openHour;
            if (hour < 12) {
                var timeAm = document.createTextNode(openHour + 'am');
                  timeNode.appendChild(timeAm);
                  salesNode.appendChild(sales);
            } else if (hour == 12) {
                var timeNoon = document.createTextNode(openHour + 'pm');
                  timeNode.appendChild(timeNoon);
                  salesNode.appendChild(sales);
            } else {
                var timePm = document.createTextNode(openHour - 12 + 'pm');
                  timeNode.appendChild(timePm);
                  salesNode.appendChild(sales);
            }
            tableRow.appendChild(timeNode);
            tableRow.appendChild(salesNode);
            table.appendChild(tableRow);
            openHour++;
          }
        var total = 0;
        for (var s = 0; s < salesPerHour.length; s++) {
            total += salesPerHour[s];
          }
        var totalRow = document.createElement('tr');
        var totalNode = document.createElement('td');
        var totalTdTextNode = document.createElement('td');
        var totalWordTextNode = document.createTextNode('Total:');
        var dataTotal = document.createTextNode(total);
          totalTdTextNode.appendChild(totalWordTextNode);
          totalRow.appendChild(totalTdTextNode);
          totalNode.appendChild(dataTotal);
          totalRow.appendChild(totalNode);
          table.appendChild(totalRow);
        return table;
    };
}

var locations = [
    new Location("Pioneer Square", 17, 88, 5.2),
    new Location("Portland Airport", 6, 24, 1.2),
    new Location("Washington Square", 11, 38, 1.9),
    new Location("Sellwood", 20, 48, 3.3),
    new Location("Pearl District", 3, 24, 2.6)
];

function checkLocations() {
    for (var index = 0; index < locations.length; index++) {
        var newTable = locations[index].addLocation();
        var tablesContainer = document.getElementById("tables");
          tablesContainer.appendChild(newTable);
    };
};
checkLocations();


var button = document.getElementById('locationBtn');

button.addEventListener("click", function() {
    var locationName, minCust, maxCust, avgSales;
    locationName = document.getElementById('name').value;
    minCust = document.getElementById('minHour').value;
    maxCust = document.getElementById('maxHour').value;
    avgSales = document.getElementById('averageCust').value;
    var addedLoc = new Location(locationName, minCust, maxCust, avgSales);
    var returnedTable = addedLoc.addLocation();

    var tablesContainer = document.getElementById("tables");
    tablesContainer.appendChild(returnedTable);
})

function resetFunction() {
    document.getElementById("myForm").reset();
}
/*
var pioneerSquare = {
    locationName: "Pioneer Square",
    minCust: 17,
    maxCust: 88,
    averageSales: 5.2,
    openHour: 10,
    closeHour: 18,
    salesHour: [],

randomCustomersPerHour: function() {
      var listBuilt = '';
          listBuilt += '<tr><th>' + this.locationName +'</tr></th>';
      for (var index = this.openHour; index <= this.closeHour; index++) {
            listBuilt += '<tr><td>';
        var randomCookiesSales = Math.random() * (this.maxCust - this.minCust);
        this.salesHour.push(parseInt(randomCookiesSales));
        var time = this.openHour;
        if (time < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (time == 12) {
            listBuilt += this.openHour;
            listBuilt += ' pm: ';
        } else {
            listBuilt += (this.openHour - 12);
            listBuilt += ' pm: ';
        }

            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesHour[index - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;

        }

      var listsElem = document.getElementById("pioneerSquare");
      listsElem.innerHTML = listBuilt;
      console.log("Built Pioneer Square List");
    }
}
//Portland Airport
var portlandAirport = {
    locationName: "Portland Airport",
    minCust: 6,
    maxCust: 24,
    averageSales: 1.2,
    openHour: 10,
    closeHour: 18,
    salesHour: [],

randomCustomersPerHour: function() {
      var listBuilt = '';
          listBuilt += '<th>' + this.locationName +'</th>';
      for (var index = this.openHour; index <= this.closeHour; index++) {
            listBuilt += '<tr><td>';
        var randomCookiesSales = Math.random() * (this.maxCust - this.minCust);
        this.salesHour.push(parseInt(randomCookiesSales));
        var time = this.openHour;
        if (time < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (time == 12) {
            listBuilt += this.openHour;
            listBuilt += ' pm: ';
        } else {
            listBuilt += (this.openHour - 12);
            listBuilt += ' pm: ';
        }

            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesHour[index - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;
        }

      var listsElem = document.getElementById("portlandAirport");
      listsElem.innerHTML = listBuilt;
      console.log("Built Portland Airport List");
    }
}

//Washington Square
var washingtonSquare = {
    locationName: "Washington Square",
    minCust: 11,
    maxCust: 38,
    averageSales: 1.9,
    openHour: 10,
    closeHour: 18,
    salesHour: [],

randomCustomersPerHour: function() {
      var listBuilt = '';
          listBuilt += '<th>' + this.locationName +'</th>';
      for (var index = this.openHour; index <= this.closeHour; index++) {
            listBuilt += '<tr><td>';
        var randomCookiesSales = Math.random() * (this.maxCust - this.minCust);
        this.salesHour.push(parseInt(randomCookiesSales));
        var time = this.openHour;
        if (time < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (time == 12) {
            listBuilt += this.openHour;
            listBuilt += ' pm: ';
        } else {
            listBuilt += (this.openHour - 12);
            listBuilt += ' pm: ';
        }

            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesHour[index - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;
        }

      var listsElem = document.getElementById("washingtonSquare");
      listsElem.innerHTML = listBuilt;
      console.log("Built Washington Square List");
    }
}

//Sellwood
var sellwood = {
    locationName: "Sellwood",
    minCust: 20,
    maxCust: 48,
    averageSales: 3.3,
    openHour: 10,
    closeHour: 18,
    salesHour: [],

randomCustomersPerHour: function() {
      var listBuilt = '';
          listBuilt += '<th>' + this.locationName +'</th>';
      for (var index = this.openHour; index <= this.closeHour; index++) {
            listBuilt += '<tr><td>';
        var randomCookiesSales = Math.random() * (this.maxCust - this.minCust);
        this.salesHour.push(parseInt(randomCookiesSales));
        var time = this.openHour;
        if (time < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (time == 12) {
            listBuilt += this.openHour;
            listBuilt += ' pm: ';
        } else {
            listBuilt += (this.openHour - 12);
            listBuilt += ' pm: ';
        }

            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesHour[index - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;
        }

      var listsElem = document.getElementById("sellwood");
      listsElem.innerHTML = listBuilt;
      console.log("Built Sellwood List");
    }
}

//Pearl District
var pearlDistrict = {
    locationName: "Pearl District",
    minCust: 3,
    maxCust: 24,
    averageSales: 2.6,
    openHour: 10,
    closeHour: 18,
    salesHour: [],

randomCustomersPerHour: function() {
      var listBuilt = '';
          listBuilt += '<th>' + this.locationName +'</th>';
      for (var index = this.openHour; index <= this.closeHour; index++) {
            listBuilt += '<tr><td>';
        var randomCookiesSales = Math.random() * (this.maxCust - this.minCust);
        this.salesHour.push(parseInt(randomCookiesSales));
        var time = this.openHour;
        if (time < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (time == 12) {
            listBuilt += this.openHour;
            listBuilt += ' pm: ';
        } else {
            listBuilt += (this.openHour - 12);
            listBuilt += ' pm: ';
        }

            listBuilt += '</td>';
            listBuilt += '<td>';
            listBuilt += " ";
            listBuilt += this.salesHour[index - 10];
            listBuilt += '</td>';
            listBuilt += '</tr>';
            this.openHour++;
        }

      var listsElem = document.getElementById("pearlDistrict");
      listsElem.innerHTML = listBuilt;
      console.log("Built Pearl District List");
    }
}



pioneerSquare.randomCustomersPerHour();
portlandAirport.randomCustomersPerHour();
washingtonSquare.randomCustomersPerHour();
sellwood.randomCustomersPerHour();
pearlDistrict.randomCustomersPerHour();
*/
