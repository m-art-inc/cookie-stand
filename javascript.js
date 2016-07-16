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
        var hour = this.openHour;
        if (hour < 12) {
            listBuilt += this.openHour;
            listBuilt += ' am: ';
        } else if (hour == 12) {
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






pioneerSquare.randomCustomersPerHour();