parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oyVc":[function(require,module,exports) {
module.exports={id:"bike_cafe",name:{en:"Bike cafe",nl:"Fietscafé",fr:"Café vélo",gl:"Café de ciclistas",de:"Fahrrad-Café",it:"Caffè in bici",zh_Hans:"自行车咖啡",ru:"Велосипедное кафе",zh_Hant:"單車咖啡廳"},minzoom:13,source:{osmTags:{and:[{or:["amenity=pub","amenity=bar","amenity=cafe","amenity=restaurant"]},{"#":"Note the double tilde in 'service:bicycle' which interprets the key as regex too",or:["pub=cycling","pub=bicycle","theme=cycling","theme=bicycle","service:bicycle:.*~~*"]}]}},title:{render:{en:"Bike cafe",nl:"Fietscafé",fr:"Café Vélo",gl:"Café de ciclistas",de:"Fahrrad-Café",it:"Caffè in bici",zh_Hans:"自行车咖啡",ru:"Велосипедное кафе",zh_Hant:"單車咖啡廳"},mappings:[{if:"name~*",then:{en:"Bike cafe <i>{name}</i>",nl:"Fietscafé <i>{name}</i>",fr:"Café Vélo <i>{name}</i>",gl:"Café de ciclistas <i>{name}</i>",de:"Fahrrad-Café <i>{name}</i>",it:"Caffè in bici <i>{name}</i>",zh_Hans:"自行车咖啡 <i>{name}</i>",ru:"Велосипедное кафе <i>{name}</i>",zh_Hant:"單車咖啡廳<i>{name}</i>"}}]},tagRenderings:["images",{question:{en:"What is the name of this bike cafe?",nl:"Wat is de naam van dit fietscafé?",fr:"Quel est le nom de ce Café vélo ?",gl:"Cal é o nome deste café de ciclistas?",de:"Wie heißt dieses Fahrrad-Café?",it:"Qual è il nome di questo caffè in bici?",zh_Hans:"这个自行车咖啡的名字是什么？",ru:"Как называется это байк-кафе?",zh_Hant:"這個單車咖啡廳的名稱是？"},render:{en:"This bike cafe is called {name}",nl:"Dit fietscafé heet {name}",fr:"Ce Café vélo s'appelle {name}",gl:"Este café de ciclistas chámase {name}",de:"Dieses Fahrrad-Café heißt {name}",it:"Questo caffè in bici è chiamato {name}",zh_Hans:"这家自行车咖啡叫做 {name}",ru:"Это велосипедное кафе называется {name}",zh_Hant:"這個單車咖啡廳叫做 {name}"},freeform:{key:"name"}},{question:{en:"Does this bike cafe offer a bike pump for use by anyone?",nl:"Biedt dit fietscafé een fietspomp aan voor iedereen?",fr:"Est-ce que ce Café vélo propose une pompe en libre accès ?",gl:"Este café de ciclistas ofrece unha bomba de ar para que calquera persoa poida usala?",de:"Bietet dieses Fahrrad-Café eine Fahrradpumpe an, die von jedem benutzt werden kann?",it:"Questo caffè in bici offre una pompa per bici che chiunque può utilizzare?",zh_Hans:"这家自行车咖啡为每个使用者提供打气筒吗？",ru:"Есть ли в этом велосипедном кафе велосипедный насос для всеобщего использования?",zh_Hant:"這個單車咖啡廳有提供給任何人都能使用的單車打氣甬嗎？"},mappings:[{if:"service:bicycle:pump=yes",then:{en:"This bike cafe offers a bike pump for anyone",nl:"Dit fietscafé biedt een fietspomp aan voor eender wie",fr:"Ce Café vélo offre une pompe en libre accès",gl:"Este café de ciclistas ofrece unha bomba de ar",de:"Dieses Fahrrad-Café bietet eine Fahrradpumpe an, die von jedem benutzt werden kann",it:"Questo caffè in bici offre una pompa per bici liberamente utilizzabile",zh_Hans:"这家自行车咖啡为每个人提供打气筒",zh_Hant:"這個單車咖啡廳有提供給任何人都能使用的單車打氣甬"}},{if:"service:bicycle:pump=no",then:{en:"This bike cafe doesn't offer a bike pump for anyone",nl:"Dit fietscafé biedt geen fietspomp aan voor iedereen",fr:"Ce Café vélo n'offre pas de pompe en libre accès",gl:"Este café de ciclistas non ofrece unha bomba de ar",de:"Dieses Fahrrad-Café bietet keine Fahrradpumpe an, die von jedem benutzt werden kann",it:"Questo caffè in bici non offre una pompa per bici liberamente utilizzabile",zh_Hans:"这家自行车咖啡不为每个人提供打气筒",zh_Hant:"這個單車咖啡廳並沒有為所有人提供單車打氣甬"}}]},{question:{en:"Are there tools here to repair your own bike?",nl:"Biedt dit fietscafé gereedschap aan om je fiets zelf te herstellen?",fr:"Est-ce qu'il y a des outils pour réparer soi-même son vélo ?",gl:"Hai ferramentas aquí para arranxar a túa propia bicicleta?",de:"Gibt es hier Werkzeuge, um das eigene Fahrrad zu reparieren?",it:"Ci sono degli strumenti per riparare la propria bicicletta?",zh_Hans:"这里有供你修车用的工具吗？",zh_Hant:"這裡是否有工具修理你的單車嗎？"},mappings:[{if:"service:bicycle:diy=yes",then:{en:"This bike cafe offers tools for DIY repair",nl:"Dit fietscafé biedt gereedschap aan om je fiets zelf te herstellen",fr:"Ce Café vélo propose des outils pour réparer son vélo soi-même",gl:"Hai ferramentas aquí para arranxar a túa propia bicicleta",de:"Dieses Fahrrad-Café bietet Werkzeuge für die selbständige Reparatur an",it:"Questo caffè in bici fornisce degli attrezzi per la riparazione fai-da-te",zh_Hans:"这家自行车咖啡为DIY修理者提供工具",zh_Hant:"這個單車咖啡廳提供工具讓你修理"}},{if:"service:bicycle:diy=no",then:{en:"This bike cafe doesn't offer tools for DIY repair",nl:"Dit fietscafé biedt geen gereedschap aan om je fiets zelf te herstellen",fr:"Ce Café vélo ne propose pas d'outils pour réparer son vélo soi-même",gl:"Non hai ferramentas aquí para arranxar a túa propia bicicleta",de:"Dieses Fahrrad-Café bietet keine Werkzeuge für die selbständige Reparatur an",it:"Questo caffè in bici non fornisce degli attrezzi per la riparazione fai-da-te",zh_Hans:"这家自行车咖啡不为DIY修理者提供工具",zh_Hant:"這個單車咖啡廳並沒有提供工具讓你修理"}}]},{question:{en:"Does this bike cafe repair bikes?",nl:"Herstelt dit fietscafé fietsen?",fr:"Est-ce que ce Café vélo répare les vélos ?",gl:"Este café de ciclistas arranxa bicicletas?",de:"Repariert dieses Fahrrad-Café Fahrräder?",it:"Questo caffè in bici ripara le bici?",zh_Hans:"这家自行车咖啡t提供修车服务吗？",zh_Hant:"這個單車咖啡廳是否能修理單車？"},mappings:[{if:"service:bicycle:repair=yes",then:{en:"This bike cafe repairs bikes",nl:"Dit fietscafé herstelt fietsen",fr:"Ce Café vélo répare les vélos",gl:"Este café de ciclistas arranxa bicicletas",de:"Dieses Fahrrad-Café repariert Fahrräder",it:"Questo caffè in bici ripara le bici",zh_Hans:"这家自行车咖啡可以修车",zh_Hant:"這個單車咖啡廳修理單車"}},{if:"service:bicycle:repair=no",then:{en:"This bike cafe doesn't repair bikes",nl:"Dit fietscafé herstelt geen fietsen",fr:"Ce Café vélo ne répare pas les vélos",gl:"Este café de ciclistas non arranxa bicicletas",de:"Dieses Fahrrad-Café repariert keine Fahrräder",it:"Questo caffè in bici non ripara le bici",zh_Hans:"这家自行车咖啡不能修车",zh_Hant:"這個單車咖啡廳並不修理單車"}}]},{question:{en:"What is the website of {name}?",nl:"Wat is de website van {name}?",fr:"Quel est le site web de {name} ?",gl:"Cal é a páxina web de {name}?",de:"Was ist die Webseite von {name}?",it:"Qual è il sito web di {name}?",ru:"Какой сайт у {name}?",zh_Hans:"{name}的网站是什么？",zh_Hant:"{name} 的網站是？"},render:"<a href='{website}' target='_blank'>{website}</a>",freeform:{key:"website"}},{question:{en:"What is the phone number of {name}?",nl:"Wat is het telefoonnummer van {name}?",fr:"Quel est le numéro de téléphone de {name} ?",gl:"Cal é o número de teléfono de {name}?",de:"Wie lautet die Telefonnummer von {name}?",it:"Qual è il numero di telefono di {name}?",ru:"Какой номер телефона у {name}?",zh_Hans:"{name}的电话号码是什么？",zh_Hant:"{name} 的電話號碼是？"},render:"<a href='tel:{phone}'>{phone}</a>",freeform:{key:"phone",type:"phone"}},{question:{en:"What is the email address of {name}?",nl:"Wat is het email-adres van {name}?",fr:"Quelle est l'adresse électronique de {name} ?",gl:"Cal é o enderezo de correo electrónico de {name}?",de:"Wie lautet die E-Mail-Adresse von {name}?",it:"Qual è l’indirizzo email di {name}?",ru:"Какой адрес электронной почты у {name}?",zh_Hans:"{name}的电子邮箱是什么？",zh_Hant:"{name} 的電子郵件地址是？"},render:"<a href='mailto:{email}' target='_blank'>{email}</a>",freeform:{key:"email",type:"email"}},{question:{en:"When it this bike café opened?",nl:"Wanneer is dit fietscafé geopend?",fr:"Quand ce Café vélo est-t-il ouvert ?",it:"Quando è aperto questo caffè in bici?",zh_Hans:"这家自行车咖啡什么时候开门营业？",zh_Hant:"何時這個單車咖啡廳營運？"},render:"{opening_hours_table(opening_hours)}",freeform:{key:"opening_hours",type:"opening_hours"}}],hideUnderlayingFeaturesMinPercentage:0,icon:{render:"./assets/layers/bike_cafe/bike_cafe.svg"},width:{render:"2"},iconSize:{render:"50,50,bottom"},color:{render:"#694E2D"},presets:[{title:{en:"Bike cafe",nl:"Fietscafé",fr:"Café Vélo",gl:"Café de ciclistas",de:"Fahrrad-Café",it:"Caffè in bici",zh_Hans:"自行车咖啡",zh_Hant:"單車咖啡廳"},tags:["amenity=pub","pub=cycling"]}],wayHandling:2};
},{}]},{},["oyVc"], null)
//# sourceMappingURL=assets/layers/bike_cafe/bike_cafe.js.map