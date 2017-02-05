if(!e['browser']['msie']){

HTMLElement.prototype.hide  = function(){
	this.style.display='none';
	return this;
}
HTMLElement.prototype.show  = function(){
	this.style.display='';
	return this;
}
HTMLElement.prototype.html  = function(arg){
	if(arg){this.innerHTML= arg;}
	return this.innerHTML;
}
HTMLElement.prototype.find  = function(arg){
		function getCustomTags(_this,tagName){
		var _tagName = tagName.split('.');
		var namespace = _this.createElementNS && _tagName.length > 1?_tagName[0]:'';
		var name = _tagName.length == 1 ? _tagName[0] : _tagName[1];
		return _this.getElementsByTagName(namespace +(namespace == ''?'':':')+ name);
	}
	return arg.indexOf(':') == -1?this.querySelectorAll(arg):getCustomTags(this,arg);
}
HTMLElement.prototype.append  = function(arg,type){
	var _arg = arg[0] || arg;
	var _type = type? type.toLowerCase() : 'lower';
	_type = ['upper','lower'].indexOf(_type) != -1? 'lower' : _type;
	if(_type == 'lower')
		this.appendChild(_arg);
	else
		this.insertBefore(_arg, this.firstChild);
	return (this[0] || this);
}
HTMLElement.prototype.click  = function(arg){
	this.addEventListener("click", arg, false);
}

HTMLElement.prototype.attach  = function(_event,arg){
	this.addEventListener(_event, arg, false);
}

HTMLElement.prototype.addClass  = function(arg){
	this.classList.add(arg);
	return this;
}

HTMLElement.prototype.removeClass  = function(arg){
	this.classList.remove(arg);
	return this;
}


NodeList.prototype.hide = HTMLCollection.prototype.hide = function(){
	for (var i = 0; i < this.length; ++i) {
	this[i].style.display='none';
	}
	return this;
}
NodeList.prototype.show = HTMLCollection.prototype.show = function(){
	for (var i = 0; i < this.length; ++i) {
	this[i].style.display='';
	}
	return this;
}
NodeList.prototype.find = HTMLCollection.prototype.find = function(arg){
	function getCustomTags(_this,tagName){
		var _tagName = tagName.split('.');
		var namespace = _this.createElementNS && _tagName.length > 1?_tagName[0]:'';
		var name = _tagName.length == 1 ? _tagName[0] : _tagName[1];
		return _this.getElementsByTagName(namespace +(namespace == ''?'':':')+ name);
	}
	return arg.indexOf(':') == -1?(this[0]||this).querySelectorAll(arg):getCustomTags((this[0]||this),arg);
}
NodeList.prototype.html = HTMLCollection.prototype.html = function(arg){
	if(arg){
		for (var i = 0; i < this.length; ++i) {
		this[i].innerHTML=arg;
		}
	}
	return this[0].innerHTML;
}
NodeList.prototype.append = HTMLCollection.prototype.append = function(arg,type){
	var _arg = (arg[0] || arg);
	var _type = type? type.toLowerCase() : 'lower';
	_type = ['upper','lower'].indexOf(_type) != -1? 'lower' : _type;
	if(_type == 'lower')
		(this[0] || this).appendChild(_arg);
	else
		(this[0] || this).insertBefore(_arg, (this[0] || this).firstChild);
	return (this[0] || this);
}
NodeList.prototype.each = HTMLCollection.prototype.each = function(arg){
	for (var i = 0; i < this.length; ++i) {
		arg.call(this[i]);
		}
		return this;

}
NodeList.prototype.click = HTMLCollection.prototype.click = function(arg){
	for (var i = 0; i < this.length; ++i) {
		this[i].addEventListener("click", arg, false);
		}
}

NodeList.prototype.attach = HTMLCollection.prototype.attach = function(_event,arg){
	for (var i = 0; i < this.length; ++i) {
	this[i].addEventListener(_event, arg, false);
	}
}

}