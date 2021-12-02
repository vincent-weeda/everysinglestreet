ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378162.715342, 6667193.150000, 404763.878408, 6686086.850000]);
var wms_layers = [];


        var lyr_CartoPositron_0 = new ol.layer.Tile({
            'title': 'Carto Positron',
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
var format_missedstreets_2 = new ol.format.GeoJSON();
var features_missedstreets_2 = format_missedstreets_2.readFeatures(json_missedstreets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_2.addFeatures(features_missedstreets_2);
var lyr_missedstreets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_2, 
                style: style_missedstreets_2,
                interactive: true,
                title: '<img src="styles/legend/missedstreets_2.png" /> missed streets'
            });
var format_routes3110_3 = new ol.format.GeoJSON();
var features_routes3110_3 = format_routes3110_3.readFeatures(json_routes3110_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes3110_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes3110_3.addFeatures(features_routes3110_3);
var lyr_routes3110_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes3110_3, 
                style: style_routes3110_3,
                interactive: true,
                title: 'routes 31.10'
            });
var format_gpstracks212_4 = new ol.format.GeoJSON();
var features_gpstracks212_4 = format_gpstracks212_4.readFeatures(json_gpstracks212_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks212_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks212_4.addFeatures(features_gpstracks212_4);
var lyr_gpstracks212_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks212_4, 
                style: style_gpstracks212_4,
                interactive: true,
                title: '<img src="styles/legend/gpstracks212_4.png" /> gps tracks 2.12'
            });

lyr_CartoPositron_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_missedstreets_2.setVisible(true);lyr_routes3110_3.setVisible(true);lyr_gpstracks212_4.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_helsinkiborder_1,lyr_missedstreets_2,lyr_routes3110_3,lyr_gpstracks212_4];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_2.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_routes3110_3.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks212_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'Run': 'Run', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_2.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_routes3110_3.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks212_4.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'Run': 'Range', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_missedstreets_2.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_routes3110_3.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks212_4.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'Run': 'inline label', });
lyr_gpstracks212_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});