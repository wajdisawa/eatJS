function j(a,c){(isQuestionMaakExist=-1==a.indexOf("?")?!1:!0)&&a.indexOf("&")+1!=a.length&&(a+="&");return isQuestionMaakExist?a+c:a+"?"+c}function n(a){var c="";for(param in a)c+=param+"="+a[param]+"&";return c}
function s(a){var c={"*":"*/".concat("*"),text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},f=a.scope?a.scope:window,k=a.type?a.type:"json",p="boolean"==typeof a.async?a.async:!0;if("jsonp"!=k){var q=a.method?a.method:"GET",b=new XMLHttpRequest,r=!1;b.onreadystatechange=function(){if(4==b.readyState&&!r)if(r=!0,200!=b.status&&304!=b.status)a.failure.call(f,null,"failed",b);else try{data="json"==k?JSON.parse(b.responseText):b.responseText,
a.success.call(f,data,"success",b)}catch(c){a.failure.call(f,null,"failed",b)}};if(4!=b.readyState){var l="",m="";"GET"==q?(l=j(a.url,n(a.data)),m=null):(l=a.url,m=n(a.data));b.open(q,l,p);b.setRequestHeader("Content-Type",c[k]);b.send(m)}}else{var d=document.createElement("script"),c=a.callback?a.callback:"e"+Date.now(),g=document.getElementsByTagName("head")[0],h="failed";window[c]=function(b){g.removeChild(d);h="success";a.success.call(f,b,h)};d.setAttribute("src",j(a.url,n(a.data))+"&jsoncallback="+
c);d.async=p;d.addEventListener("error",function(){g.removeChild(d);a.failure.call(f,null,h)},!1);e.browser.msie&&8==e.browser.version&&d.attachEvent("onerror",function(){g.removeChild(d);a.failure.call(f,null,h)});g.appendChild(d)}}e.ajax=function(){s.apply(this,arguments)};