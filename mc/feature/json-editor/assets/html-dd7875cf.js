import{m}from"./editor.main-5417bcec.js";import"./preload-helper-20d4aa63.js";import"./SubtleLink-362cf068.js";import"./Utils-498bb79d.js";import"./Constants-76017c74.js";import"./Tr-72e209f5.js";import"./tw-merge-ef1cf9a3.js";import"./LocalStorageSource-4f66d5e4.js";import"./Img-26b2d376.js";import"./LanguagePicker-4841e2f0.js";import"./Dropdown-3b039bb4.js";import"./TagRenderingAnswer-966223cf.js";import"./placeholder-eb6cf50b.js";import"./Loading-bad0ad13.js";import"./store.legacy-a94d7e96.js";import"./Checkbox-dcb04687.js";import"./BackButton-b5a3b2ab.js";import"./Eye-a690272c.js";import"./Login-1ef52d29.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var s=Object.defineProperty,d=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,a=(t,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of l(e))!c.call(t,r)&&r!==i&&s(t,r,{get:()=>e[r],enumerable:!(n=d(e,r))||n.enumerable});return t},u=(t,e,i)=>(a(t,e,"default"),i&&a(i,e,"default")),o={};u(o,m);var p=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],R={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["<!--","-->"]},brackets:[["<!--","-->"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${p.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:o.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${p.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:o.languages.IndentAction.Indent}}],folding:{markers:{start:new RegExp("^\\s*<!--\\s*#region\\b.*-->"),end:new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")}}},S={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,"metatag","@doctype"],[/<!--/,"comment","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter","tag","","delimiter"]],[/(<)(script)/,["delimiter",{token:"tag",next:"@script"}]],[/(<)(style)/,["delimiter",{token:"tag",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/</,"delimiter"],[/[^<]+/]],doctype:[[/[^>]+/,"metatag.content"],[/>/,"metatag","@pop"]],comment:[[/-->/,"comment","@pop"],[/[^-]+/,"comment.content"],[/./,"comment.content"]],otherTag:[[/\/?>/,"delimiter","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"module"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.text/javascript"}],[/'module'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.text/javascript"}],[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}};export{R as conf,S as language};
//# sourceMappingURL=html-dd7875cf.js.map
