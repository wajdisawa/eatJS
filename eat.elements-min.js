e.browser.msie||(HTMLElement.prototype.hide=function(){this.style.display="none";return this},HTMLElement.prototype.show=function(){this.style.display="";return this},HTMLElement.prototype.html=function(a){a&&(this.innerHTML=a);return this.innerHTML},HTMLElement.prototype.find=function(a){if(-1==a.indexOf(":"))a=this.querySelectorAll(a);else{a=a.split(".");var b=this.createElementNS&&1<a.length?a[0]:"";a=this.getElementsByTagName(b+(""==b?"":":")+(1==a.length?a[0]:a[1]))}return a},HTMLElement.prototype.append=
function(a,b){var c=a[0]||a,d=b?b.toLowerCase():"lower",d=-1!=["upper","lower"].indexOf(d)?"lower":d;"lower"==d?this.appendChild(c):this.insertBefore(c,this.firstChild);return this[0]||this},HTMLElement.prototype.click=function(a){this.addEventListener("click",a,!1)},HTMLElement.prototype.attach=function(a,b){this.addEventListener(a,b,!1)},HTMLElement.prototype.addClass=function(a){this.classList.add(a);return this},HTMLElement.prototype.removeClass=function(a){this.classList.remove(a);return this},
NodeList.prototype.hide=HTMLCollection.prototype.hide=function(){for(var a=0;a<this.length;++a)this[a].style.display="none";return this},NodeList.prototype.show=HTMLCollection.prototype.show=function(){for(var a=0;a<this.length;++a)this[a].style.display="";return this},NodeList.prototype.find=HTMLCollection.prototype.find=function(a){var b;if(-1==a.indexOf(":"))b=(this[0]||this).querySelectorAll(a);else{b=this[0]||this;a=a.split(".");var c=b.createElementNS&&1<a.length?a[0]:"";b=b.getElementsByTagName(c+
(""==c?"":":")+(1==a.length?a[0]:a[1]))}return b},NodeList.prototype.html=HTMLCollection.prototype.html=function(a){if(a)for(var b=0;b<this.length;++b)this[b].innerHTML=a;return this[0].innerHTML},NodeList.prototype.append=HTMLCollection.prototype.append=function(a,b){var c=a[0]||a,d=b?b.toLowerCase():"lower",d=-1!=["upper","lower"].indexOf(d)?"lower":d;"lower"==d?(this[0]||this).appendChild(c):(this[0]||this).insertBefore(c,(this[0]||this).firstChild);return this[0]||this},NodeList.prototype.each=
HTMLCollection.prototype.each=function(a){for(var b=0;b<this.length;++b)a.call(this[b]);return this},NodeList.prototype.click=HTMLCollection.prototype.click=function(a){for(var b=0;b<this.length;++b)this[b].addEventListener("click",a,!1)},NodeList.prototype.attach=HTMLCollection.prototype.attach=function(a,b){for(var c=0;c<this.length;++c)this[c].addEventListener(a,b,!1)});