import{m}from"./editor.main-5417bcec.js";import"./preload-helper-20d4aa63.js";import"./SubtleLink-362cf068.js";import"./Utils-498bb79d.js";import"./Constants-76017c74.js";import"./Tr-72e209f5.js";import"./tw-merge-ef1cf9a3.js";import"./LocalStorageSource-4f66d5e4.js";import"./Img-26b2d376.js";import"./LanguagePicker-4841e2f0.js";import"./Dropdown-3b039bb4.js";import"./TagRenderingAnswer-966223cf.js";import"./placeholder-eb6cf50b.js";import"./Loading-bad0ad13.js";import"./store.legacy-a94d7e96.js";import"./Checkbox-dcb04687.js";import"./BackButton-b5a3b2ab.js";import"./Eye-a690272c.js";import"./Login-1ef52d29.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,r=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of l(e))!d.call(t,o)&&o!==n&&p(t,o,{get:()=>e[o],enumerable:!(a=c(e,o))||a.enumerable});return t},s=(t,e,n)=>(r(t,e,"default"),n&&r(n,e,"default")),i={};s(i,m);var I={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}]},T={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{I as conf,T as language};
//# sourceMappingURL=xml-f4c0f4ec.js.map
