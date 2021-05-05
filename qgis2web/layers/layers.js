ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([379487.243397, 6669208.566028, 404827.271201, 6686806.885490]);
var wms_layers = [];


        var lyr_basemap_0 = new ol.layer.Tile({
            'title': 'basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_helsinkiborder_1 = new ol.format.GeoJSON();
var features_helsinkiborder_1 = format_helsinkiborder_1.readFeatures(json_helsinkiborder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_1.addFeatures(features_helsinkiborder_1);
var lyr_helsinkiborder_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_1, 
                style: style_helsinkiborder_1,
                interactive: true,
                title: '<img src="styles/legend/helsinkiborder_1.png" /> helsinki border'
            });
var format_gpstrack0505_2 = new ol.format.GeoJSON();
var features_gpstrack0505_2 = format_gpstrack0505_2.readFeatures(json_gpstrack0505_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstrack0505_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstrack0505_2.addFeatures(features_gpstrack0505_2);
var lyr_gpstrack0505_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstrack0505_2, 
                style: style_gpstrack0505_2,
                interactive: true,
                title: '<img src="styles/legend/gpstrack0505_2.png" /> gps track 05.05'
            });
var format_missedstreets_3 = new ol.format.GeoJSON();
var features_missedstreets_3 = format_missedstreets_3.readFeatures(json_missedstreets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_3.addFeatures(features_missedstreets_3);
var lyr_missedstreets_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_3, 
                style: style_missedstreets_3,
                interactive: true,
                title: '<img src="styles/legend/missedstreets_3.png" /> missed streets'
            });

lyr_basemap_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_gpstrack0505_2.setVisible(true);lyr_missedstreets_3.setVisible(true);
var layersList = [lyr_basemap_0,lyr_helsinkiborder_1,lyr_gpstrack0505_2,lyr_missedstreets_3];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_gpstrack0505_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_missedstreets_3.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_gpstrack0505_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'run': 'Range', });
lyr_missedstreets_3.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_gpstrack0505_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_missedstreets_3.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_missedstreets_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});