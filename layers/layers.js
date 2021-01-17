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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
    <img src="styles/legend/routes_1_0.png" /> false<br />\
    <img src="styles/legend/routes_1_1.png" /> true<br />\
    <img src="styles/legend/routes_1_2.png" /> <br />'
        });

lyr_CartoPositron_0.setVisible(true);lyr_routes_1.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_routes_1];
lyr_routes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'Length': 'Length', 'Done': 'Done', });
lyr_routes_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'Length': 'TextEdit', 'Done': 'CheckBox', });
lyr_routes_1.set('fieldLabels', {'fid': 'no label', 'Name': 'header label', 'layer': 'no label', 'Length': 'no label', 'Done': 'no label', });
lyr_routes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});