e(function(){e.developer.addTag("e.timer");e("[timer][timer-event]").each(function(){var c=this,d=this.getAttribute("timer-event"),f=this.getAttribute("timer-done"),g=parseInt(this.getAttribute("timer")),h=this.getAttribute("timer-order")&&""!=this.getAttribute("timer-order")?this.getAttribute("timer-order").toLowerCase():"acs",a=null;e(d.split("=>")[0]).attach(d.split("=>")[1],function(){if(!a){var b=parseInt(c.find("e:timer").html());a="dsc"==h?setInterval(function(){g<b--?c.find("e:timer").html(b):
(clearInterval(a),e.execute({method:f,type:"data"}))},1E3):setInterval(function(){b++<g?c.find("e:timer").html(b):(clearInterval(a),e.execute({method:f,type:"data"}))},1E3)}})})});