'use strict';(function(){const input=document.querySelector('#book-search-input');const results=document.querySelector('#book-search-results');if(!input){return}
input.addEventListener('focus',init);input.addEventListener('keyup',search);document.addEventListener('keypress',focusSearchFieldOnKeyPress);function focusSearchFieldOnKeyPress(event){if(input===document.activeElement){return;}
const characterPressed=String.fromCharCode(event.charCode);if(!isHotkey(characterPressed)){return;}
input.focus();event.preventDefault();}
function isHotkey(character){const dataHotkeys=input.getAttribute('data-hotkeys')||'';return dataHotkeys.indexOf(character)>=0;}
function init(){input.removeEventListener('focus',init);input.required=true;loadScript('/flexsearch.min.js');loadScript('/en.search-data.min.988299fce4912987e5250880345b6f273a7ddbb669d00575c5d123bc4d97290e.js',function(){input.required=false;search();});}
function search(){while(results.firstChild){results.removeChild(results.firstChild);}
if(!input.value){return;}
const searchHits=window.bookSearchIndex.search(input.value,10);searchHits.forEach(function(page){const li=element('<li><a href></a><small></small></li>');const a=li.querySelector('a'),small=li.querySelector('small');a.href=page.href;a.textContent=page.title;small.textContent=page.section;results.appendChild(li);});}
function loadScript(src,callback){const script=document.createElement('script');script.defer=true;script.async=false;script.src=src;script.onload=callback;document.head.appendChild(script);}
function element(content){const div=document.createElement('div');div.innerHTML=content;return div.firstChild;}})();