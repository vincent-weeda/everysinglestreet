ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([375190.609304, 6669416.935816, 406313.924539, 6684967.142619]);
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
var format_strava_gps_1 = new ol.format.GeoJSON();
var features_strava_gps_1 = format_strava_gps_1.readFeatures(json_strava_gps_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_strava_gps_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strava_gps_1.addFeatures(features_strava_gps_1);
var lyr_strava_gps_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_strava_gps_1, 
                style: style_strava_gps_1,
                interactive: true,
                title: '<img src="styles/legend/strava_gps_1.png" /> strava_gps'
            });

lyr_CartoPositron_0.setVisible(true);lyr_strava_gps_1.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_strava_gps_1];
lyr_strava_gps_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'date': 'date', 'length': 'length', 'moving_time': 'moving_time', 'pace': 'pace', 'elevation': 'elevation', 'strava_link': 'strava_link', });
lyr_strava_gps_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'length': 'TextEdit', 'moving_time': 'TextEdit', 'pace': 'TextEdit', 'elevation': 'Range', 'strava_link': 'TextEdit', });
lyr_strava_gps_1.set('fieldLabels', {'fid': 'header label', 'name': 'header label', 'date': 'header label', 'length': 'header label', 'moving_time': 'header label', 'pace': 'header label', 'elevation': 'header label', 'strava_link': 'header label', });
lyr_strava_gps_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});