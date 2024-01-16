var l=Object.defineProperty;var p=(n,e,a)=>e in n?l(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var r=(n,e,a)=>(p(n,typeof e!="symbol"?e+"":e,a),a);import{U as i}from"./Utils-498bb79d.js";import{M as h,T as c,a as g}from"./ThemeViewGUI-73e6f4a5.js";import{s as _,g as m,a as w,h as k,b as u,r as y,l as f}from"./last_click-b8e734eb.js";import{f as b}from"./TabbedGroup-3d617641.js";import{k as v}from"./index-f508aba0.js";import{L as R}from"./Checkbox-bf93297d.js";import{F as B}from"./Tr-e239e396.js";import"./LocalStorageSource-4f66d5e4.js";import"./Constants-6d8bfdd6.js";import"./LanguagePicker-4da0e059.js";import"./Dropdown-b5580e5b.js";import"./ToSvelte-6b55a390.js";import"./Img-0db2a507.js";import"./Icon-c5c3009e.js";import"./tw-merge-2cd9e3ed.js";import"./Loading-da637902.js";import"./OsmConnection-07ef22c9.js";import"./FeatureSwitchState-870b8990.js";import"./Add-3857ec59.js";import"./Community-9c657141.js";import"./Filterview-608a7eab.js";import"./PrivacyPolicy-5bc9c077.js";import"./BackButton-a051d95d.js";const A="width",C={nl:"Straatbreedtes",_context:"themes:./assets/themes/width/width.json.title"},E=["nl"],L={nl:"<h3>De straat is opgebruikt</h3> <p>Er is steeds meer druk op de openbare ruimte. Voetgangers, fietsers, steps, auto's, bussen, bestelwagens, buggies, cargobikes, ... willen allemaal hun deel van de openbare ruimte en de straat.</p> <p>In deze studie nemen we Brugge onder de loep en kijken we hoe breed elke straat is én hoe breed elke straat zou moeten zijn voor een veilig én vlot verkeer.</p> <h3>Legende</h3> <span style='background: red'>&NonBreakingSpace;&NonBreakingSpace;&NonBreakingSpace;</span> Straat te smal voor veilig verkeer<br/> <span style='background: #0f0'>&NonBreakingSpace;&NonBreakingSpace;&NonBreakingSpace;</span> Straat is breed genoeg veilig verkeer<br/> <span style='background: orange'>&NonBreakingSpace;&NonBreakingSpace;&NonBreakingSpace;</span> Straat zonder voetpad, te smal als ook voetgangers plaats krijgen<br/> <span style='background: lightgrey'>&NonBreakingSpace;&NonBreakingSpace;&NonBreakingSpace;</span> Autoluw, autoloos of enkel plaatselijk verkeer<br/> <br/> <br/> Een gestippelde lijn is een straat waar ook voor fietsers éénrichtingsverkeer geldt.<br/> Klik op een straat om meer informatie te zien.",_context:"themes:./assets/themes/width/width.json.description"},x="./assets/themes/width/icon.svg",z=14,S=51.20875,j=3.22435,T="alidade.smooth_dark",q=!0,N=[{id:"street_with_width",description:"A layer showing street with corresponding widths + an analysis of what this width is used for",name:{nl:"Straten met een breedte",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.name"},calculatedTags:["_car_width:=2 /* The width that a single car needs */","_cyclistWidth:=1.5 /* The width a single cyclist needs to be safely overtaken */","_pedestrianWidth:=0.75 /* The width a pedestrian needs if sidewalks are missing */","_has_left_parking=(feat.properties['parking:lane:left'] ?? feat.properties['parking:lane:both']) === 'parallel'","_has_right_parking=(feat.properties['parking:lane:right'] ?? feat.properties['parking:lane:both']) === 'parallel'","_has_other_parking= ['parking:lane:left','parking:lane:right','parking:lane:both'].some(key => ['perpendicular','diagonal'].indexOf(feat.properties[key]) >= 0)","_parallel_parking_count=get(feat)('_has_right_parking') + get(feat)('_has_left_parking') /* in javascript logic: true + true == 2*/","_width:needed:parking=get(feat)('_parallel_parking_count') * get(feat)('_car_width')","_has_sidewalk_left=['left','both'].indexOf(feat.properties['sidewalk']) >= 0","_has_sidewalk_right=['right','both'].indexOf(feat.properties['sidewalk']) >= 0","_pedestrian_flows_in_carriageway= 2 - get(feat)('_has_sidewalk_left') - get(feat)('_has_sidewalk_right')","_width:needed:pedestrians=get(feat)('_pedestrianWidth') * get(feat)('_pedestrian_flows_in_carriageway')","_oneway_car=(feat.properties['oneway:motor_vehicle'] ?? feat.properties['oneway']) == 'yes'","_width:needed:cars=get(feat)('_car_width') * (2 - get(feat)('_oneway_car'))","_cycling_allowed=feat.properties.bicycle != 'use_sidepath' && feat.properties.bicycle!='no'","_oneway_bicycle=((feat.properties['oneway:bicycle'] ?? feat.properties['oneway']) == 'yes') && feat.properties['cycleway'] != 'opposite'","_width:needed:cyclists=get(feat)('_cycling_allowed') ? (get(feat)('_cyclistWidth') * (2 - get(feat)('_oneway_bicycle'))) : 0","_width:needed:total:=get(feat)('_width:needed:cars') + get(feat)('_width:needed:parking') +  get(feat)('_width:needed:cyclists') +  get(feat)('_width:needed:pedestrians')","_width:difference:=get(feat)('_width:needed:total') - get(feat)('width:carriageway')","_width:difference:no_pedestrians:=get(feat)('_width:difference') - get(feat)('_width:needed:pedestrians')"],minzoom:12,source:{osmTags:"width:carriageway~*"},title:{render:{nl:"{name}",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.title.render"},mappings:[{if:"name=",then:{nl:"Naamloos segment",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.title.mappings.0.then"}}]},tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"carriageway_width",render:"Deze straat is <b>{width:carriageway}m</b> breed",question:"Hoe breed is deze straat?",freeform:{key:"width:carriageway",type:"distance",helperArgs:[21,"map"],inline:!0}},{id:"too_little_width",render:"Deze straat heeft <span class='alert'>{_width:difference}m</span> te weinig. De ruimte die nodig zou zijn is:",mappings:[{if:{or:["_width:difference~-.*","_width:difference=0"]},then:"Deze straat is breed genoeg:"}]},{id:"needed_for_cars",render:"<b>{_width:needed:cars}m</b> voor het autoverkeer",mappings:[{if:"oneway=yes",then:"<b>{_width:needed:cars}m</b> voor het éénrichtings-autoverkeer"},{if:"oneway=no",then:"<b>{_width:needed:cars}m</b> voor het tweerichtings-autoverkeer"}]},{id:"needed_for_parking",render:"<b>{_width:needed:parking}m</b> voor het geparkeerde wagens",condition:"_width:needed:parking!=0"},{id:"needed_for_cyclists",render:"<b>{_width:needed:cyclists}m</b> voor fietsers",mappings:[{if:"bicycle=use_sidepath",then:"Fietsers hebben hier een vrijliggend fietspad en worden dus niet meegerekend"},{if:"oneway:bicycle=yes",then:"<b>{_width:needed:cyclists}m</b> voor fietsers die met de rijrichting mee moeten"}]},{id:"needed_for_pedestrians",render:"<b>{_width:needed:pedestrians}m</b> voor voetgangers",condition:"_width:needed:pedestrians!=0",mappings:[{if:{or:["sidewalk=none","sidewalk=no"]},then:"<b>{_width:needed:pedestrians}m</b> voor voetgangers: er zijn hier geen voetpaden"},{if:{or:["sidewalk=left","sidewalk=right"]},then:"<b>{_width:needed:pedestrians}m</b> voor voetgangers: er is slechts aan één kant een voetpad"}]},{id:"total_width_needed",render:"<span style='border: 1px solid black; border-radius: 0.5em; padding: 0.25em;'><b>{_width:needed:total}m</b> nodig in het totaal</span>"},{id:"has_sidewalks",condition:"id=disabled",question:{nl:"Heeft deze straat voetpaden?",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.tagRenderings.has_sidewalks.question"},mappings:[{if:"sidewalk=both",then:{nl:"Voetpad aan beide zijden",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.tagRenderings.has_sidewalks.mappings.0.then"}},{if:"sidewalk=none",then:{nl:"Heeft géén voetpaden",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.tagRenderings.has_sidewalks.mappings.1.then"}},{if:"sidewalk=left",then:{nl:"Voetpad aan de linkerkant",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.tagRenderings.has_sidewalks.mappings.2.then"}},{if:"sidewalk=right",then:{nl:"Voetpad aan de rechterzijde",_context:"themes:./assets/themes/width/width.json.layers.street_with_width.tagRenderings.has_sidewalks.mappings.3.then"}}]},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:{render:"./assets/themes/width/icon.svg",id:"assetsthemeswidthiconsvg"}}],iconSize:"40,40",anchor:"center",iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[{width:"4",color:{render:"#00f",mappings:[{if:{or:["access=destination","highway=pedestrian","motor_vehicle=no","motor_vehicle=destination"]},then:"lightgrey"},{if:{and:["_width:difference!~-.*","_width:difference:no_pedestrians~-.*"]},then:"orange"},{if:"_width:difference~-.*",then:"#0f0"},{if:"_width:difference!~-.*",then:"#f00"}]},dashArray:{render:"",mappings:[{if:{and:["oneway=yes",{or:["oneway:bicycle=yes","oneway:bicycle="]}]},then:"5 6"}]}}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*","seasonal=","seasonal=no",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"}]}],W=[[3.2006263732910156,51.22699040520305],[3.2529830932617188,51.190748429411705]],I=!1,P=!1,D=!1,O=!1,F=!1,M=!1,V=.05,U=!1,G="assets/SocialImage.png",s={id:A,title:C,mustHaveLanguage:E,description:L,icon:x,startZoom:z,startLat:S,startLon:j,defaultBackgroundId:T,hideFromOverview:q,layers:N,lockLocation:W,enableUserBadge:I,enableShareScreen:P,enableMoreQuests:D,enableLayers:O,enableSearch:F,enableBackgroundLayerSelection:M,widenFactor:V,clustering:U,socialImage:G};class o{metaTaggging_for_street_with_width(e,a){const{distanceTo:Z,overlapWith:Q,enclosingFeatures:J,intersectionsWith:K,closest:Y,closestn:X,get:t}=a;e.properties._car_width=2,e.properties._cyclistWidth=1.5,e.properties._pedestrianWidth=.75,i.AddLazyProperty(e.properties,"_has_left_parking",()=>(e.properties["parking:lane:left"]??e.properties["parking:lane:both"])==="parallel"),i.AddLazyProperty(e.properties,"_has_right_parking",()=>(e.properties["parking:lane:right"]??e.properties["parking:lane:both"])==="parallel"),i.AddLazyProperty(e.properties,"_has_other_parking",()=>["parking:lane:left","parking:lane:right","parking:lane:both"].some(d=>["perpendicular","diagonal"].indexOf(e.properties[d])>=0)),i.AddLazyProperty(e.properties,"_parallel_parking_count",()=>t(e)("_has_right_parking")+t(e)("_has_left_parking")),i.AddLazyProperty(e.properties,"_width:needed:parking",()=>t(e)("_parallel_parking_count")*t(e)("_car_width")),i.AddLazyProperty(e.properties,"_has_sidewalk_left",()=>["left","both"].indexOf(e.properties.sidewalk)>=0),i.AddLazyProperty(e.properties,"_has_sidewalk_right",()=>["right","both"].indexOf(e.properties.sidewalk)>=0),i.AddLazyProperty(e.properties,"_pedestrian_flows_in_carriageway",()=>2-t(e)("_has_sidewalk_left")-t(e)("_has_sidewalk_right")),i.AddLazyProperty(e.properties,"_width:needed:pedestrians",()=>t(e)("_pedestrianWidth")*t(e)("_pedestrian_flows_in_carriageway")),i.AddLazyProperty(e.properties,"_oneway_car",()=>(e.properties["oneway:motor_vehicle"]??e.properties.oneway)=="yes"),i.AddLazyProperty(e.properties,"_width:needed:cars",()=>t(e)("_car_width")*(2-t(e)("_oneway_car"))),i.AddLazyProperty(e.properties,"_cycling_allowed",()=>e.properties.bicycle!="use_sidepath"&&e.properties.bicycle!="no"),i.AddLazyProperty(e.properties,"_oneway_bicycle",()=>(e.properties["oneway:bicycle"]??e.properties.oneway)=="yes"&&e.properties.cycleway!="opposite"),i.AddLazyProperty(e.properties,"_width:needed:cyclists",()=>t(e)("_cycling_allowed")?t(e)("_cyclistWidth")*(2-t(e)("_oneway_bicycle")):0),e.properties["_width:needed:total"]=t(e)("_width:needed:cars")+t(e)("_width:needed:parking")+t(e)("_width:needed:cyclists")+t(e)("_width:needed:pedestrians"),e.properties["_width:difference"]=t(e)("_width:needed:total")-t(e)("width:carriageway"),e.properties["_width:difference:no_pedestrians"]=t(e)("_width:difference")-t(e)("_width:needed:pedestrians")}}r(o,"themeName","width");function H(){try{var n=document.createElement("canvas");return!!window.WebGLRenderingContext&&(n.getContext("webgl")||n.getContext("experimental-webgl"))}catch{return!1}}if(!H())new B("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{h.setThemeMetatagging(new o),s.layers.push(_),s.layers.push(m),s.layers.push(w),s.layers.push(k),s.layers.push(u),s.layers.push(y),s.layers.push(f),s.layers.push(b);const n=new c(new R(s));new v(g,{state:n}).AttachTo("maindiv")}
//# sourceMappingURL=width-0958cda4.js.map
