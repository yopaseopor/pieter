var u=Object.defineProperty;var g=(a,e,n)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var d=(a,e,n)=>(g(a,typeof e!="symbol"?e+"":e,n),n);import{U as o}from"./UIEventSource-19d278ab.js";import"./FeatureSwitchState-293b9701.js";import{s as h,g as b,a as _,h as k,b as f,r as v,l as y}from"./last_click-55d8aa15.js";import{f as w}from"./Add-258ff92a.js";import{M as z,T as M,a as S,s as j}from"./ThemeViewGUI-34e41167.js";import{k as R}from"./index-9229ee1d.js";import{L as A}from"./Checkbox-183cc416.js";import{F as O}from"./Translation-57188e13.js";import{C as E}from"./Constants-fc2cf55a.js";import"./FixImages-f40b6487.js";import"./NameSuggestionIndex-52e2e878.js";import"./tw-merge-5f0284a7.js";import"./LanguagePicker-214b6d38.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./BackButton-9e4900e8.js";import"./LocalStorageSource-2e204a66.js";import"./Login-774222e4.js";import"./OsmConnection-27525cf3.js";import"./preload-helper-a9ffaded.js";import"./Community-cead4601.js";import"./Filterview-7e049812.js";import"./PrivacyPolicy-d026032f.js";const C="maps",B={en:"A map of maps",nl:"Een kaart van kaarten",fr:"Carte des cartes",ja:"マップのマップ",zh_Hant:"地圖的地圖",ru:"Карта карт",de:"Eine Karte der Karten",eo:"Mapo de mapoj",it:"Una mappa di mappe",nb_NO:"Et kart over kart",ca:"Un mapa de mapes",es:"Un mapa de mapas",cs:"Mapa map",pl:"Mapa map",_context:"themes:maps.title"},x={en:"On this map you can find all maps OpenStreetMap knows - typically a big map on an information board showing the area, city or region, e.g. a tourist map on the back of a billboard, a map of a nature reserve, a map of cycling networks in the region, ...) <br/><br/>If a map is missing, you can easily map this map on OpenStreetMap.",nl:"Op deze kaart kan je alle kaarten zien die OpenStreetMap kent.<br/><br/>Ontbreekt er een kaart, dan kan je die kaart hier ook gemakelijk aan deze kaart toevoegen.",fr:"Sur cette carte sont affichées les cartes (plans) mappées dans OpenStreetMap.<br/><br/>Si une carte est manquante, vous pouvez l'ajouer facilement avec un compte OpenStreetMap.",ja:"このマップには、OpenStreetMapが知っているすべてのマップが表示されます。通常は、エリア、都市、または地域を示す情報ボード上の大きなマップが表示されます。たとえば、ビルボードの背面にある観光マップ、自然保護区のマップ、地域内のサイクリングネットワークのマップなどです。)<br/><br/>マップがない場合は、このマップをOpenStreetMapに簡単にマップできます。",zh_Hant:"在這份地圖你可以找到所在在開放街圖上已知的地圖 - 特別是顯示地區、城市、區域的資訊版面上的大型地圖，例如佈告欄背面的旅遊地圖，自然保護區的地圖，區域的單車網路地圖，...)<br/><br/>如果有缺少的地圖，你可以輕易在開放街圖上新增這地圖。",de:"Auf dieser Karte findest du alle Karten, die OpenStreetMap kennt - typischerweise eine große Karte auf einer Informationstafel, die das Gebiet, die Stadt oder die Region zeigt, z.B. eine touristische Karte auf der Rückseite einer Plakatwand, eine Karte eines Naturschutzgebietes, eine Karte der Radwegenetze in der Region, ...) <br/><br/>Wenn eine Karte fehlt, können Sie diese leicht auf OpenStreetMap kartieren.",it:"In questa carta puoi trovare tutte le mappe conosciute da OpenStreetMap (tipicamente una grossa mappa su di un pannello informativo che mostra l’area, la città o la regione, ad es. una mappa turistica dietro a un manifesto, la mappa di una riserva naturale, la mappa della rete ciclistica regionale, etc.)<br/><br/>Se manca una mappa, puoi aggiungerla facilmente a questa su OpenStreetMap.",es:"En este mapa puedes encontrar todos los mapas que OpenStreetMap conoce - típicamente un mapa grande con un tablero que muestra el área, la ciudad o la región, ej. un mapa turista detrás de una vaya publicitaria, un mapa de una reserva natural, un mapa de redes ciclistas en la región, ...)<br/><br/>Si falta un mapa, puedes mapear este mapa fácilmente en OpenStreetMap.",da:"På dette kort kan du finde alle kort, OpenStreetMap kender - typisk et stort kort på en informationstavle, der viser området, byen eller regionen, f.eks. et turistkort på bagsiden af en tavle, et kort over et naturreservat, et kort over cykelnetværk i regionen, ...) <br/><br/>Hvis der mangler et kort, kan du nemt kortlægge dette kort på OpenStreetMap.",cs:"Na této mapě najdete všechny mapy, které OpenStreetMap zná - typicky je zde velká mapa na informační tabuli zobrazující oblast, město nebo region, (např. turistická mapa na zadní straně billboardu, mapa přírodní rezervace, mapa cyklistických sítí v regionu, ...). <br/><br/>Pokud mapa chybí, můžete ji snadno zmapovat na OpenStreetMap.",ca:"En aquest mapa podeu trobar tots els mapes que OpenStreetMap coneix, normalment un mapa gran en un tauler informatiu que mostra la zona, la ciutat o la regió, p. un mapa turístic al dors d'una tanca publicitària, un mapa d'una reserva natural, un mapa de les xarxes ciclistes de la regió, ...) <br/><br/>Si falta un mapa, podeu mapejar aquest mapa fàcilment a OpenStreetMap.",pl:"Na tej mapie możesz znaleźć wszystkie mapy, jakie zna OpenStreetMap - zazwyczaj duże mapy na tablicy informacyjnej pokazująca obszar, miasto lub region, np. mapy turystyczne na odwrocie billboardu, mapy rezerwatu przyrody, mapy sieci rowerowych w regionie, ...) <br/><br/>Jeśli brakuje mapy, możesz łatwo zmapować ją na OpenStreetMap.",_context:"themes:maps.description"},L={en:"This theme shows all (touristic) maps that OpenStreetMap knows of",nl:"Dit thema toont alle (toeristische) kaarten die OpenStreetMap kent",fr:"Cette carte affiche toutes les cartes (plans) mappés dans OpenStreetMap",ja:"このテーマには、OpenStreetMapが知っているすべての(観光)マップが表示されます",zh_Hant:"這份主題顯示所有已知的開放街圖上的 (旅遊) 地圖",de:"Dieses Thema zeigt alle (touristischen) Karten, die OpenStreetMap kennt",it:"Questo tema mostra tutte le mappe (turistiche) di cui OpenStreetMap dispone",es:"Este tema muestra todos los mapas (turísticos) que OpenStreetMap conoce",da:"Dette tema viser alle (turisme) kort, som OpenStreetMap kender til",cs:"Toto téma zobrazuje všechny (turistické) mapy, které zná OpenStreetMap",ca:"Aquest tema mostra tots els mapes (turístics) que OpenStreetMap coneix",pl:"Ten motyw pokazuje wszystkie mapy (turystyczne), które zna OpenStreetMap",_context:"themes:maps.shortDescription"},T="./assets/themes/maps/logo.svg",q="protomaps.white",D=[{id:"map",name:{en:"Maps",nl:"Kaarten",it:"Mappe",ru:"Карты",fr:"Cartes",de:"Karten",ca:"Mapes",es:"Mapas",pa_PK:"نقشے",pl:"Mapy",cs:"Mapy"},description:{en:"A map, meant for tourists which is permanently installed in the public space",nl:"Een permantent geinstalleerde kaart",it:"Una mappa, destinata ai turisti e che è sistemata in maniera permanente in uno spazio pubblico",fr:"Une carte, destinée aux touristes, installée en permanence dans l'espace public",de:"Eine Karte, die für Touristen gedacht ist und dauerhaft im öffentlichen Raum aufgestellt ist",es:"Un mapa, pensado para turistas y que está instalado de manera permanente en un espacio público",pl:"Mapa, przeznaczona dla turystów, która jest zainstalowana w przestrzeni publicznej na stałe",ca:"Un mapa",cs:"Mapa určená pro turisty, která je trvale instalována na veřejném prostranství"},source:{osmTags:{and:[{or:["tourism=map","information=map"]}]}},minzoom:12,title:{render:{en:"Map",nl:"Kaart",it:"Mappa",ru:"Карта",fr:"Carte",de:"Karte",ca:"Mapa",es:"Mapa",pa_PK:"نقشہ",pl:"Mapa",cs:"Mapa"}},pointRendering:[{marker:[{icon:{render:"./assets/layers/map/map.svg",mappings:[{if:{and:["map_source=OpenStreetMap","map_source:attribution=sticker"]},then:"./assets/layers/map/map-stickered.svg"},{if:{and:["map_source=OpenStreetMap","map_source:attribution=yes"]},then:"./assets/layers/map/osm-logo-white-bg.svg"},{if:{and:["map_source=OpenStreetMap"]},then:"./assets/layers/map/osm-logo-buggy-attr.svg"}]}}],iconSize:"50,50",location:["point","centroid"],anchor:"center",iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[{color:"#00f",width:"8"}],presets:[{tags:["tourism=information","information=map"],title:{en:"a map",nl:"een kaart",it:"una mappa",ru:"Карта",fr:"une carte",de:"eine Karte",ca:"un mapa",es:"un mapa",pl:"mapa",cs:"mapa"},description:{en:"Add a missing map",nl:"Voeg een ontbrekende kaart toe",it:"Aggiungi una mappa mancante",fr:"Ajouter une carte manquante",de:"Fehlende Karte hinzufügen",ru:"Добавить отсутствующую карту",es:"Añadir un mapa que falta",ca:"Afegeix un mapa que falta",pl:"Dodaj brakującą mapę",cs:"Přidat chybějící mapu"}}],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{id:"map_type",question:{en:"What type of map is shown?",de:"Was für eine Karte ist das?",pl:"Jaki rodzaj mapy jest pokazany?",ca:"Quin tipus de mapa es mostra?",cs:"Jaký typ mapy je zobrazen?"},mappings:[{if:"map_type=topo",then:{en:"Topographical map <p class='subtle'>The map contains contour lines. </p>",de:"Topographische Katte <p class='subtle'> Die Karte enthält Höhenlinien. </p>",ca:"Mapa topogràfic <p class='subtle'>El mapa conté línies de contorn. </p>",cs:"Topografická mapa <p class='subtle'>Mapa obsahuje vrstevnice. </p>"}},{if:"map_type=street",then:{en:"A map with all streets or ways of an area. <p class='subtle'>The streets are mostly named; the angles, distances etc. are accurate</p>",de:"Eine Karte mit allen Straßen und Wegen eines Gebietes. <p class='subtle'>Die Straßen sind meist benannt; die Winkel, die Entfernungen, etc. stimmen</p>",pl:"Mapa z wszystkimi ulicami i ścieżkami w danym obszarze. <p class='subtle'>Ulica w większości mają nazwy; kąty, odległości itp. są poprawne</p>",ca:"Un mapa amb tots els carrers o camins d'una àrea. <p class='subtle'>Els carrers estan majoritàriament nomenats; els angles, distàncies etc. són acurades</p>",cs:"Mapa se všemi ulicemi nebo cestami v oblasti. <p class='subtle'>Ulice jsou většinou pojmenované, úhly, vzdálenosti atd. jsou přesné</p>"}},{if:"map_type=scheme",then:{en:"This is a schematic map. <p class='subtle'>A sketched map with only important ways and POIs. The angles, distances etc. are merely illustrative, not accurate.</p> ",de:"Dies ist eine schematische Karte. <p class='subtle'>Eine skizzierte Karte mit nur wichtigen Wegen und POIs. Die Winkel, Entfernungen usw. sind lediglich illustrativ, nicht genau.</p> ",pl:"To jest mapa schematyczna. <p class='subtle'>Mapa-szkic z tylko ważnymi drogami i POI. Kąty, odległości itp. są tylko ilustratywne, niedokładne.</p> ",ca:"Això és un mapa esquemàtic. <p class='subtle'>Un mapa esbossat amb només camins importants i PDI. Els angles, els trajectes etc. són merament il·lustratius, no acurat.</p> ",cs:"Jedná se o schematickou mapu. <p class='subtle'>Schematická mapa s vyznačením pouze důležitých cest a bodů zájmu. Úhly, vzdálenosti atd. jsou pouze ilustrativní, nikoliv přesné.</p> "}},{if:"map_type=toposcope",then:{en:"This is a toposcope. <p class='subtle'>A marker erected on high places which indicates the direction to notable landscape features which can be seen from that point<p>",de:"Dies ist ein Toposkop. <p class='subtle'>Eine Markierung, die an hohen Stellen angebracht ist und die Richtung zu wichtigen Landschaftsobjekten anzeigt, die von diesem Punkt aus gesehen werden können<p>",ca:"Això és un toposcope. <p class='subtle'>Un marcador erigit en llocs alts que indica la direcció cap als elements paisatgístics notables que es poden veure des d'aquest punt<p>",cs:"Jedná se o toposkop. <p class='subtle'>Značka vztyčená na vyvýšených místech, která udává směr k pozoruhodným krajinným prvkům, které jsou z tohoto místa vidět<p>"}}]},{id:"map_size",question:{en:"What is the size of the shown area on the map?",de:"Was wird von der Fläche abgedeckt?",pl:"Jaki jest rozmiar obszaru pokazanego na tej mapie?",ca:"Quina és la mida de l'àrea mostrada en el mapa?",cs:"Jak velká je zobrazená oblast na mapě?"},mappings:[{if:"map_size=building",then:{en:"A map of the rooms within a building",de:"Eine Karte der Räume innerhalb eines Gebäudes",pl:"Plan pomieszczeń w budynku",ca:"Un mapa de les habitacions dins d'un edifici",cs:"Mapa místností uvnitř budovy"}},{if:"map_size=site",then:{en:"A map of special site, like of a historical castle, a park, a campus, a forest, ....",de:"Örtlichkeit (z.B. Burg)",ca:"Un mapa d'un lloc especial, com un castell històric, un parc, un campus, un bosc, …",cs:"Mapa speciálního místa, například historického zámku, parku, areálu, lesa, ...."}},{if:"map_size=village",then:{en:"A map showing the village or town",de:"Eine Karte, die das Dorf oder die Stadt anzeigt",pl:"Mapa pokazująca wieś lub niewielkie miasto",ca:"Un mapa que mostra el poble o la ciutat",cs:"Mapa zobrazující vesnici nebo město"}},{if:"map_size=city",then:{en:" A map of a city",de:"Stadt",pl:" Mapa miasta",ca:" Un mapa d'una ciutat",cs:" Mapa města"}},{if:"map_size=region",then:{en:"The map of an entire region, showing multiple cities and villages",de:"Region",pl:"Mapa całego regionu, pokazująca wiele miast i wsi",ca:"El mapa d'una regió sencera, mostrant múltiples ciutats i pobles",cs:"Mapa celého regionu s několika městy a vesnicemi"}}]},{labels:["map"],question:{en:"On which data is this map based?",nl:"Op welke data is deze kaart gebaseerd?",it:"Su quali dati si basa questa mappa?",fr:"Sur quelles données cette carte est-elle basée ?",de:"Auf welchen Daten basiert diese Karte?",es:"¿En qué datos se basa este mapa?",ca:"En quines dades es basa aquest mapa?",pl:"Na jakich danych bazuje ta mapa?",cs:"Na jakých datech je mapa založena?"},mappings:[{if:{and:["map_source=OpenStreetMap","not:map_source="]},then:{en:"This map is based on OpenStreetMap",nl:"Deze kaart is gebaseerd op OpenStreetMap",it:"Questa mappa si basa su OpenStreetMap",ru:"Эта карта основана на OpenStreetMap",fr:"Cette carte est basée sur OpenStreetMap",de:"Diese Karte basiert auf OpenStreetMap",es:"Este mapa se basa en OpenStreetMap",ca:"Aquest mapa està basat en OpenStreetMap",pl:"Ta mapa bazuje na OpenStreetMap",cs:"Tato mapa je založena na OpenStreetMap"}}],freeform:{key:"map_source",inline:!0},render:{en:"This map is based on {map_source}",nl:"Deze kaart is gebaseerd op {map_source}",it:"Questa mappa si basa su {map_source}",ru:"Эта карта основана на {map_source}",fr:"Cette carte est basée sur {map_source}",de:"Diese Karte basiert auf {map_source}",es:"Este mapa se basa en {map_source}",pl:"Ta mapa bazuje na {map_source}",ca:"Aquest mapa està basat en {map_source}",cs:"Tato mapa vychází z {map_source}"},id:"map-map_source"},{id:"map-attribution",labels:["map"],question:{en:"Is the OpenStreetMap-attribution given?",nl:"Is de attributie voor OpenStreetMap aanwezig?",it:"L’attribuzione a OpenStreetMap è presente?",de:"Ist die OpenStreetMap-Attribution vorhanden?",fr:"L’attribution à OpenStreetMap est elle-présente ?",es:"¿Hay una atribución a OpenStreetMap?",ca:"Hi ha atribució a OpenStreetMap?",cs:"Je uveden atribut OpenStreetMap?"},mappings:[{if:{and:["map_source:attribution=yes"]},then:{en:"OpenStreetMap is clearly attributed, including the ODBL-license",nl:'De OpenStreetMap-attributie is duidelijk aangegeven, zelfs met vermelding van "ODBL"',it:"L’attribuzione a OpenStreetMap è chiaramente specificata, inclusa la licenza ODBL",de:"OpenStreetMap ist eindeutig attributiert, einschließlich der ODBL-Lizenz",fr:"L’attribution est clairement inscrite ainsi que la licence ODBL",es:"Se atribuye claramente a OpenStreetMap, incluyendo la licencia ODBL",pl:"Źródło, czyli OpenStreetMap, jest w widoczny sposób podane, zawiera informację o licencji ODBL",ca:"OpenStreetMap està clarament atribuït, incloent la llicència ODBL",cs:"OpenStreetMap je jasně popsán, včetně licence ODBL"}},{if:{and:["map_source:attribution=incomplete"]},then:{en:"OpenStreetMap is clearly attributed, but the license is not mentioned",nl:"OpenStreetMap is duidelijk aangegeven, maar de licentievermelding ontbreekt",it:"L’attribuzione a OpenStreetMap è chiaramente specificata ma la licenza non compare",de:"OpenStreetMap ist eindeutig attributiert, aber die Lizenz wird nicht erwähnt",fr:"L’attribution est clairement inscrite mais la licence est absente",es:"Se atribuya claramente a OpenStreetMap, pero no se menciona la licencia",ca:"OpenStreetMap està clarament atribuït, però no es menciona la llicència",cs:"OpenStreetMap je jasně připsána, ale licence není uvedena"}},{if:{and:["map_source:attribution=sticker"]},then:{en:"OpenStreetMap wasn't mentioned, but someone put an OpenStreetMap-sticker on it",nl:"OpenStreetMap was oorspronkelijk niet aangeduid, maar iemand plaatste er een sticker",it:"Non era presente alcun cenno a OpenStreetMap ma qualcuno vi ha attaccato un adesivo di OpenStreetMap",de:"OpenStreetMap wurde nicht erwähnt, aber jemand hat einen OpenStreetMap-Aufkleber darauf geklebt",fr:"OpenStreetMap n’est pas mentionné, un sticker OpenStreetMap a été collé",es:"No se mencionaba OpenStreetMap, pero alguien le pegó una pegatina de OpenStreetMap",ca:"OpenStreetMap no es mencionava, però algú hi ha posat una enganxina d'OpenStreetMap",cs:"OpenStreetMap nebyl zmíněn, ale někdo dal OpenStreetMap-nálepku na to"}},{if:{and:["map_source:attribution=none"]},then:{en:"There is no attribution at all",nl:"Er is geen attributie",it:"Non c’è alcuna attribuzione",fr:"Il n'y a aucune attribution",de:"Es gibt überhaupt keine Namensnennung",es:"No hay atribución",ca:"No hi ha atribució",cs:"Neexistuje vůbec žádný atribut"}},{if:{and:["map_source:attribution=no"]},then:{nl:"Er is geen attributie",en:"There is no attribution at all",it:"Non c’è alcuna attribuzione",fr:"Il n'y a aucune attribution",de:"Es gibt überhaupt keine Namensnennung",es:"No hay atribución",ca:"No hi ha atribució",cs:"Neexistuje vůbec žádný atribut"},hideInAnswer:!0}],condition:{or:["map_source~(O|)pen(S|s)treet(M|m)ap","map_source=osm","map_source=OSM"]}},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"delete-button",render:{"*":"{delete_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],deletion:{softDeletionTags:{and:["razed:tourism:=information","tourism="]},neededChangesets:1},allowMove:{enableRelocation:!1,enableImproveAccuracy:!0},titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"./assets/layers/map/map.svg"}]},{id:"note_import_map",description:{ca:"Una capa que importa entrades per a Mapa",cs:"Vrstva, která importuje položky pro Mapa",da:"Et lag som importerer poster for Map",de:"Eine Ebene, die Einträge für Karte importiert",en:"A layer which imports entries for Map",es:"Una capa que importar entradas para Mapa",nl:"Deze laag toont kaart-nota's die wijzen op een Kaart",pl:"Warstwa importująca wpisy dla Mapa",zh_Hant:"能夠為 Map 匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~[0-9]+","comment_url~.*notes/[0-9]*/comment.json"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10},passAllFeatures:!0,minzoom:10,title:{render:{ca:"Pot ser que hi hagi un mapa aquí",cs:"Zde by mohl být mapa",da:"Mulig a map",de:"Möglicherweise gibt es hier eine Karte",en:"There might be a map here",es:"Puede haber un mapa aquí",fi:"Tässä on ehkä a map",nb_NO:"Det kan være a map her",nl:"Is hier een kaart?",pl:"Tutaj może znajdować się mapa",zh_Hant:"這裡可能有 a map",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=get(feat)('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.\\(org|osm.be\\)/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=get(feat)('comments').length","_intro=(() => {const lines = get(feat)('comments')[0].text.split('\\n'); lines.splice(get(feat)('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = get(feat)('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, get(feat)('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)tourism=information($|;.*)","_tags~(^|.*;)information=map($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(map, _tags, he trobat un un mapa aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(map, _tags, Našel jsem mapa zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(map, _tags, Jeg har fundet en a map her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(map, _tags, Ich habe hier ein(en) eine Karte gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(map, _tags, I have found a a map here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(map,_tags, He encontrado un(a) un mapa aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(map, _tags, Ik heb hier een een kaart gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",pl:"{import_button(map, _tags, odnalazłem tutaj mapa - dodaj go do mapy,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(map, _tags, 我在這邊發現 a map - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar un mapa: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít mapa - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde a map - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte eine Karte nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a map - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar un mapa - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen een kaart vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",pl:"{close_note(Nie mogłem odnaleźć mapa – usuń go, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 a map - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un un mapa al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází mapa - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden a map på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen eine Karte auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a map on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(un mapa ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds een kaart op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",pl:"{close_note(Na mapie znajduje się już mapa - ten punkt jest duplikatem, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(a map 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",pl:"<div class='thanks'>Ta funkcja została obsłużona! Dziękujemy za Twój wysiłek</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",pl:"<h3>Zdjęcia w pobliżu</h3>Poniższe zdjęcia to zdjęcia pobliskich obiektów z geotagami z różnych usług internetowych. Mogą pomóc Ci rozwiązać tę uwagę.{nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{id:"all_tags",render:"{all_tags()}",metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:"circle",color:"#fff"},{icon:{render:"help",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"checkmark"}]},color:"#00"}],iconSize:"40,40",anchor:"center"}]}],I=5,K="assets/SocialImage.png",t={id:C,title:B,description:x,shortDescription:L,icon:T,defaultBackgroundId:q,layers:D,widenFactor:I,socialImage:K};class m{metaTaggging_for_map(e,n){}metaTaggging_for_note_import_map(e,n){const{distanceTo:l,overlapWith:W,enclosingFeatures:J,intersectionsWith:F,closest:G,closestn:V,get:r}=n;o.AddLazyProperty(e.properties,"_first_comment",()=>r(e)("comments")[0].text.toLowerCase()),o.AddLazyProperty(e.properties,"_trigger_index",()=>(()=>e.properties._first_comment.split(`
`).map(i=>i.match(".*https://mapcomplete.(org|osm.be)/([a-zA-Z_-]+)(.html)?.*#import")).map((i,c)=>[i!==null,c]).filter(i=>i[0]).map(i=>i[1])[0])()),o.AddLazyProperty(e.properties,"_comments_count",()=>r(e)("comments").length),o.AddLazyProperty(e.properties,"_intro",()=>(()=>{const s=r(e)("comments")[0].text.split(`
`);return s.splice(r(e)("_trigger_index")-1,s.length),s.filter(p=>p!=="").join("<br/>")})()),o.AddLazyProperty(e.properties,"_tags",()=>(()=>{let s=r(e)("comments")[0].text.split(`
`).map(p=>p.trim());return s.splice(0,r(e)("_trigger_index")+1),s=s.filter(p=>p!=""),s.join(";")})())}}d(m,"themeName","maps");function N(){try{var a=document.createElement("canvas");return!!window.WebGLRenderingContext&&(a.getContext("webgl")||a.getContext("experimental-webgl"))}catch{return!1}}async function U(a){return await o.waitFor(a),{layers:[]}}async function P(){try{const a=new URL(E.VectorTileServer).host,e=await Promise.any([o.downloadJson("https://"+a+"/summary/status.json"),U(0)]);return new Set(e.layers)}catch(a){return console.error("Could not get MVT available layers due to",a),new Set}}async function H(){if(!N())new O("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const a=await P();z.setThemeMetatagging(new m),t.layers.push(h),t.layers.push(b),t.layers.push(_),t.layers.push(k),t.layers.push(f),t.layers.push(v),t.layers.push(y),t.layers.push(w),t.layers.push(j);const e=new M(new A(t),a);new R(S,{state:e}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(l=>{l.parentElement.removeChild(l)})}}H();
//# sourceMappingURL=maps-f97726f4.js.map
