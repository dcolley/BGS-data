# Convert OS National Grid => easting/northing => lat/lng => geojson

## Problem definition

BGS Grid "blocks" are measured in hundreds of thousands of metres (100,000 metres). These blocks do not follow the curve of lat/long, and hence I needed a conversion.

![GRID](https://digimap.edina.ac.uk/webhelp/os/gazetteer_plus/images/natgrid.gif "BGS Grid")

This repo is a work-in-progress. This is the method I used to convert from easting/northing to a geojson solution.
Most of the work is done in the spreadsheet, with a small utility script to convert from easting/northing to lat/long. Then back to the spreadsheet to create the json.


## Dependencies

- nodejs (should work on most versions)
- axios

## Get the software
```
git clone https://github.com/dcolley/BGS-data
cd BGS-data
npm install
```

## Usage

### 100km files

Edit `lookups.csv`

`node run.js > result.csv`

### 10km files

Edit `lookups-xxnn.csv`

`node run-xxnn.js > result-xxnn.csv`


# Convert to geojson

Use the spreadsheet

*_TODO_*: update scripts to output geojson

# Credits & reference

- https://en.wikipedia.org/wiki/Ordnance_Survey_National_Grid
- https://digimap.edina.ac.uk/webhelp/os/data_information/os_data_issues/ng_converter.htm
- https://digimap.edina.ac.uk/webhelp/os/data_information/os_data_issues/grid_ref_conversion.htm
- BGS https://www.bgs.ac.uk/technologies/bulk-conversion-of-coordinates/
 
