ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([377785.291113, 6669934.260954, 406295.492131, 6685726.931719]);
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
var format_gpstracks_2 = new ol.format.GeoJSON();
var features_gpstracks_2 = format_gpstracks_2.readFeatures(json_gpstracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks_2.addFeatures(features_gpstracks_2);
var lyr_gpstracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks_2, 
                style: style_gpstracks_2,
                interactive: true,
                title: '<img src="styles/legend/gpstracks_2.png" /> gps tracks'
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
var format_photos_4 = new ol.format.GeoJSON();
var features_photos_4 = format_photos_4.readFeatures(json_photos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_4.addFeatures(features_photos_4);
var lyr_photos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_4, 
                style: style_photos_4,
                interactive: true,
                title: '<img src="styles/legend/photos_4.png" /> photos'
            });

lyr_basemap_0.setVisible(true);lyr_helsinkiborder_1.setVisible(true);lyr_gpstracks_2.setVisible(true);lyr_missedstreets_3.setVisible(true);lyr_photos_4.setVisible(true);
var layersList = [lyr_basemap_0,lyr_helsinkiborder_1,lyr_gpstracks_2,lyr_missedstreets_3,lyr_photos_4];
lyr_helsinkiborder_1.set('fieldAliases', {'fid': 'fid', });
lyr_gpstracks_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_missedstreets_3.set('fieldAliases', {'fid': 'fid', 'Street': 'Street', 'Area': 'Area', });
lyr_photos_4.set('fieldAliases', {'fid': 'fid', 'Date': 'Date', 'html': 'html', });
lyr_helsinkiborder_1.set('fieldImages', {'fid': 'Hidden', });
lyr_gpstracks_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_missedstreets_3.set('fieldImages', {'fid': 'Hidden', 'Street': 'TextEdit', 'Area': 'TextEdit', });
lyr_photos_4.set('fieldImages', {'fid': 'Hidden', 'Date': 'DateTime', 'html': '', });
lyr_helsinkiborder_1.set('fieldLabels', {});
lyr_gpstracks_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_missedstreets_3.set('fieldLabels', {'Street': 'inline label', 'Area': 'inline label', });
lyr_photos_4.set('fieldLabels', {'Date': 'no label', 'html': 'no label', });
lyr_photos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});