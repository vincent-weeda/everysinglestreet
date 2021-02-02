ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378877.720374, 6668503.243405, 403991.088455, 6688545.430925]);
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
var format_gps_tracks_20210201_4 = new ol.format.GeoJSON();
var features_gps_tracks_20210201_4 = format_gps_tracks_20210201_4.readFeatures(json_gps_tracks_20210201_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gps_tracks_20210201_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gps_tracks_20210201_4.addFeatures(features_gps_tracks_20210201_4);
var lyr_gps_tracks_20210201_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gps_tracks_20210201_4, 
                style: style_gps_tracks_20210201_4,
                interactive: true,
                title: '<img src="styles/legend/gps_tracks_20210201_4.png" /> gps_tracks_20210201'
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

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_missedstreets_2.setVisible(true);lyr_helsinkiborder_3.setVisible(true);lyr_gps_tracks_20210201_4.setVisible(true);lyr_photos_5.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_missedstreets_2,lyr_helsinkiborder_3,lyr_gps_tracks_20210201_4,lyr_photos_5];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Status': 'Status', 'Distance': 'Distance', });
lyr_missedstreets_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_helsinkiborder_3.set('fieldAliases', {'fid': 'fid', });
lyr_gps_tracks_20210201_4.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation_number': 'Elevation_number', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_photos_5.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'web_directory': 'web_directory', 'image_link': 'image_link', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Distance': 'TextEdit', });
lyr_missedstreets_2.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_helsinkiborder_3.set('fieldImages', {'fid': 'Hidden', });
lyr_gps_tracks_20210201_4.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation_number': 'Hidden', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_photos_5.set('fieldImages', {'fid': 'Hidden', 'photo': 'ExternalResource', 'filename': 'ExternalResource', 'directory': 'ExternalResource', 'altitude': 'Hidden', 'direction': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', 'web_directory': 'TextEdit', 'image_link': 'TextEdit', });
lyr_routes_1.set('fieldLabels', {'Area': 'header label', 'Status': 'header label', 'Distance': 'header label', });
lyr_missedstreets_2.set('fieldLabels', {});
lyr_helsinkiborder_3.set('fieldLabels', {});
lyr_gps_tracks_20210201_4.set('fieldLabels', {'Area': 'header label', 'Distance': 'header label', 'Date': 'header label', 'Time': 'header label', 'Pace': 'header label', 'Elevation': 'header label', 'Link': 'header label', });
lyr_photos_5.set('fieldLabels', {'photo': 'header label', 'filename': 'header label', 'directory': 'header label', 'web_directory': 'header label', 'image_link': 'header label', });
lyr_photos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});