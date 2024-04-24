var o=Object.defineProperty;var d=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(d(e,typeof t!="symbol"?t+"":t,s),s);import{U as l}from"./Utils-28f00dfc.js";import"./FeatureSwitchState-61451068.js";import{s as c,g as m,a as h,h as g,b as p,r as u,l as k}from"./last_click-55d8aa15.js";import{f as w}from"./preload-helper-0aea19aa.js";import{M as f,T as _,a as v,s as y}from"./ThemeViewGUI-7020830e.js";import{k as b}from"./index-047bb07b.js";import{L as R}from"./Checkbox-91647881.js";import{F as E}from"./tw-merge-7570a3e9.js";import{C}from"./Constants-6798f846.js";import"./UIEventSource-2fd3b430.js";import"./FixImages-91be3c6c.js";import"./placeholder-ecdb271f.js";import"./Loading-754de247.js";import"./OsmConnection-63d2895e.js";import"./LocalStorageSource-91540725.js";import"./LanguagePicker-e1c7ef89.js";import"./Dropdown-46c343d5.js";import"./BackButton-4febcf6d.js";import"./Add-f3431a17.js";import"./Login-be56b5c4.js";import"./Community-c78c41ea.js";import"./Filterview-95b4504e.js";import"./PrivacyPolicy-3dcce47c.js";const B="sidewalks",A={en:"Sidewalks",ru:"Тротуары",nl:"Voetpaden",de:"Gehwege",ca:"Voreres",es:"Aceras",fr:"Trottoirs",nb_NO:"Fortau",it:"Marciapiedi",da:"Fortove",pa_PK:"فُٹ‌پاتھ",cs:"Chodníky",zh_Hant:"人行道",eu:"Espaloiak",pl:"Chodniki",_context:"themes:sidewalks.title"},x={en:"Experimental theme",ru:"Экспериментальная тема",ca:"Petició experimental",de:"Experimentelles Thema",es:"Tema experimental",nl:"Experimenteel thema",fr:"Thème expérimental",nb_NO:"Eksperimentelt tema",da:"Eksperimentelt tema",pa_PK:"آزمائش تھیم",cs:"Experimentální téma",zh_Hant:"實驗性的主題",pl:"Temat eksperymentalny",_context:"themes:sidewalks.description"},q={en:"Sidewalk mapping",ca:"Mapejat de voreres",de:"Kartierung von Bürgersteigen",es:"Mapeo de aceras",nl:"Voetpaden in kaart brengen",fr:"Cartographier des trottoirs",it:"Mappatura del marciapiede",da:"Kortlægning af fortov",pa_PK:"فُت‌پیتھ دا نقشہ بݨاؤݨ",cs:"Mapování chodníků",pl:"Mapowanie chodnika",_context:"themes:sidewalks.shortDescription"},z="./assets/svg/bug.svg",L=!0,T=[{id:"sidewalks",name:{en:"Sidewalks",ru:"Тротуары",de:"Gehwege",ca:"Voreres",es:"Aceras",nb_NO:"Fortau",nl:"Voetpaden",fr:"Trottoirs",it:"Marciapiedi",da:"Fortove",pa_PK:"فُٹ‌پاتھ",cs:"Chodníky",zh_Hant:"人行道",eu:"Espaloiak",pl:"Chodniki",_context:"themes:sidewalks.layers.sidewalks.name"},minzoom:12,source:{osmTags:{or:["highway=residential","highway=unclassified","highway=tertiary","highway=secondary"]}},title:{render:{en:"{name}",ru:"{name}",de:"{name}",ca:"{name}",es:"{name}",nl:"{name}",fr:"{name}",it:"{name}",da:"{name}",cs:"{name}",eu:"{name}",pl:"{name}",_context:"themes:sidewalks.layers.sidewalks.title.render"},mappings:[{if:"name=",then:"Nameless street"}]},description:{en:"Layer showing sidewalks of highways",de:"Ebene mit Bürgersteigen",es:"Una capa que muestra las aceras de las vías",nl:"Laag die voetpaden naast wegen toont",fr:"Calque montrant les trottoirs",da:"Lag, der viser fortove på motorveje",ca:"Una capa que mostra les voreres de les vies",cs:"Vrstva zobrazující chodníky silnic",zh_Hant:"顯示道路的人行穿越道的圖層",pl:"Warstwa pokazująca chodniki przy drogach",_context:"themes:sidewalks.layers.sidewalks.description"},tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"streetname",render:{en:"This street is named {name}",de:"Diese Straße heißt {name}",es:"Esta calle se llama {name}",nl:"Deze straat heet {name}",fr:"Cette rue s’appelle {name}",nb_NO:"Denne gaten heter {name}",it:"La strada si chiama {name}",da:"Denne gade hedder {name}",ca:"El carrer s'anomena {name}",cs:"Tato ulice se jmenuje {name}",pl:"Nazwa ulicy to {name}",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.streetname.render"}},{id:"sidewalk_minimap_left",render:"{sided_minimap(left):height:8rem;border-radius:0.5rem;overflow:hidden}"},{id:"has_sidewalk_left",question:{en:"Is there a sidewalk on this side of the road?",de:"Gibt es auf dieser Straßenseite einen Bürgersteig?",da:"Er der et fortov på denne side af vejen?",nl:"Is er een stoep aan deze kant van de weg?",fr:"Y a-t-il un trottoir de ce côté de la route ?",ca:"Hi ha una vorera a aquest costat del carrer?",es:"¿Hay una acera en este lado de la calle?",cs:"Je na této straně silnice chodník?",pl:"Czy po tej stronie drogi jest chodnik?",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_left.question"},mappings:[{if:"sidewalk:left=yes",then:{en:"There is a sidewalk on this side of the road",de:"Es gibt einen Bürgersteig auf dieser Straßenseite",da:"Der er et fortov på denne side af vejen",nl:"Er is een stoep aan deze kant van de weg",fr:"Il y a un trottoir de ce côté de la route",ca:"Hi ha una vorera a aquest costat del carrer",es:"Hay una acera en este lado de la calle",cs:"Na této straně silnice je chodník",it:"C'è un marciapiede su questo lato della strada",pl:"Jest chodnik z boku drogi",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_left.mappings.0.then"}},{if:"sidewalk:left=no",then:{en:"There is no sidewalk to walk on",de:"Es gibt keinen Bürgersteig für Fußgänger",da:"Der er ikke noget fortov at gå på",nl:"Er is geen stoep om op te lopen",fr:"Il n'y a pas de trottoir où marcher",ca:"No hi ha vorera per la que caminar",es:"No hay acera por la que caminar",cs:"Není tu žádný chodník",it:"Non c'è un marciapiede su cui camminare",pl:"Nie ma chodnika, którym można chodzić",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_left.mappings.1.then"}},{if:"sidewalk:left=separate",then:{en:"There is a separately mapped sidewalk to walk on",de:"Es gibt einen separat kartierten Bürgersteig für Fußgänger",da:"Der er et særskilt kortlagt fortov at gå på",nl:"Er is een apart ingetekende stoep om op te lopen",fr:"Il y a un trottoir où marcher cartographié séparément",ca:"Hi ha una vorera mapejada separadament per on caminar",es:"Hay una acera mapeada por separado por la que caminar",cs:"Na mapě je vyznačen samostatný chodník",pl:"Jest oddzielnie oznaczony chodnik",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_left.mappings.2.then"}}]},{id:"sidewalk_width_left",question:{en:"What is the width of the sidewalk on this side of the road?",de:"Wie breit ist der Bürgersteig auf dieser Straßenseite?",da:"Hvad er bredden af fortovet på denne side af vejen?",nl:"Hoe breed is de stoep aan deze kant van de weg?",fr:"Quelle est la largeur du trottoir de ce côté de la route ?",ca:"Quina és l'amplada de la vorera a aquest costat de la calçada?",es:"¿Cuál es la anchura de la acera en este lado de la calzada?",cs:"Jaká je šířka chodníku na této straně silnice?",pl:"Jaka jest szerokość chodnika po tej stronie drogi?",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.sidewalk_width_left.question"},render:{en:"This sidewalk is {sidewalk:left:width}m wide",de:"Dieser Bürgersteig ist {sidewalk:left:width}m breit",da:"Dette fortov er {sidewalk:left:width}m bredt",nl:"Deze stoep is {sidewalk:left:width}m breed",fr:"Ce trottoir fait {sidewalk:left:width} m de large",ca:"Aquesta vorera té {sidewalk:left:width} m d'ample",es:"Esta acera tiene {sidewalk:left:width} m de ancho",cs:"Tento chodník je široký {sidewalk:left:width}m",pl:"Ten chodnik ma {sidewalk:left:width}m szerokości",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.sidewalk_width_left.render"},condition:"sidewalk:left=yes",freeform:{key:"sidewalk:left:width",type:"distance",helperArgs:["21","map"],inline:!0}},{id:"sidewalk_minimap_right",render:"{sided_minimap(right):height:8rem;border-radius:0.5rem;overflow:hidden}"},{id:"has_sidewalk_right",question:{en:"Is there a sidewalk on this side of the road?",de:"Gibt es auf dieser Straßenseite einen Bürgersteig?",da:"Er der et fortov på denne side af vejen?",nl:"Is er een stoep aan deze kant van de weg?",fr:"Y a-t-il un trottoir de ce côté de la route ?",ca:"Hi ha una vorera a aquest costat del carrer?",es:"¿Hay una acera en este lado de la calle?",cs:"Je na této straně silnice chodník?",pl:"Czy po tej stronie drogi jest chodnik?",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_right.question"},mappings:[{if:"sidewalk:right=yes",then:{en:"There is a sidewalk on this side of the road",de:"Es gibt einen Bürgersteig auf dieser Straßenseite",da:"Der er et fortov på denne side af vejen",nl:"Er is een stoep aan deze kant van de weg",fr:"Il y a un trottoir de ce côté de la route",ca:"Hi ha una vorera a aquest costat del carrer",es:"Hay una acera en este lado de la calle",cs:"Na této straně silnice je chodník",it:"C'è un marciapiede su questo lato della strada",pl:"Jest chodnik z boku drogi",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_right.mappings.0.then"}},{if:"sidewalk:right=no",then:{en:"There is no sidewalk to walk on",de:"Es gibt keinen Bürgersteig für Fußgänger",da:"Der er ikke noget fortov at gå på",nl:"Er is geen stoep om op te lopen",fr:"Il n'y a pas de trottoir où marcher",ca:"No hi ha vorera per la que caminar",es:"No hay acera por la que caminar",cs:"Není tu žádný chodník",it:"Non c'è un marciapiede su cui camminare",pl:"Nie ma chodnika, którym można chodzić",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_right.mappings.1.then"}},{if:"sidewalk:right=separate",then:{en:"There is a separately mapped sidewalk to walk on",de:"Es gibt einen separat kartierten Bürgersteig für Fußgänger",da:"Der er et særskilt kortlagt fortov at gå på",nl:"Er is een apart ingetekende stoep om op te lopen",fr:"Il y a un trottoir où marcher cartographié séparément",ca:"Hi ha una vorera mapejada separadament per on caminar",es:"Hay una acera mapeada por separado por la que caminar",cs:"Na mapě je vyznačen samostatný chodník",pl:"Jest oddzielnie oznaczony chodnik",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.has_sidewalk_right.mappings.2.then"}}]},{id:"sidewalk_width_right",question:{en:"What is the width of the sidewalk on this side of the road?",de:"Wie breit ist der Bürgersteig auf dieser Straßenseite?",da:"Hvad er bredden af fortovet på denne side af vejen?",nl:"Hoe breed is de stoep aan deze kant van de weg?",fr:"Quelle est la largeur du trottoir de ce côté de la route ?",ca:"Quina és l'amplada de la vorera a aquest costat de la calçada?",es:"¿Cuál es la anchura de la acera en este lado de la calzada?",cs:"Jaká je šířka chodníku na této straně silnice?",pl:"Jaka jest szerokość chodnika po tej stronie drogi?",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.sidewalk_width_right.question"},render:{en:"This sidewalk is {sidewalk:right:width}m wide",de:"Dieser Bürgersteig ist {sidewalk:right:width}m breit",da:"Dette fortov er {sidewalk:right:width}m bredt",nl:"Deze stoep is {sidewalk:right:width}m breed",fr:"Ce trottoir fait {sidewalk:right:width} m de large",ca:"Aquesta vorera té {sidewalk:right:width} m d'ample",es:"Esta acera tiene {sidewalk:right:width} m de ancho",cs:"Tento chodník je široký {sidewalk:right:width}m",pl:"Ten chodnik ma {sidewalk:right:width}m szerokości",_context:"themes:sidewalks.layers.sidewalks.tagRenderings.left-right-questions.renderings.sidewalk_width_right.render"},condition:"sidewalk:right=yes",freeform:{key:"sidewalk:right:width",type:"distance",helperArgs:["21","map"],inline:!0}},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"split-button",render:{"*":"{split_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["start","end"],marker:[{icon:{render:"circle:#ccc",id:"circleccc"}}],iconSize:"3,3",anchor:"center",iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[{"#":"The center line",color:"#ffffff55",width:8,lineCap:"butt"},{"#":"left",color:"#888",dashArray:{render:"",mappings:[{if:"sidewalk:left=",then:"1,12"}]},width:{render:6,mappings:[{if:{or:["sidewalk:left=no","sidewalk:left=separate"]},then:0}]},offset:-6,lineCap:"butt"},{color:"#888",dashArray:{render:"",mappings:[{if:"sidewalk:right=",then:"1,12"}]},width:{render:6,mappings:[{if:{or:["sidewalk:right=no","sidewalk:right=separate"]},then:0}]},lineCap:"butt",offset:6}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"}]}],j=.05,S="assets/SocialImage.png",a={id:B,title:A,description:x,shortDescription:q,icon:z,hideFromOverview:L,layers:T,widenFactor:j,socialImage:S};class r{metaTaggging_for_sidewalks(t,s){}}n(r,"themeName","sidewalks");function D(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch{return!1}}async function N(e){return await l.waitFor(e),{layers:[]}}async function I(){try{const e=new URL(C.VectorTileServer).host,t=await Promise.any([N(0)]);return new Set(t.layers)}catch(e){return console.error("Could not get MVT available layers due to",e),new Set}}async function H(){if(!D())new E("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const e=await I();f.setThemeMetatagging(new r),a.layers.push(c),a.layers.push(m),a.layers.push(h),a.layers.push(g),a.layers.push(p),a.layers.push(u),a.layers.push(k),a.layers.push(w),a.layers.push(y);const t=new _(new R(a),e);new b(v,{state:t}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(i=>{i.parentElement.removeChild(i)})}}H();
//# sourceMappingURL=sidewalks-22d453ef.js.map
