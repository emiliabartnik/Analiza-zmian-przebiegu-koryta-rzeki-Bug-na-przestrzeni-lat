var wms_layers = [];

var format_Sentinel22024_0 = new ol.format.GeoJSON();
var features_Sentinel22024_0 = format_Sentinel22024_0.readFeatures(json_Sentinel22024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sentinel22024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sentinel22024_0.addFeatures(features_Sentinel22024_0);
var lyr_Sentinel22024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sentinel22024_0, 
                style: style_Sentinel22024_0,
                popuplayertitle: 'Sentinel-2 - 2024',
                interactive: true,
                title: '<img src="styles/legend/Sentinel22024_0.png" /> Sentinel-2 - 2024'
            });
var format_VMap1990_1 = new ol.format.GeoJSON();
var features_VMap1990_1 = format_VMap1990_1.readFeatures(json_VMap1990_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMap1990_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMap1990_1.addFeatures(features_VMap1990_1);
var lyr_VMap1990_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMap1990_1, 
                style: style_VMap1990_1,
                popuplayertitle: 'VMap - 1990',
                interactive: true,
                title: '<img src="styles/legend/VMap1990_1.png" /> VMap - 1990'
            });
var format_Mapahistoryczna1940_2 = new ol.format.GeoJSON();
var features_Mapahistoryczna1940_2 = format_Mapahistoryczna1940_2.readFeatures(json_Mapahistoryczna1940_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mapahistoryczna1940_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mapahistoryczna1940_2.addFeatures(features_Mapahistoryczna1940_2);
var lyr_Mapahistoryczna1940_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mapahistoryczna1940_2, 
                style: style_Mapahistoryczna1940_2,
                popuplayertitle: 'Mapa historyczna - 1940',
                interactive: true,
                title: '<img src="styles/legend/Mapahistoryczna1940_2.png" /> Mapa historyczna - 1940'
            });
var format_Rzekapynawprzynajmniejjednymzterminw_3 = new ol.format.GeoJSON();
var features_Rzekapynawprzynajmniejjednymzterminw_3 = format_Rzekapynawprzynajmniejjednymzterminw_3.readFeatures(json_Rzekapynawprzynajmniejjednymzterminw_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzekapynawprzynajmniejjednymzterminw_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzekapynawprzynajmniejjednymzterminw_3.addFeatures(features_Rzekapynawprzynajmniejjednymzterminw_3);
var lyr_Rzekapynawprzynajmniejjednymzterminw_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rzekapynawprzynajmniejjednymzterminw_3, 
                style: style_Rzekapynawprzynajmniejjednymzterminw_3,
                popuplayertitle: 'Rzeka płynęła w przynajmniej jednym z terminów',
                interactive: true,
                title: '<img src="styles/legend/Rzekapynawprzynajmniejjednymzterminw_3.png" /> Rzeka płynęła w przynajmniej jednym z terminów'
            });
var format_Rzekapynawkadymzterminw_4 = new ol.format.GeoJSON();
var features_Rzekapynawkadymzterminw_4 = format_Rzekapynawkadymzterminw_4.readFeatures(json_Rzekapynawkadymzterminw_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rzekapynawkadymzterminw_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rzekapynawkadymzterminw_4.addFeatures(features_Rzekapynawkadymzterminw_4);
var lyr_Rzekapynawkadymzterminw_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rzekapynawkadymzterminw_4, 
                style: style_Rzekapynawkadymzterminw_4,
                popuplayertitle: 'Rzeka płynęła w każdym z terminów',
                interactive: true,
                title: '<img src="styles/legend/Rzekapynawkadymzterminw_4.png" /> Rzeka płynęła w każdym z terminów'
            });
var format_PorwnanieWigiVMap_5 = new ol.format.GeoJSON();
var features_PorwnanieWigiVMap_5 = format_PorwnanieWigiVMap_5.readFeatures(json_PorwnanieWigiVMap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorwnanieWigiVMap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorwnanieWigiVMap_5.addFeatures(features_PorwnanieWigiVMap_5);
var lyr_PorwnanieWigiVMap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PorwnanieWigiVMap_5, 
                style: style_PorwnanieWigiVMap_5,
                popuplayertitle: 'Porównanie Wig i VMap',
                interactive: true,
    title: 'Porównanie Wig i VMap<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_0.png" /> -100 - -78<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_1.png" /> -78 - -47<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_2.png" /> -47 - -26<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_3.png" /> -26 - -12<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_4.png" /> -12 - -3<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_5.png" /> -3 - 8<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_6.png" /> 8 - 24<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_7.png" /> 24 - 44<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_8.png" /> 44 - 72<br />\
    <img src="styles/legend/PorwnanieWigiVMap_5_9.png" /> 72 - 100<br />' });
var format_PorwnanieVMapiSentinel2_6 = new ol.format.GeoJSON();
var features_PorwnanieVMapiSentinel2_6 = format_PorwnanieVMapiSentinel2_6.readFeatures(json_PorwnanieVMapiSentinel2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorwnanieVMapiSentinel2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorwnanieVMapiSentinel2_6.addFeatures(features_PorwnanieVMapiSentinel2_6);
var lyr_PorwnanieVMapiSentinel2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PorwnanieVMapiSentinel2_6, 
                style: style_PorwnanieVMapiSentinel2_6,
                popuplayertitle: 'Porównanie VMap i Sentinel-2 ',
                interactive: true,
    title: 'Porównanie VMap i Sentinel-2 <br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_0.png" /> -56 - -26<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_1.png" /> -26 - -15<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_2.png" /> -15 - -8<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_3.png" /> -8 - -3<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_4.png" /> -3 - 2<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_5.png" /> 2 - 8<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_6.png" /> 8 - 16<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_7.png" /> 16 - 27<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_8.png" /> 27 - 43<br />\
    <img src="styles/legend/PorwnanieVMapiSentinel2_6_9.png" /> 43 - 63<br />' });

lyr_Sentinel22024_0.setVisible(true);lyr_VMap1990_1.setVisible(true);lyr_Mapahistoryczna1940_2.setVisible(true);lyr_Rzekapynawprzynajmniejjednymzterminw_3.setVisible(true);lyr_Rzekapynawkadymzterminw_4.setVisible(true);lyr_PorwnanieWigiVMap_5.setVisible(true);lyr_PorwnanieVMapiSentinel2_6.setVisible(true);
var layersList = [lyr_Sentinel22024_0,lyr_VMap1990_1,lyr_Mapahistoryczna1940_2,lyr_Rzekapynawprzynajmniejjednymzterminw_3,lyr_Rzekapynawkadymzterminw_4,lyr_PorwnanieWigiVMap_5,lyr_PorwnanieVMapiSentinel2_6];
lyr_Sentinel22024_0.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VMap1990_1.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Mapahistoryczna1940_2.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rzekapynawprzynajmniejjednymzterminw_3.set('fieldAliases', {'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_Raster': 'FID_Raster', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'FID_Wektor': 'FID_Wektor', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rzekapynawkadymzterminw_4.set('fieldAliases', {'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_Wektor': 'FID_Wektor', 'Id_1': 'Id_1', 'FID_Raster': 'FID_Raster', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PorwnanieWigiVMap_5.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'WIG_VMap': 'WIG_VMap', 'VMap_Sen': 'VMap_Sen', 'Field': 'Field', });
lyr_PorwnanieVMapiSentinel2_6.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'WIG_VMap': 'WIG_VMap', 'VMap_Sen': 'VMap_Sen', 'Field': 'Field', });
lyr_Sentinel22024_0.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMap1990_1.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Mapahistoryczna1940_2.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rzekapynawprzynajmniejjednymzterminw_3.set('fieldImages', {'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'FID_Wektor': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Rzekapynawkadymzterminw_4.set('fieldImages', {'FID_HYDRO_': '', 'DLUG_BRZEG': '', 'DLUGOSC': '', 'DOKLADNOSC': '', 'DOSTEPNOSC': '', 'GLEBOKOSC': '', 'ISTNIENIE': '', 'KAT_HYDRO': '', 'KAT_PLYWU': '', 'KAT_POJEMN': '', 'KAT_POLOZ': '', 'KAT_WODY': '', 'NAJW_WYS': '', 'NAZWA': '', 'OBIEKT': '', 'OPR_UPUST': '', 'OPR_ZBURZ': '', 'POCH_HYDRO': '', 'PRED_PRZEP': '', 'SREDNIA_GL': '', 'STAT_EKSPL': '', 'SZEROKOSC': '', 'TAJNOSC': '', 'TYP_AKWED': '', 'TYP_WYBRZ': '', 'ZN_ORIENT': '', 'POWIERZCHN': '', 'ID': '', 'FID_Wektor': '', 'Id_1': '', 'FID_Raster': '', 'Id_12': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_PorwnanieWigiVMap_5.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'WIG_VMap': 'TextEdit', 'VMap_Sen': 'TextEdit', 'Field': 'TextEdit', });
lyr_PorwnanieVMapiSentinel2_6.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'WIG_VMap': 'TextEdit', 'VMap_Sen': 'TextEdit', 'Field': 'TextEdit', });
lyr_Sentinel22024_0.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_VMap1990_1.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Mapahistoryczna1940_2.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rzekapynawprzynajmniejjednymzterminw_3.set('fieldLabels', {'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_Raster': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'FID_Wektor': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rzekapynawkadymzterminw_4.set('fieldLabels', {'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'FID_Wektor': 'no label', 'Id_1': 'no label', 'FID_Raster': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PorwnanieWigiVMap_5.set('fieldLabels', {'Id': 'no label', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'WIG_VMap': 'no label', 'VMap_Sen': 'no label', 'Field': 'no label', });
lyr_PorwnanieVMapiSentinel2_6.set('fieldLabels', {'Id': 'no label', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'WIG_VMap': 'no label', 'VMap_Sen': 'no label', 'Field': 'no label', });
lyr_PorwnanieVMapiSentinel2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});