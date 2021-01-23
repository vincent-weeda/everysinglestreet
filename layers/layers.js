ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([370532.202563, 6667192.226868, 411514.092381, 6687972.255647]);
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
    <img src="styles/legend/everysinglestreet_routes_1_0.png" /> false<br />\
    <img src="styles/legend/everysinglestreet_routes_1_1.png" /> true<br />'
        });
var format_Munkkivuoritracks_2 = new ol.format.GeoJSON();
var features_Munkkivuoritracks_2 = format_Munkkivuoritracks_2.readFeatures(json_Munkkivuoritracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Munkkivuoritracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munkkivuoritracks_2.addFeatures(features_Munkkivuoritracks_2);
var lyr_Munkkivuoritracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Munkkivuoritracks_2, 
                style: style_Munkkivuoritracks_2,
                interactive: true,
                title: '<img src="styles/legend/Munkkivuoritracks_2.png" /> Munkkivuori tracks'
            });
var format_missedstreetsTracks_3 = new ol.format.GeoJSON();
var features_missedstreetsTracks_3 = format_missedstreetsTracks_3.readFeatures(json_missedstreetsTracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreetsTracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreetsTracks_3.addFeatures(features_missedstreetsTracks_3);
var lyr_missedstreetsTracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreetsTracks_3, 
                style: style_missedstreetsTracks_3,
                interactive: true,
                title: '<img src="styles/legend/missedstreetsTracks_3.png" /> missed streets Tracks'
            });

lyr_CartoPositron_0.setVisible(true);lyr_everysinglestreet_routes_1.setVisible(true);lyr_Munkkivuoritracks_2.setVisible(true);lyr_missedstreetsTracks_3.setVisible(true);
var layersList = [lyr_CartoPositron_0,lyr_everysinglestreet_routes_1,lyr_Munkkivuoritracks_2,lyr_missedstreetsTracks_3];
lyr_everysinglestreet_routes_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Done': 'Done', 'Length (km)': 'Length (km)', });
lyr_Munkkivuoritracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_missedstreetsTracks_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Length (m)': 'Length (m)', });
lyr_everysinglestreet_routes_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Done': 'CheckBox', 'Length (km)': '', });
lyr_Munkkivuoritracks_2.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_missedstreetsTracks_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Length (m)': '', });
lyr_everysinglestreet_routes_1.set('fieldLabels', {'fid': 'no label', 'Name': 'header label', 'Done': 'header label', 'Length (km)': 'no label', });
lyr_Munkkivuoritracks_2.set('fieldLabels', {'name': 'header label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_missedstreetsTracks_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'inline label', 'visibility': 'inline label', 'drawOrder': 'no label', 'icon': 'no label', 'Length (m)': 'no label', });
lyr_missedstreetsTracks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});