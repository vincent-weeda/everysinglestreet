ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([378917.175536, 6668818.857044, 404162.835284, 6688861.044565]);
var wms_layers = [];

var format_Viikinrantatracks_0 = new ol.format.GeoJSON();
var features_Viikinrantatracks_0 = format_Viikinrantatracks_0.readFeatures(json_Viikinrantatracks_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Viikinrantatracks_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viikinrantatracks_0.addFeatures(features_Viikinrantatracks_0);
var lyr_Viikinrantatracks_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Viikinrantatracks_0, 
                style: style_Viikinrantatracks_0,
                interactive: true,
                title: '<img src="styles/legend/Viikinrantatracks_0.png" /> Viikinranta tracks'
            });
var format_Vallilatracks_1 = new ol.format.GeoJSON();
var features_Vallilatracks_1 = format_Vallilatracks_1.readFeatures(json_Vallilatracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Vallilatracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vallilatracks_1.addFeatures(features_Vallilatracks_1);
var lyr_Vallilatracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vallilatracks_1, 
                style: style_Vallilatracks_1,
                interactive: true,
                title: '<img src="styles/legend/Vallilatracks_1.png" /> Vallila tracks'
            });
var format_stersundomtracks_2 = new ol.format.GeoJSON();
var features_stersundomtracks_2 = format_stersundomtracks_2.readFeatures(json_stersundomtracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_stersundomtracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stersundomtracks_2.addFeatures(features_stersundomtracks_2);
var lyr_stersundomtracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stersundomtracks_2, 
                style: style_stersundomtracks_2,
                interactive: true,
                title: '<img src="styles/legend/stersundomtracks_2.png" /> Östersundom tracks'
            });
var format_Munkkivuoritracks_3 = new ol.format.GeoJSON();
var features_Munkkivuoritracks_3 = format_Munkkivuoritracks_3.readFeatures(json_Munkkivuoritracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Munkkivuoritracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munkkivuoritracks_3.addFeatures(features_Munkkivuoritracks_3);
var lyr_Munkkivuoritracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Munkkivuoritracks_3, 
                style: style_Munkkivuoritracks_3,
                interactive: true,
                title: '<img src="styles/legend/Munkkivuoritracks_3.png" /> Munkkivuori tracks'
            });
var format_MeriRastilatracks_4 = new ol.format.GeoJSON();
var features_MeriRastilatracks_4 = format_MeriRastilatracks_4.readFeatures(json_MeriRastilatracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_MeriRastilatracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeriRastilatracks_4.addFeatures(features_MeriRastilatracks_4);
var lyr_MeriRastilatracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MeriRastilatracks_4, 
                style: style_MeriRastilatracks_4,
                interactive: true,
                title: '<img src="styles/legend/MeriRastilatracks_4.png" /> Meri-Rastila tracks'
            });
var format_Maununnevatracks_5 = new ol.format.GeoJSON();
var features_Maununnevatracks_5 = format_Maununnevatracks_5.readFeatures(json_Maununnevatracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Maununnevatracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maununnevatracks_5.addFeatures(features_Maununnevatracks_5);
var lyr_Maununnevatracks_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maununnevatracks_5, 
                style: style_Maununnevatracks_5,
                interactive: true,
                title: '<img src="styles/legend/Maununnevatracks_5.png" /> Maununneva tracks'
            });
var format_Lnsikpyltracks_6 = new ol.format.GeoJSON();
var features_Lnsikpyltracks_6 = format_Lnsikpyltracks_6.readFeatures(json_Lnsikpyltracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Lnsikpyltracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lnsikpyltracks_6.addFeatures(features_Lnsikpyltracks_6);
var lyr_Lnsikpyltracks_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lnsikpyltracks_6, 
                style: style_Lnsikpyltracks_6,
                interactive: true,
                title: '<img src="styles/legend/Lnsikpyltracks_6.png" /> Länsi-käpylä tracks'
            });
var format_Lauttasaaripart1tracks_7 = new ol.format.GeoJSON();
var features_Lauttasaaripart1tracks_7 = format_Lauttasaaripart1tracks_7.readFeatures(json_Lauttasaaripart1tracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Lauttasaaripart1tracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lauttasaaripart1tracks_7.addFeatures(features_Lauttasaaripart1tracks_7);
var lyr_Lauttasaaripart1tracks_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lauttasaaripart1tracks_7, 
                style: style_Lauttasaaripart1tracks_7,
                interactive: true,
                title: '<img src="styles/legend/Lauttasaaripart1tracks_7.png" /> Lauttasaari part 1 tracks'
            });
var format_Koskelatracks_8 = new ol.format.GeoJSON();
var features_Koskelatracks_8 = format_Koskelatracks_8.readFeatures(json_Koskelatracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Koskelatracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Koskelatracks_8.addFeatures(features_Koskelatracks_8);
var lyr_Koskelatracks_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Koskelatracks_8, 
                style: style_Koskelatracks_8,
                interactive: true,
                title: '<img src="styles/legend/Koskelatracks_8.png" /> Koskela tracks'
            });
var format_Katajanokkatracks_9 = new ol.format.GeoJSON();
var features_Katajanokkatracks_9 = format_Katajanokkatracks_9.readFeatures(json_Katajanokkatracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Katajanokkatracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Katajanokkatracks_9.addFeatures(features_Katajanokkatracks_9);
var lyr_Katajanokkatracks_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Katajanokkatracks_9, 
                style: style_Katajanokkatracks_9,
                interactive: true,
                title: '<img src="styles/legend/Katajanokkatracks_9.png" /> Katajanokka tracks'
            });
var format_Karhusaaritracks_10 = new ol.format.GeoJSON();
var features_Karhusaaritracks_10 = format_Karhusaaritracks_10.readFeatures(json_Karhusaaritracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Karhusaaritracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karhusaaritracks_10.addFeatures(features_Karhusaaritracks_10);
var lyr_Karhusaaritracks_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Karhusaaritracks_10, 
                style: style_Karhusaaritracks_10,
                interactive: true,
                title: '<img src="styles/legend/Karhusaaritracks_10.png" /> Karhusaari tracks'
            });
var format_ItPasilatracks_11 = new ol.format.GeoJSON();
var features_ItPasilatracks_11 = format_ItPasilatracks_11.readFeatures(json_ItPasilatracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_ItPasilatracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ItPasilatracks_11.addFeatures(features_ItPasilatracks_11);
var lyr_ItPasilatracks_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ItPasilatracks_11, 
                style: style_ItPasilatracks_11,
                interactive: true,
                title: '<img src="styles/legend/ItPasilatracks_11.png" /> Itä-Pasila tracks'
            });
var format_Alppilatracks_12 = new ol.format.GeoJSON();
var features_Alppilatracks_12 = format_Alppilatracks_12.readFeatures(json_Alppilatracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Alppilatracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alppilatracks_12.addFeatures(features_Alppilatracks_12);
var lyr_Alppilatracks_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alppilatracks_12, 
                style: style_Alppilatracks_12,
                interactive: true,
                title: '<img src="styles/legend/Alppilatracks_12.png" /> Alppila tracks'
            });
var format_AlaTikkurilatracks_13 = new ol.format.GeoJSON();
var features_AlaTikkurilatracks_13 = format_AlaTikkurilatracks_13.readFeatures(json_AlaTikkurilatracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_AlaTikkurilatracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlaTikkurilatracks_13.addFeatures(features_AlaTikkurilatracks_13);
var lyr_AlaTikkurilatracks_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlaTikkurilatracks_13, 
                style: style_AlaTikkurilatracks_13,
                interactive: true,
                title: '<img src="styles/legend/AlaTikkurilatracks_13.png" /> Ala-Tikkurila tracks'
            });

        var lyr_CartoPositron_14 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_everysinglestreet_routes_15 = new ol.format.GeoJSON();
var features_everysinglestreet_routes_15 = format_everysinglestreet_routes_15.readFeatures(json_everysinglestreet_routes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_everysinglestreet_routes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_everysinglestreet_routes_15.addFeatures(features_everysinglestreet_routes_15);
var lyr_everysinglestreet_routes_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_everysinglestreet_routes_15, 
                style: style_everysinglestreet_routes_15,
                interactive: true,
    title: 'everysinglestreet_routes<br />\
    <img src="styles/legend/everysinglestreet_routes_15_0.png" /> true<br />\
    <img src="styles/legend/everysinglestreet_routes_15_1.png" /> false<br />'
        });
var format_missedstreetsTracks_16 = new ol.format.GeoJSON();
var features_missedstreetsTracks_16 = format_missedstreetsTracks_16.readFeatures(json_missedstreetsTracks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_missedstreetsTracks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_missedstreetsTracks_16.addFeatures(features_missedstreetsTracks_16);
var lyr_missedstreetsTracks_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_missedstreetsTracks_16, 
                style: style_missedstreetsTracks_16,
                interactive: true,
                title: '<img src="styles/legend/missedstreetsTracks_16.png" /> missed streets Tracks'
            });
var format_helsinkiborder_17 = new ol.format.GeoJSON();
var features_helsinkiborder_17 = format_helsinkiborder_17.readFeatures(json_helsinkiborder_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_helsinkiborder_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinkiborder_17.addFeatures(features_helsinkiborder_17);
var lyr_helsinkiborder_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinkiborder_17, 
                style: style_helsinkiborder_17,
                interactive: true,
                title: '<img src="styles/legend/helsinkiborder_17.png" /> helsinki border'
            });
var format_photos_18 = new ol.format.GeoJSON();
var features_photos_18 = format_photos_18.readFeatures(json_photos_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_photos_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_photos_18.addFeatures(features_photos_18);
var lyr_photos_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_photos_18, 
                style: style_photos_18,
                interactive: true,
                title: '<img src="styles/legend/photos_18.png" /> photos'
            });
var group_gpstracks = new ol.layer.Group({
                                layers: [lyr_Viikinrantatracks_0,lyr_Vallilatracks_1,lyr_stersundomtracks_2,lyr_Munkkivuoritracks_3,lyr_MeriRastilatracks_4,lyr_Maununnevatracks_5,lyr_Lnsikpyltracks_6,lyr_Lauttasaaripart1tracks_7,lyr_Koskelatracks_8,lyr_Katajanokkatracks_9,lyr_Karhusaaritracks_10,lyr_ItPasilatracks_11,lyr_Alppilatracks_12,lyr_AlaTikkurilatracks_13,],
                                title: "gps tracks"});

lyr_Viikinrantatracks_0.setVisible(true);lyr_Vallilatracks_1.setVisible(true);lyr_stersundomtracks_2.setVisible(true);lyr_Munkkivuoritracks_3.setVisible(true);lyr_MeriRastilatracks_4.setVisible(true);lyr_Maununnevatracks_5.setVisible(true);lyr_Lnsikpyltracks_6.setVisible(true);lyr_Lauttasaaripart1tracks_7.setVisible(true);lyr_Koskelatracks_8.setVisible(true);lyr_Katajanokkatracks_9.setVisible(true);lyr_Karhusaaritracks_10.setVisible(true);lyr_ItPasilatracks_11.setVisible(true);lyr_Alppilatracks_12.setVisible(true);lyr_AlaTikkurilatracks_13.setVisible(true);lyr_CartoPositron_14.setVisible(true);lyr_everysinglestreet_routes_15.setVisible(true);lyr_missedstreetsTracks_16.setVisible(true);lyr_helsinkiborder_17.setVisible(true);lyr_photos_18.setVisible(true);
var layersList = [group_gpstracks,lyr_CartoPositron_14,lyr_everysinglestreet_routes_15,lyr_missedstreetsTracks_16,lyr_helsinkiborder_17,lyr_photos_18];
lyr_Viikinrantatracks_0.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Vallilatracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_stersundomtracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Munkkivuoritracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_MeriRastilatracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Maununnevatracks_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Lnsikpyltracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Lauttasaaripart1tracks_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Koskelatracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Katajanokkatracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Karhusaaritracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_ItPasilatracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Alppilatracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_AlaTikkurilatracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_everysinglestreet_routes_15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Length': 'Length', 'Done': 'Done', });
lyr_missedstreetsTracks_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_helsinkiborder_17.set('fieldAliases', {'fid': 'fid', });
lyr_photos_18.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Viikinrantatracks_0.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Vallilatracks_1.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_stersundomtracks_2.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Munkkivuoritracks_3.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_MeriRastilatracks_4.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Maununnevatracks_5.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Lnsikpyltracks_6.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Lauttasaaripart1tracks_7.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Koskelatracks_8.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Katajanokkatracks_9.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Karhusaaritracks_10.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_ItPasilatracks_11.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Alppilatracks_12.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_AlaTikkurilatracks_13.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_everysinglestreet_routes_15.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Length': 'TextEdit', 'Done': 'CheckBox', });
lyr_missedstreetsTracks_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_helsinkiborder_17.set('fieldImages', {'fid': '', });
lyr_photos_18.set('fieldImages', {'fid': 'Hidden', 'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'Hidden', 'direction': 'Hidden', 'longitude': 'Hidden', 'latitude': 'Hidden', 'timestamp': 'Hidden', });
lyr_Viikinrantatracks_0.set('fieldLabels', {});
lyr_Vallilatracks_1.set('fieldLabels', {});
lyr_stersundomtracks_2.set('fieldLabels', {});
lyr_Munkkivuoritracks_3.set('fieldLabels', {});
lyr_MeriRastilatracks_4.set('fieldLabels', {});
lyr_Maununnevatracks_5.set('fieldLabels', {});
lyr_Lnsikpyltracks_6.set('fieldLabels', {});
lyr_Lauttasaaripart1tracks_7.set('fieldLabels', {});
lyr_Koskelatracks_8.set('fieldLabels', {});
lyr_Katajanokkatracks_9.set('fieldLabels', {});
lyr_Karhusaaritracks_10.set('fieldLabels', {});
lyr_ItPasilatracks_11.set('fieldLabels', {});
lyr_Alppilatracks_12.set('fieldLabels', {});
lyr_AlaTikkurilatracks_13.set('fieldLabels', {});
lyr_everysinglestreet_routes_15.set('fieldLabels', {'Name': 'header label', 'Length': 'header label', 'Done': 'header label', });
lyr_missedstreetsTracks_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_helsinkiborder_17.set('fieldLabels', {'fid': 'no label', });
lyr_photos_18.set('fieldLabels', {'photo': 'no label', });
lyr_photos_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});