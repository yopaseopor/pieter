var o=Object.defineProperty;var r=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var a=(e,t,i)=>(r(e,typeof t!="symbol"?t+"":t,i),i);import{U as l}from"./Utils-45e0ac39.js";import"./FeatureSwitchState-33d9ce0b.js";import{s as d,g as c,a as m,h,b as g,r as p,l as u}from"./last_click-e5145946.js";import{f as _}from"./preload-helper-fa3a9420.js";import{M as w,T as f,a as y,s as b}from"./ThemeViewGUI-60709b61.js";import{k}from"./index-8d610534.js";import{L as R}from"./Checkbox-dc9dc3e8.js";import{F as v}from"./tw-merge-406b9d2a.js";import{C as A}from"./Constants-20b684f6.js";import"./UIEventSource-b2e0ae35.js";import"./SubtleLink-8f77ee6e.js";import"./_commonjsHelpers-23102255.js";import"./placeholder-e6db1f89.js";import"./index-44f7831e.js";import"./Loading-0105a63e.js";import"./OsmConnection-e59ca60f.js";import"./LocalStorageSource-152a04ab.js";import"./LanguagePicker-e15799d0.js";import"./Dropdown-37378ddd.js";import"./BackButton-df937b24.js";import"./Add-d8a55803.js";import"./Login-29e6f12c.js";import"./index-d8df05ab.js";import"./MvtSource-b6afcd24.js";import"./Community-0b564fff.js";import"./Filterview-dfafe32d.js";import"./PrivacyPolicy-106faf65.js";const C="cycle_highways",B={en:"Cycle highways",de:"Radschnellwege",it:"Strade per velocipedi",ca:"Vies ciclistes",fr:"Aménagements cyclables",nl:"Fietssnelwegen",es:"Autovías ciclistas",nb_NO:"Sykkelmotorveier",da:"Cykelmotorveje",pa_PK:"سائیکل‌وے",cs:"Cyklodálnice",pl:"Ścieżki rowerowe",_context:"themes:./assets/themes/cycle_highways/cycle_highways.json.title"},E={en:"This map shows cycle highways",de:"Diese Karte zeigt Radschnellwege",it:"Questa cartina mostra le strade per velocipedi",fr:"Cette carte affiche les aménagements cyclables",nl:"Deze kaart toont fietssnelwegen",es:"Este mapa muestra autovías ciclistas",nb_NO:"Kart som viser sykkelmotorveier",ca:"Aquest mapa mostra carrils bici",da:"Dette kort viser cykelmotorveje",cs:"Tato mapa zobrazuje cyklostezky",pl:"Ta mapa pokazuje ścieżki rowerowe",_context:"themes:./assets/themes/cycle_highways/cycle_highways.json.description"},L="./assets/themes/cycle_highways/fietssnelwegen-logo.svg",T=10,x=51.1599,q=3.3475,j="maptiler.backdrop",S=["L'imaginaire"],z=!0,I=[{id:"cycle_highways",tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{render:"The name is <b>{name}</b>",question:"What is the name of this cycle highway?",freeform:{key:"name",inline:!0},id:"cycle_highways-name"},{render:"Referentienummer is <b>{ref}</b>",question:"What is the reference number of this cycle highway?",freeform:{key:"ref",inline:!0},id:"cycle_highways-ref"},{render:"The current state of this link is {state}",question:"What is the state of this link?",freeform:{key:"state",inline:!0},mappings:[{if:{and:["state=proposed","note:state="]},then:"This is a proposed route which can be cycled"},{then:"This is a proposed route which has missing links (thus: some parts don't even have a building permit yet)",if:{and:["state=proposed","note:state=has_highway_no"]}},{then:"This is a proposed route which has some links which are under construction",if:{and:["state=proposed","note:state=has_highway_under_construction"]}},{if:"state=temporary",then:"This is a temporary deviation"},{if:"state=",then:"This link is operational and signposted"}],id:"cycle_highways-state"},{id:"cycle-highway-length",render:"This part is {_length:km}km long"},{id:"website",labels:["contact"],icon:"./assets/layers/icons/website.svg",question:{en:"What is the website of {title()}?",nl:"Wat is de website van {title()}?",fr:"Quel est le site web de {title()} ?",gl:"Cal é a páxina web de {title()}?",nb_NO:"Hva er nettsiden til {title()}?",ru:"Какой сайт у {title()}?",id:"Apa situs web dari {title()}?",zh_Hant:"{title()} 網址是什麼？",it:"Qual è il sito web di {title()}?",de:"Wie lautet die Webseite von {title()}?",pt_BR:"Qual o site de {title()}?",pl:"Jaka jest strona internetowa {title()}?",sv:"Vad är webbplatsen för {title()}?",pt:"Qual é o sítio web de {title()}?",eo:"Kie estas la retejo de {title()}?",hu:"Mi a weboldala ennek: {title()}?",ca:"Quina és la web de {title()}?",ja:"{title()}のウェブサイトは？",fil:"Ano ang website ng {title()}?",es:"¿Cual es el sitio web de {title()}?",zh_Hans:"{title()} 的网站为何？",da:"Hvad er webstedet for {title()}?",cs:"Jaká je webová stránka {title()}?"},render:{"*":"<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>"},freeform:{key:"website",type:"url",addExtraTags:["contact:website="]},mappings:[{if:"contact:website~*",then:"<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>",hideInAnswer:!0,icon:"./assets/layers/icons/website.svg"}],editButtonAriaLabel:{en:"Edit website",nl:"Pas website aan",de:"Webseite bearbeiten"}},{id:"all_tags",description:"Shows a table with all the tags of the feature",render:{"*":"{all_tags()}"}},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}}],name:{en:"cycle highways",de:"Radschnellwege",ca:"vies ciclistes",fr:"Aménagements cyclables",nl:"fietssnelwegen",es:"autovías ciclistas",nb_NO:"sykkelmotorveier",da:"cykelmotorveje",pa_PK:"سائیکل‌وے",cs:"cyklodálnice",pl:"ścieżki rowerowe",_context:"themes:./assets/themes/cycle_highways/cycle_highways.json.layers.cycle_highways.name"},source:{osmTags:"cycle_network=BE-VLG:cycle_highway"},minzoom:8,title:{render:{en:"cycle highway",de:"Radschnellweg",ca:"via ciclista",fr:"Aménagement cyclable",nl:"fietssnelweg",es:"autovía ciclista",nb_NO:"sykkelmotorvei",da:"cykelmotorvej",pa_PK:"سائیکل‌وے",cs:"cyklodálnice",pl:"ścieżka rowerowa",_context:"themes:./assets/themes/cycle_highways/cycle_highways.json.layers.cycle_highways.title.render"}},filter:[{id:"name-alt",options:[{question:"Name contains 'alt'",osmTags:"name~i~.*alt.*"}]},{id:"name-wenslijn",options:[{question:"Name contains 'wenslijn'",osmTags:"name~i~.*wenslijn.*"}]},{id:"name-omleiding",options:[{question:"Name contains 'omleiding'",osmTags:"name~i~.*omleiding.*"}]},{id:"ref-alt",options:[{question:"Reference contains 'alt'",osmTags:"ref~i~.*aAlt.*"}]},{id:"missing_link",options:[{question:"No filter"},{question:"Has missing links (note:state=has_highway_no)",osmTags:"note:state=has_highway_no"},{question:"Has links which are under construction (note:state=has_highway_under_construction)",osmTags:"note:state=has_highway_under_construction"},{question:"Has links which are proposed (note:state=has_highway_proposed)",osmTags:"note:state=has_highway_proposed"}]},{id:"proposed",options:[{question:"No filter"},{question:"state=proposed",osmTags:"state=proposed"},{question:"state=temporary",osmTags:"state=temporary"},{question:"state unset",osmTags:"state="},{question:"Other state",osmTags:{and:["state!=","state!=proposed","state!=temporary"]}}]}],pointRendering:null,lineRendering:[{color:{render:"#ff7392",mappings:[{if:"state=",then:"#00acfc"},{if:"state=temporary",then:"#00acfc"}]},width:"4",dashArray:{render:"",mappings:[{if:"state=temporary",then:"12 10"},{if:"note:state=has_highway_no",then:"0 8"},{if:"note:state=has_highway_under_construction",then:"12 10"}]}}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"}]}],W=60,N=1.1,O="assets/SocialImage.png",s={id:C,title:B,description:E,icon:L,startZoom:T,startLat:x,startLon:q,defaultBackgroundId:j,credits:S,hideFromOverview:z,layers:I,overpassTimeout:W,widenFactor:N,socialImage:O};class n{metaTaggging_for_cycle_highways(t,i){}}a(n,"themeName","cycle_highways");function V(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch{return!1}}async function D(){try{const e=new URL(A.VectorTileServer).host,t=await l.downloadJson("https://"+e+"/summary/status.json");return new Set(t.layers)}catch(e){return console.error("Could not get MVT available layers due to",e),new Set}}async function F(){if(!V())new v("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const e=await D();w.setThemeMetatagging(new n),s.layers.push(d),s.layers.push(c),s.layers.push(m),s.layers.push(h),s.layers.push(g),s.layers.push(p),s.layers.push(u),s.layers.push(_),s.layers.push(b);const t=new f(new R(s),e);new k(y,{state:t}).AttachTo("maindiv")}}F();
//# sourceMappingURL=cycle_highways-ff0bd8a3.js.map
