e.execute=function(b){var a=b.method;"data"==b.type&&a&&(b.val=a.split("=>")[1],a=a.split("=>")[0]);e.execute.methods[a]?e.execute.methods[a].apply(this,[b]):eval(a)};e.execute.methods={refresh:function(){window.location.reload()},"goto":function(b){window.location.href=b.val},text:function(b){var a=this.find("div.text");0==a.length&&(a=document.createElement("div"),a.addClass("text"),a.addClass(b["class"]),this.append(a));a.html(b.val)}};e.execute.events=["auto"];