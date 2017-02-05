(function(){
// IE support for querySelectorAll and HTMLElement Portotype
if(e['browser']['msie']){
	var _extendList = [],_querySelectorAll = document.querySelectorAll;
	
	window['extend'] =function(name,fn){
		_extendList.push({name:name,fn:fn});

	if(e['browser']['version'] == 7){
	//create document.querySelectorAll
	document.querySelectorAll  = function(r, _arr, i, j, a) {
			s = document.createStyleSheet();
			a=document.all, _arr=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
			for (i=r.length; i--;) {
				s.addRule(r[i], 'k:v');
				for (j=a.length; j--;) a[j].currentStyle.k && _arr.push(a[j]);
				s.removeRule(0);
			}
			for(var _elem=0;_elem<_arr.length;_elem++){
				for(var i=0;i<_extendList.length;i++)
				eval("_arr[_elem]." + _extendList[i].name + " = _extendList[i].fn");
			}
				for(var i=0;i<_extendList.length;i++)
					eval("_arr." + _extendList[i].name + " = _extendList[i].fn");
			return _arr;
		}
	}
	else{
		document._querySelectorAll = _querySelectorAll;
		document.querySelectorAll = function(tag,_this)
		{
			var _arr = document._querySelectorAll(tag);
			for(var _elem=0;_elem<_arr.length;_elem++)
				for(var i=0;i<_extendList.length;i++){
				eval("_arr[_elem]." + _extendList[i].name + " = _extendList[i].fn");
				}
			for(var i=0;i<_extendList.length;i++){
					eval("_arr." + _extendList[i].name + " = _extendList[i].fn");
			}
			return _arr;
		}

	}

		var _createElement = document.createElement;

		//override document.createElement
		document.createElement = function(tag)
		{
			var _elem = _createElement(tag);
			eval("_elem." + name + " = fn");
			return _elem;
		}

		//take copy of
		//document.getElementById
		var _getElementById = document.getElementById;

		//override document.getElementById
		document.getElementById = function(id)
		{
			var _elem = _getElementById(id);
			eval("_elem." + name + " = fn");
			return _elem;
		}

		//take copy of
		//document.getElementsByTagName
		var _getElementsByTagName = document.getElementsByTagName;

		//override document.getElementsByTagName
		document.getElementsByTagName = function(tag)
		{
			var _arr = _getElementsByTagName(tag);
			for(var _elem=0;_elem<_arr.length;_elem++)
				eval("_arr[_elem]." + name + " = fn");
			return _arr;
		}
	}
	extend("hide",function(arg){
		(this[0] ||this).style.display='none';
		return this;
	});
	extend("show",function(arg){
		(this[0] ||this).style.display='';
		return this;
	});
	extend("addClass",function(arg){
		var _classList = this.className.split(' ');
		_classList.push(arg);
		this.className = _classList.join(' ');
		return this;
	});	
	extend("removeClass",function(arg){
		var _classList = this.className.split(' ');
		_classList.pop(arg);
		this.className = _classList.join(' ');
		return this;
	});	
	
	extend("find",function(arg){
	var _node = _this = this[0] || this;
	var path = '',_this_id = _node.id;
	_node.id = 'e' + Math.floor(Math.random(Math.pow(10,10))*Math.pow(10,10));
	_tmp_id = _node.id;
	do{
		path = _node.tagName+' ' + path;
		_node = _node.parentNode;
	}
	while(_node != document);
	path = path.substring(0,path.length-1);
	path+=('#' + _tmp_id + ' ' + arg);
	var _arr = document.querySelectorAll(path);
	_this.id = _this_id;
	return _arr;
	});
	extend("html",function(arg){
		if(arg){(this[0] || this).innerHTML= arg;}
		return this.innerHTML;
	});
	extend("append",function(arg,type){
		var _type = type? type.toLowerCase() : 'lower';
		_type = ['upper','lower'].indexOf(_type) != -1? 'lower' : _type;
		if(_type == 'lower')
			(this[0] || this).appendChild(arg);
		else
			(this[0] || this).insertBefore(arg, (this[0] || this).firstChild);
		return (this[0] || this);
	});
	extend("click",function(arg){
	if (this.length){
		for (var i = 0; i < this.length; ++i)
			this[i].addEventListener("click", arg);
	}
	else{
		this.addEventListener("click", arg);
	}
	return this;
	});


	if(e['browser']['version'] == 8)
	{
		extend("click",function(arg){
		if (this.length){
			for (var i = 0; i < this.length; ++i)
				this[i].attachEvent("onclick", arg);
		}
		else{
			this.attachEvent("onclick", arg);
		}
		return this;
		});
	}
}
})();