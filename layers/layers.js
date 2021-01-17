ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([377755.613071, 6666686.259581, 389711.831821, 6677719.968052]);
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
var format_everysinglestreet_routes_4326_1 = new ol.format.GeoJSON();
var features_everysinglestreet_routes_4326_1 = format_everysinglestreet_routes_4326_1.readFeatures(json_everysinglestreet_routes_4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_everysinglestreet_routes_4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everysinglestreet_routes_4326_1.addFeatures(features_everysinglestreet_routes_4326_1);
var lyr_everysinglestreet_routes_4326_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_everysinglestreet_routes_4326_1, 
                style: style_everysinglestreet_routes_4326_1,
                interactive: true,
    title: 'everysinglestreet_routes_4326<br />\
    <img src="styles/legend/everysinglestreet_routes_4326_1_0.png" /> false<br />\
    <img src="styles/legend/everysinglestreet_routes_4326_1_1.png" /> true<br />\
    <img src="styles/legend/everysinglestreet_routes_4326_1_2.png" /> <br />'
        });

lyr_CartoPositron_0.setVisible(true);lyr_everysinglestreet_routes_4326_1.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_everysinglestreet_routes_4326_1];
lyr_everysinglestreet_routes_4326_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'layer': 'layer', 'Length': 'Length', 'Done': 'Done', });
lyr_everysinglestreet_routes_4326_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'Length': 'TextEdit', 'Done': 'CheckBox', });
lyr_everysinglestreet_routes_4326_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'layer': 'no label', 'Length': 'no label', 'Done': 'no label', });
lyr_everysinglestreet_routes_4326_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});