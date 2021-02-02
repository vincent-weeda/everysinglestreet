ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378422.968827, 6667836.986795, 404815.156354, 6687879.174315]);
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
    title: 'routes<br />\
    <img src="styles/legend/routes_1_0.png" /> true<br />\
    <img src="styles/legend/routes_1_1.png" /> false<br />'
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
                interactive: false,
                title: '<img src="styles/legend/missedstreets_2.png" /> missed streets'
            });
var format_helsinkiborder_3 = new ol.format.GeoJSON();
var features_helsinkiborder_3 = format_helsinkiborder_3.readFeatures(json_helsinkiborder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_3.addFeatures(features_helsinkiborder_3);
var lyr_helsinkiborder_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_3, 
                style: style_helsinkiborder_3,
                interactive: false,
                title: '<img src="styles/legend/helsinkiborder_3.png" /> helsinki border'
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
                interactive: false,
                title: '<img src="styles/legend/photos_4.png" /> photos'
            });
var format_gps_tracks_5 = new ol.format.GeoJSON();
var features_gps_tracks_5 = format_gps_tracks_5.readFeatures(json_gps_tracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gps_tracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_tracks_5.addFeatures(features_gps_tracks_5);
var lyr_gps_tracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gps_tracks_5, 
                style: style_gps_tracks_5,
                interactive: true,
                title: '<img src="styles/legend/gps_tracks_5.png" /> gps_tracks'
            });

lyr_CartoPositron_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_missedstreets_2.setVisible(true);lyr_helsinkiborder_3.setVisible(true);lyr_photos_4.setVisible(false);lyr_gps_tracks_5.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_routes_1,lyr_missedstreets_2,lyr_helsinkiborder_3,lyr_photos_4,lyr_gps_tracks_5];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Length_number': 'Length_number', 'Done': 'Done', 'Length': 'Length', });
lyr_missedstreets_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_helsinkiborder_3.set('fieldAliases', {'fid': 'fid', });
lyr_photos_4.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'web_directory': 'web_directory', });
lyr_gps_tracks_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'layer': 'layer', 'path': 'path', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation_number': 'Elevation_number', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Length_number': 'Hidden', 'Done': 'Hidden', 'Length': 'TextEdit', });
lyr_missedstreets_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_helsinkiborder_3.set('fieldImages', {'fid': 'Hidden', });
lyr_photos_4.set('fieldImages', {'fid': 'Hidden', 'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'web_directory': '', });
lyr_gps_tracks_5.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation_number': 'Hidden', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_routes_1.set('fieldLabels', {'Name': 'no label', 'Length': 'no label', });
lyr_missedstreets_2.set('fieldLabels', {'Name': 'no label', });
lyr_helsinkiborder_3.set('fieldLabels', {});
lyr_photos_4.set('fieldLabels', {'photo': 'no label', 'web_directory': 'no label', });
lyr_gps_tracks_5.set('fieldLabels', {'name': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'no label', });
lyr_gps_tracks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});