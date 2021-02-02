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
var format_gps_tracks_2 = new ol.format.GeoJSON();
var features_gps_tracks_2 = format_gps_tracks_2.readFeatures(json_gps_tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gps_tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_tracks_2.addFeatures(features_gps_tracks_2);
var lyr_gps_tracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gps_tracks_2, 
                style: style_gps_tracks_2,
                interactive: true,
                title: '<img src="styles/legend/gps_tracks_2.png" /> gps_tracks'
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
                interactive: false,
                title: '<img src="styles/legend/missedstreets_3.png" /> missed streets'
            });
var format_helsinkiborder_4 = new ol.format.GeoJSON();
var features_helsinkiborder_4 = format_helsinkiborder_4.readFeatures(json_helsinkiborder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_4.addFeatures(features_helsinkiborder_4);
var lyr_helsinkiborder_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_4, 
                style: style_helsinkiborder_4,
                interactive: false,
                title: '<img src="styles/legend/helsinkiborder_4.png" /> helsinki border'
            });
var format_photos_5 = new ol.format.GeoJSON();
var features_photos_5 = format_photos_5.readFeatures(json_photos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_5.addFeatures(features_photos_5);
var lyr_photos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_5, 
                style: style_photos_5,
                interactive: true,
                title: '<img src="styles/legend/photos_5.png" /> photos'
            });

lyr_CartoPositron_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_gps_tracks_2.setVisible(true);lyr_missedstreets_3.setVisible(true);lyr_helsinkiborder_4.setVisible(true);lyr_photos_5.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_routes_1,lyr_gps_tracks_2,lyr_missedstreets_3,lyr_helsinkiborder_4,lyr_photos_5];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Length_number': 'Length_number', 'Done': 'Done', 'Length': 'Length', });
lyr_gps_tracks_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'layer': 'layer', 'path': 'path', 'distance': 'distance', 'date': 'date', 'time': 'time', 'pace': 'pace', 'elevation': 'elevation', 'link': 'link', });
lyr_missedstreets_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_helsinkiborder_4.set('fieldAliases', {'fid': 'fid', });
lyr_photos_5.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Length_number': 'Hidden', 'Done': 'Hidden', 'Length': 'TextEdit', });
lyr_gps_tracks_2.set('fieldImages', {'fid': 'Hidden', 'name': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', 'distance': '', 'date': 'DateTime', 'time': 'TextEdit', 'pace': 'TextEdit', 'elevation': 'TextEdit', 'link': 'TextEdit', });
lyr_missedstreets_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_helsinkiborder_4.set('fieldImages', {'fid': 'Hidden', });
lyr_photos_5.set('fieldImages', {'fid': 'Hidden', 'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', });
lyr_routes_1.set('fieldLabels', {'Name': 'no label', 'Length': 'no label', });
lyr_gps_tracks_2.set('fieldLabels', {'name': 'no label', 'distance': 'no label', 'date': 'no label', 'time': 'no label', 'pace': 'no label', 'elevation': 'no label', 'link': 'no label', });
lyr_missedstreets_3.set('fieldLabels', {'Name': 'no label', });
lyr_helsinkiborder_4.set('fieldLabels', {});
lyr_photos_5.set('fieldLabels', {'photo': 'no label', });
lyr_photos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});