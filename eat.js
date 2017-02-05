(function(){

function getCustomTags(tagName){
	var _tagName = tagName.split('.');
	var namespace = document.createElementNS && _tagName.length > 1?_tagName[0]:'';
	var name = _tagName.length == 1 ? _tagName[0] : _tagName[1];
	return document.getElementsByTagName(namespace +(namespace == ''?'':':')+ name);
}

var userAgent = navigator.userAgent.toLowerCase();
var browser = {
	'version': parseInt((userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1]),
	'chrome': userAgent.indexOf("chrome")!=-1,
	'safari': /webkit/.test(userAgent) && userAgent.indexOf("chrome")==-1,
	'opera': /opera/.test(userAgent),
	'msie': (/msie/.test(userAgent)) && (!/opera/.test( userAgent )),
	'firefox': userAgent.indexOf("firefox")!=-1,
	'mozilla': (/mozilla/.test(userAgent)) && (!/(compatible|webkit)/.test(userAgent)) && userAgent.indexOf("firefox")==-1
};
browser['name'] = browser['chrome']?'chrome':browser['safari']?'safari':browser['opera']?'opera':browser['msie']?'msie':browser['firefox']?'firefox':browser['mozilla']?'mozilla':'unknown';
var executeDomHandler=function(fn,scope,params){
		domHandler.readyList.push({fn:fn,scope:scope,params:params});
	};
var domHandler = {
	readyList:[],
	'msie':function(scope){
		if(window==top){
		    //(function (scope) {
		        _scope = scope != null ? scope : this;
		        try {
		            document.documentElement.doScroll("left");
		        } catch (error) {
		            setTimeout(this.bind(_scope, arguments.callee), 0);
		            return;
		        }
		        // and execute any waiting functions
		        this.bind(_scope, this.domReady)();
		    //})(this);
		}
	},
	'firefox':function(scope){
		domHandler.mozilla.call(this,scope);
	},
	'mozilla':function(scope){
		document.addEventListener("DOMContentLoaded", this.bind(this,this.domReady), false);
	},
	'safari':function(scope){
		domHandler.chrome(scope);
	},
	'chrome':function(scope){
	    var numStyles;
		(function(){
			if (document.readyState != "loaded" && document.readyState != "complete") {
				setTimeout( arguments.callee, 0 );
				return;
			}
			if (numStyles === undefined) {
                var links = document.getElementsByTagName("link");
                for (var i=0; i < links.length; i++) {
                	if(links[i].getAttribute('rel') == 'stylesheet') {
                	    numStyles++;
                	}
                }
                var styles = document.getElementsByTagName("style");
                numStyles += styles.length;
			}
			if (document.styleSheets.length != numStyles) {
				setTimeout( arguments.callee, 0 );
				return;
			}
		
			// and execute any waiting functions
			this.bind(this,this.domReady)();
		})();
	},
	'opera':function(scope){
		_scope = this;
		 document.addEventListener( "DOMContentLoaded", function(){opera_load(_scope);},false);
		function opera_load (scope) {
				for (var i = 0; i < document.styleSheets.length; i++){
					if (document.styleSheets[i].disabled) {
						setTimeout( this.bind(scope, arguments.callee), 0 );
						return;
					}}
				// and execute any waiting functions
	            this.bind(scope,scope.domReady)();
		}
	}
};


var _private = {
		bind:function(scope, fn) {
		    return function () {
		        fn.apply(scope, arguments);
			}
		},
		domReady:function() {
			var readyList = domHandler.readyList;
            for(var fn = 0; fn < readyList.length; fn++) {
                readyList[fn].fn.call(readyList[fn]['scope'] != null?readyList[fn]['scope']:window,readyList[fn]['params'] !=null?readyList[fn]['params']:[]);
            }
            delete domHandler,_private.domReady,_private.bindReady;
            executeDomHandler = function(fn,scope,params){
            		fn.call(scope||window,params||[]);
            }
		},
     	bindReady:function () {
      	function addLoadEvent(func) {
		  var oldonload = window['onload'];
		  if (typeof window['onload'] != 'function') {
		    window['onload']= func;
		  } else {
		    window['onload'] = function() {
		      if (oldonload) {
		        oldonload();
		      }
		      func();
		    }
		  }
		};

		domHandler[browser['name']].apply(this);

		// A fallback to window.onload, that will always work
	    addLoadEvent(_private.bind(this,this.domReady));
	}
};

_private.bindReady();

window['eat'] = function(arg,scope,params){
	
	switch(typeof(arg))
	{
	case 'function':
	  executeDomHandler(arg,scope,params);
	  break;
	default:
	  return arg.indexOf(':') == -1?document.querySelectorAll(arg):getCustomTags(arg);
	}
}
window['eat']['browser'] = browser;
window['e'] = window['eat'];
})();