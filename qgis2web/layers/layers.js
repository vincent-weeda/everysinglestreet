ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3067").setExtent([379589.441762, 6668727.262655, 404026.422818, 6685989.211111]);
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
var format_gpstracks207_1 = new ol.format.GeoJSON();
var features_gpstracks207_1 = format_gpstracks207_1.readFeatures(json_gpstracks207_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_gpstracks207_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gpstracks207_1.addFeatures(features_gpstracks207_1);
var lyr_gpstracks207_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gpstracks207_1, 
                style: style_gpstracks207_1,
                interactive: true,
                title: '<img src="styles/legend/gpstracks207_1.png" /> gps tracks 20.7'
            });

lyr_basemap_0.setVisible(true);lyr_gpstracks207_1.setVisible(true);
var layersList = [lyr_basemap_0,lyr_gpstracks207_1];
lyr_gpstracks207_1.set('fieldAliases', {'fid': 'fid', 'Area': 'Area', 'Distance': 'Distance', 'Date': 'Date', 'Time': 'Time', 'Pace': 'Pace', 'Elevation': 'Elevation', 'Link': 'Link', 'Streets': 'Streets', 'run': 'run', });
lyr_gpstracks207_1.set('fieldImages', {'fid': 'Hidden', 'Area': 'TextEdit', 'Distance': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Pace': 'TextEdit', 'Elevation': 'TextEdit', 'Link': 'TextEdit', 'Streets': 'Range', 'run': 'Range', });
lyr_gpstracks207_1.set('fieldLabels', {'Area': 'inline label', 'Distance': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Pace': 'inline label', 'Elevation': 'inline label', 'Link': 'inline label', 'Streets': 'inline label', 'run': 'inline label', });
lyr_gpstracks207_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});