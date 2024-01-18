var o=Object.defineProperty;var r=(e,a,i)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var n=(e,a,i)=>(r(e,typeof a!="symbol"?a+"":a,i),i);import"./Utils-498bb79d.js";import{M as l,T as d,a as c}from"./ThemeViewGUI-7da8b3b1.js";import{s as p,g as u,a as m,h,b as g,r as k,l as b}from"./last_click-b8e734eb.js";import{f as v}from"./TabbedGroup-9c3da377.js";import{k as w}from"./index-f508aba0.js";import{L as f}from"./Checkbox-cbea2608.js";import{F as _}from"./Tr-e239e396.js";import"./LocalStorageSource-4f66d5e4.js";import"./Constants-1f140f7e.js";import"./LanguagePicker-97630499.js";import"./Dropdown-9076f81c.js";import"./ToSvelte-6b55a390.js";import"./Img-0db2a507.js";import"./Icon-3596be99.js";import"./tw-merge-2cd9e3ed.js";import"./Loading-da637902.js";import"./OsmConnection-b06f6f24.js";import"./FeatureSwitchState-b0c8a00b.js";import"./Add-3857ec59.js";import"./Community-9c657141.js";import"./Filterview-b992dc5e.js";import"./PrivacyPolicy-5bc9c077.js";import"./BackButton-a051d95d.js";const y="observation_towers",z={en:"Observation towers",nl:"Uitkijktorens",de:"Aussichtstürme",it:"Torri di osservazione",ru:"Смотровые башни",zh_Hant:"觀景塔",hu:"Kilátótornyok",ca:"Torres d'observació",es:"Torres de observación",fr:"Tours d’observation",nb_NO:"Observasjonstårn",da:"Udsigtstårne",cs:"Rozhledny",pl:"Wieże obserwacyjne",_context:"themes:./assets/themes/observation_towers/observation_towers.json.title"},R={nl:"Publieke uitkijktorens om van het panorama te genieten",en:"Publicly accessible towers to enjoy the view",de:"Eine Karte mit öffentlich zugänglichen Aussichtstürmen",it:"Torri pubblicamente accessibili per godere della vista",zh_Hant:"開放可及能觀景的高塔",hu:"Nyilvános tornyok, hogy gyönyörködhessünk a kilátásban",es:"Torres accesibles públicamente para disfrutar de la vista",fr:"Tours libres d’accès pour admirer la vue",nb_NO:"Offentlig tilgjengelige tårn for å nyte utsikten",da:"Offentligt tilgængelige tårne for at nyde udsigten",cs:"Veřejně přístupné věže s výhledem",ca:"Torres accesibles públicament per a disfrutar de la vista",pl:"Publicznie dostępne wieże do podziwiania widoku",_context:"themes:./assets/themes/observation_towers/observation_towers.json.description"},j={en:"Publicly accessible towers to enjoy the view",nl:"Publieke uitkijktorens om van het panorama te genieten",de:"Öffentlich zugängliche Türme zum Genießen der Aussicht",it:"Torri pubblicamente accessibili per godere della vista",zh_Hant:"開發可及能觀景的高塔",hu:"Nyilvános tornyok, hogy gyönyörködhessünk a kilátásban",es:"Torres accesibles públicamente para disfrutar de la vista",fr:"Tours libres d’accès pour admirer la vue",nb_NO:"Offentlig tilgjengelige tårn for å nyte utsikten",da:"Offentligt tilgængelige tårne for at nyde udsigten",cs:"Veřejně přístupné věže s výhledem",ca:"Torres accesibles públicament per a disfrutar de la vista",pl:"Publicznie dostępne wieże do podziwiania widoku",_context:"themes:./assets/themes/observation_towers/observation_towers.json.shortDescription"},A="./assets/layers/observation_tower/Tower_observation.svg",E=[{id:"observation_tower",name:{en:"Observation towers",nl:"Uitkijktorens",ru:"Смотровые башни",de:"Aussichtstürme",ca:"Torres d'observació",es:"Torres de observación",pl:"Wieże obserwacyjne",cs:"Rozhledny"},description:{en:"Towers with a panoramic view",nl:"Torens om van het uitzicht te genieten",de:"Türme zur Aussicht auf die umgebende Landschaft",es:"Torres con vista panorámica",pl:"Wieże z panoramicznym widokiem",ca:"Torres amb vista panoràmica",cs:"Věže s panoramatickým výhledem"},source:{osmTags:{and:["tower:type=observation"]}},minzoom:8,title:{render:{en:"Observation tower",nl:"Uitkijktoren",ru:"Смотровая башня",de:"Beobachtungsturm",ca:"Torre d'observació",es:"Torre de observación",pl:"Wieża obserwacyjna",cs:"Rozhledna"},mappings:[{if:"name~*",then:{en:"<b>{name}</b>",nl:"<b>{name}</b>",ru:"<b>{name}</b>",de:"<b>{name}</b>",ca:"<b>{name}</b>",es:"<b>{name}</b>",pl:"<b>{name}</b>",cs:"<b>{name}</b>"}}]},pointRendering:[{iconSize:"40,40",location:["point","centroid"],anchor:"center",marker:[{icon:{render:"circle",id:"circle"},color:"white"},{icon:{render:"./assets/layers/observation_tower/Tower_observation.svg",id:"assetslayersobservationtowerTowerobservationsvg"}}],iconBadges:[{if:"_favourite=yes",then:{render:"circle:white;heart:red",id:"circlewhiteheartred"}}]}],lineRendering:[],tagRenderings:[{id:"just_created",labels:["added_by_default"],description:"This element shows a 'thank you' that the contributor has recently created this element",classes:"rounded-xl thanks",mappings:[{if:"id~*",icon:"./assets/svg/party.svg",then:{ca:"Acabeu de crear aquest element! Gràcies per compartir aquesta informació amb el mon i ajudar a persones al voltant del món.",de:"Sie haben gerade dieses Element erstellt! Vielen Dank, dass Sie diese Informationen mit der Welt teilen und Menschen weltweit helfen.",en:"You just created this element! Thanks for sharing this info with the world and helping people worldwide.",fr:"Vous venez de créer cet élément ! Merci d'avoir partagé cette information avec le monde et d'aider les autres personnes.",nl:"Je hebt dit punt net toegevoegd! Bedankt om deze info met iedereen te delen en om de mensen wereldwijd te helpen.",cs:"Tento prvek jste právě vytvořili! Díky za sdílení těchto informací se světem a pomoc lidem po celém světě."}}],condition:{and:["_backend~*","_last_edit:passed_time<300",{or:["_version_number=","_version_number=1"]}]},metacondition:{and:[{"#":"if _last_edit:contributor:uid is unset, then the point hasn't been uploaded yet",or:["_last_edit:contributor:uid:={_uid}","_last_edit:contributor:uid="]}]}},{id:"images",description:"This block shows the known images which are linked with the `image`-keys, but also via `mapillary` and `wikidata` and shows the button to upload new images",render:{"*":"{image_carousel()}{image_upload()}{nearby_images():my-4}"},classes:"my-4"},{question:{en:"What is the name of this tower?",nl:"Heeft deze toren een naam?",de:"Wie ist der Name des Turms?",es:"¿Cual es el nombre de esta torre?",ca:"Com s'anomena aquesta torre?",pl:"Jaka jest nazwa tej wieży?",cs:"Jak se jmenuje tato věž?"},render:{en:"This tower is called <b>{name}</b>",nl:"Deze toren heet <b>{name}</b>",de:"Der Name des Turms ist <b>{name}</b>",es:"Esta torre se llama <b>{name}</b>",ca:"Aquesta torre s'anomena <b>{name}</b>",pl:"Ta wieża nazywa się <b>{name}</b>",cs:"Tato věž se jmenuje <b>{name}</b>"},freeform:{key:"name",inline:!0},mappings:[{if:"noname=yes",then:{en:"This tower doesn't have a specific name",nl:"Deze toren heeft geen specifieke naam",de:"Der Turm hat keinen eigenen Namen",es:"Esta torre no tiene un nombre específico",ca:"Aquesta torre no té un nom concret",pl:"Ta wieża nie ma określonej nazwy",cs:"Tato věž nemá konkrétní jméno"}}],id:"name"},{question:{en:"What is the height of this tower?",nl:"Hoe hoog is deze toren?",de:"Wie hoch ist dieser Turm?",es:"¿Cual es la altura de esta torre?",ca:"Quina és l'alçada d'aquesta torre?",pl:"Jaka jest wysokość tej wieży?",cs:"Jaká je výška této věže?"},render:{en:"This tower is {height} high",nl:"Deze toren is {height} hoog",de:"Dieser Turm ist {height} hoch",es:"Esta torre mide {height}",pl:"Ta wieża ma wysokość {height}",ca:"Aquesta torre fa {height}",cs:"Tato věž je {height} vysoká"},freeform:{key:"height",type:"pfloat",inline:!0},id:"Height"},{id:"access",question:{en:"Can this tower be visited?",nl:"Is deze toren publiek toegankelijk?",es:"¿Se puede visitar esta torre?",de:"Darf der Turm betreten werden?",ca:"Es pot visitar aquesta torre?",cs:"Lze tuto věž navštívit?"},mappings:[{if:"access=yes",then:{en:"This tower is publicly accessible",nl:"Deze toren is publiek toegankelijk",de:"Der Turm ist öffentlich zugänglich",es:"Esta torre es accesible públicamente",ca:"Aquesta torre és d'accés públic",pl:"Ta wieża jest publicznie dostępna",cs:"Tato věž je veřejně dostupná"}},{if:"access=guided",then:{en:"This tower can only be visited with a guide",nl:"Deze toren can enkel bezocht worden met een gids",de:"Der Turm darf nur in Begleitung eines Führers betreten werden",es:"A esta torre solo se puede acceder con un guía",ca:"Aquesta torre només es pot visitar amb un guia",pl:"Ta wieża można być zwiedzana tylko z przewodnikiem",cs:"Tuto věž lze navštívit pouze s průvodcem"}}]},{question:{en:"How much does one have to pay to enter this tower?",nl:"Hoeveel moet men betalen om deze toren te bezoeken?",de:"Was kostet der Zugang zu diesem Turm?",es:"¿Cuánto hay que pagar para entrar en esta torre?",pl:"Ile kosztuje wstęp na tę wieżę?",ca:"Quant hi ha que pagar per entrar a aquesta torre?",cs:"Kolik se platí za vstup do této věže?"},render:{en:"Visiting this tower costs <b>{charge}</b>",nl:"Deze toren bezoeken kost <b>{charge}</b>",de:"Der Besuch des Turms kostet <b>{charge}</b>",es:"Visitar esta torre cuesta <b>{charge}</b>",pl:"Wizyta na tej wieży kosztuje <b>{charge}</b>",ca:"Visitar aquesta torre costa <b>{charge}</b>",cs:"Návštěva této věže stojí <b>{charge}</b>"},freeform:{key:"charge",addExtraTags:["fee=yes"],inline:!0},mappings:[{if:{and:["fee=no","charge="]},then:{en:"Free to visit",nl:"Gratis te bezoeken",de:"Eintritt kostenlos",pl:"Darmowe wejście",cs:"Zdarma k návštěvě"}}],id:"Fee",condition:{or:["access=yes","access=guided"]}},{id:"Payment methods",question:{en:"Which methods of payment are accepted here?",nl:"Welke betaalmiddelen worden hier geaccepteerd?",pt:"Que métodos de pagamento são aceites aqui?",pt_BR:"Quais métodos de pagamento são aceitos aqui?",id:"Metode pembayaran manakah yang di terima disini?",de:"Welche Zahlungsmethoden werden hier akzeptiert?",fr:"Quelles sont les méthodes de paiement acceptées ici ?",hu:"Milyen fizetési módokat fogadnak el itt?",it:"Quali metodi di pagamento sono accettati qui?",nb_NO:"Hvilke betalingsmetoder godtas her?",ca:"Quins mètodes de pagament s'accepten aquí?",sv:"Vilka betalningsmetoder accepteras här?",zh_Hant:"這邊接受那種付款方式？",pl:"Jakie metody płatności są tutaj dostępne?",ru:"Какие способы оплаты здесь принимают?",ja:"どのような支払い方法が可能ですか？",sl:"Kateri načini plačila so možni tu?",fil:"Anong mga paraang pambayad ang tinatanggap dito?",es:"¿Qué métodos de pago se aceptan aquí?",zh_Hans:"这里支持哪些支付方式？",da:"Hvilke betalingsmetoder accepteres her?",cs:"Jaké platební metody jsou zde přijímány?"},multiAnswer:!0,mappings:[{if:"payment:cash=yes",ifnot:"payment:cash=no",icon:"./assets/layers/questions/cash.svg",then:{en:"Cash is accepted here",nl:"Cash geld wordt hier aanvaard",pt:"Aceitam pagamento com dinheiro aqui",pt_BR:"Dinheiro é aceito aqui",id:"Pembayaran tunai diterima di sini",de:"Hier wird Bargeld akzeptiert",fr:"Paiement en liquide accepté",hu:"Itt készpénzzel is lehet fizetni",it:"I contanti sono accettati",nb_NO:"Kontanter godtas her",ca:"S'accepten diners",sv:"Pengar accepteras här",zh_Hant:"這邊接受現金",pl:"Płatność gotówkowa jest tutaj dostępna",ru:"Здесь принимают наличными",ja:"現金利用可能",sl:"Tu sprejemajo gotovino",fil:"Tinatanggap ang salapi rito",es:"Aquí se acepta el pago en efectivo",zh_Hans:"可用现金",da:"Her modtages kontanter",cs:"Přijímá se zde hotovost"}},{if:"payment:cards=yes",ifnot:"payment:cards=no",icon:"./assets/layers/questions/payment_card.svg",then:{en:"Payment cards are accepted here",nl:"Betalen met bankkaarten kan hier",pt:"Aceitam pagamento com cartões bancários aqui",pt_BR:"Cartões de pagamento são aceitos aqui",id:"Kartu pembayaran diterima di sini",de:"Hier wird Kartenzahlung akzeptiert",fr:"Paiement par carte accepté",hu:"Itt fizetőkártyákkal is lehet fizetni",it:"I pagamenti con la carta sono accettati",nb_NO:"Betalingskort godtas her",ca:"S'accepten targetes de crèdit",sv:"Betalningskort accepteras här",zh_Hant:"這邊接受現金卡",pl:"Płatność kartą jest tutaj dostępna",ru:"Здесь принимают банковские карты",ja:"お支払いはこちらで承ります",sl:"Tukaj sprejemajo plačilne kartice",fil:"Tinatanggap ang mga tarhetang pambayad dito",es:"Aquí se acepta el pago por tarjeta",zh_Hans:"可用信用卡",da:"Betalingskort accepteres her",cs:"Jsou zde přijímány platební karty"}},{if:"payment:qr_code=yes",ifnot:"payment:qr_code=no",icon:"./assets/layers/questions/qrcode.svg",then:{en:"Payment by QR-code is possible here",nl:"Betalen via een QR-code is hier mogelijk",de:"Die Bezahlung per QR-Code ist hier möglich",es:"Aquí se puede pagar con código QR",ca:"Aquí es pot pagar amb codi QR",cs:"Platba QR kódem je zde možná"}}],condition:{or:["fee=yes","charge~*"]}},{id:"website",labels:["contact"],icon:"./assets/layers/icons/website.svg",question:{en:"What is the website of {title()}?",nl:"Wat is de website van {title()}?",fr:"Quel est le site web de {title()} ?",gl:"Cal é a páxina web de {title()}?",nb_NO:"Hva er nettsiden til {title()}?",ru:"Какой сайт у {title()}?",id:"Apa situs web dari {title()}?",zh_Hant:"{title()} 網址是什麼？",it:"Qual è il sito web di {title()}?",de:"Wie lautet die Webseite von {title()}?",pt_BR:"Qual o site de {title()}?",pl:"Jaka jest strona internetowa {title()}?",sv:"Vad är webbplatsen för {title()}?",pt:"Qual é o sítio web de {title()}?",eo:"Kie estas la retejo de {title()}?",hu:"Mi a weboldala ennek: {title()}?",ca:"Quina és la web de {title()}?",ja:"{title()}のウェブサイトは？",fil:"Ano ang website ng {title()}?",es:"¿Cual es el sitio web de {title()}?",zh_Hans:"{title()} 的网站为何？",da:"Hvad er webstedet for {title()}?",cs:"Jaká je webová stránka {title()}?"},render:{"*":"<a href='{website}' rel='nofollow noopener noreferrer' target='_blank'>{website}</a>"},freeform:{key:"website",type:"url",addExtraTags:["contact:website="]},mappings:[{if:"contact:website~*",then:"<a href='{contact:website}' rel='nofollow noopener noreferrer' target='_blank'>{contact:website}</a>",hideInAnswer:!0,icon:"./assets/layers/icons/website.svg"}],editButtonAriaLabel:{en:"Edit website",nl:"Pas website aan"}},{id:"step_count",question:{en:"How much individual steps does one have to climb to reach the top of this tower?",nl:"Hoeveel treden moet men beklimmen op de top van de toren te bereiken?",de:"Wie viele einzelne Stufen muss man erklimmen, um die Spitze des Turms zu erreichen?",es:"¿Cuántos escalones hay que subir para llegar a la cima de esta torre?",ca:"Quants esglaons individuals cal pujar per arribar al cim d'aquesta torre?",pl:"Ile pojedynczych stopni trzeba pokonać, aby dostać się na górę tej wieży?",cs:"Kolik jednotlivých schodů musí člověk zdolat, aby se dostal na vrchol této věže?"},freeform:{key:"step_count",type:"pnat",inline:!0},render:{en:"This tower has {step_count} steps to reach the top",nl:"Deze toren heeft {step_count} traptredes",de:"Dieser Turm hat {step_count} Stufen, um die Spitze zu erreichen",es:"Esta torre tiene {step_count} escalones para lllegar a l a cima",ca:"Aquesta torre té {step_count} esglaons per arribar al cim",pl:"Ta wieża ma {step_count} stopni na górę",cs:"Na vrchol této věže vede {step_count} schodů"},condition:{or:["access=yes","access=guided"]}},{id:"elevator",question:{en:"Does this tower have an elevator?",nl:"Heeft deze toren een lift?",de:"Hat dieser Turm einen Aufzug?",es:"¿Esta torre tiene ascensor?",pl:"Czy ta wieża ma windę?",ca:"Aquesta torre té ascensor?",cs:"Má tato věž výtah?"},mappings:[{if:"elevator=yes",then:{en:"This tower has an elevator which takes visitors to the top",nl:"Deze toren heeft een lift die bezoekers naar de top van de toren brengt",de:"Dieser Turm verfügt über einen Aufzug, der die Besucher nach oben bringt",es:"Esta torre tiene un ascensor que lleva a los visitantes a la cima",pl:"Ta wieża ma windę, która zabiera zwiedzających na górę",ca:"Aquesta torre té un ascensor que porta els visitants al cim",cs:"Tato věž má výtah, který návštěvníky vyveze na vrchol"}},{if:"elevator=no",then:{en:"This tower does not have an elevator",nl:"Deze toren heeft geen lift",de:"Dieser Turm hat keinen Aufzug",es:"Esta torre no tiene ascensor",pl:"Ta wieża nie ma windy",ca:"Aquesta torre no té ascensor",cs:"Tato věž nemá výtah"}}],condition:{or:["access=yes","access=guided"]}},{question:{en:"Who maintains this tower?",nl:"Wie onderhoudt deze toren?",de:"Wer betreibt den Turm?",es:"¿Quién mantiene esta torre?",ca:"Qui manté aquesta torre?",pl:"Kto obsługuje tę wieżę?",cs:"Kdo udržuje tuto věž?"},render:{nl:"Wordt onderhouden door <b>{operator}</b>",en:"Maintained by <b>{operator}</b>",de:"Betrieben von <b>{operator}</b>",es:"Mantenida por <b>{operator}</b>",pl:"Obsługiwana przez <b>{operator}</b>",ca:"Mantés per <b>{operator}</b>",cs:"Udržováno <b>{operator}</b>"},freeform:{key:"operator",inline:!0},id:"Operator"},{id:"wheelchair-access",question:{nl:"Is deze plaats rolstoeltoegankelijk?",en:"Is this place accessible with a wheelchair?",pt:"Este lugar é acessível a utilizadores de cadeiras de rodas?",pt_BR:"Este lugar é acessível com uma cadeira de rodas?",de:"Ist der Ort rollstuhlzugänglich?",fr:"Est-ce que cet endroit est accessible en chaise roulante ?",hu:"Akadálymentes-e ez a hely?",it:"Questo luogo è accessibile con una sedia a rotelle?",nb_NO:"Er dette stedet tilgjengelig for rullestoler?",ca:"Aquest lloc és accessible amb cadira de rodes?",sv:"Är det här stället tillgängligt med en rullstol?",zh_Hant:"這個地方可以坐輪椅到達嗎？",pl:"Czy to miejsce jest dostępne dla osób na wózkach inwalidzkich?",ja:"車いすでのアクセスは可能ですか？",fil:"Kaya bang abutin ang lugar na ito ng naka-wheelchair?",es:"¿Este lugar es accesible con una silla de ruedas?",da:"Er stedet tilgængeligt med en kørestol?",id:"Apakah tempat ini dapat diakses dengan kursi roda?",cs:"Je toto místo přístupné pro vozíčkáře?"},mappings:[{if:{and:["wheelchair=designated"]},then:{nl:"Deze plaats is speciaal aangepast voor gebruikers van een rolstoel",en:"This place is specially adapted for wheelchair users",pt:"Este lugar está especialmente adaptado para utilizadores de cadeira de rodas",pt_BR:"Este lugar é especialmente adaptado para usuários de cadeira de rodas",de:"Der Ort ist speziell für Rollstuhlfahrer gestaltet",hu:"Ez a hely kifejezetten kerekesszékeseknek lett kialakítva",it:"Questo luogo è stato adattato per favorire le persone in sedia a rotelle",nb_NO:"Dette stedet er spesielt tilpasset rullestolsbrukere",fr:"Cet endroit est spécialement adapté pour les usagers de fauteuils roulants",ca:"Aquest lloc està especialment adaptat per a les cadires de rodes",sv:"Det här stället är speciellt anpassat för rullstolsburna användare",zh_Hant:"這個地方有特別設計給輪椅使用者",ru:"Это место подходит для людей на инвалидной коляске",pl:"W tym miejscu zainstalowane zostały udogodnienia dla osób na wózkach inwalidzkich",ja:"この場所は、車椅子の方のための特別仕様になっています",fil:"Ang lugar na ito ay angkop sa mga gumagamit ng wheelchair",es:"Este lugar está especialmente adaptado para usuarios en sillas de ruedas",da:"Dette sted er specielt indrettet til kørestolsbrugere",id:"Tempat ini dirancang khusus untuk pengguna kursi roda",cs:"Toto místo je speciálně upraveno pro vozíčkáře"}},{if:{and:["wheelchair=yes"]},then:{nl:"Deze plaats is vlot bereikbaar met een rolstoel",en:"This place is easily reachable with a wheelchair",pt:"Este lugar é de fácil acesso com uma cadeira de rodas",pt_BR:"Este lugar é facilmente acessível com uma cadeira de rodas",de:"Der Ort ist rollstuhlzugänglich gestaltet",hu:"Ez a hely könnyedén elérhető kerekesszékkel",it:"Questo luogo è facilmente raggiungibile con una sedia a rotelle",nb_NO:"Dette stedet kan enkelt besøkes med rullestol",fr:"Cet endroit est facilement accessible avec un fauteuil roulant",ca:"És facilment arribable amb cadira de rodes",sv:"Denna plats är lätt att nå med rullstol",zh_Hant:"這個地方坐輪椅很容易到達",ru:"До этого места легко добраться на инвалидной коляске",pl:"To miejsce jest łatwo dostępne dla osób na wózkach inwalidzkich",ja:"この場所は、車いすで簡単に行くことができます",fil:"Ang lugar na ito ay kayang abutin ng mga naka-wheelchair",es:"Este lugar es fácilmente accesible con una silla de ruedas",da:"Dette sted er let tilgængeligt med en kørestol",id:"Tempat ini mudah dijangkau dengan kursi roda",cs:"Toto místo je snadno dosažitelné s invalidním vozíkem"}},{if:{and:["wheelchair=limited"]},then:{nl:"Deze plaats is bereikbaar met een rolstoel, maar het is niet makkelijk",en:"It is possible to reach this place in a wheelchair, but it is not easy",pt:"É possível chegar a este local em cadeira de rodas, mas não é fácil",pt_BR:"É possível chegar a esse local em uma cadeira de rodas, mas não é fácil",de:"Der Ort ist nur eingeschränkt rollstuhlzugänglich",fr:"Il est possible d'accéder à cet endroit en chaise roulante, mais ce n'est pas facile",hu:"Ez a hely ugyan elérhető kerekesszékkel, de nehezen",it:"È possibile raggiungere questo luogo con una sedia a rotella ma non è semplice",nb_NO:"Det er mulig å besøke dette stedet i rullestol, men det er ikke lett",ca:"És possible fer servir cadira de rodes a aquest lloc però no és fàcil",sv:"Det är möjligt att nå den här platsen i en rullstol, men det är inte lätt",zh_Hant:"這個地方可以坐輪椅到達，但並不容易",ru:"До этого места можно добраться, но не просто",pl:"To miejsce jest dostępne dla osób na wózkach inwalidzkich, ale z pewnymi trudnościami",ja:"車いすでこの場所まで行くことは可能ですが、簡単ではありません",fil:"Kayang abutin ang lugar na ito ng mga naka-wheelchair, pero hindi madali",es:"Es posible llegar a este lugar con una silla de ruedas, pero no es fácil",da:"Det er muligt at komme til dette sted med en kørestol, men det er ikke let",id:"Dimungkinkan untuk mencapai tempat ini dengan kursi roda, tetapi tidak mudah",cs:"Na toto místo je možné se dostat na invalidním vozíku, ale není to snadné"}},{if:{and:["wheelchair=no"]},then:{nl:"Niet rolstoeltoegankelijk",en:"This place is not reachable with a wheelchair",pt:"Este lugar não é acessível com uma cadeira de rodas",pt_BR:"Este lugar não é alcançável com uma cadeira de rodas",de:"Der Ort ist nicht rollstuhlzugänglich",fr:"Cet endroit n'est pas accessible en chaise roulante",hu:"Ez a hely kerekesszékkel elérhetetlen",it:"Questo luogo non è accessibile con una sedia a rotelle",nb_NO:"Dette stedet er ikke tilgjengelig for besøk med rullestol",ca:"Aquest lloc no és accessible amb cadira de rodes",sv:"Den här platsen kan inte nås med en rullstol",zh_Hant:"輪椅無法到達這個地方",pl:"To miejsce jest niedostępne dla osób na wózkach inwalidzkich",ja:"この場所は車いすでは行けません",fil:"Ang lugar na ito ay hindi kayang abutin ng naka-wheelchair",es:"No es posible llegar a este lugar con una silla de ruedas",da:"Dette sted er ikke tilgængeligt med kørestol",id:"Tempat ini tidak bisa dijangkau dengan kursi roda",cs:"Na toto místo se nelze dostat s invalidním vozíkem"}}],condition:{and:["elevator=yes",{or:["access=yes","access=guided"]}]}},{id:"wikipedia",description:"Shows a wikipedia box with the corresponding wikipedia article; the wikidata-item link can be changed by a contributor",render:{"*":"{wikipedia():max-height:25rem}"},question:{en:"What is the corresponding Wikidata entity?",nl:"Welk Wikidata-item komt overeen met dit object?",de:"Wie lautet das zugehörige Wikidata Element?",pt:"Qual é a entidade Wikidata correspondente?",hu:"Mi a megfelelő Wikidata-elem?",it:"Qual è l’elemento Wikidata corrispondente?",nb_NO:"Hva er respektivt Wikipedia-element?",fr:"Quelle est l'entité Wikidata correspondante ?",ca:"Quina és la correspondent entitat a Wikidata?",sv:"Vad är den motsvarande Wikidata-enheten?",zh_Hant:"對應的維基資料項目是？",pl:"Jaki jest powiązany obiekt Wikidata?",ja:"対応するウィキデータのエンティティは何ですか？",fil:"Ano ang nau-ukol na entidad sa Wikidata?",es:"¿Cual es la entidad de Wikidata que se corresponde?",zh_Hans:"在Wikidata上对应的实体是什么？",da:"Hvad er den tilsvarende Wikidata-enhed?",id:"Apa entitas Wikidata yang sesuai?",cs:"Jaká je odpovídající entita Wikidata?"},mappings:[{if:"wikipedia~*",then:{"*":"{wikipedia():max-height:25rem}",ca:"No hi ha cap enllaça a Viquipèdia encara",da:"Der er endnu ikke linket til nogen Wikipedia-side",de:"Es wurde noch keine Wikipedia-Seite verlinkt",en:"No Wikipedia page has been linked yet",es:"Todavía no se ha enlazado una página de wikipedia",fil:"Wala pang kawing ng Wikipedia page",fr:"Pas encore de lien vers une page Wikipedia",hu:"Még nincs Wikipédia-oldal belinkelve",it:"Nessuna pagina Wikipedia è ancora stata collegata",ja:"ウィキペディアのページはまだリンクされていません",nb_NO:"Ingen Wikipedia-side lenket enda",nl:"Er werd nog geen Wikipedia-pagina gekoppeld",pl:"Link do strony Wikipedii nie został jeszcze określony",pt:"Ainda não foi vinculada nenhuma página da Wikipédia",ru:"Никакой страницы на Википедии не было прикреплено",sv:"Ingen Wikipedia-sida har länkats än",zh_Hans:"尚未有连接到的维基百科页面",zh_Hant:"還沒有連結到維基百科頁面",id:"Belum ada halaman Wikipedia yang ditautkan",cs:"Žádná stránka na Wikipedii zatím nebyla propojena"},hideInAnswer:!0},{if:"wikidata=",then:{en:"No Wikipedia page has been linked yet",nl:"Er werd nog geen Wikipedia-pagina gekoppeld",de:"Es wurde noch keine Wikipedia-Seite verlinkt",pt:"Ainda não foi vinculada nenhuma página da Wikipédia",hu:"Még nincs Wikipédia-oldal belinkelve",it:"Nessuna pagina Wikipedia è ancora stata collegata",nb_NO:"Ingen Wikipedia-side lenket enda",fr:"Pas encore de lien vers une page Wikipedia",ca:"No hi ha cap enllaça a Viquipèdia encara",sv:"Ingen Wikipedia-sida har länkats än",zh_Hant:"還沒有連結到維基百科頁面",ru:"Никакой страницы на Википедии не было прикреплено",pl:"Link do strony Wikipedii nie został jeszcze określony",ja:"ウィキペディアのページはまだリンクされていません",fil:"Wala pang kawing ng Wikipedia page",es:"Todavía no se ha enlazado una página de wikipedia",zh_Hans:"尚未有连接到的维基百科页面",da:"Der er endnu ikke linket til nogen Wikipedia-side",id:"Belum ada halaman Wikipedia yang ditautkan",cs:"Žádná stránka na Wikipedii zatím nebyla propojena"},hideInAnswer:!0}],freeform:{key:"wikidata",type:"wikidata",inline:!0}},{id:"leftover-questions",render:{"*":"{questions( ,)}"}},{id:"minimap",description:"Shows a small map with the feature. Added by default to every popup",render:{"*":"{minimap(18, id): width:100%; height:8rem; border-radius:2rem; overflow: hidden; pointer-events: none;}"}},{id:"move-button",render:{"*":"{move_button()}"}},{id:"last_edit",labels:["added_by_default"],description:"Gives some metainfo about the last edit and who did edit it - rendering only",condition:{and:["_last_edit:contributor~*","_last_edit:changeset~*"]},metacondition:{or:["__featureSwitchIsTesting=true","__featureSwitchIsDebugging=true","mapcomplete-show_debug=yes","_csCount>=10"]},render:{ca:"{link(Darrera edició el &LBRACE_last_edit:timestamp&RBRACE per &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",cs:"{link(Naposledy upravil &LBRACE_last_edit:timestamp&RBRACE &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",de:"{link(Zuletzt bearbeitet am &LBRACE_last_edit:timestamp&RBRACE von &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",en:"{link(Last edited on &LBRACE_last_edit:timestamp&RBRACE by &LBRACE_last_edit:contributor&RBRACE,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}",nl:"{link(Laatst gewijzigd op &LBRACE_last_edit:timestamp&RBRACE door &LBRACE_last_edit:contributor&RBRACE ,&LBRACE_backend&RBRACE/changeset/&LBRACE_last_edit:changeset&RBRACE,subtle font-small,,)}"}},{id:"favourite_status",render:{"*":"{favourite_status()}"}},{id:"qr_code",labels:["added_by_default"],classes:"flex items-center gap-x-2",render:{en:"{qr_code()}Scan this code to open this location on another device",nl:"{qr_code()}Scan deze code om deze locatie op een ander apparaat te zien"}},{id:"share",labels:["added_by_default"],metacondition:"_supports_sharing=yes",render:{en:"{share_link(,Share this location)}",nl:"{share_link(,Deel deze locatie)}"}},{id:"all-tags",render:{"*":"{all_tags()}"},metacondition:{or:["__featureSwitchIsDebugging=true","mapcomplete-show_tags=full","mapcomplete-show_debug=yes"]}}],allowMove:{enableRelocation:!1,enableImproveAccuraccy:!0},units:[{height:{quantity:"distance",denominations:["m"]}}],titleIcons:[{id:"wikipedialink",labels:["defaults","in_favourite"],render:"<a href='https://wikipedia.org/wiki/{wikipedia}' target='_blank' rel='noopener'><img src='./assets/svg/wikipedia.svg' textmode='📖' alt='Wikipedia'/></a>",condition:{or:["wikipedia~*","wikidata~*"]},mappings:[{"#":"ignore-image-in-then",if:"wikipedia=",then:"<a class='h-8' href='https://www.wikidata.org/wiki/{wikidata}' target='_blank' rel='noopener'><img src='./assets/svg/wikidata.svg' alt='Wikidata'/></a>"}]},{id:"open_until",labels:["defaults","in_favourite"],"#":"Titleicon showing e.g. 'open until 17:00'",icon:{class:"w-20 mx-1 flex items-center"},render:"{opening_hours_state()}",condition:{or:["opening_hours~*","seasonal=","seasonal=no",{or:[{and:["seasonal~.*winter.*","_now:date~....-(12|01|02)-.."]},{and:["seasonal~.*spring.*","_now:date~....-(03|04|05)-.."]},{and:["seasonal~.*summer.*","_now:date~....-(06|07|08)-.."]},{and:["seasonal~.*autumn.*","_now:date~....-(09|10|11)-.."]}]}]}},{id:"phonelink",labels:["defaults","in_favourite"],render:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEphone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.render"},mappings:[{"#":"ignore-image-in-then",if:"contact:phone~*",then:{en:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,phone)}",nl:"{link(<img textmode='📞' alt='phone' src='./assets/layers/questions/phone.svg'/>,tel:&LBRACEcontact:phone&RBRACE,,,Telefoneer)}",_context:"layers:icons.tagRenderings.phonelink.mappings.0.then"}}],condition:{or:["phone~*","contact:phone~*"]}},{id:"emaillink",labels:["defaults","in_favourite"],render:"<a href='mailto:{email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>",mappings:[{"#":"ignore-image-in-then",if:"contact:email~*",then:"<a href='mailto:{contact:email}'><img textmode='✉️' alt='email' src='./assets/layers/questions/send_email.svg'/></a>"}],condition:{or:["email~*","contact:email~*"]}},{id:"websitelink",labels:["defaults","in_favourite"],render:"<a href='{website}' target='_blank' rel='noopener'><img textmode='🌐' alt='website' src='./assets/layers/icons/website.svg'/></a>",condition:"website~*"},{id:"smokingicon",labels:["defaults","in_favourite"],mappings:[{"#":"ignore-image-in-then",if:"smoking=no",then:"<img textmode='🚭️' alt='no smoking' src='./assets/layers/questions/no_smoking.svg'/>"},{"#":"ignore-image-in-then",if:"smoking=yes",then:"<img textmode='🚬️' alt='smoking allowed' src='./assets/layers/questions/smoking.svg'/>"}]},{id:"sharelink",labels:["defaults"],render:"{share_link()}",metacondition:"_supports_sharing=yes"},{id:"favourite_title_icon",labels:["defaults"],render:{"*":"{favourite_icon()}"},metacondition:"_loggedIn=true"},{id:"osmlink",labels:["defaults"],render:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,https://openstreetmap.org/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.render"},mappings:[{if:"id~.*/-.*",then:""},{"#":"ignore-image-in-then",if:"_backend~*",then:{en:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Open on openstreetmap.org)}",nl:"{link(<img alt='on osm' textmode='🗺️' src='./assets/svg/osm-logo-us.svg'/>,&LBRACE_backend&RBRACE/&LBRACEid&RBRACE,,,Bekijk op openstreetmap.org)}",_context:"layers:icons.tagRenderings.osmlink.mappings.1.then"}}],condition:"id~(node|way|relation)/[0-9]*"},{id:"dogicon",labels:["defaults","in_favourite"],mappings:[{if:"dog=no","#":"ignore-image-in-then",then:"<img textmode='🐕 ⃠' alt='no_dogs' src='./assets/layers/questions/no_dogs.svg'>"},{if:"dog=leashed","#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed but leashed' src='./assets/layers/questions/dogs_leashed.svg'>"},{if:{or:["dog=yes","dog=unleashed"]},"#":"ignore-image-in-then",then:"<img textmode='🐕' alt='dogs are allowed' src='./assets/layers/questions/dogs_allowed.svg'>"}]},{id:"direction",labels:["defaults","in_favourite"],render:"{direction_indicator()}"},{id:"rating",icon:{class:"w-20 mx-1 flex items-center"},render:"{rating()}"}],_layerIcon:[{icon:"circle",color:"white"},{icon:"./assets/layers/observation_tower/Tower_observation.svg"}]}],T=5,B="assets/SocialImage.png",t={id:y,title:z,description:R,shortDescription:j,icon:A,layers:E,widenFactor:T,socialImage:B};class s{metaTaggging_for_observation_tower(a,i){}}n(s,"themeName","observation_towers");function C(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch{return!1}}if(!C())new _("WebGL is not supported or not enabled. This is essential for MapComplete to function, please enable this.").SetClass("block alert").AttachTo("maindiv");else{l.setThemeMetatagging(new s),t.layers.push(p),t.layers.push(u),t.layers.push(m),t.layers.push(h),t.layers.push(g),t.layers.push(k),t.layers.push(b),t.layers.push(v);const e=new d(new f(t));new w(c,{state:e}).AttachTo("maindiv")}
//# sourceMappingURL=observation_towers-5de3d4ab.js.map
