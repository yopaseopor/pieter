var p=Object.defineProperty;var u=(t,e,n)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(u(t,typeof e!="symbol"?e+"":e,n),n);import{U as l}from"./Utils-498bb79d.js";import{M as g,T as h,a as k}from"./ThemeViewGUI-015cfec5.js";import{s as _,g as b,a as v,h as f,b as y,r as w,l as R}from"./last_click-b8e734eb.js";import{f as j}from"./TabbedGroup-6e1a3e0a.js";import{k as z}from"./index-3f10102a.js";import{L as x}from"./Checkbox-0d97793e.js";import{F as A}from"./Translation-5455689e.js";import"./LocalStorageSource-4f66d5e4.js";import"./Constants-399bdbe1.js";import"./ariaLabel-54fcd223.js";import"./_commonjsHelpers-de833af9.js";import"./OsmConnection-2206c31f.js";import"./Dropdown-dedab849.js";import"./ToSvelte-5d5f66c4.js";import"./tw-merge-e1aa18e9.js";import"./MapLibreAdaptor-49ec2143.js";import"./FeatureSwitchState-d3b41732.js";import"./LanguagePicker-6d4b436d.js";import"./Loading-40d8de62.js";import"./Tr-a1b201b7.js";import"./Add-7798a556.js";import"./Community-cde6897c.js";import"./Filterview-064356ec.js";import"./PrivacyPolicy-ffd0f9fb.js";import"./BackButton-a44a967b.js";const B="binoculars",E={en:"Binoculars",nl:"Verrekijkers",de:"Ferngläser",it:"Binocoli",nb_NO:"Kikkerter",zh_Hant:"望遠鏡",hu:"Távcsövek",fr:"Jumelles",es:"Binoculares",da:"Kikkerter",ca:"Prismàtics",pa_PK:"بائینوکولر",cs:"Dalekohledy",eu:"Binokularrak",pl:"Lornetki",_context:"themes:./assets/themes/binoculars/binoculars.json.title"},C={en:"A map with binoculars fixed in place with a pole. It can typically be found on touristic locations, viewpoints, on top of panoramic towers or occasionally on a nature reserve.",nl:"Een kaart met verrekijkers die op een vaste plaats zijn gemonteerd",de:"Eine Karte fest installierter Ferngläser. Man findet sie meist an touristischen Zielen, Aussichtspunkten, Aussichtstürmen oder gelegentlich in Naturschutzgebieten.",it:"Una cartina dei binocoli su un palo fissi in un luogo. Si trovano tipicamente nei luoghi turistici, nei belvedere, in cima a torri panoramiche oppure occasionalmente nelle riserve naturali.",zh_Hant:"固定一地的望遠鏡地圖，特別是能夠在旅遊景點、觀景點、城鎮環景點，或是自然保護區找到。",hu:"Rúdra rögzített távcsövek térképe. Jellemzően turisztikailag érdekes, panorámás helyeken, kilátótornyok tetején vagy természetvédelmi területen találhatók.",fr:"Une carte des longue-vues fixes. Se trouve typiquement sur les sites touristiques, les points de vue, les tours panoramiques ou dans les réserves naturelles.",es:"Un mapa con prismáticos fijos en un poste. Suele encontrarse en lugares turísticos, miradores, en lo alto de torres panorámicas u ocasionalmente en una reserva natural.",nb_NO:"Stedsbundne kikkerter på påle. Vanligvis på turiststeder, utkikkspunkter, på toppen av utsiktstårn, og noen ganger i naturreservat.",ca:"Un mapa amb prismàtics fixos en un pal. Sol trobar-se en llocs turístics, miradors, a la part alta de torres panoràmiques o ocasionalment en una reserva natural.",da:"Et kort over udsigtskikkert fastgjort på en stang. Det kan typisk findes på turistmæssige steder, udsigtspunkter, på toppen af panoramatårne eller lejlighedsvis på et naturreservat.",cs:"Mapa s dalekohledem upevněným na místě pomocí tyče. Obvykle se nachází na turistických místech, rozhlednách, vrcholech panoramatických věží nebo příležitostně v přírodních rezervacích.",eu:"Zutoin batean prismatiko finkoak dituen mapa. Leku turistikoetan, begiratokietan, dorre panoramikoen gainean edo, batzuetan, erreserba natural batean egoten da.",pl:"Mapa z lornetkami zamocowanymi na słupku. Zwykle można je odnaleźć w lokalizacjach turystycznych, punktach widokowych, na szczytach wież panoramicznych lub czasami w rezerwacie przyrody.",_context:"themes:./assets/themes/binoculars/binoculars.json.description"},L={en:"A map with fixed binoculars",nl:"Een kaart met publieke verrekijker",de:"Eine Karte mit festinstallierten Ferngläsern",it:"Una cartina dei binocoli pubblici fissi",nb_NO:"Et kart over fastmonterte kikkerter",zh_Hant:"固定望遠鏡的地圖",hu:"Rögzített távcsövek (binokulárok) térképe",fr:"Une carte de jumelles panoramiques",es:"Un mapa con prismáticos fijos",ca:"Un mapa amb prismàtics fixos",da:"Et kort over fastgjorte kikkerter",cs:"Mapa s pevnými dalekohledy",eu:"Prismatiko finkoak dituen mapa",pl:"Mapa ze stałymi lornetkami",_context:"themes:./assets/themes/binoculars/binoculars.json.shortDescription"},T="./assets/layers/binocular/telescope.svg",q=[{id:"binocular",name:{en:"Binoculars",nl:"Verrekijkers",de:"Ferngläser",ru:"Бинокль",ca:"Prismàtics",da:"Kikkert",es:"Prismáticos",fr:"Jumelles",pa_PK:"بائینوکولر",cs:"Dalekohledy",eu:"Prismatikoak"},description:{en:"Binoculars",nl:"Verrekijkers",de:"Ferngläser",ru:"Бинокли",ca:"Prismàtics",da:"Kikkerter",es:"Prismáticos",fr:"Jumelles",pa_PK:"بائینوکولر",cs:"Dalekohledy",eu:"Prismatikoak"},source:{osmTags:{and:["amenity=binoculars"]}},minzoom:0,title:{render:{en:"Binoculars",nl:"Verrekijker",de:"Ferngläser",ru:"Бинокль",ca:"Prismàtics",es:"Prismáticos",da:"Kikkert",fr:"Jumelles",pa_PK:"بائینوکولر",eu:"Prismatikoak",cs:"Dalekohledy"}},pointRendering:[{iconSize:"40,40",location:["point"],anchor:"center",marker:[{icon:{render:"circle",id:"circle"},color:"white"},{icon:{render:"./assets/layers/binocular/telescope.svg",id:"assetslayersbinoculartelescopesvg"}}],iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[{color:"#00f",width:"8"}],presets:[{tags:["amenity=binoculars"],title:{en:"a binocular",nl:"een verrekijker",de:"ein Fernglas",ru:"бинокль",ca:"uns prismàtics",da:"en kikkert",es:"unos prismáticos",fr:"des jumelles",cs:"dalekohled"},description:{en:"A telescope or pair of binoculars mounted on a pole, available to the public to look around. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",nl:"Een telescoop of verrekijker die op een vaste plaats gemonteerd staat waar iedereen door mag kijken. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",de:"Ein fest installiertes Teleskop oder Fernglas, für die öffentliche Nutzung. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",fr:"Une longue-vue ou une paire de jumelles montée sur un poteau, disponible au public pour scruter les environs. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",da:"Et teleskop eller en kikkert monteret på en stang, som offentligheden kan se sig omkring med. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",es:"Un telescopio o unos prismáticos montados en un poste, disponible para que el público mire alrededor. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",ca:"Un telescopi o un parell de prismàtics muntats en un pal, a disposició del públic per mirar al seu voltant. <img src='./assets/layers/binocular/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />",cs:"Jednooký teleskop nebo dalekohled umístěný na stožáru, který je k dispozici veřejnosti k prohlídce. <img src='./assets/layers/binoculars/binoculars_example.jpg' style='height: 300px; width: auto; display: block;' />"}}],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{mappings:[{if:{and:["fee=no","charge="]},then:{en:"Free to use",nl:"Gratis te gebruiken",de:"Kostenlose Nutzung",da:"Gratis at bruge",es:"De uso gratuito",fr:"En libre service",ca:"Debades",cs:"Použití zdarma"}}],freeform:{key:"charge",addExtraTags:["fee=yes"],inline:!0},render:{en:"Using these binoculars costs {charge}",nl:"Deze verrekijker gebruiken kost {charge}",de:"Die Benutzung dieses Fernglases kostet {charge}",es:"Utilizar estos prismáticos cuesta {charge}",da:"Brug af denne kikkert koster {charge}",fr:"L’utilisation des ces jumelles coûte {charge}",ca:"L'ús d'aquests prismàtics costa {charge}",cs:"Použití tohoto dalekohledu stojí {charge}"},question:{en:"How much does one have to pay to use these binoculars?",nl:"Hoeveel moet men betalen om deze verrekijker te gebruiken?",de:"Wie viel muss man für die Nutzung dieser Ferngläser bezahlen?",es:"¿Cuánto hay que pagar para utilizar estos prismáticos?",da:"Hvor meget koster det at bruge denne kikkert?",fr:"Combien l’utilisation des ces jumelles coûte-t-elle ?",ca:"Quant s'ha de pagar per utilitzar aquests prismàtics?",cs:"Kolik se platí za používání těchto dalekohledů?"},id:"binocular-charge"},{question:{en:"When looking through this binocular, in what direction does one look?",nl:"Welke richting kijkt men uit als men door deze verrekijker kijkt?",de:"In welche Richtung blickt man, wenn man durch dieses Fernglas schaut?",es:"¿Cuándo uno mira a través de estos prismáticos, en qué dirección lo hace?",da:"I hvilken retning kigger man, når man ser gennem denne kikkert?",fr:"Dans quelle direction regarde-t-on en utilisant ces jumelles ?",ca:"En mirar a través d'aquest binocular, en quina direcció es mira?",cs:"Při pohledu přes tento dalekohled, kterým směrem se člověk dívá?"},render:{en:"Looks towards {direction}°",nl:"Kijkt richting {direction}°",de:"Blick in Richtung {direction}°",es:"Mira hacia {direction}º",da:"Kigger mod {direction}°",fr:"Orienté à {direction}°",ca:"Mira cap a {direction}°",cs:"Dívá se směrem v úhlu {direction}°"},freeform:{key:"direction",type:"direction",inline:!0},id:"binocular-direction"},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"delete-button",render:{"*":"{delete_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],deletion:{softDeletionTags:{and:["disused:amenity:={amenity}","amenity="]},neededChangesets:1},allowMove:{enableRelocation:!1,enableImproveAccuraccy:!0},titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*","seasonal=","seasonal=no",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"circle",color:"white"},{icon:"./assets/layers/binocular/telescope.svg"}]},{id:"note_import_binocular",description:{ca:"Una capa que importa entrades per a Prismàtics",cs:"Vrstva, která importuje položky pro Dalekohledy",da:"Et lag som importerer poster for Kikkert",de:"Eine Ebene, die Einträge für Ferngläser importiert",en:"A layer which imports entries for Binoculars",es:"Una capa que importar entradas para Prismáticos",nl:"Deze laag toont kaart-nota's die wijzen op een Verrekijker",pl:"Warstwa importująca wpisy dla Binoculars",zh_Hant:"能夠為 Binoculars 匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~[0-9]+","comment_url~.*notes/[0-9]*/comment.json"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10,maxCacheAge:0},passAllFeatures:!0,minzoom:-2,title:{render:{ca:"Pot ser que hi hagi uns prismàtics aquí",cs:"Zde by mohl být dalekohled",da:"Mulig en kikkert",de:"Möglicherweise gibt es hier ein Fernglas",en:"There might be a binocular here",es:"Puede haber unos prismáticos aquí",nb_NO:"Det kan være a binocular her",nl:"Is hier een verrekijker?",pl:"Tutaj może znajdować się a binocular",zh_Hant:"這裡可能有 a binocular",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=get(feat)('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.\\(org|osm.be\\)/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=get(feat)('comments').length","_intro=(() => {const lines = get(feat)('comments')[0].text.split('\\n'); lines.splice(get(feat)('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = get(feat)('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, get(feat)('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)amenity=binoculars($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(binocular, _tags, he trobat un uns prismàtics aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(binocular, _tags, Našel jsem dalekohled zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(binocular, _tags, Jeg har fundet en en kikkert her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(binocular, _tags, Ich habe hier ein(en) ein Fernglas gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(binocular, _tags, I have found a a binocular here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(binocular,_tags, He encontrado un(a) unos prismáticos aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(binocular, _tags, Ik heb hier een een verrekijker gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",pl:"{import_button(binocular, _tags, odnalazłem tutaj a binocular - dodaj go do mapy,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(binocular, _tags, 我在這邊發現 a binocular - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar uns prismàtics: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít dalekohled - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde en kikkert - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte ein Fernglas nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a binocular - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar unos prismáticos - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen een verrekijker vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",pl:"{close_note(Nie mogłem odnaleźć a binocular – usuń go, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 a binocular - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un uns prismàtics al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází dalekohled - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden en kikkert på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen ein Fernglas auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a binocular on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(unos prismáticos ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds een verrekijker op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",pl:"{close_note(Na mapie znajduje się już a binocular - ten punkt jest duplikatem, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(a binocular 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",pl:"<div class='thanks'>Ta funkcja została obsłużona! Dziękujemy za Twój wysiłek</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",pl:"<h3>Zdjęcia w pobliżu</h3>Poniższe zdjęcia to zdjęcia pobliskich obiektów z geotagami z różnych usług internetowych. Mogą pomóc Ci rozwiązać tę uwagę.{nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{id:"all_tags",render:"{all_tags()}",metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:"circle",color:"#fff"},{icon:{render:"help",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"checkmark"}]},color:"#00"}],iconSize:"40,40",anchor:"center"}]}],D=1.5,I="assets/SocialImage.png",i={id:B,title:E,description:C,shortDescription:L,icon:T,layers:q,widenFactor:D,socialImage:I};class c{metaTaggging_for_binocular(e,n){}metaTaggging_for_note_import_binocular(e,n){const{distanceTo:P,overlapWith:F,enclosingFeatures:M,intersectionsWith:U,closest:N,closestn:K,get:o}=n;l.AddLazyProperty(e.properties,"_first_comment",()=>o(e)("comments")[0].text.toLowerCase()),l.AddLazyProperty(e.properties,"_trigger_index",()=>(()=>e.properties._first_comment.split(`
`).map(a=>a.match(".*https://mapcomplete.(org|osm.be)/([a-zA-Z_-]+)(.html)?.*#import")).map((a,m)=>[a!==null,m]).filter(a=>a[0]).map(a=>a[1])[0])()),l.AddLazyProperty(e.properties,"_comments_count",()=>o(e)("comments").length),l.AddLazyProperty(e.properties,"_intro",()=>(()=>{const s=o(e)("comments")[0].text.split(`
`);return s.splice(o(e)("_trigger_index")-1,s.length),s.filter(r=>r!=="").join("<br/>")})()),l.AddLazyProperty(e.properties,"_tags",()=>(()=>{let s=o(e)("comments")[0].text.split(`
`).map(r=>r.trim());return s.splice(0,o(e)("_trigger_index")+1),s=s.filter(r=>r!=""),s.join(";")})())}}d(c,"themeName","binoculars");function S(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}}if(!S())new A("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{g.setThemeMetatagging(new c),i.layers.push(_),i.layers.push(b),i.layers.push(v),i.layers.push(f),i.layers.push(y),i.layers.push(w),i.layers.push(R),i.layers.push(j);const t=new h(new x(i));new z(k,{state:t}).AttachTo("maindiv")}
//# sourceMappingURL=binoculars-3e2ac78e.js.map
