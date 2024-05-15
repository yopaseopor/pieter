import{m as a}from"./editor.main-b6b37bc6.js";import"./preload-helper-a9ffaded.js";import"./index-9229ee1d.js";import"./UIEventSource-19d278ab.js";import"./LanguagePicker-214b6d38.js";import"./NameSuggestionIndex-52e2e878.js";import"./Translation-57188e13.js";import"./LocalStorageSource-2e204a66.js";import"./FixImages-f40b6487.js";import"./tw-merge-5f0284a7.js";import"./Constants-fc2cf55a.js";import"./Loading-04cfe023.js";import"./Dropdown-081e36b1.js";import"./Add-258ff92a.js";import"./Checkbox-183cc416.js";import"./BackButton-9e4900e8.js";import"./Login-774222e4.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,s=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of c(e))!m.call(t,r)&&r!==n&&l(t,r,{get:()=>e[r],enumerable:!(o=p(e,r))||o.enumerable});return t},d=(t,e,n)=>(s(t,e,"default"),n&&s(n,e,"default")),i={};d(i,a);var S={comments:{lineComment:"#",blockComment:["'''","'''"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$"),action:{indentAction:i.languages.IndentAction.Indent}}],folding:{offSide:!0,markers:{start:new RegExp("^\\s*#region\\b"),end:new RegExp("^\\s*#endregion\\b")}}},z={defaultToken:"",tokenPostfix:".python",keywords:["False","None","True","_","and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","exec","finally","for","from","global","if","import","in","is","lambda","match","nonlocal","not","or","pass","print","raise","return","try","type","while","with","yield","int","float","long","complex","hex","abs","all","any","apply","basestring","bin","bool","buffer","bytearray","callable","chr","classmethod","cmp","coerce","compile","complex","delattr","dict","dir","divmod","enumerate","eval","execfile","file","filter","format","frozenset","getattr","globals","hasattr","hash","help","id","input","intern","isinstance","issubclass","iter","len","locals","list","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","reversed","range","raw_input","reduce","reload","repr","reversed","round","self","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","unichr","unicode","vars","xrange","zip","__dict__","__methods__","__members__","__class__","__bases__","__name__","__mro__","__subclasses__","__init__","__import__"],brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],tokenizer:{root:[{include:"@whitespace"},{include:"@numbers"},{include:"@strings"},[/[,:;]/,"delimiter"],[/[{}\[\]()]/,"@brackets"],[/@[a-zA-Z_]\w*/,"tag"],[/[a-zA-Z_]\w*/,{cases:{"@keywords":"keyword","@default":"identifier"}}]],whitespace:[[/\s+/,"white"],[/(^#.*$)/,"comment"],[/'''/,"string","@endDocString"],[/"""/,"string","@endDblDocString"]],endDocString:[[/[^']+/,"string"],[/\\'/,"string"],[/'''/,"string","@popall"],[/'/,"string"]],endDblDocString:[[/[^"]+/,"string"],[/\\"/,"string"],[/"""/,"string","@popall"],[/"/,"string"]],numbers:[[/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/,"number.hex"],[/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/,"number"]],strings:[[/'$/,"string.escape","@popall"],[/'/,"string.escape","@stringBody"],[/"$/,"string.escape","@popall"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/[^\\']+$/,"string","@popall"],[/[^\\']+/,"string"],[/\\./,"string"],[/'/,"string.escape","@popall"],[/\\$/,"string"]],dblStringBody:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string"],[/"/,"string.escape","@popall"],[/\\$/,"string"]]}};export{S as conf,z as language};
//# sourceMappingURL=python-b891ee1b.js.map
