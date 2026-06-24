var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Rgion_1 = new ol.format.GeoJSON();
var features_Rgion_1 = format_Rgion_1.readFeatures(json_Rgion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgion_1.addFeatures(features_Rgion_1);
var lyr_Rgion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgion_1, 
                style: style_Rgion_1,
                popuplayertitle: 'Région',
                interactive: true,
    title: 'Région<br />\
    <img src="styles/legend/Rgion_1_0.png" /> BOUCLE DU MOUHOUN<br />\
    <img src="styles/legend/Rgion_1_1.png" /> CASCADES<br />\
    <img src="styles/legend/Rgion_1_2.png" /> CENTRE<br />\
    <img src="styles/legend/Rgion_1_3.png" /> CENTRE-EST<br />\
    <img src="styles/legend/Rgion_1_4.png" /> CENTRE-NORD<br />\
    <img src="styles/legend/Rgion_1_5.png" /> CENTRE-OUEST<br />\
    <img src="styles/legend/Rgion_1_6.png" /> CENTRE-SUD<br />\
    <img src="styles/legend/Rgion_1_7.png" /> EST<br />\
    <img src="styles/legend/Rgion_1_8.png" /> HAUTS-BASSINS<br />\
    <img src="styles/legend/Rgion_1_9.png" /> NORD<br />\
    <img src="styles/legend/Rgion_1_10.png" /> PLATEAU-CENTRAL<br />\
    <img src="styles/legend/Rgion_1_11.png" /> SAHEL<br />\
    <img src="styles/legend/Rgion_1_12.png" /> SUD-OUEST<br />' });
var format_Chef_lieu_region_2 = new ol.format.GeoJSON();
var features_Chef_lieu_region_2 = format_Chef_lieu_region_2.readFeatures(json_Chef_lieu_region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Chef_lieu_region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chef_lieu_region_2.addFeatures(features_Chef_lieu_region_2);
var lyr_Chef_lieu_region_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chef_lieu_region_2, 
                style: style_Chef_lieu_region_2,
                popuplayertitle: 'Chef_lieu_region',
                interactive: true,
    title: 'Chef_lieu_region<br />\
    <img src="styles/legend/Chef_lieu_region_2_0.png" /> BOUCLE DU MOUHOUN<br />\
    <img src="styles/legend/Chef_lieu_region_2_1.png" /> CASCADES<br />\
    <img src="styles/legend/Chef_lieu_region_2_2.png" /> CENTRE<br />\
    <img src="styles/legend/Chef_lieu_region_2_3.png" /> CENTRE-EST<br />\
    <img src="styles/legend/Chef_lieu_region_2_4.png" /> CENTRE-NORD<br />\
    <img src="styles/legend/Chef_lieu_region_2_5.png" /> CENTRE-OUEST<br />\
    <img src="styles/legend/Chef_lieu_region_2_6.png" /> CENTRE-SUD<br />\
    <img src="styles/legend/Chef_lieu_region_2_7.png" /> EST<br />\
    <img src="styles/legend/Chef_lieu_region_2_8.png" /> HAUTS-BASSINS<br />\
    <img src="styles/legend/Chef_lieu_region_2_9.png" /> NORD<br />\
    <img src="styles/legend/Chef_lieu_region_2_10.png" /> PLATEAU-CENTRAL<br />\
    <img src="styles/legend/Chef_lieu_region_2_11.png" /> SAHEL<br />\
    <img src="styles/legend/Chef_lieu_region_2_12.png" /> SUD-OUEST<br />\
    <img src="styles/legend/Chef_lieu_region_2_13.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Rgion_1.setVisible(true);lyr_Chef_lieu_region_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Rgion_1,lyr_Chef_lieu_region_2];
lyr_Rgion_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_Chef_lieu_region_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rgion_1.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_Chef_lieu_region_2.set('fieldImages', {'OBJECTID': 'Range', 'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Rgion_1.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Chef_lieu_region_2.set('fieldLabels', {'OBJECTID': 'no label', 'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Chef_lieu_region_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});