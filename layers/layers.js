ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378951.745493, 6668843.168725, 404656.697868, 6685824.129269]);
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
var format_gpstracks_5 = new ol.format.GeoJSON();
var features_gpstracks_5 = format_gpstracks_5.readFeatures(json_gpstracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks_5.addFeatures(features_gpstracks_5);
var lyr_gpstracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks_5, 
                style: style_gpstracks_5,
                interactive: true,
                title: '<img src="styles/legend/gpstracks_5.png" /> gps tracks'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_missedstreets_2.setVisible(true);lyr_helsinkiborder_3.setVisible(true);lyr_photos_4.setVisible(true);lyr_gpstracks_5.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_missedstreets_2,lyr_helsinkiborder_3,lyr_photos_4,lyr_gpstracks_5];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Status': 'Status', 'Distance': 'Distance', });
lyr_missedstreets_2.set('fieldAliases', {'fid': 'fid', });
lyr_helsinkiborder_3.set('fieldAliases', {'fid': 'fid', });
lyr_photos_4.set('fieldAliases', {'fid': 'fid', 'longitude': 'longitude', 'latitude': 'latitude', 'Date': 'Date', 'photo_html': 'photo_html', });
lyr_gpstracks_5.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation_number': 'Elevation_number', 'Elevation': 'Elevation', 'Link': 'Link', 'layer': 'layer', 'path': 'path', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Status': 'TextEdit', 'Distance': 'TextEdit', });
lyr_missedstreets_2.set('fieldImages', {'fid': 'Hidden', });
lyr_helsinkiborder_3.set('fieldImages', {'fid': 'Hidden', });
lyr_photos_4.set('fieldImages', {'fid': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'Date': 'DateTime', 'photo_html': 'TextEdit', });
lyr_gpstracks_5.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation_number': 'Hidden', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_routes_1.set('fieldLabels', {'Area': 'inline label', 'Status': 'inline label', 'Distance': 'inline label', });
lyr_missedstreets_2.set('fieldLabels', {});
lyr_helsinkiborder_3.set('fieldLabels', {});
lyr_photos_4.set('fieldLabels', {'Date': 'no label', 'photo_html': 'no label', });
lyr_gpstracks_5.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_gpstracks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});