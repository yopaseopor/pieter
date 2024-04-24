import{m}from"./editor.main-f29e6f24.js";import"./preload-helper-0aea19aa.js";import"./index-047bb07b.js";import"./Utils-28f00dfc.js";import"./tw-merge-7570a3e9.js";import"./UIEventSource-2fd3b430.js";import"./LocalStorageSource-91540725.js";import"./FixImages-91be3c6c.js";import"./Constants-6798f846.js";import"./placeholder-ecdb271f.js";import"./Loading-754de247.js";import"./OsmConnection-63d2895e.js";import"./LanguagePicker-e1c7ef89.js";import"./Dropdown-46c343d5.js";import"./Checkbox-91647881.js";import"./BackButton-4febcf6d.js";import"./Add-f3431a17.js";import"./Login-be56b5c4.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,r=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of l(e))!d.call(t,o)&&o!==n&&p(t,o,{get:()=>e[o],enumerable:!(a=c(e,o))||a.enumerable});return t},s=(t,e,n)=>(r(t,e,"default"),n&&r(n,e,"default")),i={};s(i,m);var E={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}]},I={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{E as conf,I as language};
//# sourceMappingURL=xml-2f705f19.js.map
