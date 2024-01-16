import{C as m,F as g,J as p,Q as e}from"./SvelteUIElement-65e2316e.js";import{S as c,D as h,a as u}from"./DashboardGui-2a21c1bf.js";import"./ToSvelte-f31dc93e.js";/* empty css                        *//* empty css                     *//* empty css                  */import{A as k}from"./ChartJs-67377275.js";import{M as b,A as w,L as f,D as s}from"./theme_overview-a86fbb0c.js";import{S as t}from"./MoreScreen-ffc396af.js";import"./LanguagePicker-6f35b94e.js";import"./List-1747898b.js";import"./SubtleButton-eb81d210.js";import"./language_native-373a312a.js";import"./language_translations-d2c4c2fc.js";import"./UserInformation-cb7582d0.js";import"./defineProperty-bf1f4e26.js";import"./_commonjsHelpers-edff4021.js";import"./BBox-aa5284c9.js";import"./ContactLink-5ac5344d.js";import"./BackToIndex-6df98ec5.js";const v="openwindpowermap",_={en:"WInd power generators",fr:"OpenWindPowerMap",de:"Freie Windenergie-Karte",it:"OpenWindPowerMap",ru:"Открытая карта ветроэнергетики",zh_Hant:"開放風力地圖",id:"OpenWindPowerMap",hu:"OpenWindPowerMap",nl:"Windmolens",ca:"Mapa obert d'energia eòlica",nb_NO:"ÅpentVindkraftKart",pa_PK:"اوپن‌ونڈ‌پاور‌میپ",es:"Mapa Abierto de la Energía Eólica",cs:"OpenWindPowerMap",_context:"themes:openwindpowermap.title"},y="./assets/themes/openwindpowermap/logo.svg",z={en:"A map for showing and editing wind turbines.",fr:"Une carte indiquant les éoliennes et permettant leur édition.",de:"Eine Karte zum Anzeigen und Bearbeiten von Windkraftanlagen.",it:"Una cartina per la visione e la modifica delle turbine eoliche.",zh_Hant:"顯示與編輯風機的地圖。",hu:"Szélerőművek megjelenítésére és szerkesztésére szolgáló térkép.",es:"Mapa para mostrar y editar turbinas de viento.",nl:"Een kaart om windturbines te tonen en te bewerken.",da:"Et kort til visning og redigering af vindmøller.",nb_NO:"Et kart for visning og redigering av vindmøller.",cs:"Mapa pro zobrazení a úpravy větrných turbín.",ca:"Un mapa per a mostrar i editar turbines eòliques.",_context:"themes:openwindpowermap.description"},x=50.52,W=4.643,D=8,S={maxZoom:8},M=[{id:"windturbine",name:{en:"wind turbine",nl:"windturbine",fr:"Éolienne",de:"Windräder",it:"pala eolica",zh_Hant:"風機",hu:"Szélerőmű",da:"vindmølle",ca:"Turbina Eòlica"},description:{en:"Modern windmills generating electricity",de:"Moderne Windmühlen zur Stromerzeugung",nl:"Windturbines (moderne windmolens die elektriciteit genereren)",da:"Moderne vindmøller til produktion af elektricitet",ca:"Molins de vent moderns que generen electricitat"},source:{osmTags:{and:["generator:source=wind"]}},minzoom:10,title:{render:{en:"wind turbine",nl:"windturbine",fr:"éolienne",de:"Windrad",it:"pala eolica",zh_Hant:"風機",id:"turbin angin",hu:"szélerőmű",da:"vindmølle"},mappings:[{if:"name~*",then:{en:"{name}",fr:"{name}",eo:"{name}",it:"{name}",ru:"{name}",zh_Hant:"{name}",id:"{name}",de:"{name}",ca:"{name}",nl:"{name}",da:"{name}"}}]},tagRenderings:[{id:"turbine-output",render:{en:"The power output of this wind turbine is {generator:output:electricity}.",fr:"La puissance générée par cette éolienne est de {generator:output:electricity}.",it:"La potenza generata da questa pala eolica è {generator:output:electricity}.",zh_Hant:"這個風機的電力輸出是 {generator:output:electricity}。",id:"Output daya dari turbin angin ini adalah {generator:output:electricity}.",hu:"A szélerőmű teljesítménye: {generator:output:electricity}.",de:"Das Windrad erzeugt {generator:output:electricity} Strom.",nl:"Deze windturbine genereert {generator:output:electricity}",da:"Denne vindmølle har en effekt på {generator:output:electricity}."},question:{en:"What is the power output of this wind turbine? (e.g. 2.3 MW)",fr:"Quel est la puissance générée par cette éolienne (p.ex. 2,3 MW) ?",it:"Quant’è la potenza generata da questa pala eolica? (ad es. 2.3 MW)",zh_Hant:"這個風機的電力輸出是多少？(例如 2.3 MW)",id:"Berapa output daya dari turbin angin ini? (misalnya 2,3 MW)",hu:"Mekkora a teljesítménye ennek a szélturbinának? (pl. 2.3 MW)",de:"Wieviel Strom erzeugt das Windrad? (z.B. 2.3 MW)",nl:"Wat is de output",da:"Hvad er effekten af denne vindmølle? (f.eks. 2,3 MW)"},freeform:{key:"generator:output:electricity",type:"pfloat"}},{id:"turbine-operator",render:{en:"This wind turbine is operated by {operator}.",fr:"Cette éolienne est opérée par {operator}.",it:"Questa pala eolica è gestita da {operator}.",zh_Hant:"這個風機營業商是 {operator}。",id:"Turbin angin ini dioperasikan oleh {operator}.",hu:"Ennek a szélerőműnek az üzemeltetője: {operator}.",de:"Die Windturbine wird betrieben von {operator}.",da:"Denne vindmølle drives af {operator}.",nl:"Deze windturbine wordt beheerd door {operator}."},question:{en:"Who operates this wind turbine?",fr:"Qui est l’exploitant de cette éolienne ?",it:"Chi gestisce questa pala eolica?",zh_Hant:"這個風機營業商是？",hu:"Ki üzemelteti ezt a szélturbinát?",de:"Wer betreibt das Windrad?",id:"Siapa yang mengoperasikan turbin angin ini?",da:"Hvem driver denne vindmølle?",nl:"Wie beheert deze windturbine?"},freeform:{key:"operator"}},{id:"turbine-height",render:{en:"The total height (including rotor radius) of this wind turbine is {height} metres.",fr:"La hauteur totale, incluant les pales, est de {height} mètres.",it:"L’altezza totale (raggio del rotore incluso) di questa pala eolica è di {height} metri.",zh_Hant:"這風機的總高度 (包括風葉直徑) 是 {height} 公尺。",hu:"A szélerőmű teljes (rotor sugarával együtt számított) magassága: {height} méter.",de:"Die Gesamthöhe dieses Windrads beträgt (einschließlich Rotorradius) {height} Meter.",da:"Den samlede højde (inklusive rotorradius) for denne vindmølle er {height} meter.",nl:"De totale hoogte (inclusief rotor-radius) van deze windturbine is {height} meter"},question:{en:"What is the total height of this wind turbine (including rotor radius), in metres?",fr:"Quelle est la hauteur totale de l’éolienne en mètres, pales incluses ?",it:"Qual è l’altezza (in metri e raggio del rotore incluso) di questa pala eolica?",zh_Hant:"這個風機的總高度是多少 (包括風葉大小) 公尺？",hu:"Hány méter a szélerőmű teljes magassága (a rotor sugarával együtt)?",de:"Wie hoch ist das Windrad (inklusive Rotorradius) in Metern?",da:"Hvad er den samlede højde af denne vindmølle (inklusive rotorradius), i meter?",nl:"Wat is de totale hoogte in meter van deze windturbine (inclusief rotor-radius)?"},freeform:{key:"height",type:"pfloat"}},{id:"turbine-diameter",render:{en:"The rotor diameter of this wind turbine is {rotor:diameter} metres.",fr:"Le diamètre du rotor est de {rotor:diameter} mètres.",it:"Il diametro del rotore di questa pala eolica è di {rotor:diameter} metri.",zh_Hant:"這個風力渦輪機的風葉直徑是 {rotor:diameter} 公尺。",hu:"A szélturbina rotorátmérője: {rotor:diameter} méter.",de:"Der Rotordurchmesser der Windturbine ist {rotor:diameter} Meter.",nl:"De rotordiameter van deze windturbine is {rotor:diameter} meter.",da:"Rotordiameteren på denne vindmølle er {rotor:diameter} meter.",ca:"El diàmetre del rotor d'aquest aerogenerador és de {rotor:diameter} metres."},question:{en:"What is the rotor diameter of this wind turbine, in metres?",fr:"Quel est le diamètre du rotor en mètres ?",it:"Qual è il diametro (in metri) del rotore di questa pala eolica?",zh_Hant:"這個風力渦輪機的風葉直徑是多少公尺？",hu:"Hány méter a rotorátmérője ennek a szélturbinának?",de:"Wie groß ist der Rotordurchmesser der Windturbine in Meter?",nl:"Wat is de rotordiameter van deze windturbine?",da:"Hvad er rotordiameteren på denne vindmølle i meter?",ca:"Quin és el diàmetre del rotor d'aquest aerogenerador en metres?"},freeform:{key:"rotor:diameter",type:"float"}},{id:"turbine-start-date",render:{en:"This wind turbine went into operation on/in {start_date}.",fr:"L’éolienne est active depuis {start_date}.",it:"Questa pala eolica è entrata in funzione in data {start_date}.",zh_Hant:"這個風機從 {start_date} 開始運轉。",id:"Turbin angin ini mulai beroperasi pada/dalam {start_date}.",hu:"A szélerőmű üzembe helyezése: {start_date}.",de:"Das Windrad wurde am {start_date} in Betrieb genommen.",nl:"Deze windturbine werd op {start_date} in gebruik genomen",da:"Denne vindmølle blev sat i drift den/den {start_date}."},question:{en:"When did this wind turbine go into operation?",fr:"Depuis quand l’éolienne est-elle en fonctionnement ?",it:"Quando è entrata in funzione questa pala eolica?",zh_Hant:"這個風機何時開始營運？",id:"Kapan turbin angin ini mulai beroperasi?",hu:"Mikor helyezték üzembe ezt a szélerőművet?",de:"Wann wurde das Windrad in Betrieb genommen?",nl:"Wanneer werd deze windturbine in gebruik genomen?",da:"Hvornår blev denne vindmølle taget i brug?"},freeform:{key:"start_date",type:"date"}},{render:{en:"Extra information for OpenStreetMap experts: {fixme}",nl:"Extra informatie voor OpenStreetMap experts: {fixme}",fr:"Informations supplémentaires pour les experts d'OpenStreetMap : {fixme}",it:"Informazioni supplementari per gli esperti di OpenStreetMap: {fixme}",de:"Zusätzliche Informationen für OpenStreetMap-Experten: {fixme}",ru:"Дополнительная информация для экспертов OpenStreetMap: {fixme}",sl:"Dodatne informacije za OpenStreetMap strokovnjake: {fixme}",es:"Información extra para expertos en OpenStreetMap: {fixme}",ca:"Informació addicional per als experts en OpenStreetMap: {fixme}"},question:{en:"Is there something wrong with how this is mapped, that you weren't able to fix here? (leave a note to OpenStreetMap experts)",nl:"Is er iets mis met de informatie over deze windturbine dat je hier niet opgelost kreeg? (laat hier een berichtje achter voor OpenStreetMap experts)",de:"Gibt es einen Fehler in der Kartierung, den Sie hier nicht beheben konnten? (hinterlassen Sie eine Nachricht an OpenStreetMap-Experten)"},freeform:{key:"fixme",type:"text"},id:"windturbine-fixme"},{description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata`",render:"{image_carousel()}{image_upload()}{nearby_images(expandable)}",id:"images",source:"shared-questions"},{description:"Show the images block at this location",id:"questions",source:"shared-questions"},{description:"Shows a small map with the feature. Added by default to every popup",render:"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}",id:"minimap",source:"shared-questions"}],presets:[{tags:["power=generator","generator:source=wind"],title:{en:"a wind turbine",nl:"een windturbine",fr:"une éolienne",de:"ein Windrad",it:"una pala eolica",zh_Hant:"風機",hu:"Szélerőmű",da:"en vindmølle",ca:"una turbina eòlica"}}],units:[{appliesToKey:["generator:output:electricity"],applicableUnits:[{canonicalDenomination:"MW",alternativeDenomination:["megawatts","megawatt"],human:{en:" megawatts",nl:" megawatt",fr:" megawatts",de:" Megawatt",eo:" megavatoj",it:" megawatt",ru:" мегаватт",zh_Hant:" 百萬瓦",id:" megawat",hu:" megawatt",ca:" megavats",da:" Megawatt"}},{canonicalDenomination:"kW",alternativeDenomination:["kilowatts","kilowatt"],human:{en:" kilowatts",nl:" kilowatt",fr:" kilowatts",de:" Kilowatt",eo:" kilovatoj",it:" kilowatt",nb_NO:" kilowatt",ru:" киловатт",zh_Hant:" 千瓦",id:" kilowat",hu:" kilowatt",ca:" quilovats",da:" Kilowatt"}},{canonicalDenomination:"W",alternativeDenomination:["watts","watt"],human:{en:" watts",nl:" watt",fr:" watts",de:" Watt",eo:" vatoj",it:" watt",ru:" ватт",zh_Hant:" 瓦",id:" watt",hu:" watt",ca:" vats",da:" Watt"}},{canonicalDenomination:"GW",alternativeDenomination:["gigawatts","gigawatt"],human:{en:" gigawatts",nl:" gigawatt",fr:" gigawatts",de:" Gigawatt",eo:" gigavatoj",it:" gigawatt",ru:" гигаватт",zh_Hant:" 千兆瓦",id:" gigawatt",hu:" gigawatt",ca:" gigavats",da:" Gigawatt"}}],eraseInvalidValues:!0},{appliesToKey:["height","rotor:diameter"],applicableUnits:[{canonicalDenomination:"m",alternativeDenomination:["meter"],human:{en:" meter",nl:" meter",fr:" mètres",de:" Meter",eo:" metro",it:" metri",ru:" метр",zh_Hant:" 公尺",id:" meter",hu:" méter",ca:" metre",da:" meter"}}]}],mapRendering:[{icon:{render:"./assets/themes/openwindpowermap/wind_turbine.svg",id:"assetsthemesopenwindpowermapwindturbinesvg"},label:{mappings:[{if:"generator:output:electricity~^[0-9]+.*[W]$",then:"<div style='background-color: rgba(0,0,0,0.3); color: white; font-size: 8px; padding: 0.25em; border-radius:0.5em'>{generator:output:electricity}</div>"}]},iconSize:"40, 40, bottom",location:["point","centroid"]}],titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"selected_element",description:{en:"Highlights the currently selected element. Override this layer to have different colors",nl:"Toont het geselecteerde element",de:"Hebt das aktuell ausgewählte Element hervor. Überschreiben Sie diese Ebene, um unterschiedliche Farben zu erhalten",fr:"Met en surbrillance l'élément actuellement sélectioné. Surcharger cette couche pour avoir d'autres couleurs.",ca:"Ressalta l'element seleccionat actualment. Anul·leu aquesta capa per tenir diferents colors"},source:{osmTags:{and:["selected=yes"]},maxCacheAge:0},mapRendering:[{icon:{render:"circle:red",id:"circlered"},iconSize:"1,1,center",location:["point","projected_centerpoint"],css:"box-shadow: red 0 0 20px 20px; z-index: -1; height: 1px; width: 1px;",cssClasses:"block relative rounded-full"}],titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"gps_location",description:"Meta layer showing the current location of the user. Add this to your theme and override the icon to change the appearance of the current location. The object will always have `id=gps` and will have _all_ the properties included in the [`Coordinates`-object](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates) (except latitude and longitude) returned by the browser, such as `speed`, `altitude`, `heading`, ....",minzoom:0,source:{osmTags:{and:["id=gps"]},maxCacheAge:0},mapRendering:[{icon:{render:"crosshair:var(--catch-detail-color)",mappings:[{if:"speed>2",then:"gps_arrow"}]},iconSize:"40,40,center",rotation:{render:"0deg",mappings:[{if:{and:["speed>2","heading!=NaN"]},then:"{heading}deg"}]},location:["point","centroid"]}],titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"gps_location_history",description:"Meta layer which contains the previous locations of the user as single points. This is mainly for technical reasons, e.g. to keep match the distance to the modified object",minzoom:1,name:null,source:{osmTags:{and:["user:location=yes"]},"#":"Cache is disabled here as these points are kept seperately",maxCacheAge:0},shownByDefault:!1,mapRendering:[{location:["point","centroid"],icon:{render:"square:red",id:"squarered"},iconSize:"5,5,center"}],titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"home_location",description:"Meta layer showing the home location of the user. The home location can be set in the [profile settings](https://www.openstreetmap.org/profile/edit) of OpenStreetMap.",minzoom:0,source:{osmTags:{and:["user:home=yes"]},maxCacheAge:0},mapRendering:[{icon:{render:"circle:white;./assets/svg/home.svg"},iconSize:{render:"20,20,center"},location:["point","centroid"]}],titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"gps_track",description:"Meta layer showing the previous locations of the user as single line with controls, e.g. to erase, upload or download this track. Add this to your theme and override the maprendering to change the appearance of the travelled track.",minzoom:0,source:{osmTags:{and:["id=location_track"]},maxCacheAge:0},title:{render:"Your travelled path"},shownByDefault:!1,tagRenderings:[{id:"Privacy notice",render:{en:"This is the path you've travelled since this website is opened. Don't worry - this is only visible to you and no one else. Your location data is never sent off-device.",nl:"Dit is waar je was sinds je deze website hebt geopend. Dit is enkel zichtbaar voor jou en niemand anders. Je locatie wordt niet verstuurd buiten je apparaat.",de:"Dies ist der Weg, den Sie seit dem Besuch dieser Webseite zurückgelegt haben. Keine Sorge - diese Daten sind nur für Sie sichtbar und für niemanden sonst. Ihre Standortdaten werden niemals an ein anderes Gerät gesendet.",fr:"C'est le chemin que vous avez parcouru depuis l'ouverture de ce site. Ne vous inquiétez pas - ceci n'est visible que pour vous et personne d'autre. Vos données de localisation ne sont jamais envoyées hors de l'appareil.",ca:"Aquest és el camí que heu recorregut des que s'ha obert aquest lloc web. No et preocupis: això només és visible per a tu i ningú més. Les vostres dades d'ubicació mai s'envien fora del dispositiu."}},{description:"Shows a button to export this feature as GPX. Especially useful for route relations",render:"{export_as_gpx()}",id:"export_as_gpx",source:"shared-questions"},{description:"Shows a button to export this feature as geojson. Especially useful for debugging or using this in other programs",render:"{export_as_geojson()}",id:"export_as_geojson",source:"shared-questions"},{id:"upload_to_osm",render:"{upload_to_osm()}"},{description:"Shows a small map with the feature. Added by default to every popup",render:"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}",id:"minimap",source:"shared-questions"},{id:"delete",render:"{clear_location_history()}"}],name:{en:"Your travelled track",nl:"Jouw afgelegde route",de:"Zurückgelegte Strecke",fr:"Votre chemin parcouru",da:"Dit tilbagelagte spor",ca:"La teva traça recorreguda"},mapRendering:[{width:3,color:"#bb000077"}],syncSelection:"global",titleIcons:[{id:"wikipedialink",labels:["defaults"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a href='https://www.wikidata.org/wiki/{wikidata}' target='_blank'><img src='./assets/svg/wikidata.svg' alt='WD'/></a>"}]},{id:"phonelink",labels:["defaults"],render:"<a href='tel:{phone}'><img textmode='📞' alt='phone' src='./assets/tagRenderings/phone.svg'/></a>",condition:"phone~*"},{id:"emaillink",labels:["defaults"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/tagRenderings/send_email.svg'/></a>",condition:"email~*"},{id:"smokingicon",labels:["defaults"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no-smoking' src='./assets/tagRenderings/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking-allowed' src='./assets/tagRenderings/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}"},{id:"osmlink",labels:["defaults"],render:"<a href='https://openstreetmap.org/{id}' target='_blank'><img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/></a>",mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:"<a href='{_backend}/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'/></a>"}],condition:"id~(node|way|relation)/[0-9]*"}]},{id:"note_import_windturbine",description:{ca:"Una capa que importa entrades per a wind turbine",cs:"Vrstva, která importuje položky pro wind turbine",da:"Et lag som importerer poster for vindmølle",de:"Eine Ebene, die Einträge für Windrad importiert",en:"A layer which imports entries for wind turbine",es:"Una capa que importar entradas para wind turbine",nl:"Deze laag toont kaart-nota's die wijzen op een windturbine",zh_Hant:"能夠為 風機 匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~*"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10,maxCacheAge:0},minzoom:8,title:{render:{ca:"Pot ser que hi hagi una turbina eòlica aquí",cs:"Zde by mohl být a wind turbine",da:"Mulig en vindmølle",de:"Möglicherweise gibt es hier ein Windrad",en:"There might be a wind turbine here",es:"Puede haber a wind turbine aquí",nb_NO:"Det kan være a wind turbine her",nl:"Is hier een windturbine?",zh_Hant:"這裡可能有 風機",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=feat.get('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.osm.be/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=feat.get('comments').length","_intro=(() => {const lines = feat.get('comments')[0].text.split('\\n'); lines.splice(feat.get('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = feat.get('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, feat.get('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)power=generator($|;.*)","_tags~(^|.*;)generator:source=wind($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(windturbine, _tags, he trobat un una turbina eòlica aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(windturbine, _tags, Našel jsem a wind turbine zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(windturbine, _tags, Jeg har fundet en en vindmølle her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(windturbine, _tags, Ich habe hier ein(en) ein Windrad gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(windturbine, _tags, I have found a a wind turbine here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(windturbine,_tags, He encontrado un(a) a wind turbine aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(windturbine, _tags, Ik heb hier een een windturbine gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(windturbine, _tags, 我在這邊發現 風機 - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar una turbina eòlica: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít a wind turbine - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde en vindmølle - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte ein Windrad nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a wind turbine - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar a wind turbine - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen een windturbine vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 風機 - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un una turbina eòlica al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází a wind turbine - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden en vindmølle på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen ein Windrad auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a wind turbine on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(a wind turbine ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds een windturbine op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(風機 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{description:"Show the images block at this location",id:"questions",source:"shared-questions"},{description:"Shows a small map with the feature. Added by default to every popup",render:"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}",id:"minimap",source:"shared-questions"}],mapRendering:[{location:["point"],icon:{render:"circle:white;help:black",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"circle:white;checkmark:black"}]},iconSize:"40,40,center"}]}],j="CartoDB.Voyager",q="Seppe Santens",I="assets/SocialImage.png",o={id:v,title:_,icon:y,description:z,startLat:x,startLon:W,startZoom:D,clustering:S,layers:M,defaultBackgroundId:j,credits:q,socialImage:I};document.getElementById("decoration-desktop").remove();new m(["Initializing... <br/>",new g("<a>If this message persist, something went wrong - click here to try again</a>").SetClass("link-underline small").onClick(()=>{localStorage.clear(),window.location.reload(!0)})]).AttachTo("centermessage");b.initialize();k.implement(new w);c.Implement();p.DisableLongPresses();new URLSearchParams(window.location.search).get("test")==="true"&&console.log(o);const a=new f(o);if((a==null?void 0:a.id)==="cyclofix"){const i=e.GetQueryParameter("layer-bike_shops","true","Legacy - keep De Fietsambassade working"),r=e.GetQueryParameter("layer-bike_shop","true","Legacy - keep De Fietsambassade working");i.data!=="true"&&r.setData(i.data),console.log("layer-bike_shop toggles: legacy:",i.data,"new:",r.data);const d=e.GetQueryParameter("layer-bike_cafes","true","Legacy - keep De Fietsambassade working"),l=e.GetQueryParameter("layer-bike_cafe","true","Legacy - keep De Fietsambassade working");d.data!=="true"&&l.setData(i.data)}const n=new s;t.state=new t(a);s.state=n;window.mapcomplete_state=t.state;const R=e.GetQueryParameter("mode","map","The mode the application starts in, e.g. 'map' or 'dashboard'");R.data==="dashboard"?new h(t.state,n).setup():new u(t.state,n).setup();
