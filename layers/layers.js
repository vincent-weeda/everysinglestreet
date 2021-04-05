ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378344.823804, 6669347.933835, 407869.227483, 6685662.634713]);
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
var format_Tyrynummi_3 = new ol.format.GeoJSON();
var features_Tyrynummi_3 = format_Tyrynummi_3.readFeatures(json_Tyrynummi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Tyrynummi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tyrynummi_3.addFeatures(features_Tyrynummi_3);
var lyr_Tyrynummi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tyrynummi_3, 
                style: style_Tyrynummi_3,
                interactive: false,
                title: '<img src="styles/legend/Tyrynummi_3.png" /> Töyrynummi'
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
var format_missedstreets_5 = new ol.format.GeoJSON();
var features_missedstreets_5 = format_missedstreets_5.readFeatures(json_missedstreets_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreets_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreets_5.addFeatures(features_missedstreets_5);
var lyr_missedstreets_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreets_5, 
                style: style_missedstreets_5,
                interactive: false,
                title: '<img src="styles/legend/missedstreets_5.png" /> missed streets'
            });
var format_photos_6 = new ol.format.GeoJSON();
var features_photos_6 = format_photos_6.readFeatures(json_photos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_6.addFeatures(features_photos_6);
var lyr_photos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_6, 
                style: style_photos_6,
                interactive: true,
                title: '<img src="styles/legend/photos_6.png" /> photos'
            });

lyr_basemap_0.setVisible(true);lyr_routes_1.setVisible(true);lyr_gpstracks_2.setVisible(true);lyr_Tyrynummi_3.setVisible(true);lyr_helsinkiborder_4.setVisible(true);lyr_missedstreets_5.setVisible(true);lyr_photos_6.setVisible(true);
var layersList = [lyr_basemap_0,lyr_routes_1,lyr_gpstracks_2,lyr_Tyrynummi_3,lyr_helsinkiborder_4,lyr_missedstreets_5,lyr_photos_6];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Distance': 'Distance', 'Area': 'Area', 'Status': 'Status', });
lyr_gpstracks_2.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', });
lyr_Tyrynummi_3.set('fieldAliases', {'fid': 'fid', });
lyr_helsinkiborder_4.set('fieldAliases', {'fid': 'fid', });
lyr_missedstreets_5.set('fieldAliases', {'fid': 'fid', });
lyr_photos_6.set('fieldAliases', {'fid': 'fid', 'longitude': 'longitude', 'latitude': 'latitude', 'Date': 'Date', 'photo_html': 'photo_html', });
lyr_routes_1.set('fieldImages', {'fid': 'Hidden', 'Distance': 'TextEdit', 'Area': 'TextEdit', 'Status': 'TextEdit', });
lyr_gpstracks_2.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', });
lyr_Tyrynummi_3.set('fieldImages', {'fid': '', });
lyr_helsinkiborder_4.set('fieldImages', {'fid': 'Hidden', });
lyr_missedstreets_5.set('fieldImages', {'fid': 'Hidden', });
lyr_photos_6.set('fieldImages', {'fid': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'Date': 'DateTime', 'photo_html': 'TextEdit', });
lyr_routes_1.set('fieldLabels', {'Distance': 'inline label', 'Area': 'inline label', 'Status': 'inline label', });
lyr_gpstracks_2.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', });
lyr_Tyrynummi_3.set('fieldLabels', {'fid': 'no label', });
lyr_helsinkiborder_4.set('fieldLabels', {});
lyr_missedstreets_5.set('fieldLabels', {});
lyr_photos_6.set('fieldLabels', {'Date': 'no label', 'photo_html': 'no label', });
lyr_photos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});