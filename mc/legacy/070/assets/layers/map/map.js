parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"naNl":[function(require,module,exports) {
module.exports={id:"map",name:{en:"Maps",nl:"Kaarten",it:"Mappe",ru:"Карты",fr:"Cartes",de:"Karten"},minzoom:12,source:{osmTags:{or:["tourism=map","information=map"]}},title:{render:{en:"Map",nl:"Kaart",it:"Mappa",ru:"Карта",fr:"Carte",de:"Karte"}},description:{en:"A map, meant for tourists which is permanently installed in the public space",nl:"Een permantent geinstalleerde kaart",it:"Una mappa, destinata ai turisti e che è sistemata in maniera permanente in uno spazio pubblico",fr:"Une carte, destinée aux touristes, installée en permanence dans l'espace public"},tagRenderings:["images",{question:{en:"On which data is this map based?",nl:"Op welke data is deze kaart gebaseerd?",it:"Su quali dati si basa questa mappa?",fr:"Sur quelles données cette carte est-elle basée ?",de:"Auf welchen Daten basiert diese Karte?"},mappings:[{if:{and:["map_source=OpenStreetMap","not:map_source="]},then:{en:"This map is based on OpenStreetMap",nl:"Deze kaart is gebaseerd op OpenStreetMap",it:"Questa mappa si basa su OpenStreetMap",ru:"Эта карта основана на OpenStreetMap",fr:"Cette carte est basée sur OpenStreetMap",de:"Diese Karte basiert auf OpenStreetMap"}}],freeform:{key:"map_source"},render:{en:"This map is based on {map_source}",nl:"Deze kaart is gebaseerd op {map_source}",it:"Questa mappa si basa su {map_source}",ru:"Эта карта основана на {map_source}",fr:"Cette carte est basée sur {map_source}",de:"Diese Karte basiert auf {map_source}"}},{question:{en:"Is the OpenStreetMap-attribution given?",nl:"Is de attributie voor OpenStreetMap aanwezig?",it:"L’attribuzione a OpenStreetMap è presente?",de:"Ist die OpenStreetMap-Attribution vorhanden?"},mappings:[{if:{and:["map_source:attribution=yes"]},then:{en:"OpenStreetMap is clearly attributed, including the ODBL-license",nl:'De OpenStreetMap-attributie is duidelijk aangegeven, zelf met vermelding van "ODBL" ',it:"L’attribuzione a OpenStreetMap è chiaramente specificata, inclusa la licenza ODBL",de:"OpenStreetMap ist eindeutig attributiert, einschließlich der ODBL-Lizenz"}},{if:{and:["map_source:attribution=incomplete"]},then:{en:"OpenStreetMap is clearly attributed, but the license is not mentioned",nl:"OpenStreetMap is duidelijk aangegeven, maar de licentievermelding ontbreekt",it:"L’attribuzione a OpenStreetMap è chiaramente specificata ma la licenza non compare",de:"OpenStreetMap ist eindeutig attributiert, aber die Lizenz wird nicht erwähnt"}},{if:{and:["map_source:attribution=sticker"]},then:{en:"OpenStreetMap wasn't mentioned, but someone put an OpenStreetMap-sticker on it",nl:"OpenStreetMap was oorspronkelijk niet aangeduid, maar iemand plaatste er een sticker",it:"Non era presente alcun cenno a OpenStreetMap ma qualcuno vi ha attaccato un adesivo di OpenStreetMap",de:"OpenStreetMap wurde nicht erwähnt, aber jemand hat einen OpenStreetMap-Aufkleber darauf geklebt"}},{if:{and:["map_source:attribution=none"]},then:{en:"There is no attribution at all",nl:"Er is geen attributie",it:"Non c’è alcuna attribuzione",fr:"Il n'y a aucune attribution",de:"Es gibt überhaupt keine Namensnennung"}},{if:{and:["map_source:attribution=no"]},then:{nl:"Er is geen attributie",en:"There is no attribution at all",it:"Non c’è alcuna attribuzione",fr:"Il n'y a aucune attribution",de:"Es gibt überhaupt keine Namensnennung"},hideInAnswer:!0}],condition:{or:["map_source~(O|)pen(S|s)treet(M|m)ap","map_source=osm","map_source=OSM"]}}],hideUnderlayingFeaturesMinPercentage:0,icon:{render:"./assets/layers/map/map.svg",mappings:[{if:{and:["map_source=OpenStreetMap","map_source:attribution=sticker"]},then:"./assets/layers/map/map-stickered.svg"},{if:{and:["map_source=OpenStreetMap","map_source:attribution=yes"]},then:"./assets/layers/map/osm-logo-white-bg.svg"},{if:{and:["map_source=OpenStreetMap"]},then:"./assets/layers/map/osm-logo-buggy-attr.svg"}]},width:{render:"8"},iconSize:{render:"50,50,center"},color:{render:"#00f"},presets:[{tags:["tourism=map"],title:{en:"Map",nl:"Kaart",it:"Mappa",ru:"Карта",fr:"Carte",de:"Karte"},description:{en:"Add a missing map",nl:"Voeg een ontbrekende kaart toe",it:"Aggiungi una mappa mancante",fr:"Ajouter une carte manquante",de:"Fehlende Karte hinzufügen"}}],wayHandling:2};
},{}]},{},["naNl"], null)
//# sourceMappingURL=assets/layers/map/map.js.map