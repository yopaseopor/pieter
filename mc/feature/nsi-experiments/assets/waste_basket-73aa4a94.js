var u=Object.defineProperty;var g=(a,e,s)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var p=(a,e,s)=>(g(a,typeof e!="symbol"?e+"":e,s),s);import{U as o}from"./UIEventSource-19d278ab.js";import"./FeatureSwitchState-293b9701.js";import{s as k,g as h,a as b,h as f,b as v,r as _,l as w}from"./last_click-55d8aa15.js";import{f as y}from"./Add-258ff92a.js";import{M as A,T as j,a as R,s as x}from"./ThemeViewGUI-34e41167.js";import{k as z}from"./index-9229ee1d.js";import{L as E}from"./Checkbox-183cc416.js";import{F as C}from"./Translation-57188e13.js";import{C as B}from"./Constants-fc2cf55a.js";import"./FixImages-f40b6487.js";import"./NameSuggestionIndex-52e2e878.js";import"./tw-merge-5f0284a7.js";import"./LanguagePicker-214b6d38.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./BackButton-9e4900e8.js";import"./LocalStorageSource-2e204a66.js";import"./Login-774222e4.js";import"./OsmConnection-27525cf3.js";import"./preload-helper-a9ffaded.js";import"./Community-cead4601.js";import"./Filterview-7e049812.js";import"./PrivacyPolicy-d026032f.js";const T="waste_basket",L={en:"Waste Baskets",nl:"Vuilnisbakken",de:"Abfalleimer",it:"Cestino dei rifiuti",zh_Hant:"垃圾筒",hu:"Kukatérkép",id:"Keranjang Sampah",ca:"Papepera",fr:"Poubelles",nb_NO:"Søppelkurv",da:"Affaldskurv",pa_PK:"کوڑے دی ٹوکری",es:"Papeleras",cs:"Odpadkový koš",pl:"Kosz na śmieci",_context:"themes:waste_basket.title"},q={en:"On this map, you'll find waste baskets near you. If a waste basket is missing on this map, you can add it yourself",nl:"Op deze kaart vind je vuilnisbakken waar je afval in kan smijten. Ontbreekt er een vuilnisbak? Dan kan je die zelf toevoegen",de:"Auf dieser Karte findest Du Abfalleimer in Deiner Nähe. Wenn ein Abfalleimer auf dieser Karte fehlt, kannst du ihn selbst hinzufügen",it:"In questa cartina troverai i cestini dei rifiuti nei tuoi paraggi. Se manca un cestino, puoi inserirlo tu stesso",zh_Hant:"在這份地圖當中，你可以找到你附近的垃圾筒。如果地圖有遺漏垃圾筒，你可以自己加上去",hu:"Ezen a térképen megtalálhatod a közeledben lévő szemeteskosarakat. Ha hiányzik egy kuka a térképről, te is felrajzolhatod",fr:"Retrouvez les poubelles près de vous. Si une poubelle est manquante, vous pouvez l’ajouter vous même",da:"På dette kort finder du affaldskurve i nærheden af dig. Hvis der mangler en affaldskurv på dette kort, kan du selv tilføje den",ca:"A aquest mapa trobaràs les papereres a prop teua. Si falta una paperera al mapa pots afegir-la tu mateix",es:"En este mapa, encontrará las papeleras cercanas a usted. Si falta una papelera en el mapa, puede añadirla usted mismo",cs:"Na této mapě najdete koše na odpadky ve vašem okolí. Pokud na této mapě odpadkový koš chybí, můžete jej přidat sami",pl:"Na tej mapie znajdziesz kosze na śmieci w twojej okolicy. Jeśli brakuje kosza, możesz go dodać",_context:"themes:waste_basket.description"},D={en:"A map with waste baskets",nl:"Een kaart met vuilnisbakken",de:"Eine Karte mit Abfalleimern",it:"Una cartina dei cestini dei rifiuti",zh_Hant:"垃圾筒的地圖",hu:"Szemeteskosarakat ábrázoló térkép",fr:"Une carte des poubelles",nb_NO:"Oversikt over søppelkurver",da:"Et kort med affaldskurve",ca:"Un mapa amb papereres",es:"Un mapa con papeleras",cs:"Mapa odpadkových košů",pl:"Mapa koszy na śmieci",_context:"themes:waste_basket.shortDescription"},S="./assets/themes/waste_basket/waste_basket.svg",P=[{id:"waste_basket",name:{en:"Waste Basket",nl:"Vuilnisbak",ru:"Контейнер для мусора",de:"Mülleimer",eo:"Rubujo",ca:"Paperera",it:"Cestino dei rifiuti",id:"Keranjang Sampah",da:"Affaldskurv",fr:"Poubelle",cs:"Odpadkový koš"},description:{en:"This is a public waste basket, thrash can, where you can throw away your thrash.",nl:"Dit is een publieke vuilnisbak waar je je afval kan weggooien.",de:"Dies ist ein öffentlicher Abfalleimer, in den Sie Ihren Müll entsorgen können.",hu:"Ez egy nyilvános szemétkosár vagy kuka, ahová kidobhatod a szemetedet.",it:"Questo è un cestino dei rifiuti pubblico, un bidone della spazzatura, dove puoi buttare via la tua spazzatura",es:"Esta es una papelera pública, donde puedes tirar tu basura.",da:"Dette er en offentlig affaldskurv, en skraldespand, hvor du kan smide dit affald.",fr:"C'est une poubelle dans laquelle vous pouvez jeter vos mégots.",ca:"Es tracta d'una paperera pública, una paperera, on pots llençar la teva paperera.",cs:"Jedná se o veřejný odpadkový koš, odpadkový koš, kam můžete vyhodit odpadky."},source:{osmTags:{and:["amenity=waste_basket"]}},minzoom:12,title:{render:{en:"Waste Basket",nl:"Vuilnisbak",ru:"Контейнер для мусора",de:"Abfalleimer",ca:"Paperera",it:"Cestino dei rifiuti",id:"Keranjang Sampah",da:"Affaldskurv",fr:"Poubelle",cs:"Odpadkový koš"}},pointRendering:[{iconSize:"40,40",anchor:"center",location:["point"],marker:[{icon:{render:"./assets/themes/waste_basket/waste_basket.svg",id:"assetsthemeswastebasketwastebasketsvg"}}],iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[{color:"#00f",width:"8"}],presets:[{tags:["amenity=waste_basket"],title:{en:"a waste basket",nl:"een vuilnisbak",ru:"Контейнер для мусора",de:"einen Abfalleimer",eo:"Rubujo",it:"un cestino dei rifiuti",id:"sebuah keranjang sampah",da:"en affaldskurv",ca:"una paperera",fr:"une poubelle",cs:"odpadkový koš"},presiceInput:{preferredBackground:"photo"}}],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{id:"waste-basket-waste-types",question:{en:"What kind of waste basket is this?",nl:"Wat voor soort vuilnisbak is dit?",de:"Um was für einen Abfalleimer handelt es sich?",it:"Che tipo di cestino dei rifiuti è questo?",id:"Keranjang sampah macam apa ini?",da:"Hvad er det for en affaldskurv?",fr:"De quel type de poubelle s'agit-il ?",ca:"Quin tipus de paperera és aquesta?",cs:"Jaký druh koše na odpad je to?"},multiAnswer:!0,mappings:[{if:"waste=",then:{en:"A waste basket for general waste",nl:"Een vuilnisbak voor zwerfvuil",de:"Ein Abfalleimer für allgemeinen Müll",it:"Un cestino rifiuti per uso generico",id:"Keranjang sampah untuk sampah umum",da:"En affaldskurv til almindeligt affald",ca:"Una paperera per a residus generals",fr:"Une poubelle pour tout type d'ordures",cs:"Odpadkový koš na běžný odpad"},hideInAnswer:!0},{if:"waste=trash",then:{en:"A waste basket for general waste",nl:"Een vuilnisbak voor zwerfvuil",de:"Der Abfalleimer ist für allgemeinen Restmüll",it:"Un cestino rifiuti per uso generico",id:"Keranjang sampah untuk sampah umum",da:"En affaldskurv til almindeligt affald",fr:"Une poubelle pour tout type d'ordures",ca:"Una paperera per a residus generals",cs:"Odpadkový koš na běžný odpad"}},{if:"waste=dog_excrement",then:{en:"A waste basket for dog excrements",nl:"Een vuilnisbak specifiek voor hondenuitwerpselen",de:"Der Abfalleimer ist für Hundekot",it:"Un cestino rifiuti per escrementi di cani",id:"Keranjang sampah untuk kotoran anjing",da:"En affaldskurv til hundeekskrementer",fr:"Une poubelle pour déjections canines",ca:"Una paperera per a excrements de gossos",cs:"Odpadkový koš na psí exkrementy"}},{if:"waste=cigarettes",then:{en:"A waste basket for cigarettes",nl:"Een vuilnisbak voor sigarettenpeuken",de:"Der Abfalleimer ist für Zigaretten",it:"Un cestino rifiuti per sigarette",id:"Keranjang sampah untuk rokok",da:"En affaldskurv til cigaretter",fr:"Une poubelle pour mégots",ca:"Una paperera per a cigarrets",cs:"Odpadkový koš na cigarety"}},{if:"waste=drugs",then:{en:"A waste basket for drugs",nl:"Een vuilnisbak voor (vervallen) medicatie en drugs",de:"Der Abfalleimer ist für Drogen",it:"Un cestino rifiuti per medicinali",id:"Keranjang sampah untuk obat-obatan",da:"En affaldskurv til stoffer",ca:"Una paperera per a medicaments",fr:"Une poubelle pour médicaments",cs:"Odpadkový koš na léky"}},{if:"waste=sharps",then:{en:"A waste basket for needles and other sharp objects",nl:"Een vuilnisbak voor injectienaalden en andere scherpe voorwerpen",de:"Der Abfalleimer ist für Nadeln und andere scharfe Gegenstände",it:"Un cestino rifiuti per aghi e altri oggetti appuntiti",id:"Keranjang sampah untuk jarum dan benda tajam lainnya",da:"En affaldskurv til nåle og andre skarpe genstande",fr:"Une poubelle pour aiguilles et autres objets tranchants",ca:"Una paperera per a agulles i altres objectes punxants",cs:"Odpadkový koš na jehly a jiné ostré předměty"}},{if:"waste=plastic",then:{en:"A waste basket for plastic",nl:"Een vuilnisbak voor plastic",de:"Der Abfalleimer ist für Plastik",it:"Un cestino rifiuti per la plastica",id:"Keranjang sampah untuk plastik",da:"En affaldskurv til plast",fr:"Une poubelle pour plastiques",ca:"Una paperera per a plàstic",cs:"Odpadkový koš na plasty"}},{if:"waste=paper",then:{en:"A waste basket for paper",nl:"Een vuilnisbak voor papier",de:"Der Abfalleimer ist für Papier",it:"Un cestino rifiuti per la carta",id:"Keranjang sampah untuk kertas",da:"En affaldskurv til papir",fr:"Une poubelle pour papier",ca:"Una paperera per a paper",cs:"Odpadový koš na papír"}}]},{id:"dispensing_dog_bags",question:{en:"Does this waste basket have a dispenser for dog excrement bags?",nl:"Heeft deze vuilnisbak een verdeler voor hondenpoepzakjes?",de:"Hat der Abfalleimer einen Spender für (Hunde-)Kotbeutel?",it:"Questo cestino ha un distributore di sacchetti per escrementi dei cani?",id:"Apakah keranjang sampah ini memiliki dispenser untuk kantong kotoran anjing?",da:"Har denne affaldskurv en dispenser til poser med ekskrementer til hunde?",fr:"Est-ce que cette poubelle a un distributeur de sacs pour ramasser les déjections canines ?",ca:"Aquesta paperera té un dispensador per a bosses per a excrements de gossos?",cs:"Má tento odpadkový koš zásobník na sáčky na psí exkrementy?"},condition:{or:["waste=dog_excrement","waste=trash","waste="]},mappings:[{if:{and:["vending=dog_excrement_bag","not:vending="]},then:{en:"This waste basket has a dispenser for (dog) excrement bags",nl:"Deze vuilnisbak heeft een verdeler voor hondenpoepzakjes",de:"Der Abfalleimer hat einen Spender für (Hunde-)Kotbeutel",it:"Questo cestino ha un distributore di sacchetti per escrementi dei cani",id:"Keranjang sampah ini memiliki dispenser untuk kantong kotoran (anjing)",da:"Denne affaldskurv har en dispenser til poser til (hunde)ekskrementer",fr:"Cette poubelle a un distributeur de sacs pour ramasser les déjections canines",ca:"Aquesta paperera té un dispensador per a bosses d'excrements (de gossos)",cs:"Tento odpadkový koš má zásobník na sáčky na (psí) exkrementy"}},{if:{and:["not:vending=dog_excrement_bag","vending="]},then:{en:"This waste basket <b>does not</b> have a dispenser for (dog) excrement bags",nl:"Deze vuilnisbak heeft <b>geen</b> verdeler voor hondenpoepzakjes",de:"Der Abfalleimer <b>hat keinen</b> Spender für (Hunde-)Kotbeutel",it:"Questo cestino <b>non</b> ha un distributore di sacchetti per escrementi dei cani",id:"Keranjang sampah ini <b> tidak</b> memiliki dispenser untuk kantong kotoran (anjing)",da:"Denne affaldskurv <b>har ikke</b> en dispenser til poser til (hunde)ekskrementer",ca:"Aquesta paperera <b>no</b> té un dispensador per a bosses d'excrements (gossos)",fr:"Cette poubelle <b>n'a pas</b> un distributeur de sacs pour ramasser les déjections canines",cs:"Tento odpadkový koš <b>nemá</b> zásobník na sáčky na (psí) exkrementy"}},{if:"vending=",then:{en:"This waste basket <b>does not</b> have a dispenser for (dog) excrement bags",nl:"Deze vuilnisbak heeft <b>waarschijnlijk geen</b> verdeler voor hondenpoepzakjes",de:"Dieser Abfalleimer <b>hat keinen</b> Spender für (Hunde-)Kotbeutel",it:"Questo cestino <b>non</b> ha un distributore di sacchetti per escrementi dei cani",id:"Keranjang sampah ini <b> tidak</b> memiliki dispenser untuk kantong kotoran (anjing)",da:"Denne affaldskurv <b>har ikke</b> en dispenser til poser til (hunde)ekskrementer",fr:"Cette poubelle <b>n'a pas</b> de distributeur de sac pour ramasser les déjections canines",ca:"Aquesta paperera <b>no</b> té un dispensador per a bosses d'excrements (gossos)",cs:"Tento odpadkový koš <b>nemá</b> zásobník na sáčky na (psí) exkrementy"},hideInAnswer:!0}]},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"delete-button",render:{"*":"{delete_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],filter:[{id:"waste-type",options:[{question:{en:"All types",nl:"Alle soorten",de:"Alle Typen",es:"Todos los tipos",it:"Tutti i tipi",da:"Alle typer",ca:"Tots els tipus",fr:"Tout type",cs:"Všechny typy"}},{question:{en:"Waste basket for cigarettes",nl:"Vuilnisbak voor sigarettenpeuken",de:"Mülleimer für Zigaretten",es:"Papelera para cigarrillos",it:"Cestino per sigarette",da:"Affaldskurv til cigaretter",ca:"Paperera per a cigarrets",fr:"Poubelle pour mégots",cs:"Odpadový koš pro cigarety"},osmTags:"waste~i~.*cigarettes.*"},{question:{en:"Waste basket for drugs",nl:"Vuilnisbak voor (vervallen) medicatie en drugs",de:"Mülleimer für Drogen",it:"Cestino per medicinali",da:"Affaldskurv til stoffer",ca:"Paperera per a medicaments",fr:"Poubelle pour médicaments",cs:"Odpadový koš pro léky"},osmTags:"waste~i~.*drugs.*"},{question:{en:"Waste basket for dog excrement",nl:"Vuilnisbak voor hondenuitwerpselen",de:"Mülleimer für Hundekot",es:"Papelera para excrementos de perro",it:"Cestino per escrementi dei cani",da:"Affaldskurv til hundeekskrementer",ca:"Paperera per a excrements de gossos",fr:"Poubelle pour déjections canines",cs:"Odpadkový koš na psí exkrementy"},osmTags:"waste~i~.*dog_excrement.*"},{question:{en:"Waste basket for trash",nl:"Vuilnisbak voor zwerfvuil",de:"Mülleimer für allgemeinen Müll",es:"Papelera para basura",it:"Cestino per la spazzatura",da:"Affaldskurv til affald",ca:"Paperera per a brossa",fr:"Poubelle pour les déchets",cs:"Odpadkový koš na odpadky"},osmTags:"waste~i~.*trash.*"},{question:{en:"Waste basket for sharps",nl:"Vuilnisbak voor injectienaalden en andere scherpe voorwerpen",de:"Mülleimer für Nadeln und andere scharfe Gegenstände",it:"Cestino dei rifiuti per oggetti taglienti",da:"Affaldskurv til spidse og skarpe genstande",ca:"Paperera per a objectes punxants",fr:"Poubelle pour objets tranchants",cs:"Odpadkový koš na ostré předměty"},osmTags:"waste~i~.*sharps.*"},{question:{en:"Waste basket for plastic",nl:"Vuilnisbak voor plastic",de:"Mülleimer für Plastik",es:"Papelera para plástico",it:"Cestino per la plastica",da:"Affaldskurv til plast",ca:"Paperera per a plàstics",fr:"Poubelle pour plastiques",cs:"Odpadkový koš na plast"},osmTags:"waste~i~.*plastic.*"}]},{id:"waste-vending",options:[{question:{en:"Waste basket with dispenser for (dog) excrement bags",nl:"Vuilnisbak met verdeler voor hondenpoepzakjes",de:"Abfalleimer mit Spender für (Hunde-)Kotbeutel",es:"Papelera con dispensador de bolsas de excrementos (para perros)",it:"Cestino per rifiuti con dispenser per sacchetti per escrementi dei cani",da:"Affaldskurv med dispenser til poser til (hunde)ekskrementer",ca:"Papereres amb dispensador de bosses d'excrements (per a gossos)",fr:"Poubelle avec distributeur de sacs pour ramasser les déjections canines",cs:"Odpadkový koš se zásobníkem na sáčky na (psí) exkrementy"},osmTags:"vending=dog_excrement_bag"}]}],deletion:{softDeletionTags:{and:["disused:amenity:={amenity}","amenity="]},neededChangesets:1},allowMove:{enableRelocation:!1,enableImproveAccuracy:!0},cs:{0:{iconSize:{mappings:{0:{then:"Odpadkový koš"}}}}},titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"./assets/themes/waste_basket/waste_basket.svg"}],_basedOn:"waste_basket"},{id:"note_import_waste_basket",description:{ca:"Una capa que importa entrades per a Paperera",cs:"Vrstva, která importuje položky pro Odpadkový koš",da:"Et lag som importerer poster for Affaldskurv",de:"Eine Ebene, die Einträge für Abfalleimer importiert",en:"A layer which imports entries for Waste Basket",es:"Una capa que importar entradas para Waste Basket",nl:"Deze laag toont kaart-nota's die wijzen op een Vuilnisbak",pl:"Warstwa importująca wpisy dla Waste Basket",zh_Hant:"能夠為 Waste Basket 匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~[0-9]+","comment_url~.*notes/[0-9]*/comment.json"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10},passAllFeatures:!0,minzoom:10,title:{render:{ca:"Pot ser que hi hagi una paperera aquí",cs:"Zde by mohl být odpadkový koš",da:"Mulig en affaldskurv",de:"Möglicherweise gibt es hier einen Abfalleimer",en:"There might be a waste basket here",es:"Puede haber a waste basket aquí",fi:"Tässä on ehkä a waste basket",nb_NO:"Det kan være a waste basket her",nl:"Is hier een vuilnisbak?",pl:"Tutaj może znajdować się a waste basket",zh_Hant:"這裡可能有 a waste basket",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=get(feat)('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.\\(org|osm.be\\)/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=get(feat)('comments').length","_intro=(() => {const lines = get(feat)('comments')[0].text.split('\\n'); lines.splice(get(feat)('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = get(feat)('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, get(feat)('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)amenity=waste_basket($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(waste_basket, _tags, he trobat un una paperera aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(waste_basket, _tags, Našel jsem odpadkový koš zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(waste_basket, _tags, Jeg har fundet en en affaldskurv her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(waste_basket, _tags, Ich habe hier ein(en) einen Abfalleimer gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(waste_basket, _tags, I have found a a waste basket here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(waste_basket,_tags, He encontrado un(a) a waste basket aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(waste_basket, _tags, Ik heb hier een een vuilnisbak gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",pl:"{import_button(waste_basket, _tags, odnalazłem tutaj a waste basket - dodaj go do mapy,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(waste_basket, _tags, 我在這邊發現 a waste basket - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar una paperera: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít odpadkový koš - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde en affaldskurv - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte einen Abfalleimer nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a waste basket - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar a waste basket - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen een vuilnisbak vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",pl:"{close_note(Nie mogłem odnaleźć a waste basket – usuń go, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 a waste basket - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un una paperera al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází odpadkový koš - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden en affaldskurv på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen einen Abfalleimer auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a waste basket on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(a waste basket ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds een vuilnisbak op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",pl:"{close_note(Na mapie znajduje się już a waste basket - ten punkt jest duplikatem, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(a waste basket 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",pl:"<div class='thanks'>Ta funkcja została obsłużona! Dziękujemy za Twój wysiłek</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",pl:"<h3>Zdjęcia w pobliżu</h3>Poniższe zdjęcia to zdjęcia pobliskich obiektów z geotagami z różnych usług internetowych. Mogą pomóc Ci rozwiązać tę uwagę.{nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{id:"all_tags",render:"{all_tags()}",metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:"circle",color:"#fff"},{icon:{render:"help",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"checkmark"}]},color:"#00"}],iconSize:"40,40",anchor:"center"}]}],U=2,I="assets/SocialImage.png",t={id:T,title:L,description:q,shortDescription:D,icon:S,layers:P,widenFactor:U,socialImage:I};class m{metaTaggging_for_waste_basket(e,s){}metaTaggging_for_note_import_waste_basket(e,s){const{distanceTo:l,overlapWith:W,enclosingFeatures:N,intersectionsWith:V,closest:G,closestn:J,get:r}=s;o.AddLazyProperty(e.properties,"_first_comment",()=>r(e)("comments")[0].text.toLowerCase()),o.AddLazyProperty(e.properties,"_trigger_index",()=>(()=>e.properties._first_comment.split(`
`).map(i=>i.match(".*https://mapcomplete.(org|osm.be)/([a-zA-Z_-]+)(.html)?.*#import")).map((i,c)=>[i!==null,c]).filter(i=>i[0]).map(i=>i[1])[0])()),o.AddLazyProperty(e.properties,"_comments_count",()=>r(e)("comments").length),o.AddLazyProperty(e.properties,"_intro",()=>(()=>{const n=r(e)("comments")[0].text.split(`
`);return n.splice(r(e)("_trigger_index")-1,n.length),n.filter(d=>d!=="").join("<br/>")})()),o.AddLazyProperty(e.properties,"_tags",()=>(()=>{let n=r(e)("comments")[0].text.split(`
`).map(d=>d.trim());return n.splice(0,r(e)("_trigger_index")+1),n=n.filter(d=>d!=""),n.join(";")})())}}p(m,"themeName","waste_basket");function O(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}}async function M(a){return await o.waitFor(a),{layers:[]}}async function K(){try{const a=new URL(B.VectorTileServer).host,e=await Promise.any([o.downloadJson("https://"+a+"/summary/status.json"),M(0)]);return new Set(e.layers)}catch(a){return console.error("Could not get MVT available layers due to",a),new Set}}async function H(){if(!O())new C("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const a=await K();A.setThemeMetatagging(new m),t.layers.push(k),t.layers.push(h),t.layers.push(b),t.layers.push(f),t.layers.push(v),t.layers.push(_),t.layers.push(w),t.layers.push(y),t.layers.push(x);const e=new j(new E(t),a);new z(R,{state:e}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(l=>{l.parentElement.removeChild(l)})}}H();
//# sourceMappingURL=waste_basket-73aa4a94.js.map
