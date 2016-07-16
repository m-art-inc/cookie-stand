//Pioneer Square
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
