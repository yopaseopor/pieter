var p=Object.defineProperty;var u=(t,e,i)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var c=(t,e,i)=>(u(t,typeof e!="symbol"?e+"":e,i),i);import{U as o}from"./UIEventSource-19d278ab.js";import"./FeatureSwitchState-293b9701.js";import{s as h,g as _,a as k,h as f,b as v,r as y,l as b}from"./last_click-55d8aa15.js";import{f as w}from"./Add-258ff92a.js";import{M as z,T as R,a as A,s as j}from"./ThemeViewGUI-34e41167.js";import{k as C}from"./index-9229ee1d.js";import{L as x}from"./Checkbox-183cc416.js";import{F as E}from"./Translation-57188e13.js";import{C as B}from"./Constants-fc2cf55a.js";import"./FixImages-f40b6487.js";import"./NameSuggestionIndex-52e2e878.js";import"./tw-merge-5f0284a7.js";import"./LanguagePicker-214b6d38.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./BackButton-9e4900e8.js";import"./LocalStorageSource-2e204a66.js";import"./Login-774222e4.js";import"./OsmConnection-27525cf3.js";import"./preload-helper-a9ffaded.js";import"./Community-cead4601.js";import"./Filterview-7e049812.js";import"./PrivacyPolicy-d026032f.js";const L="guideposts",T={en:"Guideposts",cs:"Rozcestníky",de:"Wegweiser",es:"Poste guía",pl:"Drogowskazy",ca:"Pal guia",_context:"themes:guideposts.title"},S={en:`Guideposts (also known as fingerposts or finger posts) are often found along official hiking, cycling, skiing or horseback riding routes to indicate the directions to different destinations. Additionally, they are often named after a region or place and show the altitude.

The position of a signpost can be used by a hiker/biker/rider/skier as a confirmation of the current position, especially if they use a printed map without a GPS receiver. `,cs:`Podél oficiálních turistických, cyklistických, lyžařských nebo jezdeckých tras se často nacházejí rozcestníky (také známé jako ukazatel směru), které ukazují směry k různým cílům. Navíc jsou často pojmenovány po regionu nebo místě a ukazují nadmořskou výšku.

Polohu rozcestníku může turista/cyklista/jezdec/lyžař využít jako potvrzení aktuální polohy, zejména pokud používá tištěnou mapu bez GPS přijímače. `,de:`Wegweiser (auch als Wegzeiger oder Fingerschilder bekannt) sind entlang offizieller Wander-, Rad-, Ski- oder Reitstrecken häufig zu finden, um die Richtungen zu verschiedenen Zielen anzuzeigen. Darüber hinaus sind sie oft nach einer Region oder einem Ort benannt und zeigen die Höhe an.

Die Position eines Wegweisers kann von Wanderern, Radfahrern, Reitern oder Skifahrern als Bestätigung der aktuellen Position genutzt werden, insbesondere wenn sie eine gedruckte Karte ohne GPS-Empfänger verwenden. `,es:`Los postes guía o indicadores (también conocidos como "fingerposts") suelen encontrarse a lo largo de las rutas oficiales de senderismo, ciclismo, esquí o equitación para indicar las direcciones a los distintos destinos. Además, suelen llevar el nombre de una región o lugar e indican la altitud.

La posición de un poste indicador puede servir al excursionista, ciclista, jinete o esquiador para confirmar su posición actual, sobre todo si utiliza un mapa impreso sin receptor GPS. `,pl:`Drogowskazy (znane również jako "palce na słupkach") często znajdują się wzdłuż oficjalnych szlaków pieszych, rowerowych, narciarskich lub konnych i wskazują drogę do różnych miejsc. Ponadto często noszą nazwy regionu lub miejsca i wskazują wysokość.

Pozycja drogowskazu może być wykorzystana przez turystę/rowerzystę/jeźdźca/narciarza jako potwierdzenie aktualnej pozycji, zwłaszcza jeśli korzysta z drukowanej mapy bez odbiornika GPS. `,_context:"themes:guideposts.description"},q="./assets/layers/guidepost/guidepost.svg",W=[{id:"guidepost",name:{en:"Guideposts",cs:"Rozcestníky",de:"Wegweiser"},description:{en:"Guideposts (also known as fingerposts or finger posts) are often found along official hiking/cycling/riding/skiing routes to indicate the directions to different destinations",cs:"Podél oficiálních turistických/cyklistických/jezdeckých/lyžařských tras se často nacházejí rozcestníky (také známé jako ukazatel směru nebo značky), které ukazují směry k různým cílům",de:"Wegweiser (auch als Wegzeiger oder Fingerschilder bekannt) sind entlang offizieller Wander-, Radfahr-, Reit- oder Skirouten oft zu finden, um die Richtungen zu verschiedenen Zielen anzuzeigen"},source:{osmTags:{and:["information=guidepost"]}},minzoom:14,title:{en:"Guideposts",cs:"Rozcestník",de:"Wegweiser"},pointRendering:[{location:["centroid","point"],marker:[{icon:{render:"./assets/layers/guidepost/guidepost.svg",id:"assetslayersguidepostguidepostsvg"}}],anchor:"bottom",iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],presets:[{title:{en:"a guidepost",cs:"rozcestník",de:"ein Wegweiser"},tags:["information=guidepost","tourism=information"],description:{en:"A guidepost (also known as fingerpost) is often found along official hiking/cycling/riding/skiing routes to indicate the directions to different destinations",cs:"Rozcestník (také známý jako ukazatel směru) se často nachází podél oficiálních turistických / cyklistických / jezdeckých / lyžařských tras, které ukazují směry k různým destinacím",de:"Ein Wegweiser (auch bekannt als Fingerschild) wird oft entlang offizieller Wander-, Radfahr-, Reit- oder Skirouten gefunden, um die Richtungen zu verschiedenen Zielen anzuzeigen"},exampleImages:["./assets/layers/guidepost/guidepost_example.jpg"]}],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{id:"type",question:{en:"What kind of routes are shown on this guidepost?",de:"Welche Arten von Routen werden auf diesem Wegweiser angezeigt?"},multiAnswer:!0,mappings:[{if:"bicycle=yes",ifnot:"bicycle=",then:{en:"This guidepost shows bicycle routes",de:"Dieser Wegweiser zeigt Fahrradrouten"}},{if:"hiking=yes",ifnot:"hiking=",then:{en:"This guidepost shows hiking routes",de:"Dieser Wegweiser zeigt Wanderwege"}},{if:"mtb=yes",ifnot:"mtb=",then:{en:"This guidepost shows mountain bike routes",de:"Dieser Wegweiser zeigt Mountainbike-Routen"}},{if:"horse=yes",ifnot:"horse=",then:{en:"This guidepost shows horse riding routes",de:"Dieser Wegweiser zeigt Reitwege"}},{if:"ski=yes",ifnot:"ski=",then:{en:"This guidepost shows ski routes",de:"Dieser Wegweiser zeigt Skirouten"}}]},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"delete-button",render:{"*":"{delete_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],deletion:{},allowMove:{enableImproveAccuracy:!0,enableRelocation:!1},titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"./assets/layers/guidepost/guidepost.svg"}]},{id:"note_import_guidepost",description:{ca:"Una capa que importa entrades per a ",cs:"Vrstva, která importuje položky pro ",da:"Et lag som importerer poster for ",de:"Eine Ebene, die Einträge für  importiert",en:"A layer which imports entries for ",es:"Una capa que importar entradas para ",nl:"Deze laag toont kaart-nota's die wijzen op een ",pl:"Warstwa importująca wpisy dla ",zh_Hant:"能夠為  匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~[0-9]+","comment_url~.*notes/[0-9]*/comment.json"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10},passAllFeatures:!0,minzoom:12,title:{render:{ca:"Pot ser que hi hagi a guidepost aquí",cs:"Zde by mohl být rozcestník",da:"Mulig a guidepost",de:"Möglicherweise gibt es hier ein Wegweiser",en:"There might be a guidepost here",es:"Puede haber a guidepost aquí",fi:"Tässä on ehkä a guidepost",nb_NO:"Det kan være a guidepost her",nl:"Is hier a guidepost?",pl:"Tutaj może znajdować się a guidepost",zh_Hant:"這裡可能有 a guidepost",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=get(feat)('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.\\(org|osm.be\\)/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=get(feat)('comments').length","_intro=(() => {const lines = get(feat)('comments')[0].text.split('\\n'); lines.splice(get(feat)('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = get(feat)('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, get(feat)('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)information=guidepost($|;.*)","_tags~(^|.*;)tourism=information($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(guidepost, _tags, he trobat un a guidepost aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(guidepost, _tags, Našel jsem rozcestník zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(guidepost, _tags, Jeg har fundet en a guidepost her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(guidepost, _tags, Ich habe hier ein(en) ein Wegweiser gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(guidepost, _tags, I have found a a guidepost here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(guidepost,_tags, He encontrado un(a) a guidepost aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(guidepost, _tags, Ik heb hier een a guidepost gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",pl:"{import_button(guidepost, _tags, odnalazłem tutaj a guidepost - dodaj go do mapy,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(guidepost, _tags, 我在這邊發現 a guidepost - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar a guidepost: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít rozcestník - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde a guidepost - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte ein Wegweiser nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a guidepost - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar a guidepost - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen a guidepost vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",pl:"{close_note(Nie mogłem odnaleźć a guidepost – usuń go, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 a guidepost - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un a guidepost al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází rozcestník - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden a guidepost på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen ein Wegweiser auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a guidepost on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(a guidepost ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds a guidepost op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",pl:"{close_note(Na mapie znajduje się już a guidepost - ten punkt jest duplikatem, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(a guidepost 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",pl:"<div class='thanks'>Ta funkcja została obsłużona! Dziękujemy za Twój wysiłek</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",pl:"<h3>Zdjęcia w pobliżu</h3>Poniższe zdjęcia to zdjęcia pobliskich obiektów z geotagami z różnych usług internetowych. Mogą pomóc Ci rozwiązać tę uwagę.{nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{id:"all_tags",render:"{all_tags()}",metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:"circle",color:"#fff"},{icon:{render:"help",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"checkmark"}]},color:"#00"}],iconSize:"40,40",anchor:"center"}]}],I="assets/SocialImage.png",s={id:L,title:T,description:S,icon:q,layers:W,socialImage:I};class g{metaTaggging_for_guidepost(e,i){}metaTaggging_for_note_import_guidepost(e,i){const{distanceTo:l,overlapWith:N,enclosingFeatures:U,intersectionsWith:F,closest:H,closestn:Z,get:r}=i;o.AddLazyProperty(e.properties,"_first_comment",()=>r(e)("comments")[0].text.toLowerCase()),o.AddLazyProperty(e.properties,"_trigger_index",()=>(()=>e.properties._first_comment.split(`
`).map(a=>a.match(".*https://mapcomplete.(org|osm.be)/([a-zA-Z_-]+)(.html)?.*#import")).map((a,m)=>[a!==null,m]).filter(a=>a[0]).map(a=>a[1])[0])()),o.AddLazyProperty(e.properties,"_comments_count",()=>r(e)("comments").length),o.AddLazyProperty(e.properties,"_intro",()=>(()=>{const n=r(e)("comments")[0].text.split(`
`);return n.splice(r(e)("_trigger_index")-1,n.length),n.filter(d=>d!=="").join("<br/>")})()),o.AddLazyProperty(e.properties,"_tags",()=>(()=>{let n=r(e)("comments")[0].text.split(`
`).map(d=>d.trim());return n.splice(0,r(e)("_trigger_index")+1),n=n.filter(d=>d!=""),n.join(";")})())}}c(g,"themeName","guideposts");function D(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}}async function P(t){return await o.waitFor(t),{layers:[]}}async function M(){try{const t=new URL(B.VectorTileServer).host,e=await Promise.any([o.downloadJson("https://"+t+"/summary/status.json"),P(0)]);return new Set(e.layers)}catch(t){return console.error("Could not get MVT available layers due to",t),new Set}}async function G(){if(!D())new E("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const t=await M();z.setThemeMetatagging(new g),s.layers.push(h),s.layers.push(_),s.layers.push(k),s.layers.push(f),s.layers.push(v),s.layers.push(y),s.layers.push(b),s.layers.push(w),s.layers.push(j);const e=new R(new x(s),t);new C(A,{state:e}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(l=>{l.parentElement.removeChild(l)})}}G();
//# sourceMappingURL=guideposts-86df9c57.js.map
