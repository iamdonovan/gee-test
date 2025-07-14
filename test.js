// select landsat image LC08_L1TP_062018_20190821 from the Collection 1, Tier 1 ImageCollection
var img = ee.Image("LANDSAT/LC08/C02/T1_L2/LC08_062018_20190821");

// print information about the image
print(img);

// add the image to the map as a true-color composite
Map.addLayer(img.select('SR_B[1-9]').multiply(0.0000275).add(-0.2), // scale to surface reflectance (0-1)
  {bands: ['SR_B4', 'SR_B3', 'SR_B2'], min: 0.01, max: 0.75, gamma: 1.5},
  'Sample Image', true);

// center the map on the image, at a zoom level of 8
Map.centerObject(img, 8);

// set the map background to the satellite layer
Map.setOptions('SATELLITE');
