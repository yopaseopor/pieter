var u=Object.defineProperty;var g=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c=(t,e,n)=>(g(t,typeof e!="symbol"?e+"":e,n),n);import{U as l}from"./Utils-28f00dfc.js";import"./FeatureSwitchState-61451068.js";import{s as h,g as b,a as k,h as f,b as _,r as v,l as y}from"./last_click-55d8aa15.js";import{f as w}from"./preload-helper-0aea19aa.js";import{M as R,T as z,a as A,s as B}from"./ThemeViewGUI-7020830e.js";import{k as E}from"./index-047bb07b.js";import{L as j}from"./Checkbox-91647881.js";import{F as C}from"./tw-merge-7570a3e9.js";import{C as x}from"./Constants-6798f846.js";import"./UIEventSource-2fd3b430.js";import"./FixImages-91be3c6c.js";import"./placeholder-ecdb271f.js";import"./Loading-754de247.js";import"./OsmConnection-63d2895e.js";import"./LocalStorageSource-91540725.js";import"./LanguagePicker-e1c7ef89.js";import"./Dropdown-46c343d5.js";import"./BackButton-4febcf6d.js";import"./Add-f3431a17.js";import"./Login-be56b5c4.js";import"./Community-c78c41ea.js";import"./Filterview-95b4504e.js";import"./PrivacyPolicy-3dcce47c.js";const S="ghostbikes",L={en:"Ghost bikes",nl:"Witte Fietsen",de:"Geisterräder",ja:"ゴーストバイク",nb_NO:"Spøkelsessykler",zh_Hant:"幽靈單車",fr:"Vélo fantôme",eo:"Fantombicikloj",es:"Bicicletas blanca",fi:"Haamupyörä",gl:"Bicicleta pantasma",hu:"Szellemkerékpárok",it:"Bici fantasma",pl:"Duchy roweru",pt_BR:"Bicicleta fantasma",ru:"Призрачные велосипеды",sv:"Spökcykel",da:"Spøgelsescykler",ca:"Bicicletes fantasmes",cs:"Kola duchů",pt:"Bicicleta fantasma",_context:"themes:ghostbikes.title"},q={en:"A <b>ghost bike</b> is a memorial for a cyclist who died in a traffic accident, in the form of a white bicycle placed permanently near the accident location.<br/><br/>On this map, one can see all the ghost bikes which are known by OpenStreetMap. Is a ghost bike missing? Everyone can add or update information here - you only need to have a (free) OpenStreetMap account. <p>There exists an <a href='https://masto.bike/@ghostbikebot' target='_blank'>automated account on Mastodon which posts a monthly overview of ghost bikes worldwide</a></p>",nl:"Een <b>Witte Fiets</b> of <b>Spookfiets</b> is een aandenken aan een fietser die bij een verkeersongeval om het leven kwam. Het gaat om een fiets die volledig wit is geschilderd en in de buurt van het ongeval werd geinstalleerd.<br/><br/>Op deze kaart zie je alle witte fietsen die door OpenStreetMap gekend zijn. Ontbreekt er een Witte Fiets of wens je informatie aan te passen? Meld je dan aan met een (gratis) OpenStreetMap account.",de:"<b>Geisterräder</b> sind weiße Fahrräder, die zum Gedenken tödlich verunglückter Radfahrer vor Ort aufgestellt wurden.<br/><br/> Auf dieser Karte sehen Sie alle Geisterräder, die in OpenStreetMap eingetragen sind. Fehlt ein Geisterrad? Jeder kann hier Informationen hinzufügen oder aktualisieren - Sie benötigen nur ein (kostenloses) OpenStreetMap-Konto.<p>Es gibt ein Konto <a href='https://masto.bike/@ghostbikebot' target='_blank'>auf Mastodon, das monatliche eine weltweite Übersicht von Geisterfahrrädern veröffentlicht</a></p>",ja:"<b>ゴーストバイク</b>は、交通事故で死亡したサイクリストを記念するもので、事故現場の近くに恒久的に置かれた白い自転車の形をしています。<br/><br/>このマップには、OpenStreetMapで知られているゴーストバイクがすべて表示されます。ゴーストバイクは行方不明ですか?誰でもここで情報の追加や更新ができます。必要なのは(無料の)OpenStreetMapアカウントだけです。",zh_Hant:"<b>幽靈單車</b>是用來紀念死於交通事故的單車騎士，在事發地點附近放置白色單車。<br/><br/>在這份地圖上面，你可以看到所有在開放街圖已知的幽靈單車。有缺漏的幽靈單車嗎？所有人都可以在這邊新增或是更新資訊-只有你有(免費)開放街圖帳號。",fr:"Les <b>vélos fantômes</b> sont des mémoriaux pour les cyclistes tuées sur la route, prenant la forme de vélos blancs placés à proximité des faits.<br/><br/>Cette carte indique leur emplacement à partir d’OpenStreetMap. Il est possible de contribuer aux informations ici, sous réserve d’avoir un compte OpenStreetMap (gratuit). <p>Il existe un <a href='https://masto.bike/@ghostbikebot' target='_blank'>compte automatisé Mastodon qui publie un aperçu mensuel des vélos fantômes à travers le monde</a></p>",it:"Una <b>bici fantasma</b> è un monumento in ricordo di un ciclista che è morto in un incidente stradale, che ha la forma di un una bicicletta bianca installata in maniera permanente ne luogo dell’incidente.<br/><br/>In questa cartina, è possibile vedere tutte le bici fantasma che sono state aggiunte su OpenStreetMap. Ne manca una? Chiunque può aggiungere o migliorare le informazioni qui presenti (è solo richiesto un account gratuito su OpenStreetMap).",hu:"A <b>szellemkerékpár</b> egy közlekedési balesetben elhunyt kerékpáros emlékműve: egy fehér kerékpár, amelyet állandó jelleggel a baleset helyszínének közelében helyeznek el.<br/><br/>A térképen az OpenStreetMap által ismert összes szellemkerékpár megtekinthető. Hiányzik róla egy szellemkerékpár? Bárki hozzáadhat vagy frissíthet adatokat – csak egy (ingyenes) OpenStreetMap-fiókra van szükség hozzá.",da:"En <b>spøgelsescykel</b> er et mindesmærke for en cyklist, der døde i en trafikulykke, i form af en hvid cykel placeret permanent i nærheden af ulykkesstedet.<br/><br/>På dette kort er en kan se alle de spøgelsescykler, som er kendt af OpenStreetMap. Mangler der en spøgelsescykel? Alle kan tilføje eller opdatere oplysninger her - du behøver kun at have en (gratis) OpenStreetMap-konto.",cs:"<b>Kolo duchů</b> je památník pro cyklisty, kteří zemřeli při dopravní nehodě, ve formě bílého kola trvale umístěného poblíž místa nehody.<br/><br/>Na této mapě je možné vidět všechna kola duchů, která jsou známa OpenStreetMap. Chybí na mapě nějaké? Každý může přidat nebo aktualizovat informace zde - stačí mít pouze (bezplatný) účet OpenStreetMap. <p>Na Mastodonu existuje <a href='https://masto.bike/@ghostbikebot' target='_blank'>automatizovaný účet, který posílá měsíční přehled kol duchů po celém světě</a></p>",es:"Una <b>bicicleta fantasma</b> es un monumento en memoria de un ciclista fallecido en un accidente de tráfico, en forma de una bicicleta blanca colocada permanentemente cerca del lugar del accidente.<br/><br/>En este mapa se pueden ver todas las bicicletas fantasma conocidas por OpenStreetMap. ¿Falta alguna bicicleta fantasma? Todo el mundo puede añadir o actualizar información aquí - sólo necesitas tener una cuenta (gratuita) de OpenStreetMap. <p>Existe una <a href='https://masto.bike/@ghostbikebot' target='_blank'>cuenta automatizada en Mastodon que publica un resumen mensual de las bicis fantasma de todo el mundo</a></p>",ca:"Una <b>bicicleta fantasma</b> és un monument commemoratiu d'un ciclista que va morir en un accident de trànsit en forma d'una bicicleta blanca col·locada permanentment a prop del lloc de l'accident.<br/><br/>En aquest mapa, un pot veure totes les bicicletes fantasma conegudes per OpenStreetMap. Falta una bicicleta fantasma? Tothom pot afegir o actualitzar informació aquí; només cal que tingueu un compte d'OpenStreetMap (gratuït). <p>Hi ha un <a href='https://masto.bike/@ghostbikebot' target='_blank'>compte automatitzat a Mastodon que publica una visió mensual de les bicicletes fantasma a tot el món</a></p>",pl:"<b>Duch roweru</b> to pomnik upamiętniający rowerzystę, który zginął w wypadku drogowym, w postaci białego roweru umieszczonego na stałe w pobliżu miejsca wypadku.<br/><br/>Na tej mapie każdy może zobaczyć wszystkie takie duchy roweru znane w OpenStreetMap. Czy brakuje ducha roweru? Każdy może tu dodać lub zaktualizować informacje - wystarczy posiadać (bezpłatne) konto OpenStreetMap. <p>Istnieje <a href='https://masto.bike/@ghostbikebot' target='_blank'>automatyczne konto na Mastodonie, na którym publikowany jest miesięczny przegląd duchów roweru na całym świecie</a></p>",_context:"themes:ghostbikes.description"},T="./assets/themes/ghostbikes/logo.svg",M="protomaps.white",I=[{id:"ghost_bike",name:{en:"Ghost bikes",nl:"Witte Fietsen",de:"Geisterräder",it:"Bici fantasma",fr:"Vélos fantômes",eo:"Fantombiciklo",es:"Bicicletas blanca",fi:"Haamupyörä",gl:"Bicicleta pantasma",hu:"Emlékkerékpárok",ja:"ゴーストバイク",nb_NO:"Spøkelsessykler",pl:"Duch roweru",pt_BR:"Bicicleta fantasma",ru:"Велосипед ghost",sv:"Spökcykel",zh_Hant:"幽靈單車",pt:"Bicicleta fantasma",ca:"Bicicleta fantasma",cs:"Kola duchů"},description:{en:"A layer showing memorials for cyclists, killed in road accidents",nl:"Een laag die herdenkingsplaatsen voor verongelukte fietsers toont",de:"Eine Ebene mit Gedenkstätten für Radfahrer, die bei Verkehrsunfällen ums Leben gekommen sind",fr:"Une couche affichant les mémoriaux en l'hommage de cyclistes tuées lors d'accidents de la route",pl:"Warstwa pokazujące miejsca upamiętnienia rowerzystów, którzy zginęli w wypadkach drogowych",ca:"Una capa que mostra monuments commemoratius als ciclistes morts en accidents de trànsit",cs:"Vrstva zobrazující pomníky pro cyklisty zabité při dopravních nehodách"},source:{osmTags:{and:["memorial=ghost_bike"]}},minzoom:0,title:{render:{en:"Ghost bike",nl:"Witte Fiets",de:"Geisterrad",it:"Bici fantasma",fr:"Vélo fantôme",eo:"Fantombiciklo",es:"Bicicleta blanca",fi:"Haamupyörä",gl:"Bicicleta pantasma",hu:"Emlékkerékpár",ja:"ゴーストバイク",nb_NO:"Spøkelsessykler",pl:"Duch roweru",pt_BR:"Bicicleta fantasma",ru:"Велосипед Ghost",sv:"Spökcykel",zh_Hant:"幽靈單車",pt:"Bicicleta fantasma",ca:"Bicicleta blanca",cs:"Kolo duchů"},mappings:[{if:"subject~*",then:{en:"Ghost bike in the remembrance of {subject}",nl:"Witte fiets ter nagedachtenis van {subject}",de:"Geisterrad im Gedenken an {subject}",it:"Bici fantasma in ricordo di {subject}",fr:"Vélo fantôme en souvenir de {subject}",ca:"Bicicleta fantasma en el record de {subject}",cs:"Kolo duchů na památku {subject}"}},{if:"name~*",then:{en:"Ghost bike in the remembrance of {name}",nl:"Witte fiets ter nagedachtenis van {name}",de:"Geisterrad im Gedenken an {name}",it:"Bici fantasma in ricordo di {name}",fr:"Vélo fantôme en souvenir de {name}",ca:"Bicicleta fantasma en el record de {name}",cs:"Kolo duchů na památku {name}"}}]},pointRendering:[{iconSize:"40,40",location:["point","centroid"],anchor:"bottom",marker:[{icon:{render:"./assets/layers/ghost_bike/ghost_bike.svg",id:"assetslayersghostbikeghostbikesvg"}}],iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[],presets:[{title:{en:"a ghost bike",nl:"een witte fiets",de:"ein Geisterrad",it:"una bici fantasma",fr:"une vélo fantôme",eo:"Fantombiciklo",es:"una bicicleta blanca",fi:"Haamupyörä",gl:"Bicicleta pantasma",hu:"Emlékkerékpár",ja:"ゴーストバイク",nb_NO:"en spøkelsessykler",pl:"Duch roweru",pt:"uma bicicleta fantasma",pt_BR:"uma bicicleta fantasma",ru:"Велосипед ghost",sv:"Spökcykel",zh_Hant:"幽靈單車",ca:"una bicicleta fantasma",cs:"kola duchů"},tags:["historic=memorial","memorial=ghost_bike"]}],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"ghost-bike-explanation",render:{en:"A <b>ghost bike</b> is a memorial for a cyclist who died in a traffic accident, in the form of a white bicycle placed permanently near the accident location.",nl:"Een <b>Witte Fiets</b> (of Spookfiets) is een aandenken aan een fietser die bij een verkeersongeval om het leven kwam. Het gaat over een witgeschilderde fiets die geplaatst werd in de buurt van het ongeval.",de:"Ein <b>Geisterrad</b> ist ein Denkmal für einen Radfahrer, der bei einem Verkehrsunfall ums Leben kam, in Form eines weißen Fahrrades, das dauerhaft in der Nähe des Unfallortes aufgestellt wird.",it:"Una <b>bici fantasma</b> è il memoriale di un ciclista che è morto in un incidente stradale e che ha la forma di una bicicletta bianca piazzata in maniera stabile vicino al luogo dell’incidente.",fr:"Un <b>vélo fantôme</b> est un monument commémoratif pour un cycliste décédé dans un accident de la route, sous la forme d'un vélo blanc placé en permanence près du lieu de l'accident.",ca:"Una <b>bicicleta fantasma</b> és un memorial per a un ciclista que va morir en un accident de trànsit, en forma de bicicleta blanca col·locada permanentment a prop del lloc de l'accident.",cs:"<b>kolo duchů</b> je památník cyklisty, který zemřel při dopravní nehodě, v podobě bílého kola umístěného trvale v blízkosti místa nehody."}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{question:{en:"Whom is remembered by this ghost bike?",nl:"Aan wie is deze witte fiets een eerbetoon?",de:"An wen erinnert dieses Geisterrad?",it:"A chi è dedicata questa bici fantasma?",fr:"À qui est dédié ce vélo fantôme ?",ca:"A qui recorda aquesta bicicleta fantasma?",cs:"Na koho vzpomíná toto kolo duchů?"},render:{en:"In remembrance of {subject}",nl:"Ter nagedachtenis van {subject}",de:"Im Gedenken an {subject}",it:"In ricordo di {subject}",fr:"En souvenir de {subject}",ru:"В знак памяти о {subject}",ca:"En record de {subject}",cs:"Na památku {subject}"},freeform:{key:"subject",addExtraTags:["noname=","name="],inline:!0},mappings:[{if:"name~*",then:{en:"In remembrance of {name}",nl:"Ter nagedachtenis van {name}",de:"Im Gedenken an {name}",it:"In ricordo di {name}",fr:"En souvenir de {name}",ru:"В знак памяти о {name}",ca:"En record de {name}",pl:"Ku pamięci {name}",cs:"Na památku {name}"},hideInAnswer:!0},{if:"noname=yes",then:{en:"No name is marked on the bike",nl:"De naam is niet aangeduid op de fiets",de:"Am Fahrrad ist kein Name angegeben",it:"Nessun nome scritto sulla bici",fr:"Aucun nom n'est marqué sur le vélo",ca:"No hi ha cap nom marcat a la bicicleta",cs:"Na kole není vyznačeno žádné jméno"},addExtraTags:["name=","subject="]}],id:"ghost_bike-name",questionHint:{en:"Please respect privacy - only fill out the name if it is widely published or marked on the cycle. Opt to leave out the family name.",nl:"Respecteer privacy - voeg enkel een naam toe indien die op de fiets staat of gepubliceerd is. Eventueel voeg je enkel de voornaam toe.",de:"Bitte respektieren Sie die Privatsphäre - geben Sie den Namen nur an, wenn er weit verbreitet oder auf dem Fahrrad markiert ist. Den Familiennamen können Sie weglassen.",it:"Rispetta la privacy (compila solo il nome se questo è stato ampiamente pubblicato o se è scritto sulla bici). Decidi se è il caso di non inserire il cognome.",fr:"Veuillez respecter la vie privée – ajoutez le nom seulement s'il est largement publié ou marqué sur le vélo. Choisissez de ne pas indiquer le nom de famille ",ca:"Si us plau, respecteu la privadesa: només ompliu el nom si està àmpliament publicat o marcat a la bicicleta. Opta per deixar de banda el cognom.",cs:"Respektujte prosím soukromí – jméno vyplňte pouze v případě, že je široce publikováno nebo označeno na cyklu. Rozhodněte se vynechat příjmení."}},{question:{en:"On what webpage can one find more info about the ghost bike or the accident?",nl:"Op welke website kan men meer informatie vinden over de Witte fiets of over het ongeval?",de:"Auf welcher Webseite kann man mehr Informationen über das Geisterrad oder den Unfall finden?",it:"In quale pagina web si possono trovare informazioni sulla bici fantasma o l’incidente?",fr:"Sur quelle page web peut-on trouver plus d'informations sur le Vélo fantôme ou l'accident ?",ca:"En quina pàgina web es pot trobar més informació sobre la bicicleta blanca o l'accident?",cs:"Na jakém webu lze najít více informací o kole ducha nebo nehodě?"},render:{ca:"{link(Més informació disponible,&LBRACEsource&RBRACE,,,)}",cs:"{link(Více informací k dispozici,&LBRACEsource&RBRACE,,,)}",de:"{link(Mehr Informationen,&LBRACEsource&RBRACE,,,)}",en:"{link(More info available,&LBRACEsource&RBRACE,,,)}",fr:"{link(Plus d'informations sont disponibles,&LBRACEsource&RBRACE,,,)}",id:"{link(Informasi lanjut tersedia,&LBRACEsource&RBRACE,,,)}",it:"{link(Sono disponibili ulteriori informazioni,&LBRACEsource&RBRACE,,,)}",nl:"{link(Meer informatie,&LBRACEsource&RBRACE,,,)}",ru:"{link(Доступна более подробная информация,&LBRACEsource&RBRACE,,,)}"},freeform:{type:"url",key:"source",inline:!0},id:"ghost_bike-source"},{question:{en:"What is the inscription on this Ghost bike?",nl:"Wat is het opschrift op deze witte fiets?",de:"Wie lautet die Inschrift auf diesem Geisterrad?",it:"Che cosa è scritto sulla bici fantasma?",fr:"Quelle est l'inscription sur ce vélo fantôme ?",ca:"Quina és la inscripció d'aquesta bicicleta fantasma?",cs:"Jaký je nápis na tomto kole duchů?"},render:{en:"<i>{inscription}</i>",nl:"<i>{inscription}</i>",de:"<i>{inscription}</i>",ca:"<i>{inscription}</i>",fr:"<i>{inscription}</i>",it:"<i>{inscription}</i>",ru:"<i>{inscription}</i>",id:"<i>{inscription}</i>",cs:"<i>{inscription}</i>"},freeform:{key:"inscription",inline:!0},id:"ghost_bike-inscription"},{question:{nl:"Wanneer werd deze witte fiets geplaatst?",en:"When was this Ghost bike installed?",it:"Quando è stata installata questa bici fantasma?",fr:"Quand ce vélo fantôme a-t-il été installée ?",de:"Wann wurde dieses Geisterrad aufgestellt?",ca:"Quan es va instal·lar aquesta bicicleta Ghost?",cs:"Kdy bylo toto kolo duchů nainstalováno?"},render:{nl:"Geplaatst op {start_date}",en:"Placed on {start_date}",it:"Piazzata in data {start_date}",fr:"Placé le {start_date}",ru:"Установлен {start_date}",de:"Aufgestellt am {start_date}",ca:"Col·locat el {start_date}",cs:"Umístěno {start_date}"},freeform:{key:"start_date",type:"date",inline:!0},id:"ghost_bike-start_date"},{id:"wikidata",render:{de:"<h3>Wikipedia-Seite über die verstorbene Person</h3>{wikipedia(subject:wikidata)}",en:"<h3>Wikipedia page about the deceased person</h3>{wikipedia(subject:wikidata)}"},condition:"subject:wikidata~*"},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"lod",labels:["added_by_default"],render:{"*":"{linked_data_from_website()}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"delete-button",render:{"*":"{delete_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{de:"{qr_code()}Scannen Sie den Code, um diesen Ort auf einem anderen Gerät zu öffnen",en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien",sl:"{qr_code()}Skenirajte to kodo, da odprete ta kraj na drugi napravi"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{de:"{share_link(,Standort teilen)}",en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],deletion:{softDeletionTags:{and:["razed:memorial:=ghost_bike","memorial="]},neededChangesets:50},allowMove:{enableRelocation:!1,enableImproveAccuracy:!0},titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{de:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefon)}",en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:email~*",then:"<a href='mailto:{operator:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*","operator:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"website~*",then:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"operator:website~*",then:"<a href='{operator:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"},{"#":"ignore-image-in-then",if:"context:website~*",then:"<a href='{contact:website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>"}]},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{de:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Auf openstreetmap.org öffnen)}",en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"./assets/layers/ghost_bike/ghost_bike.svg"}]},{id:"note_import_ghost_bike",description:{ca:"Una capa que importa entrades per a Bicicleta blanca",cs:"Vrstva, která importuje položky pro Kolo duchů",da:"Et lag som importerer poster for Ghost bike",de:"Eine Ebene, die Einträge für Geisterrad importiert",en:"A layer which imports entries for Ghost bike",es:"Una capa que importar entradas para Bicicleta blanca",nl:"Deze laag toont kaart-nota's die wijzen op een Witte Fiets",pl:"Warstwa importująca wpisy dla Duch roweru",zh_Hant:"能夠為 幽靈單車 匯入項目的圖層",_context:"core:importLayer.description"},source:{osmTags:{and:["id~[0-9]+","comment_url~.*notes/[0-9]*/comment.json"]},geoJson:"https://api.openstreetmap.org/api/0.6/notes.json?limit=10000&closed=0&bbox={x_min},{y_min},{x_max},{y_max}",geoJsonZoomLevel:10},passAllFeatures:!0,minzoom:-2,title:{render:{ca:"Pot ser que hi hagi una bicicleta fantasma aquí",cs:"Zde by mohl být kola duchů",da:"Mulig a ghost bike",de:"Möglicherweise gibt es hier ein Geisterrad",en:"There might be a ghost bike here",es:"Puede haber una bicicleta blanca aquí",fi:"Tässä on ehkä Haamupyörä",nb_NO:"Det kan være en spøkelsessykler her",nl:"Is hier een witte fiets?",pl:"Tutaj może znajdować się Duch roweru",zh_Hant:"這裡可能有 幽靈單車",_context:"core:importLayer.popupTitle"}},calculatedTags:["_first_comment=get(feat)('comments')[0].text.toLowerCase()",`_trigger_index=(() => {const lines = feat.properties['_first_comment'].split('\\n'); const matchesMapCompleteURL = lines.map(l => l.match(".*https://mapcomplete.\\(org|osm.be\\)/\\([a-zA-Z_-]+\\)\\(.html\\)?.*#import")); const matchedIndexes = matchesMapCompleteURL.map((doesMatch, i) => [doesMatch !== null, i]).filter(v => v[0]).map(v => v[1]); return matchedIndexes[0] })()`,"_comments_count=get(feat)('comments').length","_intro=(() => {const lines = get(feat)('comments')[0].text.split('\\n'); lines.splice(get(feat)('_trigger_index')-1, lines.length); return lines.filter(l => l !== '').join('<br/>');})()","_tags=(() => {let lines = get(feat)('comments')[0].text.split('\\n').map(l => l.trim()); lines.splice(0, get(feat)('_trigger_index') + 1); lines = lines.filter(l => l != ''); return lines.join(';');})()"],isShown:{and:["_trigger_index~*",{or:[{and:["_tags~(^|.*;)historic=memorial($|;.*)","_tags~(^|.*;)memorial=ghost_bike($|;.*)"]}]}]},titleIcons:[{render:"<a href='https://openstreetmap.org/note/{id}' target='_blank'><img src='./assets/svg/osm-logo-us.svg'></a>"}],tagRenderings:[{id:"Intro",render:"{_intro}"},{id:"conversation",render:"{visualize_note_comments(comments,1)}",condition:"_comments_count>1"},{id:"import",render:{ca:"{import_button(ghost_bike, _tags, he trobat un una bicicleta fantasma aquí; afegeix-lo al mapa,./assets/svg/addSmall.svg,,,id)}",cs:"{import_button(ghost_bike, _tags, Našel jsem kola duchů zde - přidejte ji do mapy,./assets/svg/addSmall.svg,,,id)}",da:"{import_button(ghost_bike, _tags, Jeg har fundet en a ghost bike her - tilføj den til kortet,./assets/svg/addSmall.svg,,,id)}",de:"{import_button(ghost_bike, _tags, Ich habe hier ein(en) ein Geisterrad gefunden - Zur Karte hinzufügen,./assets/svg/addSmall.svg,,,id)}",en:"{import_button(ghost_bike, _tags, I have found a a ghost bike here - add it to the map,./assets/svg/addSmall.svg,,,id)}",es:"{import_button(ghost_bike,_tags, He encontrado un(a) una bicicleta blanca aquí - añádelo al mapa,./assets/svg/addSmall.svg,,,id)}",nl:"{import_button(ghost_bike, _tags, Ik heb hier een een witte fiets gevonden - voeg deze toe aan de kaart...,./assets/svg/addSmall.svg,,,id)}",pl:"{import_button(ghost_bike, _tags, odnalazłem tutaj Duch roweru - dodaj go do mapy,./assets/svg/addSmall.svg,,,id)}",zh_Hant:"{import_button(ghost_bike, _tags, 我在這邊發現 幽靈單車 - 新增到地圖,./assets/svg/addSmall.svg,,,id)}",_context:"core:importLayer.importButton"},condition:"closed_at="},{id:"close_note_",render:{ca:"{close_note(No he pogut trobar una bicicleta fantasma: esborra-ho, ./assets/svg/close.svg, id, This feature does not exist, 18)}",cs:"{close_note(Nepodařilo se mi najít kola duchů - odstraňte jej, ./assets/svg/close.svg, id, This feature does not exist, 18)}",da:"{close_note(Jeg kunne ikke finde a ghost bike - fjern det, ./assets/svg/close.svg, id, This feature does not exist, 18)}",de:"{close_note(Ich konnte ein Geisterrad nicht finden - entferne es, ./assets/svg/close.svg, id, This feature does not exist, 18)}",en:"{close_note(I could not find a ghost bike - remove it, ./assets/svg/close.svg, id, This feature does not exist, 18)}",es:"{close_note(No he podido encontrar una bicicleta blanca - eliminarlo, ./assets/svg/close.svg, id, This feature does not exist, 18)}",nl:"{close_note(Ik kon hier geen een witte fiets vinden - verwijder deze van de kaart, ./assets/svg/close.svg, id, This feature does not exist, 18)}",pl:"{close_note(Nie mogłem odnaleźć Duch roweru – usuń go, ./assets/svg/close.svg, id, This feature does not exist, 18)}",zh_Hant:"{close_note(我無法找到 幽靈單車 - 移除吧, ./assets/svg/close.svg, id, This feature does not exist, 18)}",_context:"core:importLayer.notFound"},condition:"closed_at="},{id:"close_note_mapped",render:{ca:"{close_note(Ja hi ha un una bicicleta fantasma al mapa - aquest punt és un duplicat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",cs:"{close_note(Na mapě se již nachází kola duchů - tento bod je duplicitní, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",da:"{close_note(Der er allerede en anden a ghost bike på kortet - dette punkt er en dublet, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",de:"{close_note(Es gibt bereits einen ein Geisterrad auf der Karte - dieser Punkt ist ein Duplikat, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",en:"{close_note(There already is a ghost bike on the map - this point is a duplicate, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",es:"{close_note(una bicicleta blanca ya está en el mapa - este punto es un duplicado, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",nl:"{close_note(Er staat hier reeds een witte fiets op de kaart; dit punt is een duplicaat. Verwijder deze van de kaart, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",pl:"{close_note(Na mapie znajduje się już Duch roweru - ten punkt jest duplikatem, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",zh_Hant:"{close_note(幽靈單車 已經在地圖上了 - 這個點重覆了, ./assets/svg/duplicate.svg, id, Already mapped, 18)}",_context:"core:importLayer.alreadyMapped"},condition:"closed_at="},{id:"handled",render:{ca:`<div class="thanks">Aquesta funció s'ha gestionat. Gràcies pel teu esforç.</div>`,cs:"<div class='thanks'>Tato funkce byla zpracována! Děkujeme za vaši snahu</div>",da:'<div class="thanks">Dette element er blevet håndteret! Tak for din indsats</div>',de:'<div class="thanks">Dieses Objekt wurde verarbeitet! Vielen Dank für Ihre Bemühungen</div>',en:"<div class='thanks'>This feature has been handled! Thanks for your effort</div>",nb_NO:"<div class='thanks'>Denne funksjonen har blitt håndtert. Takk for din innsats.</div>",nl:"<div class='thanks'>Dit object is afgehandeld. Bedankt om mee te helpen!</div>",pl:"<div class='thanks'>Ta funkcja została obsłużona! Dziękujemy za Twój wysiłek</div>",zh_Hant:"<div class='thanks'>這個圖徵已經處理了！謝謝你的辛勞</div>",_context:"core:importLayer.importHandled"},condition:"closed_at~*"},{id:"comment",render:"{add_note_comment()}"},{id:"add_image",render:"{add_image_to_note()}"},{id:"nearby_images",render:{ca:"<h3>Imatges properes</h3>Les imatges següents són imatges geoetiquetades properes de diversos serveis en línia. Us poden ajudar a resoldre aquesta nota.{nearby_images(open)}",cs:"<h3>Obrázky z okolí</h3>Následující obrázky jsou geograficky označené obrázky z různých online služeb. Mohly by vám pomoci při řešení této poznámky.{nearby_images(open)}",da:"<h3>Billeder i nærheden</h3>De følgende billeder er geotaggede billeder i nærheden fra forskellige onlinetjenester. De kan måske hjælpe dig med at løse denne note.{nearby_images(open)}",de:"<h3>Bilder in der Nähe</h3>Die folgenden Bilder sind mit Geotags versehene Bilder aus verschiedenen Online-Diensten in der Nähe. Sie können helfen, diesen Hinweis zu lösen.{nearby_images(open)}",en:"<h3>Nearby pictures</h3>The following pictures are nearby geotagged pictures from various online services. They might help you to resolve this note.{nearby_images(open)}",es:"<h3>Imágenes cercanas</h3> Las siguientes imágenes son imágenes geoetiquetadas cerca de varios servicios en línea. Pueden ayudarte a resolver esta nota. {nearby_images(open)}",nl:"<h3>Afbeeldingen in de buurt</h3>De volgende afbeeldingen zijn in de buurt gemaakt en kunnen mogelijks helpen. {nearby_images(open)}",pl:"<h3>Zdjęcia w pobliżu</h3>Poniższe zdjęcia to zdjęcia pobliskich obiektów z geotagami z różnych usług internetowych. Mogą pomóc Ci rozwiązać tę uwagę.{nearby_images(open)}",zh_Hant:"<h3>附近圖片</h3>接下來的圖片是多個第三方線上服務附近有地理標籤的圖片，也許能協助你解決這個註解。{nearby_images(open)}",_context:"core:importLayer.nearbyImagesIntro"}},{id:"all_tags",render:"{all_tags()}",metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],pointRendering:[{location:["point"],marker:[{icon:"circle",color:"#fff"},{icon:{render:"help",mappings:[{if:{or:["closed_at~*","_imported=yes"]},then:"checkmark"}]},color:"#00"}],iconSize:"40,40",anchor:"center"}]}],G=5,O="assets/SocialImage.png",a={id:S,title:L,description:q,icon:T,defaultBackgroundId:M,layers:I,widenFactor:G,socialImage:O};class m{metaTaggging_for_ghost_bike(e,n){}metaTaggging_for_note_import_ghost_bike(e,n){const{distanceTo:d,overlapWith:H,enclosingFeatures:U,intersectionsWith:V,closest:P,closestn:K,get:o}=n;l.AddLazyProperty(e.properties,"_first_comment",()=>o(e)("comments")[0].text.toLowerCase()),l.AddLazyProperty(e.properties,"_trigger_index",()=>(()=>e.properties._first_comment.split(`
`).map(s=>s.match(".*https://mapcomplete.(org|osm.be)/([a-zA-Z_-]+)(.html)?.*#import")).map((s,p)=>[s!==null,p]).filter(s=>s[0]).map(s=>s[1])[0])()),l.AddLazyProperty(e.properties,"_comments_count",()=>o(e)("comments").length),l.AddLazyProperty(e.properties,"_intro",()=>(()=>{const i=o(e)("comments")[0].text.split(`
`);return i.splice(o(e)("_trigger_index")-1,i.length),i.filter(r=>r!=="").join("<br/>")})()),l.AddLazyProperty(e.properties,"_tags",()=>(()=>{let i=o(e)("comments")[0].text.split(`
`).map(r=>r.trim());return i.splice(0,o(e)("_trigger_index")+1),i=i.filter(r=>r!=""),i.join(";")})())}}c(m,"themeName","ghostbikes");function D(){try{var t=document.createElement("canvas");return!!window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}}async function N(t){return await l.waitFor(t),{layers:[]}}async function F(){try{const t=new URL(x.VectorTileServer).host,e=await Promise.any([N(0)]);return new Set(e.layers)}catch(t){return console.error("Could not get MVT available layers due to",t),new Set}}async function W(){if(!D())new C("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{const t=await F();R.setThemeMetatagging(new m),a.layers.push(h),a.layers.push(b),a.layers.push(k),a.layers.push(f),a.layers.push(_),a.layers.push(v),a.layers.push(y),a.layers.push(w),a.layers.push(B);const e=new z(new j(a),t);new E(A,{state:e}).AttachTo("maindiv"),Array.from(document.getElementsByClassName("delete-on-load")).forEach(d=>{d.parentElement.removeChild(d)})}}W();
//# sourceMappingURL=ghostbikes-1278891d.js.map
