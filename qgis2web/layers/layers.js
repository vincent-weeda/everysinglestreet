ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378076.866138, 6667044.085877, 405358.991156, 6687096.668852]);
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
var format_gpstracks248_3 = new ol.format.GeoJSON();
var features_gpstracks248_3 = format_gpstracks248_3.readFeatures(json_gpstracks248_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks248_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks248_3.addFeatures(features_gpstracks248_3);
var lyr_gpstracks248_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks248_3, 
                style: style_gpstracks248_3,
                interactive: true,
                title: '<img src="styles/legend/gpstracks248_3.png" /> gps tracks 24.8'
            });

lyr_basemap_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_missedstreets_2.setVisible(true);lyr_gpstracks248_3.setVisible(true);
var layersList = [lyr_basemap_0,lyr_helsinkiborder_1,lyr_missedstreets_2,lyr_gpstracks248_3];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_2.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_gpstracks248_3.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_2.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_gpstracks248_3.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'run': 'Range', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_missedstreets_2.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_gpstracks248_3.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_gpstracks248_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});