import{m as p}from"./editor.main-b6b37bc6.js";import"./preload-helper-a9ffaded.js";import"./index-9229ee1d.js";import"./UIEventSource-19d278ab.js";import"./LanguagePicker-214b6d38.js";import"./NameSuggestionIndex-52e2e878.js";import"./Translation-57188e13.js";import"./LocalStorageSource-2e204a66.js";import"./FixImages-f40b6487.js";import"./tw-merge-5f0284a7.js";import"./Constants-fc2cf55a.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./Add-258ff92a.js";import"./Checkbox-183cc416.js";import"./BackButton-9e4900e8.js";import"./Login-774222e4.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var d=Object.defineProperty,c=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,s=(n,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of a(e))!m.call(n,o)&&o!==i&&d(n,o,{get:()=>e[o],enumerable:!(r=c(e,o))||r.enumerable});return n},k=(n,e,i)=>(s(n,e,"default"),i&&s(i,e,"default")),t={};k(t,p);var P={comments:{blockComment:["{/*","*/}"]},brackets:[["{","}"]],autoClosingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"“",close:"”"},{open:"‘",close:"’"},{open:"`",close:"`"},{open:"{",close:"}"},{open:"(",close:")"},{open:"_",close:"_"},{open:"**",close:"**"},{open:"<",close:">"}],onEnterRules:[{beforeText:/^\s*- .+/,action:{indentAction:t.languages.IndentAction.None,appendText:"- "}},{beforeText:/^\s*\+ .+/,action:{indentAction:t.languages.IndentAction.None,appendText:"+ "}},{beforeText:/^\s*\* .+/,action:{indentAction:t.languages.IndentAction.None,appendText:"* "}},{beforeText:/^> /,action:{indentAction:t.languages.IndentAction.None,appendText:"> "}},{beforeText:/<\w+/,action:{indentAction:t.languages.IndentAction.Indent}},{beforeText:/\s+>\s*$/,action:{indentAction:t.languages.IndentAction.Indent}},{beforeText:/<\/\w+>/,action:{indentAction:t.languages.IndentAction.Outdent}},...Array.from({length:100},(n,e)=>({beforeText:new RegExp(`^${e}\\. .+`),action:{indentAction:t.languages.IndentAction.None,appendText:`${e+1}. `}}))]},I={defaultToken:"",tokenPostfix:".mdx",control:/[!#()*+.[\\\]_`{}\-]/,escapes:/\\@control/,tokenizer:{root:[[/^---$/,{token:"meta.content",next:"@frontmatter",nextEmbedded:"yaml"}],[/^\s*import/,{token:"keyword",next:"@import",nextEmbedded:"js"}],[/^\s*export/,{token:"keyword",next:"@export",nextEmbedded:"js"}],[/<\w+/,{token:"type.identifier",next:"@jsx"}],[/<\/?\w+>/,"type.identifier"],[/^(\s*)(>*\s*)(#{1,6}\s)/,[{token:"white"},{token:"comment"},{token:"keyword",next:"@header"}]],[/^(\s*)(>*\s*)([*+-])(\s+)/,["white","comment","keyword","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(\d{1,9}\.)(\s+)/,["white","comment","number","white"]],[/^(\s*)(>*\s*)(-{3,}|\*{3,}|_{3,})$/,["white","comment","keyword"]],[/`{3,}(\s.*)?$/,{token:"string",next:"@codeblock_backtick"}],[/~{3,}(\s.*)?$/,{token:"string",next:"@codeblock_tilde"}],[/`{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_backtick",nextEmbedded:"$1"}],[/~{3,}(\S+).*$/,{token:"string",next:"@codeblock_highlight_tilde",nextEmbedded:"$1"}],[/^(\s*)(-{4,})$/,["white","comment"]],[/^(\s*)(>+)/,["white","comment"]],{include:"content"}],content:[[/(\[)(.+)(]\()(.+)(\s+".*")(\))/,["","string.link","","type.identifier","string.link",""]],[/(\[)(.+)(]\()(.+)(\))/,["","type.identifier","","string.link",""]],[/(\[)(.+)(]\[)(.+)(])/,["","type.identifier","","type.identifier",""]],[/(\[)(.+)(]:\s+)(\S*)/,["","type.identifier","","string.link"]],[/(\[)(.+)(])/,["","type.identifier",""]],[/`.*`/,"variable.source"],[/_/,{token:"emphasis",next:"@emphasis_underscore"}],[/\*(?!\*)/,{token:"emphasis",next:"@emphasis_asterisk"}],[/\*\*/,{token:"strong",next:"@strong"}],[/{/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}]],import:[[/'\s*(;|$)/,{token:"string",next:"@pop",nextEmbedded:"@pop"}]],expression:[[/{/,{token:"delimiter.bracket",next:"@expression"}],[/}/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],export:[[/^\s*$/,{token:"delimiter.bracket",next:"@pop",nextEmbedded:"@pop"}]],jsx:[[/\s+/,""],[/(\w+)(=)("(?:[^"\\]|\\.)*")/,["attribute.name","operator","string"]],[/(\w+)(=)('(?:[^'\\]|\\.)*')/,["attribute.name","operator","string"]],[/(\w+(?=\s|>|={|$))/,["attribute.name"]],[/={/,{token:"delimiter.bracket",next:"@expression",nextEmbedded:"js"}],[/>/,{token:"type.identifier",next:"@pop"}]],header:[[/.$/,{token:"keyword",next:"@pop"}],{include:"content"},[/./,{token:"keyword"}]],strong:[[/\*\*/,{token:"strong",next:"@pop"}],{include:"content"},[/./,{token:"strong"}]],emphasis_underscore:[[/_/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],emphasis_asterisk:[[/\*(?!\*)/,{token:"emphasis",next:"@pop"}],{include:"content"},[/./,{token:"emphasis"}]],frontmatter:[[/^---$/,{token:"meta.content",nextEmbedded:"@pop",next:"@pop"}]],codeblock_highlight_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_highlight_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop",nextEmbedded:"@pop"}],[/.*$/,"variable.source"]],codeblock_backtick:[[/\s*`{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblock_tilde:[[/\s*~{3,}\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]]}};export{P as conf,I as language};
//# sourceMappingURL=mdx-9972eef0.js.map
