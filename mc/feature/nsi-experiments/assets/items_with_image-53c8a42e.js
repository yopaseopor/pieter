var l=Object.defineProperty;var d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var n=(e,t,a)=>(d(e,typeof t!="symbol"?t+"":t,a),a);import{U as o}from"./UIEventSource-19d278ab.js";import"./FeatureSwitchState-293b9701.js";import{s as m,g as c,a as g,h,b as p,r as u,l as _}from"./last_click-55d8aa15.js";import{f}from"./Add-258ff92a.js";import{M as w,T as R,a as b,s as k}from"./ThemeViewGUI-34e41167.js";import{k as v}from"./index-9229ee1d.js";import{L as y}from"./Checkbox-183cc416.js";import{F as C}from"./Translation-57188e13.js";import{C as A}from"./Constants-fc2cf55a.js";import"./FixImages-f40b6487.js";import"./NameSuggestionIndex-52e2e878.js";import"./tw-merge-5f0284a7.js";import"./LanguagePicker-214b6d38.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./BackButton-9e4900e8.js";import"./LocalStorageSource-2e204a66.js";import"./Login-774222e4.js";import"./OsmConnection-27525cf3.js";import"./preload-helper-a9ffaded.js";import"./Community-cead4601.js";import"./Filterview-7e049812.js";import"./PrivacyPolicy-d026032f.js";const B="items_with_image",E={en:"All items with images",de:"Alle Elemente mit Bildern",_context:"themes:items_with_image.title"},L={en:"A map showing all items on OSM which have an image. This theme is a very bad fit for MapComplete as someone is not able to directly add a picture. However, this theme is mostly here to include this all into the database, which'll allow this to quickly fetch images nearby for other features",de:"Eine Karte, die alle Objekte auf OSM zeigt, die ein Bild haben. Dieses Thema ist sehr schlecht für MapComplete geeignet, da man nicht direkt ein Bild hinzufügen kann. Dieses Thema ist jedoch hauptsächlich dazu da, um alles in die Datenbank aufzunehmen, was es ermöglicht, Bilder in der Nähe für andere Funktionen schnell zu finden",_context:"themes:items_with_image.description"},x="./assets/layers/item_with_image/camera.svg",q=!0,T=[{id:"item_with_image",name:{en:"Items with at least one image",de:"Element mit mindestens einem Bild"},description:"All items with an image. All alone, not a layer which is relevant for any MapComplete theme, as it is a random collection of items. However, when put into the databank, this allows to quickly fetch (the URL of) pictures nearby a different object, to quickly link this",source:{osmTags:{and:[{or:["image~*","image:0~*","image:1~*","image:2~*","image:3~*","image:4~*","image:5~*"]}]}},minzoom:14,title:{render:{en:"POI with image",de:"POI mit Bild"},mappings:[{if:"name~*",then:{"*":"name"}}]},pointRendering:[{marker:[{icon:{render:"./assets/layers/item_with_image/camera.svg",id:"assetslayersitemwithimagecamerasvg"}}],location:["centroid","point"],iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"./assets/layers/item_with_image/camera.svg"}]}],S="assets/SocialImage.png",i={id:B,title:E,description:L,icon:x,hideFromOverview:q,layers:T,socialImage:S};class r{metaTaggging_for_item_with_image(t,a){}}n(r,"themeName","items_with_image");function z(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch{return!1}}async function I(e){return await o.waitFor(e),{layers:[]}}async function j(){try{const e=new URL(A.VectorTileServer).host,t=await Promise.any([o.downloadJson("https://"+e+"/summary/status.json"),I(0)]);return new Set(t.layers)}catch(e){return console.error("Could not get MVT available layers due to",e),new Set}}async function M(){if(!z())new C("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const e=await j();w.setThemeMetatagging(new r),i.layers.push(m),i.layers.push(c),i.layers.push(g),i.layers.push(h),i.layers.push(p),i.layers.push(u),i.layers.push(_),i.layers.push(f),i.layers.push(k);const t=new R(new y(i),e);new v(b,{state:t}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(s=>{s.parentElement.removeChild(s)})}}M();
//# sourceMappingURL=items_with_image-53c8a42e.js.map
