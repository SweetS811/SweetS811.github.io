var wms_layers = [];


        var lyr_Statelit_0 = new ol.layer.Tile({
            'title': 'Statelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Ikan_1 = new ol.format.GeoJSON();
var features_Ikan_1 = format_Ikan_1.readFeatures(json_Ikan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ikan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ikan_1.addFeatures(features_Ikan_1);
var lyr_Ikan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ikan_1, 
                style: style_Ikan_1,
                interactive: true,
                title: '<img src="styles/legend/Ikan_1.png" /> Ikan'
            });

lyr_Statelit_0.setVisible(true);lyr_Ikan_1.setVisible(true);
var layersList = [lyr_Statelit_0,lyr_Ikan_1];
lyr_Ikan_1.set('fieldAliases', {'id': 'id', 'Gambar': 'Gambar', });
lyr_Ikan_1.set('fieldImages', {'id': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_Ikan_1.set('fieldLabels', {'id': 'no label', 'Gambar': 'no label', });
lyr_Ikan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});