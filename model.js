// google.charts.load('upcoming', {'packages':['geochart']});
//       google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var syear = document.getElementById('mySelect').value;
        var display = [['Country', 'Duration']];
        var all_country = [];
        var country = [];
        var duration = [];
        var city = [];

        for (var i = 0; i < all.length; i++) {
            country.push(all[i].country);
            duration.push(all[i].duration);

            for (var j = 0; j < all[i].city.length; j++) {
                city.push(all[i].city[j]);
            };
        };
 
        // console.log(country);
        // console.log(city.length);
        // console.log(city);

        // Eliminate duplicate country
        for (var i = 0; i < country.length; i++) {
            for (var j = 0; j < country.length; j++) {
                if (country[i] == country[j] && i != j) {
                    country.splice( j, 1 );
                    duration[i] = duration[i] + duration[j];
                    duration.splice( j, 1 );
                }
            };                   
        };
     
        // Eliminate duplicate city
        for (var i = 0; i < city.length; i++) {
            for (var j = 0; j < city.length; j++) {
                if (city[i] == city[j] && i != j) {
                    city.splice( j, 1 );
                }
            };                   
        };
        // console.log(city.length);
        // console.log(city);

        for (var i = 0; i < all.length; i++) {
          if (syear == 'All') {
            // Identify all the countries, eliminate the duplicate, add the duration
            display.push([country[i], duration[i]]);
          }else if(syear == all[i].year){
            display.push([all[i].country, all[i].duration]);
          }
        } 
    
        var data_country = google.visualization.arrayToDataTable(display);

          var options = {};
          options = {
            colorAxis: { colors: ['#42B3D5', '#1A237E'] },
            domain: 'IN',
            backgroundColor: { strokeWidth: '3px', stroke: 'black' }
          };
        
          var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

          chart.draw(data_country, options);
      }


      function test () {
       var syear = document.getElementById('mySelect').value;

      
      var year = [['Country', 'Duration']];
      // var syear = '2014';
      var display = [];
      for (var i = 0; i < all.length; i++) {
        if(syear == all[i].year){
          year.push([all[i].country, all[i].duration]);
        }
      } 

      console.log(year);
      }
      
        var all = [
        { 
          'year': '2016',
          'country': 'China', 
          'city':['Chengdu','Beijing'],
          'duration': 58
        },
        { 
          'year': '2016',
          'country': 'Sweden', 
          'city':['Stockholm', 'Goteborg', 'Oland'],
          'duration': 163
        },
        { 
          'year': '2016',
          'country': 'United Kingdom', 
          'city':['London'],
          'duration': 94
        },
        { 
          'year': '2016',
          'country': 'Belguim', 
          'city':['Brussel'],
          'duration': 3
        },
        { 
          'year': '2016',
          'country': 'Hungary', 
          'city':['Budapest'],
          'duration': 4
        },
        { 
          'year': '2016',
          'country': 'Spain', 
          'city':['Madrid', 'Barcelona'],
          'duration': 7
        },
        { 
          'year': '2016',
          'country': 'Latvia', 
          'city':['Riga'],
          'duration': 3 
        },
        { 
          'year': '2016',
          'country': 'France', 
          'city':['Paris'],
          'duration': 20
        },
        { 
          'year': '2016',
          'country': 'Malta', 
          'city':[''],
          'duration': 5
        },
        { 
          'year': '2016',
          'country': 'Norway', 
          'city':['Bodo', 'Oslo', 'Lofoten'],
          'duration': 5
        },
        { 
          'year': '2016',
          'country': 'Finland', 
          'city':['Helsinki'],
          'duration': 1
        },
        { 
          'year': '2016',
          'country': 'Estonia', 
          'city':['Tallin'],
          'duration': 1
        },
        { 
          'year': '2016',
          'country': 'Russia', 
          'city':['ST Petersburg'],
          'duration': 1
        },
        { 
          'year': '2015',
          'country': 'Sweden', 
          'city':['Stockholm'],
          'duration': 125
        },
        { 
          'year': '2015',
          'country': 'China', 
          'city':['Chengdu', 'Beijing'],
          'duration': 217
        },
        { 
          'year': '2015',
          'country': 'Nertherlands', 
          'city':['Eindhoven'],
          'duration': 4
        },
        { 
          'year': '2015',
          'country': 'Estonia', 
          'city':['Tallin'],
          'duration': 2
        },
        { 
          'year': '2015',
          'country': 'Finland', 
          'city':['Helsinki'],
          'duration': 2
        },
        { 
          'year': '2015',
          'country': 'Taiwan', 
          'city':['Taoyuan','Yilan','Hualien','Kaohsung','Tainan'],
          'duration': 10
        },
        { 
          'year': '2015',
          'country': 'Thailand', 
          'city':['Ko Samui'],
          'duration': 7
        },
         { 
          'year': '2014',
          'country': 'United States', 
          'city':['San Francisco', 'Knoxville', 'New York', 'Philadelphia','Washington DC','Las Vegas', 'Yellow Stone', 'Harrisburg', 'Antelope Canyon', 'Bryce Canyon', 'Salt Lake City', 'Monterey', 'Carmel', 'Los Angeles'],
          'duration': 154
        },
         { 
          'year': '2014',
          'country': 'China', 
          'city':['Chengdu','Hangzhou', 'Hongkong', 'Macao'],
          'duration': 211
        },
        { 
          'year': '2013',
          'country': 'United States', 
          'city':['Los Angeles', 'Knoxville', 'Atlanta', 'Nashville', 'Harrisburg', 'Washington DC', 'Boston', 'New York'],
          'duration': 146
        },
         { 
          'year': '2013',
          'country': 'Japan', 
          'city':['Tokyo'],
          'duration': 1
        },
        { 
          'year': '2013',
          'country': 'China', 
          'city':['Chengdu'],
          'duration': 209
        },
        { 
          'year': '2013',
          'country': 'Thailand', 
          'city':['Chiang Mai'],
          'duration': 9
        },
        { 
          'year': '2012',
          'country': 'China', 
          'city':['Chengdu'],
          'duration': 361
        },
        { 
          'year': '2012',
          'country': 'Cambodia', 
          'city':['Angkor'],
          'duration': 5
        },
          { 
          'year': '2011',
          'country': 'China', 
          'city':['Chengdu', 'Guilin', 'Hangzhou'],
          'duration': 365
        },
        { 
          'year': '1997',
          'country': 'Vietnan', 
          'city':['Ho Chi Minh'],
          'duration': 5
        },
        { 
          'year': '1999',
          'country': 'Philippines', 
          'city':['Manila', 'Los Baños'],
          'duration': 300
        }
      ] 
  
 