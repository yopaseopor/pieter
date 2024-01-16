parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cim7":[function(require,module,exports) {
module.exports={id:"bike_repair_station",name:{en:"Bike stations (repair, pump or both)",nl:"Fietspunten (herstel, pomp of allebei)",fr:"Station velo (réparation, pompe à vélo)",gl:"Estación de bicicletas (arranxo, bomba de ar ou ambos)",de:"Fahrradstationen (Reparatur, Pumpe oder beides)",it:"Stazioni bici (riparazione, gonfiaggio o entrambi)"},minzoom:13,source:{osmTags:{and:["amenity=bicycle_repair_station"]}},title:{render:{en:"Bike station (pump & repair)",nl:"Herstelpunt met pomp",fr:"Point station velo avec pompe",gl:"Estación de bicicletas (arranxo e bomba de ar)",de:"Fahrradstation (Pumpe & Reparatur)",it:"Stazione bici (gonfiaggio & riparazione)"},mappings:[{if:{or:["service:bicycle:pump=no","service:bicycle:pump:operational_status=broken"]},then:{en:"Bike repair station",nl:"Herstelpunt",fr:"Point de réparation velo",gl:"Estación de arranxo de bicicletas",de:"Fahrrad-Reparaturstation",it:"Stazione riparazione bici"}},{if:{and:["service:bicycle:pump=yes","service:bicycle:tools=yes"]},then:{en:"Bike repair station",nl:"Herstelpunt",fr:"Point de réparation",gl:"Estación de arranxo de bicicletas",de:"Fahrrad-Reparaturstation",it:"Stazione riparazione bici"}},{if:{and:["service:bicycle:pump:operational_status=broken",{or:["service:bicycle:tools=no","service:bicycle:tools="]}]},then:{en:"Broken pump",nl:"Kapotte fietspomp",fr:"Pompe cassée",gl:"Bomba de ar estragada",de:"Kaputte Pumpe",it:"Pompa rotta"}},{if:{and:["service:bicycle:pump=yes","service:bicycle:tools=no","name~*"]},then:{en:"Bicycle pump <i>{name}</i>",nl:"Fietspomp <i>{name}</i>",fr:"Pompe de vélo <i>{name}</i>",gl:"Bomba de ar <i>{name}</i>",de:"Fahrradpumpe <i>{name}</i>",it:"Pompa per bici <i>{name}</i>",ru:"Велосипедный насос <i>{name}</i>"}},{if:{and:["service:bicycle:pump=yes","service:bicycle:tools=no"]},then:{en:"Bicycle pump",nl:"Fietspomp",fr:"Pompe de vélo",gl:"Bomba de ar",de:"Fahrradpumpe",it:"Pompa per bici",ru:"Велосипедный насос"}}]},titleIcons:[{render:"<a href='https://fietsambassade.gent.be/' target='_blank'><img src='./assets/themes/cyclofix/fietsambassade_gent_logo_small.svg'/></a>",condition:"operator=De Fietsambassade Gent",roaming:!0},"defaults"],tagRenderings:["images",{question:{en:"Which services are available at this bike station?",nl:"Welke functies biedt dit fietspunt?",fr:"Quels services sont valables à cette station vélo ?",gl:"Que servizos están dispoñíbeis nesta estación de bicicletas?",de:"Welche Einrichtungen stehen an dieser Fahrradstation zur Verfügung?",it:"Quali servizi sono disponibili in questa stazione per bici?"},mappings:[{if:{and:["service:bicycle:tools=no","service:bicycle:pump=yes"]},then:{en:"There is only a pump present",nl:"Er is enkel een pomp aanwezig",fr:"Il y a seulement une pompe",gl:"Só hai unha bomba de ar presente",de:"Es ist nur eine Pumpe vorhanden",it:"C’è solamente una pompa presente"}},{if:{and:["service:bicycle:tools=yes","service:bicycle:pump=no"]},then:{en:"There are only tools (screwdrivers, pliers...) present",nl:"Er is enkel gereedschap aanwezig (schroevendraaier, tang...)",fr:"Il y a seulement des outils (tournevis, pinces...)",gl:"Só hai ferramentas (desaparafusadores, alicates...) presentes",de:"Es sind nur Werkzeuge (Schraubenzieher, Zangen...) vorhanden",it:"Ci sono solo degli attrezzi (cacciaviti, pinze…) presenti"}},{if:{and:["service:bicycle:tools=yes","service:bicycle:pump=yes"]},then:{en:"There are both tools and a pump present",nl:"Er is zowel een pomp als gereedschap aanwezig",fr:"Il y a des outils et une pompe",gl:"Hai ferramentas e unha bomba de ar presentes",de:"Es sind sowohl Werkzeuge als auch eine Pumpe vorhanden",it:"Ci sono sia attrezzi che pompa presenti"}}]},{question:{en:"Who maintains this cycle pump?",nl:"Wie beheert deze fietspomp?",fr:"Qui maintient cette pompe à vélo ?",it:"Chi gestisce questa pompa per bici?",de:"Wer wartet diese Fahrradpumpe?"},render:{nl:"Beheer door {operator}",en:"Maintained by {operator}",fr:"Mantenue par {operator}",it:"Manutenuta da {operator}",de:"Gewartet von {operator}"},freeform:{key:"operator"},mappings:[{if:"operator=De Fietsambassade Gent",then:"<a href='https://fietsambassade.gent.be/' target='_blank'>De Fietsambassade Gent</a>",hideInAnswer:"_country!=be"}]},{question:{nl:"Wanneer is dit fietsherstelpunt open?",en:"When is this bicycle repair point open?",fr:"Quand ce point de réparation de vélo est-il ouvert ?",it:"Quando è aperto questo punto riparazione bici?",de:"Wann ist diese Fahrradreparaturstelle geöffnet?"},render:"{opening_hours_table()}",freeform:{key:"opening_hours",type:"opening_hours"},mappings:[{if:"opening_hours=24/7",then:{nl:"Dag en nacht open",en:"Always open",fr:"Ouvert en permanence",it:"Sempre aperto",de:"Immer geöffnet"}},{if:"opening_hours=",then:{nl:"Dag en nacht open",en:"Always open",fr:"Ouvert en permanence",it:"Sempre aperto",de:"Immer geöffnet"},hideInAnswer:!0}]},{question:{en:"Does this bike repair station have a special tool to repair your bike chain?",nl:"Heeft dit herstelpunt een speciale reparatieset voor je ketting?",fr:"Est-ce que cette station vélo a un outil specifique pour réparer la chaîne du vélo ?",gl:"Esta estación de arranxo de bicicletas ten unha ferramenta especial para arranxar a cadea da túa bicicleta?",de:"Verfügt diese Fahrrad-Reparaturstation über Spezialwerkzeug zur Reparatur von Fahrradketten?",it:"Questa stazione di riparazione bici ha un attrezzo speciale per riparare la catena della bici?"},condition:"service:bicycle:tools=yes",mappings:[{if:"service:bicycle:chain_tool=yes",then:{en:"There is a chain tool",nl:"Er is een reparatieset voor je ketting",fr:"Il y a un outil pour réparer la chaine",gl:"Hai unha ferramenta para a cadea",de:"Es gibt ein Kettenwerkzeug",it:"È presente un utensile per riparare la catena"}},{if:"service:bicycle:chain_tool=no",then:{en:"There is no chain tool",nl:"Er is geen reparatieset voor je ketting",fr:"Il n'y a pas d'outil pour réparer la chaine",gl:"Non hai unha ferramenta para a cadea",de:"Es gibt kein Kettenwerkzeug",it:"Non è presente un utensile per riparare la catena"}}]},{question:{en:"Does this bike station have a hook to hang your bike on or a stand to raise it?",nl:"Heeft dit herstelpunt een haak of standaard om je fiets op te hangen/zetten?",fr:"Est-ce que cette station vélo à un crochet pour suspendre son vélo ou une accroche pour l'élevé ?",gl:"Esta estación de bicicletas ten un guindastre para pendurar a túa bicicleta ou un soporte para elevala?",de:"Hat diese Fahrradstation einen Haken, an dem Sie Ihr Fahrrad aufhängen können, oder einen Ständer, um es anzuheben?",it:"Questa stazione bici ha un gancio per tenere sospesa la bici o un supporto per alzarla?"},condition:"service:bicycle:tools=yes",mappings:[{if:"service:bicycle:stand=yes",then:{en:"There is a hook or stand",nl:"Er is een haak of standaard",fr:"Il y a un crochet ou une accroche",gl:"Hai un guindastre ou soporte",de:"Es gibt einen Haken oder Ständer",it:"C’è un gancio o un supporto"}},{if:"service:bicycle:stand=no",then:{en:"There is no hook or stand",nl:"Er is geen haak of standaard",fr:"Il n'y pas de crochet ou d'accroche",gl:"Non hai un guindastre ou soporte",de:"Es gibt keinen Haken oder Ständer",it:"Non c’è né un gancio né un supporto"}}]},{question:{en:"Is the bike pump still operational?",nl:"Werkt de fietspomp nog?",fr:"La pompe à vélo fonctionne-t-elle toujours ?",gl:"Segue a funcionar a bomba de ar?",de:"Ist die Fahrradpumpe noch funktionstüchtig?",it:"La pompa per bici è sempre funzionante?",ru:"Велосипедный насос все еще работает?"},condition:"service:bicycle:pump=yes",mappings:[{if:"service:bicycle:pump:operational_status=broken",then:{en:"The bike pump is broken",nl:"De fietspomp is kapot",fr:"La pompe à vélo est cassée",gl:"A bomba de ar está estragada",de:"Die Fahrradpumpe ist kaputt",it:"La pompa per bici è guasta",ru:"Велосипедный насос сломан"}},{if:"service:bicycle:pump:operational_status=",then:{en:"The bike pump is operational",nl:"De fietspomp werkt nog",fr:"La pompe est opérationnelle",gl:"A bomba de ar está operativa",de:"Die Fahrradpumpe ist betriebsbereit",it:"La pompa per bici funziona",ru:"Велосипедный насос работает"}}]},{question:{en:"What valves are supported?",nl:"Welke ventielen werken er met de pomp?",fr:"Quelles valves sont compatibles ?",gl:"Que válvulas son compatíbeis?",de:"Welche Ventile werden unterstützt?",it:"Quali valvole sono supportate?"},render:{en:"This pump supports the following valves: {valves}",nl:"Deze pomp werkt met de volgende ventielen: {valves}",fr:"Cette pompe est compatible avec les valves suivantes : {valves}",gl:"Esta bomba de ar admite as seguintes válvulas: {valves}",de:"Diese Pumpe unterstützt die folgenden Ventile: {valves}",it:"Questa pompa è compatibile con le seguenti valvole: {valves}",ru:"Этот насос поддерживает следующие клапаны: {valves}"},freeform:{"#addExtraTags":["fixme=Freeform 'valves'-tag used: possibly a wrong value"],key:"valves"},multiAnswer:!0,mappings:[{if:"valves=sclaverand",then:{en:"Sclaverand (also known as Presta)",nl:"Sclaverand (ook gekend als Presta)",fr:"Sclaverand (aussi appelé Presta)",gl:"Sclaverand (tamén coñecido como Presta)",de:"Sklaverand (auch bekannt als Presta)",it:"Sclaverand (detta anche Presta)",ru:"Клапан Presta (также известный как французский клапан)"}},{if:"valves=dunlop",then:{en:"Dunlop",nl:"Dunlop",fr:"Dunlop",gl:"Dunlop",de:"Dunlop",it:"Dunlop",ru:"Клапан Dunlop"}},{if:"valves=schrader",then:{en:"Schrader (cars)",nl:"Schrader (auto's)",fr:"Schrader (les valves de voitures)",gl:"Schrader (para automóbiles)",de:"Schrader (Autos)",it:"Schrader (valvola delle auto)"}}]},{question:{en:"Is this an electric bike pump?",nl:"Is dit een electrische fietspomp?",fr:"Est-ce que cette pompe est électrique ?",gl:"Esta é unha bomba de ar eléctrica?",de:"Ist dies eine elektrische Fahrradpumpe?",it:"Questa pompa per bici è elettrica?",ru:"Это электрический велосипедный насос?"},condition:"service:bicycle:pump=yes",mappings:[{if:"manual=yes",then:{en:"Manual pump",nl:"Manuele pomp",fr:"Pompe manuelle",gl:"Bomba de ar manual",de:"Manuelle Pumpe",it:"Pompa manuale",ru:"Ручной насос"}},{if:"manual=no",then:{en:"Electrical pump",nl:"Electrische pomp",fr:"Pompe électrique",gl:"Bomba de ar eléctrica",de:"Elektrische Pumpe",it:"Pompa elettrica",ru:"Электрический насос"}}]},{question:{en:"Does the pump have a pressure indicator or manometer?",nl:"Heeft deze pomp een luchtdrukmeter?",fr:"Est-ce que la pompe à un manomètre integré ?",gl:"Ten a bomba de ar un indicador de presión ou un manómetro?",de:"Verfügt die Pumpe über einen Druckanzeiger oder ein Manometer?",it:"Questa pompa ha l’indicatore della pressione o il manometro?"},condition:"service:bicycle:pump=yes",mappings:[{if:"manometer=yes",then:{en:"There is a manometer",nl:"Er is een luchtdrukmeter",fr:"Il y a un manomètre",gl:"Hai manómetro",de:"Es gibt ein Manometer",it:"C’è un manometro",ru:"Есть манометр"}},{if:"manometer=no",then:{en:"There is no manometer",nl:"Er is geen luchtdrukmeter",fr:"Il n'y a pas de manomètre",gl:"Non hai manómetro",de:"Es gibt kein Manometer",it:"Non c’è un manometro",ru:"Нет манометра"}},{if:"manometer=broken",then:{en:"There is manometer but it is broken",nl:"Er is een luchtdrukmeter maar die is momenteel defect",fr:"Il y a un manomètre mais il est cassé",gl:"Hai manómetro pero está estragado",de:"Es gibt ein Manometer, aber es ist kaputt",it:"C’è un manometro ma è rotto",ru:"Есть манометр, но он сломан"}}]}],icon:{render:{en:"./assets/layers/bike_repair_station/repair_station.svg",ru:"./assets/layers/bike_repair_station/repair_station.svg"},mappings:[{if:{and:["service:bicycle:pump=no","service:bicycle:pump:operational_status=broken"]},then:"./assets/layers/bike_repair_station/repair_station.svg"},{if:{and:["service:bicycle:pump=yes","service:bicycle:tools=yes"]},then:"./assets/layers/bike_repair_station/repair_station_pump.svg"},{if:{and:["service:bicycle:pump:operational_status=broken","service:bicycle:tools=no"]},then:"./assets/layers/bike_repair_station/broken_pump_2.svg"},{if:{and:["service:bicycle:pump=yes",{or:["service:bicycle:tools=no","service:bicycle:tools="]}]},then:"./assets/layers/bike_repair_station/pump.svg"}]},iconOverlays:[{if:"operator=De Fietsambassade Gent",then:"./assets/themes/cyclofix/fietsambassade_gent_logo_small.svg",badge:!0}],iconSize:{render:"50,50,bottom"},color:{render:"#00f"},width:{render:"1"},wayHandling:2,presets:[{title:{en:"Bike pump",nl:"Fietspomp",fr:"Pompe à vélo",gl:"Bomba de ar",de:"Fahrradpumpe",it:"Pompa per bici",ru:"Велосипедный насос"},tags:["amenity=bicycle_repair_station","service:bicycle:tools=no","service:bicycle:pump=yes"],description:{en:"A device to inflate your tires on a fixed location in the public space.<h3>Examples of bicycle pumps</h3><div style='width: 100%; display: flex; align-items: stretch;'><img src='./assets/layers/bike_repair_station/pump_example_manual.jpg' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example.png' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example_round.jpg' style='height: 200px; width: auto;'/></div>",nl:"Een apparaat waar je je fietsbanden kan oppompen, beschikbaar in de publieke ruimte. De fietspomp in je kelder telt dus niet.<h3>Voorbeelden</h3><h3>Examples of bicycle pumps</h3><div style='width: 100%; display: flex; align-items: stretch;'><img src='./assets/layers/bike_repair_station/pump_example_manual.jpg' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example.png' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example_round.jpg' style='height: 200px; width: auto;'/></div>",it:"Un dispositivo per gonfiare le proprie gomme in un luogo fisso pubblicamente accessibile.<h3>Esempi di pompe per biciclette</h3><div style='width: 100%; display: flex; align-items: stretch;'><img src='./assets/layers/bike_repair_station/pump_example_manual.jpg' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example.png' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example_round.jpg' style='height: 200px; width: auto;'/></div>",fr:"Un dispositif pour gonfler vos pneus sur un emplacement fixe dans l'espace public.<h3>Exemples de pompes à vélo</h3><div style='width: 100%; display: flex; align-items: stretch;'><img src='./assets/layers/bike_repair_station/pump_example_manual.jpg' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example.png' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example_round.jpg' style='height: 200px; width: auto;'/></div>",de:"Ein Gerät zum Aufpumpen von Reifen an einem festen Standort im öffentlichen Raum.<h3>Beispiele für Fahrradpumpen</h3><div style='width: 100%; display: flex; align-items: stretch;'><img src='./assets/layers/bike_repair_station/pump_example_manual.jpg' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example.png' style='height: 200px; width: auto;'/><img src='./assets/layers/bike_repair_station/pump_example_round.jpg' style='height: 200px; width: auto;'/></div>"}},{title:{en:"Bike repair station and pump",nl:"Herstelpunt en pomp",fr:"Point de réparation vélo avec pompe",gl:"Estación de arranxo de bicicletas con bomba de ar",de:"Fahrrad-Reparaturstation und Pumpe",it:"Stazione di riparazione bici e pompa"},tags:["amenity=bicycle_repair_station","service:bicycle:tools=yes","service:bicycle:pump=yes"],description:{en:"A device with tools to repair your bike combined with a pump at a fixed location. The tools are often secured with chains against theft.<h3>Example</h3><img src='./assets/layers/bike_repair_station/repair_station_example.jpg' height='200'/>",nl:"Een apparaat met zowel gereedschap om je fiets te herstellen, met een pomp. Deze zijn op een vastgemaakt op een plaats in de publieke ruimte, bv. aan een paal.<h3>Voorbeeld</h3><img src='./assets/layers/bike_repair_station/repair_station_example.jpg' height='200'/>",fr:"Un dispositif avec des outils pour réparer votre vélo combiné à une pompe a un emplacement fixe. Les outils sont souvent attachés par une chaîne pour empêcher le vol.<h3>Exemple</h3><img src='./assets/layers/bike_repair_station/repair_station_example.jpg' height='200'/>",it:"Un dispositivo con attrezzi per riparare la tua bici e una pompa in un luogo fisso. Gli attrezzi sono spesso attaccati ad una catena per prevenire il furto.<h3>Esempio</h3><img src='./assets/layers/bike_repair_station/repair_station_example.jpg' height='200'/>",de:"Ein Gerät mit Werkzeugen zur Reparatur von Fahrrädern kombiniert mit einer Pumpe an einem festen Standort. Die Werkzeuge sind oft mit Ketten gegen Diebstahl gesichert.<h3>Beispiel</h3><img src='./assets/layers/bike_repair_station/repair_station_example.jpg' height='200'/>"}},{title:{en:"Bike repair station without pump",nl:"Herstelpunt zonder pomp",fr:"Point de réparation vélo sans pompe",gl:"Estación de arranxo de bicicletas sin bomba de ar",de:"Fahrrad-Reparaturstation ohne Pumpe",it:"Stazione di riparazione bici senza pompa"},tags:["amenity=bicycle_repair_station","service:bicycle:tools=yes","service:bicycle:pump=no"]}]};
},{}]},{},["cim7"], null)
//# sourceMappingURL=assets/layers/bike_repair_station/bike_repair_station.js.map