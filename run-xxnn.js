const axios = require('axios');
const fs = require('fs');

(async () => {

    var data = fs.readFileSync('lookups-xxnn.csv', 'utf-8')
    // console.log(lines)
    const lines = data.split(/\r?\n/);
    lines.forEach(async function(line) {
        // console.log(line)
        var parts = line.split(',')
        var easting = parts[0]
        var northing = parts[1]
        // let easting = "0"
        // let northing = "0"
        var baseUrl = "http://webapps.bgs.ac.uk/data/webservices/CoordConvert_LL_BNG.cfc" 
            + `?method=BNGtoLatLng&easting=${easting}&northing=${northing}`;
        let result = await axios.get(baseUrl)
        // console.debug(result.data)
        console.log(`"${easting}","${northing}","${result.data.LONGITUDE}","${result.data.LATITUDE}"`)
            
    });

})();
