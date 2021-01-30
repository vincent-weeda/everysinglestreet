ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([377791.670913, 6667795.709452, 404580.085235, 6689062.668944]);
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
var format_everysinglestreet_routes_1 = new ol.format.GeoJSON();
var features_everysinglestreet_routes_1 = format_everysinglestreet_routes_1.readFeatures(json_everysinglestreet_routes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_everysinglestreet_routes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everysinglestreet_routes_1.addFeatures(features_everysinglestreet_routes_1);
var lyr_everysinglestreet_routes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_everysinglestreet_routes_1, 
                style: style_everysinglestreet_routes_1,
                interactive: true,
    title: 'everysinglestreet_routes<br />\
    <img src="styles/legend/everysinglestreet_routes_1_0.png" /> true<br />\
    <img src="styles/legend/everysinglestreet_routes_1_1.png" /> false<br />'
        });
var format_missedstreetsTracks_2 = new ol.format.GeoJSON();
var features_missedstreetsTracks_2 = format_missedstreetsTracks_2.readFeatures(json_missedstreetsTracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreetsTracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreetsTracks_2.addFeatures(features_missedstreetsTracks_2);
var lyr_missedstreetsTracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreetsTracks_2, 
                style: style_missedstreetsTracks_2,
                interactive: false,
                title: '<img src="styles/legend/missedstreetsTracks_2.png" /> missed streets Tracks'
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

lyr_CartoPositron_0.setVisible(true);lyr_everysinglestreet_routes_1.setVisible(true);lyr_missedstreetsTracks_2.setVisible(true);lyr_helsinkiborder_3.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_everysinglestreet_routes_1,lyr_missedstreetsTracks_2,lyr_helsinkiborder_3];
lyr_everysinglestreet_routes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Length': 'Length', 'Done': 'Done', });
lyr_missedstreetsTracks_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_helsinkiborder_3.set('fieldAliases', {'fid': 'fid', });
lyr_everysinglestreet_routes_1.set('fieldImages', {'fid': '', 'Name': '', 'Length': '', 'Done': '', });
lyr_missedstreetsTracks_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_helsinkiborder_3.set('fieldImages', {'fid': '', });
lyr_everysinglestreet_routes_1.set('fieldLabels', {'fid': 'no label', 'Name': 'header label', 'Length': 'header label', 'Done': 'header label', });
lyr_missedstreetsTracks_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_helsinkiborder_3.set('fieldLabels', {'fid': 'no label', });
lyr_helsinkiborder_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});