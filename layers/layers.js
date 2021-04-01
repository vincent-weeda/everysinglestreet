ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([376616.578662, 6669332.069127, 406608.593805, 6685905.164425]);
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
var format_routes_1 = new ol.format.GeoJSON();
var features_routes_1 = format_routes_1.readFeatures(json_routes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_1.addFeatures(features_routes_1);
var lyr_routes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_1, 
                style: style_routes_1,
                interactive: true,
                title: 'routes'
            });
var format_routes_mark_20210401_onlynewones_2 = new ol.format.GeoJSON();
var features_routes_mark_20210401_onlynewones_2 = format_routes_mark_20210401_onlynewones_2.readFeatures(json_routes_mark_20210401_onlynewones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_routes_mark_20210401_onlynewones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_routes_mark_20210401_onlynewones_2.addFeatures(features_routes_mark_20210401_onlynewones_2);
var lyr_routes_mark_20210401_onlynewones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_routes_mark_20210401_onlynewones_2, 
                style: style_routes_mark_20210401_onlynewones_2,
                interactive: false,
                title: '<img src="styles/legend/routes_mark_20210401_onlynewones_2.png" /> routes_mark_20210401_onlynewones'
            });
var format_tapanila_3 = new ol.format.GeoJSON();
var features_tapanila_3 = format_tapanila_3.readFeatures(json_tapanila_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_tapanila_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tapanila_3.addFeatures(features_tapanila_3);
var lyr_tapanila_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tapanila_3, 
                style: style_tapanila_3,
                interactive: false,
                title: '<img src="styles/legend/tapanila_3.png" /> tapanila'
            });
var format_gpstracks_4 = new ol.format.GeoJSON();
var features_gpstracks_4 = format_gpstracks_4.readFeatures(json_gpstracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks_4.addFeatures(features_gpstracks_4);
var lyr_gpstracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks_4, 
                style: style_gpstracks_4,
                interactive: true,
                title: '<img src="styles/legend/gpstracks_4.png" /> gps tracks'
            });
var format_helsinkiborder_5 = new ol.format.GeoJSON();
var features_helsinkiborder_5 = format_helsinkiborder_5.readFeatures(json_helsinkiborder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_5.addFeatures(features_helsinkiborder_5);
var lyr_helsinkiborder_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_5, 
                style: style_helsinkiborder_5,
                interactive: false,
                title: '<img src="styles/legend/helsinkiborder_5.png" /> helsinki border'
            });
var format_missedstreets_6 = new ol.format.GeoJSON();
var features_missedstreets_6 = format_missedstreets_6.readFeatures(json_missedstreets_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_6.addFeatures(features_missedstreets_6);
var lyr_missedstreets_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_6, 
                style: style_missedstreets_6,
                interactive: false,
                title: '<img src="styles/legend/missedstreets_6.png" /> missed streets'
            });
var format_photos_7 = new ol.format.GeoJSON();
var features_photos_7 = format_photos_7.readFeatures(json_photos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_7.addFeatures(features_photos_7);
var lyr_photos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_7, 
                style: style_photos_7,
                interactive: true,
                title: '<img src="styles/legend/photos_7.png" /> photos'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_routes_mark_20210401_onlynewones_2.setVisible(true);lyr_tapanila_3.setVisible(true);lyr_gpstracks_4.setVisible(true);lyr_helsinkiborder_5.setVisible(true);lyr_missedstreets_6.setVisible(true);lyr_photos_7.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_routes_mark_20210401_onlynewones_2,lyr_tapanila_3,lyr_gpstracks_4,lyr_helsinkiborder_5,lyr_missedstreets_6,lyr_photos_7];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Status': 'Status', 'Distance': 'Distance', });
lyr_routes_mark_20210401_onlynewones_2.set('fieldAliases', {'fid': 'fid', });
lyr_tapanila_3.set('fieldAliases', {'fid': 'fid', });
lyr_gpstracks_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_helsinkiborder_5.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_6.set('fieldAliases', {'fid': 'fid', });
lyr_photos_7.set('fieldAliases', {'fid': 'fid', 'longitude': 'longitude', 'latitude': 'latitude', 'Date': 'Date', 'photo_html': 'photo_html', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Distance': 'TextEdit', });
lyr_routes_mark_20210401_onlynewones_2.set('fieldImages', {'fid': '', });
lyr_tapanila_3.set('fieldImages', {'fid': '', });
lyr_gpstracks_4.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_helsinkiborder_5.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_6.set('fieldImages', {'fid': 'Hidden', });
lyr_photos_7.set('fieldImages', {'fid': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'Date': 'DateTime', 'photo_html': 'TextEdit', });
lyr_routes_1.set('fieldLabels', {'Area': 'inline label', 'Status': 'inline label', 'Distance': 'inline label', });
lyr_routes_mark_20210401_onlynewones_2.set('fieldLabels', {'fid': 'no label', });
lyr_tapanila_3.set('fieldLabels', {'fid': 'no label', });
lyr_gpstracks_4.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_helsinkiborder_5.set('fieldLabels', {});
lyr_missedstreets_6.set('fieldLabels', {});
lyr_photos_7.set('fieldLabels', {'Date': 'no label', 'photo_html': 'no label', });
lyr_photos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});