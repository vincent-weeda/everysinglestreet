var wms_layers = [];

var format_itpasilaTracks_0 = new ol.format.GeoJSON();
var features_itpasilaTracks_0 = format_itpasilaTracks_0.readFeatures(json_itpasilaTracks_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_itpasilaTracks_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_itpasilaTracks_0.addFeatures(features_itpasilaTracks_0);
var lyr_itpasilaTracks_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_itpasilaTracks_0, 
                style: style_itpasilaTracks_0,
                interactive: true,
                title: '<img src="styles/legend/itpasilaTracks_0.png" /> itä-pasila Tracks'
            });
var format_karhusaariTracks_1 = new ol.format.GeoJSON();
var features_karhusaariTracks_1 = format_karhusaariTracks_1.readFeatures(json_karhusaariTracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_karhusaariTracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_karhusaariTracks_1.addFeatures(features_karhusaariTracks_1);
var lyr_karhusaariTracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_karhusaariTracks_1, 
                style: style_karhusaariTracks_1,
                interactive: true,
                title: '<img src="styles/legend/karhusaariTracks_1.png" /> karhusaari Tracks'
            });
var format_katajanokkaTracks_2 = new ol.format.GeoJSON();
var features_katajanokkaTracks_2 = format_katajanokkaTracks_2.readFeatures(json_katajanokkaTracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_katajanokkaTracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_katajanokkaTracks_2.addFeatures(features_katajanokkaTracks_2);
var lyr_katajanokkaTracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_katajanokkaTracks_2, 
                style: style_katajanokkaTracks_2,
                interactive: true,
                title: '<img src="styles/legend/katajanokkaTracks_2.png" /> katajanokka Tracks'
            });
var format_lauttasaarinorthTracks_3 = new ol.format.GeoJSON();
var features_lauttasaarinorthTracks_3 = format_lauttasaarinorthTracks_3.readFeatures(json_lauttasaarinorthTracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lauttasaarinorthTracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lauttasaarinorthTracks_3.addFeatures(features_lauttasaarinorthTracks_3);
var lyr_lauttasaarinorthTracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lauttasaarinorthTracks_3, 
                style: style_lauttasaarinorthTracks_3,
                interactive: true,
                title: '<img src="styles/legend/lauttasaarinorthTracks_3.png" /> lauttasaari north Tracks'
            });
var format_maununnevaTracks_4 = new ol.format.GeoJSON();
var features_maununnevaTracks_4 = format_maununnevaTracks_4.readFeatures(json_maununnevaTracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_maununnevaTracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_maununnevaTracks_4.addFeatures(features_maununnevaTracks_4);
var lyr_maununnevaTracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_maununnevaTracks_4, 
                style: style_maununnevaTracks_4,
                interactive: true,
                title: '<img src="styles/legend/maununnevaTracks_4.png" /> maununneva Tracks'
            });
var format_vallilaTracks_5 = new ol.format.GeoJSON();
var features_vallilaTracks_5 = format_vallilaTracks_5.readFeatures(json_vallilaTracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vallilaTracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vallilaTracks_5.addFeatures(features_vallilaTracks_5);
var lyr_vallilaTracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vallilaTracks_5, 
                style: style_vallilaTracks_5,
                interactive: true,
                title: '<img src="styles/legend/vallilaTracks_5.png" /> vallila Tracks'
            });
var group_done = new ol.layer.Group({
                                layers: [lyr_itpasilaTracks_0,lyr_karhusaariTracks_1,lyr_katajanokkaTracks_2,lyr_lauttasaarinorthTracks_3,lyr_maununnevaTracks_4,lyr_vallilaTracks_5,],
                                title: "done"});

lyr_itpasilaTracks_0.setVisible(true);lyr_karhusaariTracks_1.setVisible(true);lyr_katajanokkaTracks_2.setVisible(true);lyr_lauttasaarinorthTracks_3.setVisible(true);lyr_maununnevaTracks_4.setVisible(true);lyr_vallilaTracks_5.setVisible(true);
var layersList = [group_done];
lyr_itpasilaTracks_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_karhusaariTracks_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_katajanokkaTracks_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_lauttasaarinorthTracks_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_maununnevaTracks_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vallilaTracks_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_itpasilaTracks_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_karhusaariTracks_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_katajanokkaTracks_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_lauttasaarinorthTracks_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_maununnevaTracks_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_vallilaTracks_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_itpasilaTracks_0.set('fieldLabels', {});
lyr_karhusaariTracks_1.set('fieldLabels', {});
lyr_katajanokkaTracks_2.set('fieldLabels', {});
lyr_lauttasaarinorthTracks_3.set('fieldLabels', {});
lyr_maununnevaTracks_4.set('fieldLabels', {});
lyr_vallilaTracks_5.set('fieldLabels', {});
lyr_vallilaTracks_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});