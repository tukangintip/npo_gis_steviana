var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });
var lyr_Saudi_pop_2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Saudi_pop_2025<br />\
    <img src="styles/legend/Saudi_pop_2025_1_0.png" /> 0<br />\
    <img src="styles/legend/Saudi_pop_2025_1_1.png" /> 9006.91<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Saudi_pop_2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3839594.674436, 1849157.914205, 6196784.882555, 3784112.356542]
        })
    });
var format_allsaleswazadonly_2 = new ol.format.GeoJSON();
var features_allsaleswazadonly_2 = format_allsaleswazadonly_2.readFeatures(json_allsaleswazadonly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allsaleswazadonly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allsaleswazadonly_2.addFeatures(features_allsaleswazadonly_2);
var lyr_allsaleswazadonly_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allsaleswazadonly_2, 
                style: style_allsaleswazadonly_2,
                popuplayertitle: 'all-sales-wazad-only',
                interactive: true,
                title: '<img src="styles/legend/allsaleswazadonly_2.png" /> all-sales-wazad-only'
            });
var format_nposteviana_3 = new ol.format.GeoJSON();
var features_nposteviana_3 = format_nposteviana_3.readFeatures(json_nposteviana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nposteviana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nposteviana_3.addFeatures(features_nposteviana_3);
var lyr_nposteviana_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nposteviana_3, 
                style: style_nposteviana_3,
                popuplayertitle: 'npo-steviana',
                interactive: true,
                title: '<img src="styles/legend/nposteviana_3.png" /> npo-steviana'
            });
var format_SumWZD_4 = new ol.format.GeoJSON();
var features_SumWZD_4 = format_SumWZD_4.readFeatures(json_SumWZD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumWZD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumWZD_4.addFeatures(features_SumWZD_4);
var lyr_SumWZD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumWZD_4, 
                style: style_SumWZD_4,
                popuplayertitle: 'Sum-WZD',
                interactive: true,
                title: '<img src="styles/legend/SumWZD_4.png" /> Sum-WZD'
            });
var format_SumNPO_5 = new ol.format.GeoJSON();
var features_SumNPO_5 = format_SumNPO_5.readFeatures(json_SumNPO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumNPO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumNPO_5.addFeatures(features_SumNPO_5);
var lyr_SumNPO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumNPO_5, 
                style: style_SumNPO_5,
                popuplayertitle: 'Sum-NPO',
                interactive: true,
                title: '<img src="styles/legend/SumNPO_5.png" /> Sum-NPO'
            });

lyr_googlemaps_0.setVisible(true);lyr_Saudi_pop_2025_1.setVisible(true);lyr_allsaleswazadonly_2.setVisible(true);lyr_nposteviana_3.setVisible(true);lyr_SumWZD_4.setVisible(true);lyr_SumNPO_5.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_Saudi_pop_2025_1,lyr_allsaleswazadonly_2,lyr_nposteviana_3,lyr_SumWZD_4,lyr_SumNPO_5];
lyr_allsaleswazadonly_2.set('fieldAliases', {'Sales Code': 'Sales Code', });
lyr_nposteviana_3.set('fieldAliases', {'code': 'code', 'customer_name': 'customer_name', 'visit_type': 'visit_type', });
lyr_SumWZD_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'district_id': 'district_id', 'city_id': 'city_id', 'region_id': 'region_id', 'name_ar': 'name_ar', 'name_en': 'name_en', 'WZD_SUM': 'WZD_SUM', });
lyr_SumNPO_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'district_id': 'district_id', 'city_id': 'city_id', 'region_id': 'region_id', 'name_ar': 'name_ar', 'name_en': 'name_en', 'POP_SUM': 'POP_SUM', 'NPO_SUM': 'NPO_SUM', });
lyr_allsaleswazadonly_2.set('fieldImages', {'Sales Code': 'TextEdit', });
lyr_nposteviana_3.set('fieldImages', {'code': 'TextEdit', 'customer_name': 'TextEdit', 'visit_type': 'TextEdit', });
lyr_SumWZD_4.set('fieldImages', {'OBJECTID': 'Hidden', 'district_id': 'Hidden', 'city_id': 'Hidden', 'region_id': 'Hidden', 'name_ar': 'Hidden', 'name_en': 'TextEdit', 'WZD_SUM': 'TextEdit', });
lyr_SumNPO_5.set('fieldImages', {'OBJECTID': 'Hidden', 'district_id': 'Hidden', 'city_id': 'Hidden', 'region_id': 'Hidden', 'name_ar': 'Hidden', 'name_en': 'TextEdit', 'POP_SUM': 'TextEdit', 'NPO_SUM': 'TextEdit', });
lyr_allsaleswazadonly_2.set('fieldLabels', {'Sales Code': 'no label', });
lyr_nposteviana_3.set('fieldLabels', {'code': 'no label', 'customer_name': 'no label', 'visit_type': 'hidden field', });
lyr_SumWZD_4.set('fieldLabels', {'name_en': 'no label', 'WZD_SUM': 'inline label - visible with data', });
lyr_SumNPO_5.set('fieldLabels', {'name_en': 'no label', 'POP_SUM': 'inline label - visible with data', 'NPO_SUM': 'inline label - visible with data', });
lyr_SumNPO_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});