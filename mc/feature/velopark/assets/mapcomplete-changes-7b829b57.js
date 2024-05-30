const e="mapcomplete-changes",s={en:"Changes made with MapComplete",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.title"},t={en:"Shows changes made by MapComplete",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.shortDescription"},n={en:"This maps shows all the changes made with MapComplete",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.description"},a="./assets/svg/logo.svg",o=!0,i=0,r=0,l=1,m=[{id:"mapcomplete-changes",name:{en:"Changeset centers",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.name"},minzoom:0,source:{osmTags:"editor~*",geoJson:"https://raw.githubusercontent.com/pietervdvn/MapComplete-data/main/mapcomplete-changes/tile_{z}_{x}_{y}.geojson",geoJsonZoomLevel:8},title:{render:{en:"Changeset for {theme}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.title.render"}},description:{en:"Shows all MapComplete changes",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.description"},tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"show_changeset_id",render:{en:"Changeset <a href='https://openstreetmap.org/changeset/{id}' target='_blank'>{id}</a>",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.show_changeset_id.render"}},{id:"contributor",question:{en:"What contributor did make this change?",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.contributor.question"},freeform:{key:"user"},render:{en:"Change made by <a href='https://openstreetmap.org/user/{user}' target='_blank'>{user}</a>",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.contributor.render"}},{id:"theme-id",question:{en:"What theme was used to make this change?",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.theme-id.question"},freeform:{key:"theme"},render:{en:"Change with theme <a href='https://mapcomplete.org/{theme}'>{theme}</a>",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.theme-id.render"}},{id:"locale",freeform:{key:"locale",inline:!0},question:{en:"What locale (language) was this change made in?",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.locale.question"},render:{en:"User locale is {locale}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.locale.render"}},{id:"host",render:{en:"Change with with <a href='{host}'>{host}</a>",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.host.render"},question:{en:"What host (website) was this change made with?",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.host.question"},freeform:{key:"host"},mappings:[{if:"host=www.waldbrand-app.de",then:"waldbrand-app.de",hideInAnswer:!0},{if:"host~https://yopaseopor.github.io/pieter/mc/develop/.*",then:"Develop",hideInAnswer:!0}]},{id:"version",question:{en:"What version of MapComplete was used to make this change?",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.version.question"},render:{en:"Made with {editor}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.tagRenderings.version.render"},freeform:{key:"editor",inline:!0}},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point","centroid"],marker:[{icon:{render:"teardrop:#00cc00",mappings:[{if:"theme=advertising",then:"./assets/themes/advertising/icon.svg"},{if:"theme=aed",then:"./assets/themes/aed/aed.svg"},{if:"theme=artwork",then:"./assets/themes/artwork/artwork.svg"},{if:"theme=atm",then:"./assets/themes/atm/logo.svg"},{if:"theme=bag",then:"./assets/themes/bag/logo.svg"},{if:"theme=benches",then:"./assets/themes/benches/bench_poi.svg"},{if:"theme=bicycle_parkings",then:"./assets/themes/bicycle_parkings/logo.svg"},{if:"theme=bicycle_rental",then:"./assets/themes/bicycle_rental/logo.svg"},{if:"theme=bicyclelib",then:"./assets/themes/bicyclelib/logo.svg"},{if:"theme=binoculars",then:"./assets/layers/binocular/telescope.svg"},{if:"theme=blind_osm",then:"./assets/themes/blind_osm/Blindicon.svg"},{if:"theme=bookcases",then:"./assets/themes/bookcases/bookcase.svg"},{if:"theme=buurtnatuur",then:"./assets/themes/buurtnatuur/logo.svg"},{if:"theme=cafes_and_pubs",then:"./assets/layers/cafe_pub/pub.svg"},{if:"theme=campersite",then:"./assets/themes/campersite/caravan.svg"},{if:"theme=charging_stations",then:"./assets/themes/charging_stations/logo.svg"},{if:"theme=climbing",then:"./assets/themes/climbing/climbing_icon.svg"},{if:"theme=clock",then:"./assets/layers/clock/clock.svg"},{if:"theme=cycle_highways",then:"./assets/themes/cycle_highways/fietssnelwegen-logo.svg"},{if:"theme=cycle_infra",then:"./assets/themes/cycle_infra/cycle-infra.svg"},{if:"theme=cyclenodes",then:"./assets/themes/cyclenodes/logo.svg"},{if:"theme=cyclestreets",then:"./assets/themes/cyclestreets/logo.svg"},{if:"theme=cyclofix",then:"./assets/themes/cyclofix/logo.svg"},{if:"theme=disaster_response",then:"./assets/themes/disaster_response/CivilDefence.svg"},{if:"theme=drinking_water",then:"./assets/themes/drinking_water/logo.svg"},{if:"theme=education",then:"./assets/layers/school/college.svg"},{if:"theme=elongated_coin",then:"./assets/themes/elongated_coin/penny.svg"},{if:"theme=etymology",then:"./assets/layers/etymology/logo.svg"},{if:"theme=facadegardens",then:"./assets/themes/facadegardens/geveltuin.svg"},{if:"theme=food",then:"./assets/layers/food/restaurant.svg"},{if:"theme=fritures",then:"./assets/themes/fritures/logo.svg"},{if:"theme=ghostbikes",then:"./assets/themes/ghostbikes/logo.svg"},{if:"theme=ghostsigns",then:"./assets/themes/advertising/wall_painting.svg"},{if:"theme=grb",then:"./assets/themes/grb/logo.svg"},{if:"theme=guideposts",then:"./assets/layers/guidepost/guidepost.svg"},{if:"theme=hackerspaces",then:"./assets/themes/hackerspaces/glider.svg"},{if:"theme=hailhydrant",then:"./assets/themes/hailhydrant/logo.svg"},{if:"theme=healthcare",then:"./assets/layers/doctors/doctors.svg"},{if:"theme=hotels",then:"./assets/layers/hotel/hotel.svg"},{if:"theme=icecream",then:"./assets/layers/ice_cream/ice_cream.svg"},{if:"theme=indoors",then:"./assets/layers/entrance/entrance.svg"},{if:"theme=items_with_image",then:"./assets/layers/item_with_image/camera.svg"},{if:"theme=kerbs_and_crossings",then:"./assets/layers/kerbs/KerbIcon.svg"},{if:"theme=mapcomplete-changes",then:"./assets/svg/logo.svg"},{if:"theme=maproulette",then:"./assets/layers/maproulette/logomark.svg"},{if:"theme=maps",then:"./assets/themes/maps/logo.svg"},{if:"theme=maxspeed",then:"./assets/themes/maxspeed/maxspeed_logo.svg"},{if:"theme=memorials",then:"./assets/layers/memorial/memorial.svg"},{if:"theme=nature",then:"./assets/themes/nature/logo.svg"},{if:"theme=notes",then:"./assets/themes/notes/logo.svg"},{if:"theme=observation_towers",then:"./assets/layers/observation_tower/Tower_observation.svg"},{if:"theme=onwheels",then:"./assets/themes/onwheels/crest.svg"},{if:"theme=openlovemap",then:"./assets/layers/stripclub/stripclub.svg"},{if:"theme=openwindpowermap",then:"./assets/themes/openwindpowermap/logo.svg"},{if:"theme=osm_community_index",then:"./assets/themes/osm_community_index/osm.svg"},{if:"theme=parkings",then:"./assets/themes/parkings/parkings.svg"},{if:"theme=personal",then:"./assets/svg/addSmall.svg"},{if:"theme=pets",then:"./assets/layers/dogpark/dog-park.svg"},{if:"theme=play_forests",then:"./assets/layers/play_forest/icon.svg"},{if:"theme=playgrounds",then:"./assets/themes/playgrounds/playground.svg"},{if:"theme=postal_codes",then:"./assets/themes/postal_codes/townhall.svg"},{if:"theme=postboxes",then:"./assets/layers/postboxes/postbox.svg"},{if:"theme=rainbow_crossings",then:"./assets/themes/rainbow_crossings/logo.svg"},{if:"theme=shops",then:"./assets/themes/shops/shop.svg"},{if:"theme=sidewalks",then:"./assets/svg/bug.svg"},{if:"theme=ski",then:"./assets/layers/aerialway/chair_lift.svg"},{if:"theme=speelplekken",then:"./assets/themes/speelplekken/logo.svg"},{if:"theme=sport_pitches",then:"./assets/layers/sport_pitch/table_tennis.svg"},{if:"theme=sports",then:"./assets/themes/sports/sport.svg"},{if:"theme=stations",then:"./assets/themes/stations/rail-light.svg"},{if:"theme=street_lighting",then:"./assets/layers/street_lamps/street_lamp.svg"},{if:"theme=street_lighting_assen",then:"./assets/layers/street_lamps/street_lamp.svg"},{if:"theme=surveillance",then:"./assets/themes/surveillance/logo.svg"},{if:"theme=toerisme_vlaanderen",then:"./assets/themes/toerisme_vlaanderen/logo.svg"},{if:"theme=toilets",then:"./assets/themes/toilets/toilets.svg"},{if:"theme=transit",then:"./assets/layers/transit_stops/bus_stop.svg"},{if:"theme=trees",then:"./assets/themes/trees/logo.svg"},{if:"theme=uk_addresses",then:"./assets/themes/uk_addresses/housenumber_unknown.svg"},{if:"theme=velopark",then:"./assets/themes/velopark/velopark.svg"},{if:"theme=vending_machine",then:"./assets/layers/vending_machine/vending_machine.svg"},{if:"theme=walkingnodes",then:"./assets/themes/walkingnodes/logo.svg"},{if:"theme=walls_and_buildings",then:"./assets/layers/walls_and_buildings/walls_and_buildings.png"},{if:"theme=waste",then:"./assets/layers/recycling/recycling-14.svg"},{if:"theme=waste_assen",then:"./assets/layers/recycling/recycling-14.svg"},{if:"theme=waste_basket",then:"./assets/themes/waste_basket/waste_basket.svg"},{if:"theme=width",then:"./assets/themes/width/icon.svg"}]}}],iconSize:"30,30",anchor:"center",iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],filter:[{id:"theme-search",options:[{osmTags:"theme~i~.*{search}.*",fields:[{name:"search"}],question:{en:"Themename contains {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.theme-search.options.0.question"}}]},{id:"theme-not-search",options:[{osmTags:"theme!~i~.*{search}.*",fields:[{name:"search"}],question:{en:"Themename does <b>not</b> contain {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.theme-not-search.options.0.question"}}]},{id:"created_by",options:[{osmTags:"user~i~.*{search}.*",fields:[{name:"search"}],question:{en:"Made by contributor {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.created_by.options.0.question"}}]},{id:"not_created_by",options:[{osmTags:"user!~i~.*{search}.*",fields:[{name:"search"}],question:{en:"<b>Not</b> made by contributor {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.not_created_by.options.0.question"}}]},{id:"made_before",options:[{osmTags:"date<{search}",fields:[{name:"search",type:"date"}],question:{en:"Made before {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.made_before.options.0.question"}}]},{id:"made_after",options:[{osmTags:"date>{search}",fields:[{name:"search",type:"date"}],question:{en:"Made after {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.made_after.options.0.question"}}]},{id:"locale-filter",options:[{osmTags:"locale~i~.*{search}.*",fields:[{name:"search"}],question:{en:"User language (iso-code) {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.locale-filter.options.0.question"}}]},{id:"host_name",options:[{osmTags:"host~i~.*{search}.*",fields:[{name:"search"}],question:{en:"Made with host {search}",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.host_name.options.0.question"}}]},{id:"added-image",options:[{osmTags:"add-image>0",question:{en:"Changeset added at least one image",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.added-image.options.0.question"}}]},{id:"exclude_grb",options:[{osmTags:"theme!=grb",question:{en:"Exclude GRB theme",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.exclude_grb.options.0.question"}}]},{id:"exclude_etymology",options:[{osmTags:"theme!=etymology",question:{en:"Exclude etymology theme",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.mapcomplete-changes.filter.exclude_etymology.options.0.question"}}]}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"}],forceLoad:!0},{id:"current_view",description:`A meta-layer which contains one single feature, namely the bounding box of the current map view. This can be used to trigger special actions. If a popup is defined for this layer, this popup will be accessible via an extra button on screen.

The icon on the button is the default icon of the layer, but can be customized by detecting 'button=yes'.`,source:"special",shownByDefault:!1,title:"Statistics on changesets in the current view",popupInFloatover:!0,pointRendering:[{location:["point"],marker:[{icon:{render:"./assets/svg/statistics.svg",id:"assetssvgstatisticssvg"}}],iconSize:"30,30",anchor:"center"}],lineRendering:[{color:"#cccc0088"}],tagRenderings:[{id:"link_to_more",render:{en:"More statistics can be found <a href='https://github.com/pietervdvn/MapComplete/tree/develop/Docs/Tools/graphs' target='_blank'>here</a>",_context:"themes:./assets/themes/mapcomplete-changes/mapcomplete-changes.json.layers.1.override.tagRenderings+.link_to_more.render"}},{id:"hist_themes",render:"{histogram(_embedded_cs:themes, Themename, Number of changesets)}"},{id:"hist_users",render:"{histogram(_embedded_cs:users, Contributor, Number of changesets)}"}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[],_basedOn:"current_view",calculatedTags:["_embedded_cs=overlapWith(feat)('mapcomplete-changes').map(f => f.feat.properties)","_embedded_cs:themes=feat.get('_embedded_cs').map(cs => cs.theme)","_embedded_cs:users=feat.get('_embedded_cs').map(cs => cs['_last_edit:contributor'])"]}],h="assets/SocialImage.png",c={id:e,title:s,shortDescription:t,description:n,icon:a,hideFromOverview:o,startLat:i,startLon:r,startZoom:l,layers:m,socialImage:h};export{c as m};
//# sourceMappingURL=mapcomplete-changes-7b829b57.js.map
