var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_danautoba_1 = new ol.format.GeoJSON();
var features_danautoba_1 = format_danautoba_1.readFeatures(json_danautoba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danautoba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danautoba_1.addFeatures(features_danautoba_1);
var lyr_danautoba_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danautoba_1, 
                style: style_danautoba_1,
                interactive: true,
                title: '<img src="styles/legend/danautoba_1.png" /> danau toba'
            });
var format_danauranau_2 = new ol.format.GeoJSON();
var features_danauranau_2 = format_danauranau_2.readFeatures(json_danauranau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danauranau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danauranau_2.addFeatures(features_danauranau_2);
var lyr_danauranau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danauranau_2, 
                style: style_danauranau_2,
                interactive: true,
                title: '<img src="styles/legend/danauranau_2.png" /> danau ranau'
            });
var format_danausingkarak_3 = new ol.format.GeoJSON();
var features_danausingkarak_3 = format_danausingkarak_3.readFeatures(json_danausingkarak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danausingkarak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danausingkarak_3.addFeatures(features_danausingkarak_3);
var lyr_danausingkarak_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danausingkarak_3, 
                style: style_danausingkarak_3,
                interactive: true,
                title: '<img src="styles/legend/danausingkarak_3.png" /> danau singkarak'
            });
var format_danautowuti_4 = new ol.format.GeoJSON();
var features_danautowuti_4 = format_danautowuti_4.readFeatures(json_danautowuti_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danautowuti_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danautowuti_4.addFeatures(features_danautowuti_4);
var lyr_danautowuti_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danautowuti_4, 
                style: style_danautowuti_4,
                interactive: true,
                title: '<img src="styles/legend/danautowuti_4.png" /> danau towuti'
            });
var format_danaumatano_5 = new ol.format.GeoJSON();
var features_danaumatano_5 = format_danaumatano_5.readFeatures(json_danaumatano_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danaumatano_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danaumatano_5.addFeatures(features_danaumatano_5);
var lyr_danaumatano_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danaumatano_5, 
                style: style_danaumatano_5,
                interactive: true,
                title: '<img src="styles/legend/danaumatano_5.png" /> danau matano'
            });
var format_danaupaniai_6 = new ol.format.GeoJSON();
var features_danaupaniai_6 = format_danaupaniai_6.readFeatures(json_danaupaniai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danaupaniai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danaupaniai_6.addFeatures(features_danaupaniai_6);
var lyr_danaupaniai_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danaupaniai_6, 
                style: style_danaupaniai_6,
                interactive: true,
                title: '<img src="styles/legend/danaupaniai_6.png" /> danau paniai'
            });
var format_danauposo_7 = new ol.format.GeoJSON();
var features_danauposo_7 = format_danauposo_7.readFeatures(json_danauposo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danauposo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danauposo_7.addFeatures(features_danauposo_7);
var lyr_danauposo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danauposo_7, 
                style: style_danauposo_7,
                interactive: true,
                title: '<img src="styles/legend/danauposo_7.png" /> danau poso'
            });
var format_tamannasionalsebangau_8 = new ol.format.GeoJSON();
var features_tamannasionalsebangau_8 = format_tamannasionalsebangau_8.readFeatures(json_tamannasionalsebangau_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamannasionalsebangau_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamannasionalsebangau_8.addFeatures(features_tamannasionalsebangau_8);
var lyr_tamannasionalsebangau_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamannasionalsebangau_8, 
                style: style_tamannasionalsebangau_8,
                interactive: true,
                title: '<img src="styles/legend/tamannasionalsebangau_8.png" /> taman nasional sebangau'
            });
var format_danausentarumfix_9 = new ol.format.GeoJSON();
var features_danausentarumfix_9 = format_danausentarumfix_9.readFeatures(json_danausentarumfix_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danausentarumfix_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danausentarumfix_9.addFeatures(features_danausentarumfix_9);
var lyr_danausentarumfix_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danausentarumfix_9, 
                style: style_danausentarumfix_9,
                interactive: true,
                title: '<img src="styles/legend/danausentarumfix_9.png" /> danau sentarum fix'
            });
var format_danautempe_10 = new ol.format.GeoJSON();
var features_danautempe_10 = format_danautempe_10.readFeatures(json_danautempe_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danautempe_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danautempe_10.addFeatures(features_danautempe_10);
var lyr_danautempe_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danautempe_10, 
                style: style_danautempe_10,
                interactive: true,
                title: '<img src="styles/legend/danautempe_10.png" /> danau tempe'
            });
var format_ikanendemik_11 = new ol.format.GeoJSON();
var features_ikanendemik_11 = format_ikanendemik_11.readFeatures(json_ikanendemik_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ikanendemik_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ikanendemik_11.addFeatures(features_ikanendemik_11);
var lyr_ikanendemik_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ikanendemik_11, 
                style: style_ikanendemik_11,
                interactive: true,
                title: '<img src="styles/legend/ikanendemik_11.png" /> ikan endemik'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_danautoba_1.setVisible(true);lyr_danauranau_2.setVisible(true);lyr_danausingkarak_3.setVisible(true);lyr_danautowuti_4.setVisible(true);lyr_danaumatano_5.setVisible(true);lyr_danaupaniai_6.setVisible(true);lyr_danauposo_7.setVisible(true);lyr_tamannasionalsebangau_8.setVisible(true);lyr_danausentarumfix_9.setVisible(true);lyr_danautempe_10.setVisible(true);lyr_ikanendemik_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_danautoba_1,lyr_danauranau_2,lyr_danausingkarak_3,lyr_danautowuti_4,lyr_danaumatano_5,lyr_danaupaniai_6,lyr_danauposo_7,lyr_tamannasionalsebangau_8,lyr_danausentarumfix_9,lyr_danautempe_10,lyr_ikanendemik_11];
lyr_danautoba_1.set('fieldAliases', {'id': 'id', });
lyr_danauranau_2.set('fieldAliases', {'id': 'id', });
lyr_danausingkarak_3.set('fieldAliases', {'id': 'id', });
lyr_danautowuti_4.set('fieldAliases', {'id': 'id', });
lyr_danaumatano_5.set('fieldAliases', {'id': 'id', });
lyr_danaupaniai_6.set('fieldAliases', {'id': 'id', });
lyr_danauposo_7.set('fieldAliases', {'id': 'id', });
lyr_tamannasionalsebangau_8.set('fieldAliases', {'id': 'id', });
lyr_danausentarumfix_9.set('fieldAliases', {'id': 'id', });
lyr_danautempe_10.set('fieldAliases', {'id': 'id', });
lyr_ikanendemik_11.set('fieldAliases', {'id': 'id', 'nama_lokal': 'nama_lokal', 'asaldaerah': 'asaldaerah', 'IUCN': 'IUCN', 'nama_latin': 'nama_latin', 'nama_umum': 'nama_umum', 'deskripsi': 'deskripsi', 'Gambar': 'Gambar', });
lyr_danautoba_1.set('fieldImages', {'id': '', });
lyr_danauranau_2.set('fieldImages', {'id': '', });
lyr_danausingkarak_3.set('fieldImages', {'id': '', });
lyr_danautowuti_4.set('fieldImages', {'id': '', });
lyr_danaumatano_5.set('fieldImages', {'id': '', });
lyr_danaupaniai_6.set('fieldImages', {'id': '', });
lyr_danauposo_7.set('fieldImages', {'id': '', });
lyr_tamannasionalsebangau_8.set('fieldImages', {'id': '', });
lyr_danausentarumfix_9.set('fieldImages', {'id': '', });
lyr_danautempe_10.set('fieldImages', {'id': '', });
lyr_ikanendemik_11.set('fieldImages', {'id': 'TextEdit', 'nama_lokal': 'TextEdit', 'asaldaerah': 'TextEdit', 'IUCN': 'TextEdit', 'nama_latin': 'TextEdit', 'nama_umum': 'TextEdit', 'deskripsi': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_danautoba_1.set('fieldLabels', {'id': 'no label', });
lyr_danauranau_2.set('fieldLabels', {'id': 'no label', });
lyr_danausingkarak_3.set('fieldLabels', {'id': 'no label', });
lyr_danautowuti_4.set('fieldLabels', {'id': 'no label', });
lyr_danaumatano_5.set('fieldLabels', {'id': 'no label', });
lyr_danaupaniai_6.set('fieldLabels', {'id': 'no label', });
lyr_danauposo_7.set('fieldLabels', {'id': 'no label', });
lyr_tamannasionalsebangau_8.set('fieldLabels', {'id': 'no label', });
lyr_danausentarumfix_9.set('fieldLabels', {'id': 'no label', });
lyr_danautempe_10.set('fieldLabels', {'id': 'no label', });
lyr_ikanendemik_11.set('fieldLabels', {'id': 'no label', 'nama_lokal': 'no label', 'asaldaerah': 'no label', 'IUCN': 'no label', 'nama_latin': 'no label', 'nama_umum': 'no label', 'deskripsi': 'no label', 'Gambar': 'no label', });
lyr_ikanendemik_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});