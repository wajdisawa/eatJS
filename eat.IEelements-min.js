(function(){if(e.browser.msie){var d=[],h=document.querySelectorAll;window.extend=function(b,a){d.push({name:b,b:a});7==e.browser.version?document.querySelectorAll=function(a,b,f,c,g){s=document.createStyleSheet();g=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(f=a.length;f--;){s.addRule(a[f],"k:v");for(c=g.length;c--;)g[c].currentStyle.c&&b.push(g[c]);s.removeRule(0)}for(a=0;a<b.length;a++)for(f=0;f<d.length;f++)eval("_arr[_elem]."+d[f].name+" = _extendList[i].fn");for(f=0;f<
d.length;f++)eval("_arr."+d[f].name+" = _extendList[i].fn");return b}:(document.a=h,document.querySelectorAll=function(a){a=document.a(a);for(var b=0;b<a.length;b++)for(var c=0;c<d.length;c++)eval("_arr[_elem]."+d[c].name+" = _extendList[i].fn");for(c=0;c<d.length;c++)eval("_arr."+d[c].name+" = _extendList[i].fn");return a});var c=document.createElement;document.createElement=function(a){a=c(a);eval("_elem."+b+" = fn");return a};var j=document.getElementById;document.getElementById=function(a){a=
j(a);eval("_elem."+b+" = fn");return a};var k=document.getElementsByTagName;document.getElementsByTagName=function(a){a=k(a);for(var c=0;c<a.length;c++)eval("_arr[_elem]."+b+" = fn");return a}};extend("hide",function(){(this[0]||this).style.display="none";return this});extend("show",function(){(this[0]||this).style.display="";return this});extend("addClass",function(b){var a=this.className.split(" ");a.push(b);this.className=a.join(" ");return this});extend("removeClass",function(b){var a=this.className.split(" ");
a.pop(b);this.className=a.join(" ");return this});extend("find",function(b){var a=_this=this[0]||this,c="",d=a.id;a.id="e"+Math.floor(Math.random(Math.pow(10,10))*Math.pow(10,10));_tmp_id=a.id;do c=a.tagName+" "+c,a=a.parentNode;while(a!=document);c=c.substring(0,c.length-1);c+="#"+_tmp_id+" "+b;b=document.querySelectorAll(c);_this.id=d;return b});extend("html",function(b){b&&((this[0]||this).innerHTML=b);return this.innerHTML});extend("append",function(b,a){var c=a?a.toLowerCase():"lower",c=-1!=
["upper","lower"].indexOf(c)?"lower":c;"lower"==c?(this[0]||this).appendChild(b):(this[0]||this).insertBefore(b,(this[0]||this).firstChild);return this[0]||this});extend("click",function(b){if(this.length)for(var a=0;a<this.length;++a)this[a].addEventListener("click",b);else this.addEventListener("click",b);return this});8==e.browser.version&&extend("click",function(b){if(this.length)for(var a=0;a<this.length;++a)this[a].attachEvent("onclick",b);else this.attachEvent("onclick",b);return this})}})();